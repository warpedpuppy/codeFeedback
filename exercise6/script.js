// CHALLENGE THREE: ATTACH A METHOD TO THE RETURN FUNCTION

const FunctionOne = (function () {
	// write your code below this line
  
	function internalMethod () {
	  console.log('internal method called')
	}
  
	return {}
	
	
  
	//write your code above this line
  })()
  
  
  if (!FunctionOne) {
	console.log('function one is undefined')
  } else if (Array.isArray(FunctionOne)){
	console.log('that is an array, not an object')
  } else if (typeof FunctionOne !== 'object'){
	console.log('that is not an object, that is a', typeof FunctionOne)
  }else if (typeof FunctionOne === 'object') {
	console.log('FunctionOne is an object')
	if (!Object.keys(FunctionOne).length ) {
	   console.log('Function One is an object but has neither properties nor methods attached to it')
	} else if (!FunctionOne.internalMethod) {
	  console.log('internalMethod is undefined')
	  //prompt graphic showing object with a method
	} else {
	  console.log('internalMethod is defined and is a', typeof FunctionOne.internalMethod)
	  FunctionOne.internalMethod();
	}
  }
  
  
  