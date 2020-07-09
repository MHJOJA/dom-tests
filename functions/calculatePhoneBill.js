
function totalPhoneBill(value){
    var costs = value.split(",");
  
    var total = 0;
  
  
    for(var i=0;  i<costs.length; i++){
    var bill = costs[i].trim();
  
      if(bill === "call"){
        total += 2.75;
      }
      else if(bill === "sms"){
       total += 0.65;
      }
      
    }
    console.log(total.toFixed(2))
    return "R" + total.toFixed(2);
  }
  