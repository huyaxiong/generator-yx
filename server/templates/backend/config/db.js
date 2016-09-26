import mongoose from 'mongoose';
import settings from '~/settings';


export default function connectDB() {

    mongoose.connect(settings.mongoDBUrl);
    mongoose.connection.once('open', function () {

        console.log('mongodb connected.');
    });
};
