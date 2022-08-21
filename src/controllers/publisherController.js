
const PublisherModel = require ("../models/publisherModel")

//2. Write a POST api that creates a publisher from the details in the request body
const createPublisher = async function(req, res){

    let publisherCreated = await PublisherModel.create(req.body)
    res.send({data : publisherCreated})
}

const getPublisherData = async function (req, res) {
    let listOfPublishers = await PublisherModel.find()
    res.send({data: listOfPublishers})
}





module.exports.createPublisher=createPublisher
module.exports.getPublisherData=getPublisherData