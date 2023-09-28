const router = require('noravel').router();
const WelcomeController = require('../app/Http/Controllers/WelcomeController');
const app = require('../bootstrap/app');

router.get('/', [WelcomeController, 'index']);
router.get('/test', (req, res) => {
  const connection = app.resolve('mysqlConnection');
  connection.getConnection().query(`SELECT * FROM users`, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Something went wrong!' });
    }

    return res.json(results);
  });
}).middleware(['auth']);

module.exports = router.run();
