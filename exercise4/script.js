//CHALLENGE TWO: 

//instructions: fix this IIFE so that the FOO is equal the return value!


// to answer, edit the code below this line
const FOO = (function () {
  
	return "I am the return value and I am a string"
	
})
//to answer, edit the code above this line
  

  if (!FOO) {
	console.log('FOO is undefined!')
  } else if (typeof FOO === 'function') {
	console.log('FOO is equal to the function itself -- not the return value!')
  }else {
	console.log(`Congratulations! Foo has a value of '${FOO}' and is of datatype ${typeof FOO}!`)
  }
  
  