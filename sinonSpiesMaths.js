module.exports = Add;

function Add(numberOne, numberTwo, log) //takes two promises
{
    var result =  numberOne + numberTwo;
    log(result);
    return result;
}