import express, { type Application} from 'express';
import cors from 'cors';
import notFound from './middleware/notfound.js';
import router from './routes/routes.js';

const app: Application = express();

app.use('/api/v1', router);


// Built-in body parsing middleware
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb', extended: true}));

app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
    })
);

app.use(express.json());


app.get('/', (req, res) => {
  res.json("Server is running");
});

// Middleware for handling errors
app.use(notFound);

export default app;