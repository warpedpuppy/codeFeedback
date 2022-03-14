// CHALLENGE ONE: MAKE THE IIFE GETS ASSIGNED A VALUE

 
const FunctionOne = (function () {
	// write your code below this line
  
  
	
	//write your code above this line
  })()
  
  
  
  if (!FunctionOne) {
	console.log('function one is undefined')
  } else if (Array.isArray(FunctionOne)){
	console.log('that is an array, not an object')
  } else if (typeof FunctionOne !== 'object'){
	console.log('that is not an object, that is a', typeof FunctionOne)
  }else if (typeof FunctionOne === 'object') {
	console.log('congrats')
  }
  
  