class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getFullList() {

        axios.post('http://localhost:8000/characters', character)
            .then(response => {
                const info = `<li>${response.data.name} (id ${response.data.id}) <br>${response.data.occupation}</li>`
                document.getElementById('characters-list').innerHTML += info;
            })
            .catch(e => console.log(`¡Ops! Error: ${e}`))

    }

    getOneRegister() {

    }

    createOneRegister() {

    }

    updateOneRegister() {

    }

    deleteOneRegister() {

    }
}