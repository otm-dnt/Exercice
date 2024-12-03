const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const PORT = 3000;

// Endpoint pour valider les données du formulaire
app.post('/submit', (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).max(65).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  res.send('Données valides!');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
