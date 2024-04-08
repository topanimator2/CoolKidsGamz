async function load(URL) {
let requestURL = URL;
const request = new Request(requestURL);
const response = await fetch(request);
const details = await response.json();
print(details)
details.array.forEach(element => {
    print(element)
})};

load("https://valorant-api.com/v1/playertitles")