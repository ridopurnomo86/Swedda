const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

require('./config/MongoDB');

const authRoutes = require('./routes/authRoutes');

app.use(cookieParser());
app.use(helmet());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(morgan());
app.use(
    cors({
        origin: 'http://localhost:8080',
        methods: 'GET,PUT,POST,DELETE',
        credentials: true,
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);

app.get('/', (req, res) => {
    res.status(200).json('Server is Running');
});


app.use(authRoutes);

const PORT = process.env.PORT || 5454;

app.listen(PORT, console.log(`Running on Port ${PORT}`));
