const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
    document.getElementById('fetch-all').onclick = (e) => {

        charactersAPI.getFullList()

        .then(response => {
                let info = response.data
                    //(id ${response.data.id}) <br>${response.data.occupation}</li>`)
                console.log(info)
            })
            .catch(e => console.log(`¡Ops! Error: ${e}`))

    }

    document.getElementById('fetch-one').onclick = function() {

        e.preventDefault()


        axios.get('http://localhost:8000/characters', charactersAPI)
            .then(response => {
                let one = response.data.array.forEach(element => {

                });
                //(id ${response.data.id}) <br>${response.data.occupation}</li>`)
                console.log(one)
            })
            .catch(e => console.log(`¡Ops! Error: ${e}`))
    }

    document.getElementById('delete-one').onclick = function() {

    }

    document.getElementById('edit-character-form').onsubmit = function() {

    }

    document.getElementById('new-character-form').onsubmit = function() {

    }
})