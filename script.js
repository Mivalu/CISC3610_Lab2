

var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var read1 = document.getElementById('name');
var read2 = document.getElementById('number');
var read3 = document.getElementById('noun');
var read4 = document.getElementById('verb');
var read5 = document.getElementById('animal');
var read6 = document.getElementById('name2');

var options = document.getElementsByName('voice');
var num = document.getElementById('voice').value;

var voices = [];
voices = synth.getVoices();


inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(read1.value + ' is my name and I am ' + read2.value + 
  	' years old. I like to eat ' + read3.value + ' and to ' + read4.value + '. I have a ' + read5.value + ' named ' + read6.value);

  for (var i=0;i<voices.length;i++){
  	if (options[i].checked){
  	  	utterThis.voice = voices[parseInt(options[i].value)];
  	  	break;
  	  }
  }
  
  synth.speak(utterThis);


  read1.blur();
}
