// Перепишите, используя async/await

// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

async function loadJson(url) {
    const response = await fetch(url);
    if(response.status == 200){
        const json = response.json();
        return json;
    }
    throw new Error(response.status);
}

loadJson('no-such-user.json') 
  .catch(console.log); 
