import "express-async-errors";
import express , {Request,Response,Application} from "express";
import dotenv from "dotenv";

// config
dotenv.config();
const app:Application = express();
app.use(express.json());
// routers
// entry point
app.get('/', (req:Request, res:Response):void=> {
    res.send('<h1>HforS</h1><a href="https://hfors.com">Documentation</a>');
});
// middlewares

const PORT:number = +process.env.PORT! || 3000;

// start
const start = async ():Promise<void>=>{
    try {
        // await connectDB(process.env.MONGO_URI!) // un comment when connect Db redy
        app.listen(PORT,()=>console.log(`Server listning on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
};

start();