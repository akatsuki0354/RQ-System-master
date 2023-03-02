
// Import the functions you need from the SDKs you need
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
const name = document.getElementById('nameInp');
const email = document.getElementById('emailInp');
const stdNo = document.getElementById('usernameInp');
const password = document.getElementById('passInp');
const submit = document.getElementById('submit');
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !==null;
}
function Validation(){
   let nameregex = /^[a-zA-Z\s]+$/;
   let emailgerex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
   let stdNoregex = /[a-zA-Z0-9]{5,}/;
   if(isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value) || isEmptyOrSpaces(stdNo.value) || isEmptyOrSpaces(password.value)){
    alert("all input is required")
    return false;
   }
   if(!nameregex.test(name.value)){
       alert("contains alphabet");
       return false;
   }
   if(!emailgerex.test(email.value)){
       alert("email not avail");
       return false;
   }
   if(!stdNoregex.test(name.value)){
       alert("user");
       return false;
   }
   return true;
}
function RegisterUser(){
  if(!Validation()){
   return;
  };
   const dbRef = ref(db);
   get(child(dbRef, "StudentList/" + stdNo.value))
   .then((snapshot)=>{
       if(snapshot.exists()){
           alert("account already exist");
       }
       else{
           set(ref(db, "StudentList/"+ stdNo.value),
           {
               name: name.value,
               email: email.value,
               stdNo: stdNo.value,
               password: encPass()
           })
           .then(() => {
               alert("successfully")
           })
           .catch((error)=>{
               alert("error"+ error);
           })
       }
   });
}
function encPass(){
    var password12 = CryptoJS.AES.encrypt(password.value, password.value);
    return password12.toString();
}
submit.addEventListener('click', RegisterUser);