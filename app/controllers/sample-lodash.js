const { sortBy, remove } = require('lodash');

const kpis = [
  {
    id: 57,
    name: 'Activas',
  },
  {
    id: 10,
    name: 'Cesadas',
  },
  {
    id: 91,
    name: 'Puntos',
  },
  {
    id: 20,
    name: 'Inicios',
  },
];

exports.sampleRemoveLodash = (_, res) => {
  const removeKpis = remove(kpis, (kpi) => kpi.id !== 91);
  res.send(removeKpis);
};

exports.sampleSortby = (_, res) => {
  const orderKpis = sortBy(kpis, (kpi) => kpi.id);
  res.send(orderKpis);
};

exports.sampleRemove = (_, res) => {
  const removeKpisPe = [57, 91];
  // const removeKpis = kpis.filter((kpi) => removeKpisPe.indexOf(kpi.id) === -1);
  const removeKpis = kpis.filter((kpi) => !removeKpisPe.includes(kpi.id));
  res.send(removeKpis);
};

exports.sampleFind = (_, res) => {
  const findKpi = kpis.find((kpi) => kpi.id === 20);
  res.send({ exist: !!findKpi });
};
