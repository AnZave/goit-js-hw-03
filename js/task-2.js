function makeArray(firstArray, secondArray, maxLength) {
  // Спочатку створюємо новий масив, який є об'єднанням firstArray і secondArray
  const copyArray = firstArray.concat(secondArray);
  // Якщо кількість елементів перевищує maxLength, повертаємо обмежений масив
  if (copyArray.length >= maxLength) {
    return copyArray.slice(0, maxLength);
  }
  // Інакше повертаємо весь масив
  else {
    return copyArray;
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); //
