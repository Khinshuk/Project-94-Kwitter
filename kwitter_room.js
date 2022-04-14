
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCr_bzEoQwWbbr73GF86r6LojmWWoOGgf8",
      authDomain: "kwitter-40163.firebaseapp.com",
      databaseURL: "https://kwitter-40163-default-rtdb.firebaseio.com",
      projectId: "kwitter-40163",
      storageBucket: "kwitter-40163.appspot.com",
      messagingSenderId: "875400971559",
      appId: "1:875400971559:web:ca690d42c578db0cca9502"
    };
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();

function logout(){
      window.location="index.html";
}