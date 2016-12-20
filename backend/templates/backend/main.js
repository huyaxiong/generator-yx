import connectDB from "~/config/db.js";
import express from 'express';
import {useMiddlewaresPre, useMiddlewaresPost} from '~/config/middleware';
import useUserRouters from '~/user/router';


connectDB();

let app = express();
useMiddlewaresPre(app);

useUserRouters(app);

useMiddlewaresPost(app);








