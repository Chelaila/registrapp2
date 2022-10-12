import mongoose from 'mongoose';

const asignaturaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Ingresar un nombre']
  },
  nameProfe: {
    type: String,
    required: [true, 'Ingresar nombre Profesor']
  },
  totalClass: {
    type: Number,
    required: [true, 'Ingrese total de clases']
  },
  idLottie: {
    type: String,
    required: [true, 'Ingrese ID Lottie']
  },


});

module.exports = asignaturaSchema;
