var firebaseConfig = {
    apiKey: "AIzaSyC18IbfKoGa4H6tacrZW_VXPYc1BMHBIXI",
    authDomain: "fir-568f5.firebaseapp.com",
    databaseURL: "https://fir-568f5.firebaseio.com",
    projectId: "fir-568f5",
    storageBucket: "fir-568f5.appspot.com",
    messagingSenderId: "123681112255",
    appId: "1:123681112255:web:cab72bbd795e71636c060a",
    measurementId: "G-E2570H4RC0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function taoID() {
    x = Math.random();
    y = x.toString(36);
    z = y.substr(2, 9);
    return z;
}
const id = taoID();
email = document.getElementById("namefield");
password = document.getElementById("agefield");
ten = document.getElementById("ten");
tuoi = document.getElementById("tuoi");
button = document.getElementById("button");
uid = firebase.database().ref().child("users");
div = document.getElementById("div");
uid.on('value', snap => {
    console.log(snap.val())
    // object = JSON.stringify(snap.val(), null, 3)
    // div.innerText = object
})

function writeData() {
    emaill = email.value;
    passwordd = password.value;
    firebase.auth().signInWithEmailAndPassword(emaill, passwordd)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
                console.log(error);
            }
        });
}



const form = document.querySelector('form');
const passwordInput = document.querySelector('input#current-password');
const signinButton = document.querySelector('button#signin');
const togglePasswordButton = document.querySelector('button#toggle-password');

togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordButton.textContent = 'Hide password';
        togglePasswordButton.setAttribute('aria-label',
            'Hide password.');
    } else {
        passwordInput.type = 'password';
        togglePasswordButton.textContent = 'Show password';
        togglePasswordButton.setAttribute('aria-label',
            'Show password as plain text. ' +
            'Warning: this will display your password on the screen.');
    }
}

passwordInput.addEventListener('input', validatePassword);

// A production site would use more stringent password testing on the client
// and would sanitize and validate passwords on the back end.
function validatePassword() {
    let message = '';
    if (!/.{8,}/.test(passwordInput.value)) {
        message = 'At least eight characters. ';
    }
    if (!/.*[A-Z].*/.test(passwordInput.value)) {
        message += '\nAt least one uppercase letter. ';
    }
    if (!/.*[a-z].*/.test(passwordInput.value)) {
        message += '\nAt least one lowercase letter.';
    }
    passwordInput.setCustomValidity(message);
}

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    console.log('submit');
    if (form.checkValidity() === false) {
        console.log('not valid');
        event.preventDefault();
    } else {
        // On a production site do form submission.
        alert('Signing in!')
        signinButton.disabled = 'true';
        event.preventDefault();
    }
}