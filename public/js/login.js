const loginHandler = async (e) =>{
    e.preventDefault();

    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();

    if (email && password){

        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};
const signUpHandler = async (e) =>{
    e.preventDefault();

    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
    const name = document.getElementById('username-signup').value.trim();

    if (email && password && name){

        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({email, password, name}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    };
    document.getElementById('login-button').addEventListener('submit', loginHandler);
    document.getElementById('signup-button').addEventListener('submit', signUpHandler);
};