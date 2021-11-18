import express from 'express'
import mongoose  from 'mongoose'
import cors from 'cors'
import Cards from './dbCards.js';

//App Config..

    const app = express();
    const port = process.env.PORT || 8001;
    const connection_url = `mongodb+srv://admin:admin123@tinder.yxlqy.mongodb.net/tinder-db?retryWrites=true&w=majority`

//Middlware..

app.use(express.json())
app.use(cors())

//Db Config..

    mongoose.connect(connection_url)

//API EndPoints..

    app.get('/',(req,res) => {
        res.status(200).send("Hello World")
    })

    app.post('/tinder/cards',(req,res) => {
        const dbCard = req.body;
        Cards.create(dbCard,(err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(201).send(data)
            }
        })
    });

    app.get('/tinder/cards',(req,res)=>{
        Cards.find((err, data) => {
            if(err){
                res.status(500).send(err)
            }else{
                res.status(200).send(data)
            }
        })
    })

//Listner..

    app.listen(port,()=>console.log(`listening on localhost: ${port}`));