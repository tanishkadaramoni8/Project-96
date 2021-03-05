//YOUR FIREBASE LINKS

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDpiaRMv9uSr7G5-W9RyvKOpYNFgLPq-1w",
    authDomain: "chat-app-eb0c0.firebaseapp.com",
    databaseURL: "https://chat-app-eb0c0.firebaseio.com",
    projectId: "chat-app-eb0c0",
    storageBucket: "chat-app-eb0c0.appspot.com",
    messagingSenderId: "1004597319858",
    appId: "1:1004597319858:web:d1d321ccccda926ab591ab"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  user_name  = localStorage.getItem("user_name");
room_name  = localStorage.getItem("room_name");

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message:msg,
            like:0
      });
      document.getElementById("msg").value = " ";
}
