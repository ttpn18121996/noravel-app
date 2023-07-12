const Controller = require('./Controller');

class WelcomeController extends Controller {
  index() {
    const {name} = this.req.query;
    this.view('welcome', {name});
  }
}

module.exports = WelcomeController;
