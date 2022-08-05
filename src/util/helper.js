let date_ob=new Date();

function printDate(){
    let date=(date_ob.getDate())
    console.log("Date:"+date)
}

function printMonth(){
    let month =((date_ob.getMonth()+1))
    console.log("Month:"+month)
}

function getBatchInfo(){
    console.log('Plutonium , W3D5, The topic being taught today is nodeJs module system')
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo