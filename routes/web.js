const router = require('noravel').router();
const WelcomeController = require('../app/Http/Controllers/WelcomeController');
const { helpers: { _str } } = require('noravel');
const app = require('../bootstrap/app');

router.get('/', [WelcomeController, 'index']);
router.get('/test', (req, res) => {
  const connection = app.resolve('mysqlConnection');
  connection.getConnection().query(`SELECT * FROM users`, (err, results) => {
    res.json(results);
  });
});

module.exports = router.run();
