const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>{
    console.log("Mongo Connection is Open")
})
.catch(err =>{
    console.log("Problem in Connection")
    console.log(err)
})

// const p = new Product({
//     name: 'Grapefruit',
//     price: 100,
//     category: 'veg'
// })

// p.save()
// .then(p=>{
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// })

const seedProducts = [
    {
        name:'Apple',
        price: 30,
        category: 'fruit'
    },
    {
        name:'Spanich',
        price: 25,
        category: 'veg'
    },
    {
        name:'milk',
        price: 52,
        category: 'dairy'
    }
]


Product.insertMany(seedProducts)
.then(res=>{
    console.log("done")
    console.log(res)
})
.catch(e=>{
    console.log("error")
    console.log(e)
})
