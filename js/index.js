
console.log("Helloooooo")

document.getElementById('btn').addEventListener('click', () => {

    fetch("https://v2.jokeapi.dev/joke/Any").then(res => res.json().then(data => {
        document.getElementsByClassName('text1')[0].innerHTML = data.setup
        document.getElementsByClassName('text2')[0].textContent = "-" + data.delivery
    }))

})