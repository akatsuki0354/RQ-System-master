import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getFirestore, setDoc, collection, addDoc,doc,getDoc,updateDoc,deleteDoc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();

const LN = document.getElementById("LN")
const FN = document.getElementById("FN");
const MN = document.getElementById("MN");
const POB = document.getElementById("POB");
const DOB = document.getElementById("DOB");
const CN = document.getElementById("CN");
const SN = document.getElementById("STN");
const GS = document.getElementById("GS");
const Address = document.getElementById("Address");
const LRN = document.getElementById("LRN");
const RS = document.getElementById("RS");
const TF = document.getElementById("TF");
const submit = document.getElementById("submit");
const Certification = document.getElementById("Certification");
const Registration= document.getElementById("Registeration");
const Enrollment = document.getElementById("Enrollment");
const GM = document.getElementById("GM");
const Others = document.getElementById("Others");
const F137 = document.getElementById("F137");
const F138 = document.getElementById("F138");
const G11Sem1 = document.getElementById("G11-sem1");
const G11Sem2 = document.getElementById("G11-sem2");
const G12Sem1 = document.getElementById("G12-sem1");
const G12Sem2 = document.getElementById("G12-sem2");

 function SaveURLtoFirestore(){
    var ref = doc(db, "StudentInfo" , FN.value);

   setDoc(ref,{
        FirstName: FN.value,
        LastName: LN.value,
        MiddleName: MN.value,
        PlaceOfBirth: POB.value,
        DateOfBirth: DOB.value,
        ContactNo: CN.value,
        StudentNumber: SN.value,
        GradeSection: GS.value,
        Adress: Address.value,
        LRN: LRN.value,
        Certification: Certification.value,
        Registration: Registration.value,
        Enrollment: Enrollment.value,
        GoodMoral: GM.value,
        Others: Others.value,
        F137: F137.value,
        F138: F138.value,
        G11Sem1: G11Sem1.value,
        G11Sem2: G11Sem2.value,
        G12Sem1: G12Sem1.value,
        G12Sem2: G12Sem2.value,
        Regular: RS.value,
        Transferee: TF.value
     
    })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    


submit.addEventListener('click', SaveURLtoFirestore);