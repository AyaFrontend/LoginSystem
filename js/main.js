

//SIGNUP VARIABLES
var userName = document.getElementById('userName'),
    userEmail = document.getElementById('userEmail'),
    userPassword = document.getElementById('userPass');

var btnSignUp = document.getElementById('btnSignUp');
var signupLink = document.getElementById('signup');

//LOGIN VARIABLES
var emailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passLogin');

var btnLogin = document.getElementById('btnLogin');;
var signinLink = document.getElementById('signin');


//CONTAINER OF USERS
var Users = [];
var User = {};




//LOCAL STORAGE
if( JSON.parse(localStorage.getItem('users')) != null)
{
    Users = JSON.parse(localStorage.getItem('users'));
}
else
{
    Users = [];
}

//FUNCTION TO SIGN UP OPERATION
function signUp() {
    User = {
        Name: userName.value,
        Email: userEmail.value,
        Password: userPassword.value
    }
   
   if(User.Name =='' || User.Password =='' || User.Email =='')
   {
      
    displayMsg('Complete your data','');
   }
   else if (resultValidation ) {

    if(isExist(User.Email) == undefined)
    {
        Users.push(User);
        localStorage.setItem('users' , JSON.stringify(Users));
        location.href = 'login.html';
    }
    else {

        displayMsg('User already exist, try with another email.','');
    }
    }
    else{ displayMsg('Enter correct data','');}
  
}

//FUNCTION TO LOGIN
function Login() {
    var user = isExist(emailLogin.value);
    console.log(user)
 
    if (user != undefined) {
        
        if (user.Password == passLogin.value) {
            sessionStorage.setItem('nameOfUser' , user.Name);
            
           
            window.location.href = "profile.html";
         
         
            
        }
        else {
            if(document.getElementById('alert1').querySelector('.d-none') != null)
            {
             
                document.getElementById('alert1').classList.add('d-none');
            }
            displayMsg('Password or email incorrect','1');
            
        }
    }
    else{
        if(document.getElementById('alert1').querySelector('.d-none') != null)
        {
            document.getElementById('alert1').classList.add('d-none');
        }
        displayMsg('Enter your data','1');
    }
   
}

//FUNCTION TO CHECK IF USER IS EXISTING
function isExist(userEmail) {
    for (var i = 0; i < Users.length; i++) {
        if (Users[i].Email == userEmail)
            return Users[i];
    }
    return Users[i];
}
//CLEAR 
function clear() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
}


//FUNCTION TO DISPLAY MESSAGE FOR A USER
function displayMsg(msg , alertId) {
    console.log(msg)
    document.getElementById('alert' + alertId).classList.remove('d-none');
    console.log( document.getElementById('alert' + alertId));
    document.getElementById('alert-content'+ alertId).innerHTML = msg;
}

///WELCOME MESSAGE
 window.onload = 
function()
{
 
   document.getElementById('welcomMesg').innerHTML = 'Welcome ya ' + sessionStorage.getItem('nameOfUser');

};



//ADD EVENTS
btnSignUp.addEventListener('click', function () {
 
    signUp();
});

btnLogin.addEventListener('click', function()
{
    Login();
});

signinLink.addEventListener('click' , function()
{
    var roundedDiv =  document.querySelector('.rounded-div');
    var divImg = document.querySelector('.div-img');

    roundedDiv.style.transform = 'translate(0,0)';
    roundedDiv.style.borderRadius = '0';
    divImg.style.transform = 'translateX(-100%)';
    divImg.style.transition = ' transform 2s';
    roundedDiv.style.transition = ' transform 1s ,borderRadius 3s';
    document.body.style.transform ='translateX(100%)'
    document.body.style.overflow ='hidden';
    document.body.style.transition ='transform 1s 1s';

    document.getElementById('loginForm').classList.remove('d-none');
})
signupLink.addEventListener('click', function()
{
    var roundedDiv =  document.querySelector('.rounded-div');
    var divImg = document.querySelector('.div-img');
   
    document.body.style.transform ='translateX(0)'
    document.body.style.transition ='transform 2s';
    roundedDiv.style.transform = 'translate(-50%,-50%)';
    roundedDiv.style.borderRadius = '50%';
    divImg.style.transform = 'translateX(100%)';
    divImg.style.transition = ' transform 2s';
    roundedDiv.style.transition = ' transform 1s ';
    divImg.style.transform = 'translateX(0)';
});