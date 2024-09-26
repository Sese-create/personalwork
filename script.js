


 async function fetchUrl() {

  const url = 'https://official-joke-api.appspot.com/random_joke'
  const response = await fetch(url)
  const data = await response.json()
 
  return data
  
  }
  

async function displayJoke(){
  const data = await fetchUrl()
  console.log('ggg', data)
  const jokeDiv = document.createElement('div');

    const productTitle = document.createElement('h1');
    productTitle.textContent = data.setup;
    jokeDiv.appendChild(productTitle);

    const productDescription = document.createElement('p');
    productDescription.textContent = data.punchline;
    jokeDiv.appendChild(productDescription);

    console.log(jokeDiv)
    // // document.querySelector('#joke-container').appendChild(jokeDiv);
    //  document.getElementById('joke-container').innerHTML = jokeDiv;
 // Select the container correctly using the ID without '#'
 const jokeContainer = document.getElementById('joke-container');
  



if (jokeContainer) {
  jokeContainer.innerHTML = '';
  jokeContainer.appendChild(jokeDiv)
} else {
  console.error("the element with ID 'joke-container' does not exist.");
}


}


document.getElementById('get-joke-btn').addEventListener('click', displayJoke );





  