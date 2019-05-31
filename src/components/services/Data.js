const ENDPOINT = 'https://bbvait-orgama.firebaseapp.com/api/people';

const fetchData = () => fetch(ENDPOINT)
.then(response => response.json())


export {fetchData};