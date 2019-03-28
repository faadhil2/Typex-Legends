var database = firebase.database();
var user = firebase.auth().currentUser; //this will be null if there isn't anyone currently logged in
var points, wpm, accuracy, username, imgURL;

function signOut(){
  // Sign out of Firebase.
  firebase.auth().signOut()
    .then(function(){
      //redirect to home page, maybe??
      window.location = "./index.html";
    }).catch(function(error){
      //there was an error when logging out
      alert('An error occured when trying to log out');
    });
}

function inputInfo(){
  //input the information where it belongs
  if(user){
    points = user.points;
    wpm = user.wpm;
    accuracy = user.accuracy;
    username = user.username;
    imgURL = user.imgURL;

    document.getElementById("username").innerHTML = username;

    document.getElementById("pts").innerHTML = "Points: " + points;
    document.getElementById("wpm").innerHTML = "Words per minute: " + wpm;
    document.getElementById("accuracy").innerHTML = "Accuracy: " + accuracy;

    document.getElementById("profPic").src = imgURL;
  }else{
    alert('You are not logged in!');
  } 
}

window.onload = inputInfo;