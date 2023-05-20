// Onclick of the button
document.querySelector("button").onclick = function () {
// Call python's random_python function
eel.Text_def()(function(text){					
	// Update the div with a random number returned by python
	document.querySelector("h1").innerHTML=text[0]
	document.querySelector(".Text_def").innerHTML = text[1];
	console.log(name);
})
}
