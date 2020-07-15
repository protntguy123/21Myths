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
button = document.getElementById("button");
uid = firebase.database().ref().child("users");
div = document.getElementById("div");
uid.on('value', snap => {
    console.log(snap.val())
    // object = JSON.stringify(snap.val(), null, 3)
    // div.innerText = object
})

function writeData() {
    emailValue = email.value;
    console.log(email.value);
    passwordValue = password.value;
    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(Response => {
        console.log(Response)
    })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(error.code)     
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);

            }
            console.log(error);
        });
    firebase
        .database()
        .ref("/users/" + " " + id)
        .set({
            email: password.value,
            password: email.value,
            
        });
}