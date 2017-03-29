function showInput() {
	concatString = document.getElementById("user_input").value + " " + 
		document.getElementById("user_input1").value + " " + 
		document.getElementById("user_input2").value + " " + 
		document.getElementById("user_input3").value + " " + 
		document.getElementById("user_input4").value;
        document.getElementById('display').innerHTML = concatString;
}
