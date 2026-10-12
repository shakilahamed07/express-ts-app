import express, { type Application} from 'express';
import cors from 'cors';
import notFound from './middleware/notfound.js';
import router from './routes/routes.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import prisma from './utils/prisma.js';

const app: Application = express();
app.use(express.json());

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



app.get('/', (req, res) => {
  res.json("Server is running");
});

app.post('/post', async (req, res) => {
    const {email, name} = req.body;
    const createUser = await prisma.user.create({data: {email,name}})
  res.json(createUser);
});

// Middleware for handling errors
app.use(notFound);
app.use(globalErrorHandler)

export default app;