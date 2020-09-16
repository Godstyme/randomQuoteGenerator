// an event that generate a quote 
const btnGenerator = document.querySelector('.btn').addEventListener('click', () =>{
  const displayQuote = document.querySelector('.quote')
  // an api fetch that fetches random quotes from rapidapi
  fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "ffd5641be5msh2e584a7c6394ff7p1e4d89jsn613a1d56eda8"
	  }
  })
  .then(async response => {
    const data = await response.json();
    // console.log(data.content);
    displayQuote.style.visibility = 'visible'
    displayQuote.innerHTML = `${data.content}`
  })
  .catch(err => {
	  console.log(err);
  })
})
