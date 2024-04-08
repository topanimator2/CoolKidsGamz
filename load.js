let requestURL = "https://valorant-api.com/v1/playertitles";
const request = new Request(requestURL);
const response = await fetch(request);
const details = await response.json();
details.array.forEach(element => {
    print(element)
});