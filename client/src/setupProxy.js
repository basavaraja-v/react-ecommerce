const proxy = require("http-proxy-middleware");
import config from '../../../../config'

module.exports = function (app) {

    app.use(proxy("/api", { target: `${config.url}/` }));

};
