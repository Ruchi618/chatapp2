const firebaseConfig = {
  apiKey: "AIzaSyC2cHkQsXZgHw2MXMMZnvDA80aEQRL2ZTM",
  authDomain: "chatkwitter.firebaseapp.com",
  databaseURL: "https://chatkwitter-default-rtdb.firebaseio.com",
  projectId: "chatkwitter",
  storageBucket: "chatkwitter.appspot.com",
  messagingSenderId: "265373872701",
  appId: "1:265373872701:web:eec8ba74d07e27bbffb054"
};
 firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Roomname= " + Room_names);
 row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
 });});}
getData();

function redirectToRoomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
} 

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}