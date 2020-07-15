describe("the calculate bill function",function(){

  it ("should be able to set the call cost",function(){
  
      let calculateBtnClicked = calculateBill();

      calculateBtnClicked.setCallCost(1.85);
  
      assert.equal(1.85  , calculateBtnClicked.getCallCost());


      let calculateBtnClicked2 = calculateBill();

      calculateBtnClicked2.setCallCost(2.50);
  
      assert.equal(2.50, calculateBtnClicked2.getCallCost())


})
  it ("should be able to set sms cost",function(){
  
    let calculateBtnClicked = calculateBill();

    calculateBtnClicked.setsmsCost(0.85);

    assert.equal(0.85  , calculateBtnClicked.getSmsCost());


    let calculateBtnClicked2 = calculateBill();

    calculateBtnClicked2.setsmsCost(0.95);

    assert.equal(0.95, calculateBtnClicked2.getSmsCost())


   
})
it ("should be able to set sms and call cost " ,function(){

  let calculateBtnClicked = calculateBill();

  calculateBtnClicked.setsmsCost(0.85);
  calculateBtnClicked.setCallCost(2.50);

  assert.equal(0.85  , calculateBtnClicked.getSmsCost());
  assert.equal(2.50  , calculateBtnClicked.getCallCost());

  let calculateBtnClicked2 = calculateBill();

  calculateBtnClicked2.setCallCost(1.85);
  calculateBtnClicked2.setsmsCost(0.50);

  assert.equal(1.85, calculateBtnClicked2.getCallCost())
  assert.equal(0.50,calculateBtnClicked2.getSmsCost() )


})  

it ("should be able to set the waning level " ,function(){

  let calculateBtnClicked = calculateBill();

  calculateBtnClicked.setsmsCost(0.85);
  calculateBtnClicked.setCallCost(2.50);

  assert.equal(0.85  , calculateBtnClicked.getSmsCost());
  assert.equal(2.50  , calculateBtnClicked.getCallCost());

  let calculateBtnClicked2 = calculateBill();

  calculateBtnClicked2.setCallCost(1.85);
  calculateBtnClicked2.setsmsCost(0.50);

  assert.equal(1.85, calculateBtnClicked2.getCallCost())
  assert.equal(0.50,calculateBtnClicked2.getSmsCost() )

})

  it ("should be able set warning level " ,function(){

    let calculateBtnClicked = calculateBill();
  
  calculateBtnClicked.setWarningLevel(20);
  assert.equal(20, calculateBtnClicked.getWarningLevel())

    
})  

it('should be able to set critical level', function(){

  let calculateBtnClicked = calculateBill();

  calculateBtnClicked.setCriticalLevel(35);

  assert.equal(35, calculateBtnClicked.getCriticalLevel())

})


it('should be able to set critical and warning level', function(){

  let calculateBtnClicked = calculateBill();

  calculateBtnClicked.setCriticalLevel(20);
  calculateBtnClicked.setWarningLevel(15);
  assert.equal(20, calculateBtnClicked.getCriticalLevel())
  assert.equal(15, calculateBtnClicked.getWarningLevel())

})

  })
