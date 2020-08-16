const express = require('express');
const {
    graphqlHTTP
} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

//allow cors request
app.use(cors());
//connect to mongodb
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    app.listen(5000, () => console.log('Connection is success, Now Server is running at http://localhost:5000/graphql'));
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));