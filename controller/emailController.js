const Email = require('../models/email');

async function sendEmail(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email é obrigatório' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    // Verifica se o email já existe no banco
    const existingEmail = await Email.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({ error: 'Este e-mail já está registrado' });
    }

    // Salva o novo email no MongoDB
    const newEmail = new Email({ email });
    await newEmail.save();

    return res.status(201).json({ message: `Email ${email} salvo com sucesso!` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao salvar o email no banco de dados.' });
  }
}

module.exports = { sendEmail};