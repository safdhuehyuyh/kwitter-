// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAGI4GQYKlSSPnYwHmTIGj4ymYAaerVt_0",
      authDomain: "kwitter-fa631.firebaseapp.com",
      databaseURL: "https://kwitter-fa631-default-rtdb.firebaseio.com",
      projectId: "kwitter-fa631",
      storageBucket: "kwitter-fa631.appspot.com",
      messagingSenderId: "465343269943",
      appId: "1:465343269943:web:2b09d51f7cc22814dec3b2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+ user_name + "!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Names - " +Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("rome_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}