class Controller {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.view = this.view.bind(this);
    }

    view(path, data = {}) {
        this.res.render(path, data);
    }
};

module.exports = Controller;
