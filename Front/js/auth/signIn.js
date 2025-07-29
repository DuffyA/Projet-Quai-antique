const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignIn = document.getElementById("btnSignIn");
const signInForm = document.getElementById("signInForm");

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){
    let dataForm = new FormData(signInForm);
    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "username": dataForm.get("Email"),
        "password": dataForm.get("Password")
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(apiUrl+"login", requestOptions)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            mailInput.classList.add("is-invalid");
            passwordInput.classList.add("is-invalid");
        }
        
    })
    .then(result => {
        //Il faudra récupérer le vrai token
        const token = result.apiToken;
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, result.roles[0], 7);
        window.location.replace("/");        
    })
    .catch(error => console.log('error', error));
}