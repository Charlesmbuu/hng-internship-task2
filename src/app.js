const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/authRoutes');
const db = require('./models');

app.use(bodyParser.json());

app.use('/auth', authRoutes);

db.sequelize.sync().then(() => {
  app.listen(5432, () => {
    console.log('Server is running on port 5432');
  });
});
