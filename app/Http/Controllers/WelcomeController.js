const Controller = require('./Controller');

class WelcomeController extends Controller {
  index() {
    this.view('welcome');
  }

  test() {
    this.view('welcome');
  }
}

module.exports = WelcomeController;
