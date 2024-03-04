/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Ethan Ball';
const currentYear = '2024';
const profilePicture = 'images/photo.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['Ice cream', 'Pizza'];
foodElement.innerHTML = favoriteFoods.join(', ');
const anotherFavoriteFood = 'Chips';
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.splice(0, 1);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.splice(-1, 1);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

