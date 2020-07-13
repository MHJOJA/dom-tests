
describe('the bill with settings factory function', function () {

    it('should be able set call cost', function () {

        let settingBill = billWithSettings();
        
        settingBill.setCallCost(1.85)
        assert.equal(1.85, settingBill.getCallCost());

        let settingBill2 = billWithSettings();

        settingBill2.setCallCost(2.75)
        assert.equal(2.75, settingBill2.getCallCost());

    });

    it('should be able set the sms cost', function () {

        let settingBill = billWithSettings();

        settingBill.setSmsCost(0.85)
        assert.equal(0.85, settingBill.getSmsCost());

        let settingBill2 = billWithSettings();

        settingBill.setSmsCost(0.75)
        assert.equal(0.75, settingBill.getSmsCost());

    });

    it('should be able set the sms cost ans the call cost', function () {

        let settingBill = billWithSettings();

        settingBill.setSmsCost(0.85)
        assert.equal(0.85, settingBill.getSmsCost());

        settingBill.setCallCost(2.75)
        assert.equal(2.75, settingBill.getCallCost());

        let settingBill2 = billWithSettings();

        settingBill2.setSmsCost(0.65)
        assert.equal(0.65, settingBill2.getSmsCost());

        settingBill2.setCallCost(1.85)
        assert.equal(1.85, settingBill2.getCallCost())

    });

    it('should be able set the warning level', function () {

        let settingBill = billWithSettings();

        settingBill.setWarningLevel(20)
        assert.equal(20, settingBill.getWarningLevel());


    });


    it('should be able set the critical level', function () {

        let settingBill = billWithSettings();

        settingBill.setCriticalLevel(35)
        assert.equal(35, settingBill.getCriticalLevel());


    });

    it('should be able set the  warning and the critical level', function () {

        let settingBill = billWithSettings();

        settingBill.setCriticalLevel(15)
        assert.equal(15, settingBill.getCriticalLevel());
        settingBill.setWarningLevel(10)
        assert.equal(10, settingBill.getWarningLevel());
    });
});

describe('the use value fanction', function () {

    it('should be able use call cost set', function () {

        let settingBill = billWithSettings();

        settingBill.setCriticalLevel(10)
        settingBill.setCallCost(1.50)
        settingBill.setSmsCost(0.65)

        settingBill.makeCall();
        settingBill.makeCall();
        settingBill.makeCall();
        settingBill.makeCall();


        assert.equal(6.00, settingBill.getTotalCallCost());
        assert.equal(6.00, settingBill.getTotalCost());
        assert.equal(0.00, settingBill.getTotalSmsCost());

    });

    it('should be able use call cost setting to make 2 calls at 1.35 each', function () {

        let settingBill = billWithSettings();

        settingBill.setCallCost(1.35)
        settingBill.setSmsCost(0.65)

        settingBill.makeCall();
        settingBill.makeCall();


        assert.equal(2.70, settingBill.getTotalCallCost());
        assert.equal(2.70, settingBill.getTotalCost());
        assert.equal(0.00, settingBill.getTotalSmsCost());

    });
    
    it('should be able send two sms at 0.85 each', function () {

        let settingBill = billWithSettings();

        settingBill.setCallCost(1.35)
        settingBill.setSmsCost(0.85)

        settingBill.sendSms();
        settingBill.sendSms();


        assert.equal(0.00, settingBill.getTotalCallCost());
        assert.equal(1.70, settingBill.getTotalCost());
        assert.equal(1.70, settingBill.getTotalSmsCost());

    });
    it('should be able send 2 sms at 0.75 each & place 3 calls at 1.25 each', function () {

        let settingBill = billWithSettings();

        settingBill.setCallCost(1.25)
        settingBill.setSmsCost(0.75)

        settingBill.sendSms();
        settingBill.makeCall();
        settingBill.makeCall();
        settingBill.sendSms();
        settingBill.makeCall();


        assert.equal(3.75, settingBill.getTotalCallCost());
        assert.equal(5.25, settingBill.getTotalCost());
        assert.equal(1.50, settingBill.getTotalSmsCost());

    });
});

describe( 'warning and crilical level', function(){

    it ('should return "warning" when the warning level is reached', function(){

        let settingBill = billWithSettings();

        settingBill.setCriticalLevel(10)
        settingBill.setWarningLevel(5);
        settingBill.setCallCost(1.50);
        settingBill.setSmsCost(0.5);


        settingBill.makeCall()
        settingBill.makeCall()
        settingBill.makeCall()
        settingBill.makeCall()

        assert.equal('warning', settingBill.totalClassName())

    })

    it ('should return "critical" when the critical level is reached',function(){

        let settingBill = billWithSettings();
        
        settingBill.setCriticalLevel(10);
        settingBill.setSmsCost(0.85);
        settingBill.setCallCost(2.85);

        settingBill.makeCall()
        settingBill.makeCall()
        settingBill.makeCall()
        settingBill.makeCall()
        settingBill.makeCall()


        assert.equal('critical', settingBill.totalClassName());
    

    })


    it ('should stop the Total cost from increasing once reached the critical level',function(){

        let settingBill = billWithSettings();
        
        settingBill.setCriticalLevel(12);
        settingBill.setSmsCost(0.85);
        settingBill.setCallCost(2.50);

        settingBill.makeCall()
        settingBill.makeCall()
        settingBill.makeCall()
        settingBill.makeCall()
        settingBill.makeCall()


        assert.equal('critical', settingBill.totalClassName());
        assert.equal(12, settingBill.getTotalCallCost());


})
})