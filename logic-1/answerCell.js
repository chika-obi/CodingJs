function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep) {
    return false; // Do not answer if asleep
  } else if (isMorning) {
    return isMom; // Only answer in the morning if it's your mom calling
  } else {
    return true; // Answer in all other cases
  }


// Test cases
console.log(answerCell(false, false, false)); // Should return true
console.log(answerCell(false, false, true));  // Should return false
console.log(answerCell(true, false, false));  // Should return false
``
