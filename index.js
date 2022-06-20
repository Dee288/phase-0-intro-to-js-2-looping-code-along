let namesArray = ['Guadalupe', 'Ollie', 'Aki'] 
let event = ('suprise')

function writeCards( namesArray, event ) {
  let cards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    cards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return cards
}

// the countdown 
function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}

