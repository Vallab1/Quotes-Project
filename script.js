let quotes = [
    {
        author: "- Louis L’Amour",
        quote: '"Start writing, no matter what. The water does not flow until the faucet is turned on."'
    },
    {
        author: "- William Faulkner",
        quote: '"Get it down. Take chances. It may be bad, but it’s the only way you can do anything really good."'
    },
    {
        author: "- Terry Pratchett",
        quote: '"The first draft is just you telling yourself the story."'
    },
    {
        author: "- Octavia E. Butler",
        quote: '"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it."'
    },
    {
        author: "- Steven Pressfield",
        quote: '"Start before you’re ready."'
    },
    {
        author: "- Jodi Picoult",
        quote: '"You can always edit a bad page. You can’t edit a blank page."'
    },
    {
        author: "- Jack London",
        quote: '"You can’t wait for inspiration. You have to go after it with a club."'
    },
    {
        author: "- Robert Frost",
        quote: '"I have never started a poem yet whose end I knew. Writing a poem is discovering."'
    },
    {
        author: "- Ray Bradbury",
        quote: '"First, find out what your hero wants, then just follow him!"'
    },
    {
        author: "- C. J. Cherryh",
        quote: '"It is perfectly okay to write garbage as long as you edit brilliantly."'
    }
];

// Function to load quotes from localStorage
function quotesFromLocalStorage() {
    let savedQuotes = localStorage.getItem("quotes");
    if (savedQuotes) {
        quotes = JSON.parse(savedQuotes); 
    }
}
quotesFromLocalStorage();

// Function to generate a random quote
function generateQuoteButton() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random].quote;
    document.getElementById("author").innerText = quotes[random].author;
}

// Function to add a new quote
function addNewQuote() {
    let quote = document.getElementById("quoteInput").value;
    let author = document.getElementById("authorInput").value;

    if (quote && author) {
        // Add the new quote to the quotes array
        quotes.push({
            quote: quote,
            author: author
        });

        // Save updated quotes to localStorage
        localStorage.setItem('quotes', JSON.stringify(quotes));

        alert("Quote added successfully!");

        document.getElementById("quoteInput").value = '';
        document.getElementById("authorInput").value = '';
    } else {
        alert("Please enter both quote and author.");
    }
}
