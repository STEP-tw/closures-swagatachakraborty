const makeConstant = function (givenValue){
  const fixedValue = givenValue;

  return function(){
    return fixedValue;
  }
}

const makeCounterFromN = function(initValue){
  let count = initValue;

  return function(){
    return count++;
  }
}

const makeCounterFromZero =  function(){
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(initValue) {
  let oldDelta = initValue;
  let delta = 0; 
  let newDelta = initValue;
  
  return function(deltaValue ) {
    if( deltaValue == undefined ) {
      return {old : oldDelta, delta : delta, new : newDelta};
    }
    oldDelta = newDelta;
    delta = deltaValue;
    newDelta = newDelta + delta;
    return { old : oldDelta, delta : delta, new : newDelta };
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

const curry = function(combiner, initValue) {
  let init = initValue;
  
  return function (valueToCombineWith, anotherValue) {
    let result = combiner(init,valueToCombineWith,anotherValue);
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
