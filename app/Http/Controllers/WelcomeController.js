const Controller = require('./Controller');
const app = require('../../../bootstrap/app');

class WelcomeController extends Controller {
  index() {
    const connection = app.resolve('mysqlConnection');
    connection.getConnection().query(`SELECT * FROM users`, (err, results) => {
      this.view('welcome', {
        users: results ?? [],
      });
    });
  }
}

module.exports = WelcomeController;
