import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use( express.json() );

//middleware for handling CORS policy
//option 1: Allow all origins with default of cors (*)
app.use(cors())
//option 2: Allow custom Origins
// app.use({
//     origin: 'http:///localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type']
// })

app.get( "/", ( request, response ) =>
{
    console.log( request );
    return response.status( 234 ).send( "Welcome to mern tuorial" );
} );


app.use('/books',booksRoute);

mongoose
    .connect( mongoDBURL )
    .then( () =>
    {
        console.log( "MongoDB Connected" );
        app.listen( PORT, () =>
        {
            console.log( `Server is running on port ${ PORT }` );
        } );
    } )
    .catch( ( error ) =>
    {
        console.log( error );
    } );
