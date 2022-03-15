// CHALLENGE ONE
//instructions: in the space indicated, write code that will make sure the variable FuctionOne is of datatype object.  After you write your code click "run" to see if you have the correct answer.

 
const FunctionOne = (function () {
	// write your code below this line
  
  
	
	//write your code above this line
  })()
  
  
  // DO NOT LOOK BELOW THIS LINE

  if (!FunctionOne) {
	console.log('FunctionOne is undefined!')
  } else if (Array.isArray(FunctionOne)){
	console.log('FunctionOne has a value, but it is not an object, FunctionOne is an array.')
  } else if (typeof FunctionOne !== 'object'){
	console.log('FunctionOne has a value, but it is not an object, FunctionOne is a', typeof FunctionOne, '.')
  }else if (typeof FunctionOne === 'object') {
	console.log('Yes!  Go you!  That is an FunctionOne is of datatype object!')
  }
  
  