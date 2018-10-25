const makeConstant = function (givenValue){
  const source = givenValue;
  return function(){
    return source;
  }
}

const makeCounterFromN = function(initValue){
  let count = initValue;
  return function(){
    return count++;
  }
}

const makeCounterFromZero =  function(){
  let count = 0;
  return function(){
    return count++;
  }
}

const makeDeltaTracker = function(initValue) {
  let deltaTrack = { old : initValue,
    delta : 0, 
    new : initValue };
  return function(deltaValue ) {
    if( deltaValue == undefined ) {
      return deltaTrack;
    }
    deltaTrack["old"] = deltaTrack["new"];
    deltaTrack["delta"] = deltaValue;
    deltaTrack["new"] = deltaTrack["new"] + deltaTrack["delta"];
    return deltaTrack;
  }
}

const makeFiboGenerator = function(current = 1, old = 0) {
  if(current < old){
    let temp = current;
    current = old;
    old = temp;
  }
  
  return function(){
    let result = old;
    let next = old + current;
    old = current;
    current = next;
    return result;
  }
}

const makeCycler = function(items) {
  let cycle = items.toString().split(",");
  return function () {
    let currentValue = cycle.shift();
    cycle.push(currentValue);
    return currentValue;
  }
}

const curry = function(func, initValue) {
  let arg1 = initValue;
  return function (arg2, arg3) {
    let result = func(arg1,arg2,arg3);
    return result;
  }
}

const compose = function( finalFunction, initFunction) {
  return function(initArg1, initArg2){
    let resultOfInitFunction = initFunction(initArg1, initArg2);
    return finalFunction(resultOfInitFunction);
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
