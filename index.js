const path = require('path');
const { default: { app } } = require('./bootstrap/app');

const APP_NAME = process.env.APP_NAME || 'Noravel';
const PORT = process.env.APP_PORT || 8000;

app.use(function (req, res) {
  res.status(404).render('errors/404');
});
app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on port ${PORT}`);
});
