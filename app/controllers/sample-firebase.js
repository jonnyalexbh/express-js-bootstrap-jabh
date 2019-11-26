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

const products = (info) => info.map((product) => product.sku);

exports.getCollection = async (req, res) => {
  const ref = db
    .collection('orders')
    .where('ciclo', '==', 'COL-2019-16');

  const orders = await ref.get();
  const infoExcel = orders.docs.map((order) => (
    {
      orderId: order.id,
      cn: order.data().cn,
      sku: products(order.data().productos).join('; '),
      totalDiscount: order.data().totalCDesc,
      totalWithoutDesc: order.data().totalSDesc,
    }
  ));
  res.send(infoExcel);
};
