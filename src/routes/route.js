const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    let id = req.body.user
    let pwd= req.body.password

    console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   

   router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});

module.exports = router;

//---------------------=============/////////////////===============--------------------------------
// QUERY VS PARAMS

//query params :- used too load diff items/pages based on avilable value in url
//query params:- variable name is visible in url itself!
//use case:- to make filters/to make searches
//a get request with 2 query params:-
//localhost:3000/get-query-1?mycoolvar=something&xyz=functionup

// router.get("/get-query-1",function(req,res){
// let data =req.query
// let var1=req.query.myCoolVar
// let var2=data.xyz
// console.log(data)
// res.send({data: data,status:true})
// })

// //take marks in req-query in a variable named "marks and send"pass" if marks >40else send "fail"
// router.get("/get-query-2",function(req,res){
//     // ternary opeartor   marks > 40? "pass" : "fail"

//     res.send({data: result, status: true})
// })


// router.get("/wiki/:countryname",function(eq,res){
//     //searches iphone in flipkart /apple 
//     //by diff phones names /item numbers
// let item = req.params.name
// let itemNumber = req.params. itemNumber
// res.send(item)

// //go and get all the details about the counttry mentioed in the url

// })

// router.post("/get-query-2",function(req,res){
//     let data =req.query
   
//     console.log(data)
//     res.send({data: data,status:true})
//     })
//     //filter out all the numbers that greater than "input"()
//     let myArr=[23,45,555,66,886,6543,776,544,]
//     router.post("/post-query-2",function(req,res){
//     //our logic and code goes here
//     let input = req.query.input
//     let finalArr=[]
    //let finalArr=myArr.filter(ele=>ele>input)

    

    //     res.send({data : data, status:ture})

    // })

/////////////////-----------------------------//////////////

let persons = [
    {
      name : "PK",
      age : 10,
      votingstatus : false
    },
    {
        name : "Sk",
        age : 20,
        votingstatus : false
    },
    {
        name : "AA",
        age : 70,
        votingstatus : false
    },
    {
        name : "SC",
        age : 5,
        votingstatus : false
    },
    {
        name : "HQ",
        age : 40,
        votingstatus : false
    }
]
router.post("/persons", function(req,res){

 let votingAge = req.query.votingAge

 let result = []
let  flag = false
 var id 
 for(let i =0; i<persons.length;i++){
     id = persons[i]
     if(id.age>=18  && votingAge >=18){
        id.votingstatus=true
            result.push(id) 
    }
 }
    return  res.send({ data : result , status : true})
})


 module.exports = router;