const loginHandler = async (e) =>{
    e.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password){

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Wrong Username or Password.");
        }
    }
};
const signUpHandler = async (e) =>{
    e.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password){

        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("Invalid Username or Password: Passwords must be at least 6 characters!");
        }
    }
};

//use if display = none to swap display to block/show content
//need to hide signup first
const toggleHandler = (e) =>{
    e.preventDefault();

    const signUp = document.querySelector('#sign-up-card');
    const login = document.querySelector('#login-card');

    if(signUp.style.display === "none"){
        login.style.display = "none";
        signUp.style.display = "block";
    }
    else{
        login.style.display = "block";
        signUp.style.display = "none";
    }
};

document.querySelector('#sign-up-card').style.display = "none";

document.querySelectorAll('.login-toggle-button').forEach(function(button){
button.addEventListener('click', toggleHandler)
});
document.querySelector('#login-button').addEventListener('click', loginHandler);
document.querySelector('#signup-button').addEventListener('click', signUpHandler);