const alimentoModel = require('../models/alimentoModel');

exports.getAllAlimentos = (req, res) => {
  res.json(alimentoModel.alimentos);
};

exports.getAlimentoById = (req, res) => {
  const alimento = alimentoModel.alimentos.find(a => a.id === parseInt(req.params.id));
  if (!alimento) {
    return res.status(404).json({ message: 'Alimento não encontrado' });
  }
  res.json(alimento);
};