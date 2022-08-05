


function trim(){

    let text="      Hello i Am  Abhishek kumar         "
    console.log(text)
    console.log("----->Trim")
    let result = text.trim();
    console.log(result)

}
function upperCase(){

    let text="Hello i Am  Abhishek kumar"
    console.log("----->UpperCase")
    let res=text.toUpperCase();
    console.log(res)

}
function lowerCase(){

    let text="HELLO I AM ABHISHEK KUMAR "
    console.log("----->lowerCase")
    let sol=text.toLowerCase()
    console.log(sol)
}

module.exports.trim=trim;
module.exports.upperCase=upperCase;
module.exports.lowerCase=lowerCase;