const mongoose = require('mongoose');

// Definição do schema para emails
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
}, { timestamps: true }); // Timestamps vai adicionar createdAt e updatedAt

// Criando o modelo baseado no schema
const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
