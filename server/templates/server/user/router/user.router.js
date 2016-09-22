import User from '../model/user.model.js';
import {Router} from 'express';

const router = Router();


router.get('/', function (req, res, next) {

    User.find({}).exec(function (err, result) {

        res.json(result);
    });
    
});

router.post('/', function (req, res, next) {

    let user = req.body;
    User.create(user).exec(function (err, result) {

        res.json(result);
    });

});


export default router;
