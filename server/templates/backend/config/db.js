import mongoose from 'mongoose';
import settings from '~/settings';


export default function connectDB() {

    mongoose.Promise = global.Promise;
    mongoose.connect(settings.mongoDBUrl);
    mongoose.connection.once('open', function () {

        console.log('mongodb connected.');
    });
};
