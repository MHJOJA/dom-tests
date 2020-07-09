
describe('totalPhoneBill function', function(){

    it("should return 'R2.75' for calls", function(){
      assert.equal('R2.75', totalPhoneBill('call'));
    });
    
    it("should return R0.65 for sms ", function(){
      assert.equal('R0.65', totalPhoneBill('sms'));
    });
  
  
  });
  