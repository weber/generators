var util = require('util');

describe('controller', function () {
    var app;
    var compound;
    var output;
    var puts;

    before(function () {
        app = getApp();
        compound = app.compound;
        stubFS();
    });

    after(unstubFS);

    beforeEach(function () {
        output = [];
        puts = util.puts;
        util.puts = function (str) {
            output.push(str.replace(/\u001b\[\d+m/g, ''));
        };
    });

    afterEach(function () {
        flushFS();
        util.puts = puts;
    });

    it('should generate controller', function () {
        compound.generators.perform('controller', ['controllerName', 'new', 'edit', 'index']);
        output.should.eql(['create  app/',
        'create  app/controllers/',
        'create  app/helpers/',
        'create  app/views/',
        'create  app/views/controllerName',
        'create  app/controllers/controllerName_controller.js',
        'create  app/helpers/controllerName_helper.js',
        'create  app/views/controllerName/new.ejs',
        'create  app/views/controllerName/edit.ejs',
        'create  app/views/controllerName/index.ejs']);

    });
});
