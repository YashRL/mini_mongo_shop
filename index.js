const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pokemon')
.then(() => {
    console.log("Connection is Open")
})
.catch(err => {
    console.log("Error")
    console.log(err)
})

const pokemonSchema = new mongoose.Schema({
    title: String,
    base: Number,
    rating: String
});

const Pokemon =  mongoose.model('pokemons', pokemonSchema);
                            //     |
                            //     V
                            //name of model

//const charizard = new Pokemon({title: 'Charizard', base: 534, rating: 'A'})

Pokemon.insertMany([
    {title: 'Venusaur', base: 530, rating: 'B'},
    {title: 'Blastoise', base: 534, rating: 'A'},
    {title: 'Pikachu', base: 368, rating: 'C'}
])
.then(data =>{
    console.log("It Worked!")
    console.log(data);
})