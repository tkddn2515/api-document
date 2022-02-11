import axios from 'axios';

// export const post = (query) => {
//   fetch('/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: JSON.stringify({query: `
//     { 
//       hello 
//     }
//     `})
//   })
//     .then(r => r.json())
//     .then(data => console.log('data returned:', data));
// }

export const post = async (query) => {
  console.log(process.env.REACT_APP_API_URL);
  const data = await axios({
    url: 'http://localhost:4000',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // any other headers you require go here
    },
    data: {
      query
    }
  });
  console.log(data);
}