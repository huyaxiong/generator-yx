import connectDB from '../server/config/db';
import <%= capitalizedName %> from '../server/<%= name %>/model/<%= name %>.model';


describe('<%= name %>', function () {

    before(function () {
        connectDB();
    });

    after(function () {
        console.log('done.');
    });

    it('query', function (done) {

        <%= capitalizedName %>.find().exec().then(data => {

            console.log(data);
            done();
        })
    });

    it('create', function (done) {

    });

    it('update', function (done) {

    });

    it('delete', function (done) {

    });
});