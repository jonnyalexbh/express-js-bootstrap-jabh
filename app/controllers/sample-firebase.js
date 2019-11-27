const admin = require('firebase-admin');
const firebaseConfig = require('../../config').common.firebase;

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: firebaseConfig.projectId,
    clientEmail: firebaseConfig.clientEmail,
    privateKey: firebaseConfig.privateKey,
  }),
  databaseURL: firebaseConfig.databaseURL,
});

const db = admin.firestore();
const cycle = 'COL-2019-15';

const transformProducts = (info) => info.map((product) => product.sku);

exports.getCollection = async (req, res) => {
  const ref = db
    .collection('orders')
    .where('ciclo', '==', cycle);

  const orders = await ref.get();
  const infoExcel = orders.docs.map((order) => (
    {
      orderId: order.id,
      cn: order.data().cn,
      sku: transformProducts(order.data().productos).join('; '),
      totalDiscount: order.data().totalCDesc,
      totalWithoutDesc: order.data().totalSDesc,
    }
  ));
  res.send(infoExcel);
};

exports.getProducts = async (req, res) => {
  const ref = db
    .collection('orders')
    .where('ciclo', '==', cycle);

  const orders = await ref.get();
  const products = orders.docs.map((order) => order.data().productos);
  const mergeProducts = products.reduce((a, b) => a.concat(b), []);

  const quantityProducts = mergeProducts.map((product) => (
    {
      sku: product.sku.toString(),
      cantidad: product.cantidad,
    }
  ));

  res.send(quantityProducts);
};
