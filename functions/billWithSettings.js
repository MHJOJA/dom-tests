function billWithSettings(){

var theCallCost = 0;
var theSmsCost = 0;
var theWarningLevel = 0;
var theCriticalLevel = 0;


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



    return {
        getCallCost,
        setCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel
    }
}