const namesArray = ['Guadalupe', 'Ollie', 'Aki'] 

function writeCards( namesArray, event) {
  for ( let i = 0; i < namesArray.length; i++ ) {
    console.log( `Thank you, ${namesArray[i]}, for the wonderful surprise gift!` )
  }
  return namesArray
}
writeCards()

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}

