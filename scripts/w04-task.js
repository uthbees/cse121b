/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: 'Ethan Ball',
    photo: 'images/photo.jpg',
    favoriteFoods: ['Pizza', 'Ice cream'],
    hobbies: ['Board games', 'Hiking'],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({ place: 'Utah', length: 'Two years' });
myProfile.placesLived.push({ place: 'Virginia', length: 'Four years' });
myProfile.placesLived.push({ place: 'Wisconsin', length: 'Three years' });
myProfile.placesLived.push({ place: 'Texas', length: 'Five years' });
myProfile.placesLived.push({ place: 'Utah', length: 'Seven years' });

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
const foodsList = document.querySelector('#favorite-foods');

myProfile.favoriteFoods.forEach((favoriteFood) => {
    const listElement = document.createElement('li');
    listElement.textContent = favoriteFood;
    foodsList.append(listElement);
});

/* Hobbies List */
const hobbiesList = document.querySelector('#hobbies');

myProfile.hobbies.forEach((hobby) => {
    const listElement = document.createElement('li');
    listElement.textContent = hobby;
    hobbiesList.append(listElement);
});

/* Places Lived DataList */
const placesList = document.querySelector('#places-lived');

myProfile.placesLived.forEach((place) => {
    const descriptionTerm = document.createElement('dt');
    descriptionTerm.textContent = place.place;
    const descriptionDetails = document.createElement('dd');
    descriptionDetails.textContent = place.length;
    placesList.append(descriptionTerm, descriptionDetails);
});
