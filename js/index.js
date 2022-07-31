
document.getElementById('btn').addEventListener('click', () => {

    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://api.icndb.com/jokes/random', true)
    xhr.onload = function(){
        if(this.status === 200){
            data = this.response
            data = JSON.parse(data)
            document.getElementsByClassName('text')[0].innerHTML = data.value.joke
            console.log(data.value.joke)
        }
    }
    xhr.send()

})