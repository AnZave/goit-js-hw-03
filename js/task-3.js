function checkForSpam(message) {
  const bListWord1 = 'spam';
  const bListWord2 = 'sale';
  if (message.toLowerCase().includes(bListWord1)) {
    return true;
  } else if (message.toLowerCase().includes(bListWord2)) {
    return true;
  } else {
    return false;
  }
}

checkForSpam('Latest technology news'); // false
checkForSpam('JavaScript weekly newsletter'); // false
checkForSpam('Get best sale offers now!'); // true
checkForSpam('Amazing SalE, only tonight!'); // true
checkForSpam('Trust me, this is not a spam message'); // true
checkForSpam('Get rid of sPaM emails. Our book in on sale!'); // true
checkForSpam('[SPAM] How to earn fast money?'); // true

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
