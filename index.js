const path = require('path');
const application = require('./bootstrap/app')(path.join(__dirname));

const APP_NAME = process.env.APP_NAME || 'Noravel';
const PORT = process.env.APP_PORT || 8000;

application.use(function (req, res) {
  res.status(404).render('errors/404');
});
application.listen(PORT, () => {
  console.log(`${APP_NAME} listening on port ${PORT}`);
});
