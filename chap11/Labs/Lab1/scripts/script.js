/*
 Tizziano Britez
 11/26/24
 script.js
 */

// Hamburger menu function
console.log("Line 7");

function hamburger () {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}	
