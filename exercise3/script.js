// CHALLENGE ONE
//instructions: in the space indicated, write code that will make sure the variable FuctionOne is of datatype object.  After you write your code click "run" to see if you have the correct answer.

 
const FOO = (function () {
	// write your code below this line
  
  
	
	//write your code above this line
  })()
  
  
  // DO NOT LOOK BELOW THIS LINE

  if (!FOO) {
	console.log('FOO is undefined!')
  } else if (Array.isArray(FOO)){
	console.log('FOO has a value, but it is not an object, FOO is an array.')
  } else if (typeof FOO !== 'object'){
	console.log('FOO has a value, but it is not an object, FOO is a', typeof FOO, '.')
  }else if (typeof FOO === 'object') {
	console.log('Yes!  Go you!  That is an FOO is of datatype object!')
  }
  
  