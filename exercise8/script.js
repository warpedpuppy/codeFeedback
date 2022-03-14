// CHALLENGE FOUR: HAVE A METHOD ON THE RETURN OBJECT MUTATE A PROPERTY

const FunctionOne = (function () {
  
	let a = [];
  
	// edit the code below this line
	function addDataToA () {
	  
  
	  
	}
	//edit your code above this line
	
	return {
	  a: a,
	  addDataToA: addDataToA
	}
	
  })()
  
  
  if (!FunctionOne) {
	console.log('function one is undefined')
  } else if (Array.isArray(FunctionOne)){
	console.log('that is an array, not an object')
  } else if (typeof FunctionOne !== 'object'){
	console.log('that is not an object, that is a', typeof FunctionOne)
  }else if (typeof FunctionOne === 'object') {
	console.log('congrats')
	if (!Object.keys(FunctionOne).length ) {
	   console.log('Function One is an object but has neither properties nor methods attached to it')
	} else if (!FunctionOne.internalMethod) {
	  console.log('internalMethod is undefined')
	  //prompt graphic showing object with a method
	} else {
	  console.log('internalMethod is defined', typeof FunctionOne.internalMethod)
	  FunctionOne.internalMethod();
	}
  }
  
  