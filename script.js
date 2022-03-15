function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = parseFloat(principal) * years * parseFloat(rate) /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
}
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
    function validatePrincipal()
{
    var prval = document.getElementById("principal").value;
    if ( prval < 0 )
    {
        alert("Enter a positive number"); 
        document.getElementById("principal").focus();
        exit;
    }
    else if ( prval == 0 )
    {
        alert("Principal cannot be zero. Enter a positive number");
        document.getElementById("principal").focus();
        exit;
    }
}
    function moveFocus()
{
        document.getElementById("principal").focus();
}
   
        
