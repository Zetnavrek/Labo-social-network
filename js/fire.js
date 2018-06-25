// log in

var provider = new firebase.auth.FacebookAuthProvider();

$('#login').click(function(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log(result.user);
  });
})
