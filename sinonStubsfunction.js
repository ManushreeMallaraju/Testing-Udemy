module.exports = IsAlive;

//check if a website is alive or not
function IsAlive(ping) //ping() is the function we pass to IsAlive()
{
    var pingOneSuccess = ping();
    var pingTwoSuccess = ping();
    var pingThreeSuccess = ping();

    if (pingOneSuccess && pingTwoSuccess && pingThreeSuccess)
        return true;

    return false;
}