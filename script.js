
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const dateAdded = document.getElementById("dateAdded")

const get_url = "https://api.quotable.io/random";

async function quotes(url) {
    const respone = await fetch(url)
    let data = await respone.json()

    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = data.author;
    dateAdded.innerHTML = data.dateAdded;
}
quotes(get_url)
