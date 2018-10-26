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
  
  return function(deltaValue = 0) {
    oldDelta = newDelta;
    delta = deltaValue;
    newDelta = newDelta + delta;
    return { old : oldDelta, delta : delta, new : newDelta };
  }
}

const makeFiboGenerator = function(second = 1, first = 0 ) {
  let previous = Math.min(first,second);
  let present = Math.max(first,second);
  return function(){
    let result = previous;
    let next = previous + present;
    previous = present;
    present = next;
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
  let init = initValue;
  
  return function (arg1, arg2) {
    let result = func(init,arg1,arg2);
    return result;
  }
}

const compose = function( outerFunction, innerFunction) {
  return function(argToInner, argToOuter){
    let resultOfInnerFunction = innerFunction(argToInner, argToOuter);
    return outerFunction(resultOfInnerFunction);
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
