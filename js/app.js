
count=0;
/*

 Initialize Firebase
var config = {
    apiKey: "AIzaSyBnjiu2q_xLA8uVPKWtabAjGGcZrMOihmU",
    authDomain: "pets-socialnetwork.firebaseapp.com",
    databaseURL: "https://pets-socialnetwork.firebaseio.com",
    projectId: "pets-socialnetwork",
    storageBucket: "pets-socialnetwork.appspot.com",
    messagingSenderId: "439761678970"
};
    firebase.initializeApp(config);
    var file = 'doggy.jpg';
    var storageRef = firebase.storage().ref('assets/images/'+ file);
    var image = $("#photo").append(storageRef);*/




    function getInfoData () {
            var posting=$('#user-post').val();
            console.log(posting);
            addData(posting);
        }

    



    var template = '<div id= "photography-card" class="row">'+
            '<div class="col s6 m7 offset-s3">'+
                '<div class="card">'+
                    '<div class="card-image">'+
                        '<img id= "photo" src= "__image__ >'+
                        '<span class="card-title">Card Title</span>'+
                    '</div>'+
                    '<div class="card-content">'+
                        '<p id="user">__post__</p>'+
                    '</div>'+
                    '<div class="card-action">'+
                        '<a class= "like" href="#"><i class="far fa-heart"></i></a>'+
                        'div id= "number-of-likes"> </div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>';

        function addData(posting) {
            var finalTemplate = "";
            finalTemplate= template.replace("__post__", posting);
                /*$('.card-content').append(finalTemplate);
                $('.like').html('count');
                swal("You clicked the button!", "success");
                /*var post=$('#number-of-likes').val('');*/
                /*var photo=$('#photo').val('');*/
        }

       /*function heart() {
            var like = document.getElementsByClassName("like");
            for(var i = 0; i < likes.length; i++) {
            document.getElementsByClassName("like")[i].classList.toggle("color");
            }  
        }*/

            


$(document).ready(function(){
    $('.modal').modal();
    /*$('#add-post').click(getInfoData);*/
});