function slugify(title) {
  // Перетворюємо рядок у нижній регістр
  const lowerCaseTitle = title.toLowerCase();

  // Розділяємо рядок на масив слів
  const words = lowerCaseTitle.split(' ');

  // Об'єднуємо слова через тире
  const slug = words.join('-');

  // Повертаємо
  return slug;
}

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
