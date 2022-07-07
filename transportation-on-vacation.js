


//SOLUTION 1
function rentalCarCost(d) {
  
    let total = (d*40)
    // Your solution here
    if (d >= 3 && d < 7 ){
     return (total - 20)
    }
    else if (d >= 7){
      return (total - 50)
    }
    else{
     return ( total)
    }
    
  }
  rentalCarCost(7)

//SOLUTION 2
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));
