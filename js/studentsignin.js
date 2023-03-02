import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyDrHONKaouPaFkVHGBpSIRLOahDD2TPFW8",
  authDomain: "rq-system.firebaseapp.com",
  databaseURL: "https://rq-system-default-rtdb.firebaseio.com",
  projectId: "rq-system",
  storageBucket: "rq-system.appspot.com",
  messagingSenderId: "466572418082",
  appId: "1:466572418082:web:453e63dc887d435b8e7e7b",
  measurementId: "G-E154QDK0JJ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

const stdNo = document.getElementById('usernameInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('submit');

function AuthenticateUser(){
const dbRef = ref(db);


get(child(dbRef, "StudentList/" + stdNo.value))
   .then((snapshot)=>{
       if(snapshot.exists()){
        alert()
           let dbpass = decPass(snapshot.val().password);
           if(dbpass == password.value){
            login(snapshot.val());
           }
           else{
             alert("username or password invalid");
           }
       }

       else{
            alert("username or password invalid");
           }
      
    });
}

function decPass(dbpass){
    var pass12 = CryptoJS.AES.decrypt(dbpass, password.value);
    return pass12.toString(CryptoJS.enc.Utf8);
}
function login(user){
    let keepLoggedIn = document.getElementById('customSwitch1').checked;
    if(!keepLoggedIn){
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location="home.html";
    }
    else{
        localStorage.setItem('KeepLogin', 'yes');
        localStorage.setItem('user', JSON.stringify(user));
        window.location="home.html";
    }
}
submit.addEventListener('click', AuthenticateUser);