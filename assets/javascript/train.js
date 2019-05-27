$(document).ready(function(){

var firebaseConfig = {
    apiKey: "AIzaSyB1sUmcNiYLYnynUiyO9XMebrBcLUmTLYM",
    authDomain: "fire-base-3afae.firebaseapp.com",
    databaseURL: "https://fire-base-3afae.firebaseio.com",
    projectId: "fire-base-3afae",
    storageBucket: "fire-base-3afae.appspot.com",
    messagingSenderId: "491171645798",
    appId: "1:491171645798:web:d829903de544d45f"
  };
  
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $('#newTrain').on('click', function(){
     
    var trainName = $('#t-name').val().trim();
    var destination = $('#t-destination').val().trim();
    var firstTrain = $('#firstT-time').val().trim();
    var frequency = $('#t-frequency').val().trim();

    var newTrain = {
      name: trainName,
      dest: destination,
      first: firstTrain,
      freq: frequency,

    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.dest);
    console.log(newTrain.first);
    console.log(newTrain.freq);

    $('#t-name').val("");
    $('#t-destination').val("");
    $('#firstT-time').val("");
    $('#t-frequency').val("");


    return false;



  })
  
  






