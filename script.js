//your JS code here. If required.
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let input4 = document.getElementById("input4")
let input5 = document.getElementById("input5")
let input6 = document.getElementById("input6")

input1.addEventListener("keyup",(event)=>{
	console.log(input1.value)
	if(event.key !== "Backspace"){
		input2.focus();
	}
})
input2.addEventListener("keyup",(event)=>{
	console.log(input1.value)
	if(event.key !== "Backspace"){
		input3.focus();
	}
	if(event.key === "Backspace"){
		input1.focus();
	}
})

input3.addEventListener("keyup",(event)=>{
	console.log(input1.value)
	if(event.key !== "Backspace"){
		input4.focus();
	}
	if(event.key === "Backspace"){
		input2.focus();
	}
})
input4.addEventListener("keyup",(event)=>{
	console.log(input1.value)
	if(event.key !== "Backspace"){
		input5.focus();
	}
	if(event.key === "Backspace"){
		input3.focus();
	}
})
input5.addEventListener("keyup",(event)=>{
	console.log(input1.value)
	if(event.key !== "Backspace"){
		input6.focus();
	}
	if(event.key === "Backspace"){
		input4.focus();
	}
})
	input6.addEventListener("keyup",(event)=>{
	console.log(input1.value)
	
	if(event.key === "Backspace"){
		input5.focus();
	}
})

