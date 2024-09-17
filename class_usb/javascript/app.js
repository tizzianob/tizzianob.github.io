var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../pages/home/index.html"
    })
    .when("/about", {
        templateUrl : "../pages/aboutme/index.html"
    })
    .when("/notes", {
        templateUrl : "../pages/notes/index.html"
    })

    .when("/chap1", {
        templateUrl : "../pages/chap1/index.html"
    })
    .when("/chap1_classwork", {
        templateUrl : "../pages/chap1/classwork/index.html"
    })
    .when("/chap1_notes", {
        templateUrl : "../pages/chap1/notes/index.html"
    })
    .when("/chap1_labs", {
        templateUrl : "../pages/chap1/labs/index.html"
    })
    .when("/chap1_lab1", {
        templateUrl : "../pages/chap1/labs/lab1/index.html"
    })
    .when("/chap1_lab2", {
        templateUrl : "../pages/chap1/labs/lab2/index.html"
    })
    .when("/chap1_lab3", {
        templateUrl : "../pages/chap1/labs/lab3/index.html"
    })
    
    .when("/chap5", {
        templateUrl : "../pages/chap5/index.html"
    })
    .when("/chap5_classwork", {
        templateUrl : "../pages/chap5/classwork/index.html"
    })
    .when("/chap5_notes", {
        templateUrl : "../pages/chap5/notes/index.html"
    })
    .when("/chap5_labs", {
        templateUrl : "../pages/chap5/labs/index.html"
    })
    .when("/chap5_lab1", {
        templateUrl : "../pages/chap5/labs/lab1/index.html"
    })
    .when("/chap5_lab2", {
        templateUrl : "../pages/chap5/labs/lab2/index.html"
    })
    .when("/chap5_lab3", {
        templateUrl : "../pages/chap5/labs/lab3/index.html"
    })


    
    .when("/ch2_about", {
        templateUrl : "../chap2/classwork/about.html"
    })
    .when("/ch2_notes", {
        templateUrl : "../chap2/classwork/notes.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    });
});


chap1_labs

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}