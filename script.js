const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote() {
    console.log("newQuoteButton was clicked");

    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.message);
            // Logs the value of the data key
            displayQuote(data.message);
        })
        .catch(function () {
            console.log('An error occurred');
        })
}

function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text');
    quoteText.innerHTML = '<p>' + quote + '</p>';
    // Replaces text content with value of parameter

    const tweetButton = document.querySelector('.tweet');
    tweetButton.setAttribute('href', `https://twitter.com/intent/tweet?text=${quote} – Donald Trump`);
}

const newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote(); // Gets a random quote when the page loads