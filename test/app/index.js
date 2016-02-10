var app = module.exports = function getServerInstance(params) {
    return require('compound-ex4').createServer({root: __dirname});
};
