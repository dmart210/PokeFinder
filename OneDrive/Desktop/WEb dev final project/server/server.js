import express, {response} from 'express';
const app = express();

app.get("/:pokemon", (req,res) =>{
    let pokemon = req.url.split('/');
    let final_poke = pokemon[1];
    console.log(final_poke);
    fetch(`https://pokeapi.co/api/v2/pokemon/${final_poke}`)
        .then(response=>response.json())
        .then(data=>res.send(data))
        .catch(error =>{
            
            res.status(400).send({error: error.message})
        })
})

app.listen(5000, () =>{
    console.log("SERVER STARTED ON PORT 5000");
})