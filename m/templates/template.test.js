import connectDB from '../server/config/db';


describe('<%= name %>', function () {

    before(function () {
        connectDB();
    });

    after(function () {
        console.log('done.');
    });

    it('query', function (done) {

    });

    it('create', function (done) {

    });

    it('update', function (done) {

    });

    it('delete', function (done) {

    });
});