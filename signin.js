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
let userlist = []
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
    userlist = snap.val();
    // object = JSON.stringify(snap.val(), null, 3)
    // div.innerText = object
})

async function writeData() {
    emaill = email.value;
    passwordd = password.value;
    console.log(emaill)
    console.log(passwordd)
    const response = await firebase.auth().signInWithEmailAndPassword(emaill, passwordd)
    // console.log(response);
    if (response.user.email) {
        // console.log(userlist);
        for (let i = 0; i < Object.values(userlist).length; i++) {
            console.log(Object.values(userlist)[i].email)
            // localStorage.setItem("lastname", "Smith");
            console.log(emaill);
            if (Object.values(userlist)[i].email == emaill) {
                console.log(Object.values(userlist)[i].username)
                localStorage.setItem('username', Object.values(userlist)[i].username);
            }
        }
    }
    // .then(() => {
    // })
    // .catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     if (errorCode === 'auth/wrong-password') {
    //         alert('Wrong password.');
    //         return;
    //     } else {
    //         alert(errorMessage);
    //         console.log(error);
    //         return;
    //     }
    // });
}