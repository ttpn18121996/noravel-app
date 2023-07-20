const noravel = require('noravel');
const router = noravel.router();
const WelcomeController = require('../app/Http/Controllers/WelcomeController');

router.get('/', [WelcomeController, 'index']);
router.get('/test', (req, res) => {
  res.send('This is test.');
});

module.exports = router.run();
