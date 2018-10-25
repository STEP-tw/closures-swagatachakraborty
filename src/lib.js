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

const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
