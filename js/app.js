var count=0;


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBnjiu2q_xLA8uVPKWtabAjGGcZrMOihmU",
    authDomain: "pets-socialnetwork.firebaseapp.com",
    databaseURL: "https://pets-socialnetwork.firebaseio.com",
    projectId: "pets-socialnetwork",
    storageBucket: "pets-socialnetwork.appspot.com",
    messagingSenderId: "439761678970"
};
    firebase.initializeApp(config);

    function getInfoData () {
            var post=$('#user-post').val();
            var petPhoto=$('#photo').val();
            /*console.log(post,petPhoto);*/
            addContactData(post, petPhoto);
        }
    }

    var template = '<div class="row">'+
            '<div class="col s6 m7 offset-s3">'+
                '<div class="card">'+
                    '<div class="card-image">'+
                        '<img id= "photo" src= "__petPhoto__ >'+
                        '<span class="card-title">Card Title</span>'+
                    '</div>'+
                    '<div class="card-content">'+
                        '<span id="user-post">__post__</span>'+
                    '</div>'+
                    '<div class="card-action">'+
                        '<a class= "like" href="#"><i class="far fa-heart"></i></a>
                        'div id= "number-of-likes"> </div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+

        function heart() {
            var like = document.getElementsByClassName("like");
            for(var i = 0; i < likes.length; i++) {
            document.getElementsByClassName("like")[i].classList.toggle("color");
            }  

            function addContactData (post,petPhoto) {
                
                var finalTemplate = "";
                finalTemplate= template.replace("__post__", post)
                    .replace("__petPhoto", petPhoto);
            
                    $("main").append(finalTemplate);
                    $("like").html("count");
                    swal("You clicked the button!", "success");
                    var post=$('#number-of-likes').val('');
                    var photo=$('#contact-phone').val('');







$(document).ready(function(){
    $('.modal').modal();
    $('#add-contact').click(getContactData);
});
