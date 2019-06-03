const ENDPOINT = '/api/people';
const fetchPeople = () => fetch(ENDPOINT).then(response => response.json())
export {fetchPeople};

