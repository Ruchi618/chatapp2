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
  room_name=localStorage.getItem("room_name");
  
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
  
      });
  
      document.getElementById("msg").value="";
  
  }
  
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  //Start code
  
  //End code
      } });  }); }
  getData();
  
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  }
  