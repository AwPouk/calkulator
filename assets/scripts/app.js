const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculatResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTYPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function add() {
  calculatResult ("ADD");
}

function subtract() {
  calculatResult ("SUBTRACT");
}

function multiply() {
  calculatResult ("MULTYPLY");
}

function divide() {
  calculatResult ("DIVIDE");
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
