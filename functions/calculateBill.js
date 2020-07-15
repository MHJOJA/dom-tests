function calculateBill (){

   var theCallCost = 0;
   var theSmsCost = 0;
   var theWarningLevel =0;
   var theCriticalLevel = 0;


    function setCallCost(callCost){
    
        theCallCost =callCost;
    }
    
    function getCallCost(){
        return theCallCost
    }

    function setsmsCost(smsCost){
    
        theSmsCost =smsCost;
    }
    
    function getSmsCost(){
        return theSmsCost
    }

    function setWarningLevel(warningLevel) {

        theWarningLevel = warningLevel;
    }

function getWarningLevel() {
    return theWarningLevel
}

function setCriticalLevel(criticalLevel) {

    theCriticalLevel = criticalLevel;
}

function getCriticalLevel() {

    return theCriticalLevel;
}

    return {
        setCallCost,
        getCallCost,
        setsmsCost,
        getSmsCost,
        getWarningLevel,
        setWarningLevel,
        setCriticalLevel,
        getCriticalLevel
    }
}