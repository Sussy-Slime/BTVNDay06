//Câu 1
//Đăng nhập tài khoản ẩn danh
/*
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

const auth = getAuth();
document.getElementById("SIA").onclick = () => {
    signInAnonymously(auth)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("user: ", user)
    // ...
  } else {
    // User is signed out
    // ...
    console.log("not have any signed in user !")
}});

//Đăng nhập bằng Facebook
import { getAuth, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

const provider = new FacebookAuthProvider();
    provider.addScope('user_birthday');
    provider.setCustomParameters({
        'display': 'popup'
    });

const auth = getAuth();
auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

document.getElementById("SFB").onclick = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
        })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
    });
}
*/

//Câu 2
/*
(function() {
    console.log('Start file login with firebase');
    // Initialize Firebase
    var config = {
        apiKey: "xxxxx",
        authDomain: "xxxx.firebaseapp.com",
        databaseURL: "xxxx.firebaseio.com",
        projectId: "xxxx",
        storageBucket: "xxxx.appspot.com",
        messagingSenderId: "xxxxx"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    //Google singin provider
    var ggProvider = new firebase.auth.GoogleAuthProvider();
    //Facebook singin provider
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    //Login in variables
    const btnGoogle = document.getElementById('btnGoogle');
    const btnFaceBook = document.getElementById('btnFacebook');

        //Sing in with Google
        btnGoogle.addEventListener('click', e => {
            firebase.auth().signInWithPopup(ggProvider).then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log('User>>Goole>>>>', user);
                userId = user.uid;

            }).catch(function(error) {
                console.error('Error: hande error here>>>', error.code)
            })
        }, false)

        //Sing in with Facebook
        btnFaceBook.addEventListener('click', e => {
            firebase.auth().signInWithPopup(fbProvider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log('User>>Facebook>', user);
                // ...
                userId = user.uid;
            
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.error('Error: hande error here>Facebook>>', error.code)
            });
        }, false)
        //jquery 
}())
*/