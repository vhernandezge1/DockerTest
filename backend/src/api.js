const apiUrl = process.env.REACT_APP_API_URL;

fetch(`${apiUrl}/users`)
  .then(response => response.json())
  .then(data => console.log(data));
