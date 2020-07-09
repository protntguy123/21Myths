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
let email = document.getElementById("singupuser");
let password = document.getElementById("signup-password");
let confirm_password = document.getElementById("confirm-signup-password");
let button = document.getElementById("signupbutton");
let uid = firebase.database().ref().child("users");
uid.on("value", (snap) => {
	console.log(snap.val());
});

function writeDataSignup() {
	emailValue = email.value;
	passwordValue = password.value;
	firebase
		.auth()
		.createUserWithEmailAndPassword(emailValue, passwordValue)
		.catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode == "auth/weak-password") {
				alert("The password is too weak.");
			} else if (password.value != confirm_password.value) {
				alert("wrong password");
			} else {
				alert(errorMessage);
			}
			console.log(error);
		});
	firebase
		.database()
		.ref("/users/" + " " + id)
		.set({
			email: email.value,
			password: password.value,
		});
}




function writeDataSignin() {
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



