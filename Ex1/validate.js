function validatePass()
{
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");

    if(pass1 != pass2)
    {
        alert("Passwords do not match.");
    }
    else if((pass1.length != 8) && (pass2.length != 8))
    {
        alert("Passwords are not at least 8 characters long.");
    }
    else
    {
        alert("Validated");
    }
    


}