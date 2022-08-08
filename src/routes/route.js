const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/movies',function(req,res){
    let movies=["Avengers","Iron Man","Thor","Black Panther","Captain America"]
    res.send(movies)
})

router.get('/movies/:indexNumber',function(req,res){
let movies=["Avengers","Iron Man","Thor","Black Panther","Captain America"]
let index=req.params.indexNumber
if(index>=movies.lenght||index<0){
    res.send("Invalid Input")
}
else{
        res.send(movies[index]) 
    }
});
router.get('/films',function(req,res){
    let films=[ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
}]; 
res.send(films)

})

router.get('/films/:filmsId',function(req,res){
    let films=[{
        id:1,
        name:"The Shining"
    },{
        id:2,
        name:"Incendies"
    },{
        id:3,
        name:"Rang de Basanti"
    },{
        id:4,
        name:"Finding Demo"
    }];

    let value=req.params.filmsId;
    let found=false;
    for(i=0;i<films.lenght;i++){
        if(films[i].Id==value){
            found=true
            res.send(films[i])
            break
        }
    }
    if(found==false){
        res.send('no such movies with id')
    }
});

module.exports = router;