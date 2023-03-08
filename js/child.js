import { getFirestore,getDocs,collection}from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

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
  const analytics = getAnalytics();
  const db = getFirestore();
  export function answer(){
    return 'module';
  }
  var tbody = document.getElementById('tbody1')
        function AddItemToTable(LastName, FirstName,MiddleName,PlaceOfBirth,DateOfBirth,ContactNo,StudentNumber){
          // ,GradeSection,Adress,LRN, Certification,Registration,Enrollment,GoodMoral,Others,F137,F138,G11Sem1,G11Sem2,G12Sem1,G12Sem2,Regular,Transferee
            let tr = document.createElement("tr");
            let td1 = document.createElement('td')
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
           let  tracknumber = document.createElement('td')
           let DateRequest = document.createElement('td')
            let td6 = document.createElement('td');
           let DateFinished = document.createElement('td')
            let td8 = document.createElement('td');
            let td9 = document.createElement('td');
            // let td13 = document.createElement('td');
            // let td14 = document.createElement('td');
            // let td15 = document.createElement('td');
            // let td16 = document.createElement('td');
            // let td17 = document.createElement('td');
            // let td18 = document.createElement('td');
            // let td19 = document.createElement('td');
            // let td20 = document.createElement('td');
            // let td21 = document.createElement('td');
            // let td22 = document.createElement('td');
            // let td23 = document.createElement('td');


  
           tracknumber.innerHTML='33312121234532';
            td1.innerHTML= LastName;
            td2.innerHTML=FirstName 
            td3.innerHTML= MiddleName;
            td6.innerHTML=ContactNo;
            td8.innerHTML='<a href="/AdminViewifo.html"><button class="btn btn-info my-2 my-sm-0" id="delete" type="submit" >info</button></a>';
            td9.innerHTML='<button class="btn btn-success my-2 my-sm-0" type="submit" >View Request</button>';
            DateRequest.innerHTML = '24 Jan 00:04'
            DateFinished.innerHTML = '26 Jan 11:39'
            // td10.innerHTML= LRN;
            // td11.innerHTML= Certification;
            // td12.innerHTML=Registration;
            // td13.innerHTML= Enrollment;
            // td14.innerHTML= GoodMoral;
            // td15.innerHTML=Others;
            // td16.innerHTML= F137;
            // td17.innerHTML=F138;
            // td18.innerHTML=G11Sem1;
            // td19.innerHTML=G11Sem2;
            // td20.innerHTML=G12Sem1;
            // td21.innerHTML=G12Sem2;
            // td22.innerHTML=Regular;          
            // td23.innerHTML=Transferee;
            tr.appendChild(tracknumber)
            
            tr.appendChild(td1);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td6);
         
            tr.appendChild(td8);
            tr.appendChild(td9);
            tr.appendChild(DateRequest)
            tr.appendChild(DateFinished)
            // tr.appendChild(td10);
            // tr.appendChild(td11);
            // tr.appendChild(td12);
            // tr.appendChild(td13);
            // tr.appendChild(td14);
            // tr.appendChild(td15);
            // tr.appendChild(td16);
            // tr.appendChild(td17);
            // tr.appendChild(td18);
            // tr.appendChild(td19);
            // tr.appendChild(td20);
            // tr.appendChild(td21);
            // tr.appendChild(td22);
            // tr.appendChild(td23);

          
            tbody.appendChild(tr);
           
        }
        
        function AddAItemToTable(TheStudent){
            tbody.innerHTML="";
            TheStudent.forEach(element => {
                AddItemToTable(element.LastName, element.FirstName, element.MiddleName, element.PlaceOfBirth, element.DateOfBirth, element.ContactNo, element.StudentNumber)
            });
            //  element.GradeSection, element.Adress, element.LRN, element.Certification, element.Registration, element.Enrollment, element.GoodMoral, element.Others, element.F137, element.F138, element.G11Sem1, element.G11Sem2, element.G12Sem1, element.G12Sem2, element.Regular, element.Transferee
        }
  
        async function GetAllDataOnce(){
            const querySnapshot = await getDocs(collection(db, "StudentInfo"));
  
            var students = [];
  
            querySnapshot.forEach(doc => {
                students.push(doc.data());
            });
            AddAItemToTable(students);
        }
      


  
window.onload = GetAllDataOnce;



