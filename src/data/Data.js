const ENDPOINT = 'https://bbvait-orgama.firebaseapp.com/api/people';

const fetchPeople = () => fetch(ENDPOINT).then(response => response.json());

export {fetchPeople};