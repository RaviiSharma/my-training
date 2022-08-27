const headerValidation = function(req,res,next){
    let data = req.headers
    //console.log(data)

    if(data.hasOwnProperty("isfreeappuser") === false){
        res.send({error: "the request is missing a mandatory header"})

    }
    else{
        next()
    }
}

module.exports.headerValidation = headerValidation
