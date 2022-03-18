var resultValidation = true;
//VALIDATION OF SIGN UP OPERATION
function validation( regex , value , msg)
{
    if(value == '' )
    {
        
        displayMsg('This feild is required (":' , '');
        return  resultValidation &&= false;
    }
    else if(!regex.test(value))
    {
     
        displayMsg(msg,'');
        return  resultValidation &&= false;
    }
    return  resultValidation &&= true;
     
}


userName.addEventListener('blur' , function()
{
    document.getElementById('alert').classList.add('d-none'); 
    validation(/^[A-Z][a-z]{2,10}$/ , userName.value , 'Your name should start with capitle letter and it\'s long  at least 3 letters');

})

userEmail.addEventListener('blur' , function()
{
    document.getElementById('alert').classList.add('d-none');
    var emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    validation(emailRegex , userEmail.value ,'Enter a valid email');
})
userPassword.addEventListener('blur' , function()
{
    document.getElementById('alert').classList.add('d-none');
     validation(/[a-zA-Z0-9]{4,10}/ , userPassword.value , 'Enter password consist of 3 to 10 small or capital letters or digits only')
})

