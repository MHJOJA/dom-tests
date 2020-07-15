function billWithSettings(){

var theCallCost = 0;
var theSmsCost = 0;
var theWarningLevel = 0;
var theCriticalLevel = 0;

var callCostTotal = 0;
var smsCostTotal = 0;


function setCallCost(callCost){
    theCallCost = callCost
    
 }

function getCallCost(){
    return theCallCost;
}

function setSmsCost(smsCost){
    theSmsCost = smsCost
    
 }

function getSmsCost(){
    return theSmsCost;
}

function setWarningLevel (warningLevel){
    theWarningLevel = warningLevel;
}

function getWarningLevel (warningLevel){
    return theWarningLevel
}


function setCriticalLevel (criticalLevel){
    theCriticalLevel = criticalLevel;
}

function getCriticalLevel (criticalLevel){
    return theCriticalLevel
}

function makeCall(){
    
    if(!hasReachedCriticalLevel){
        callCostTotal += theCallCost;

    }

 
 
}    

function getTotalCallCost(){

    return callCostTotal;
}

function getTotalCost(){

return callCostTotal + smsCostTotal;

}
function getTotalSmsCost(){
return smsCostTotal;
    
}
function sendSms(){
    if (!hasReachedCriticalLevel){
        smsCostTotal += theSmsCost

    }

    
}

function hasReachedCriticalLevel(){

return getTotalCost() >= getCriticalLevel()
}


function totalClassName(){
    
    if ( hasReachedCriticalLevel){

        return 'critical'
    };
  
        if (getTotalCost() >= getWarningLevel()){

            return "warning"
        }
        
    }
    

    return {
        getCallCost,
        hasReachedCriticalLevel,
        setCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,

        getTotalCallCost,
        getTotalCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,

    
    }
}