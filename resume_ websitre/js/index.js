//Javascr code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://qmpu3xzu4ujexxbxjpkedpegyi0qygvx.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();