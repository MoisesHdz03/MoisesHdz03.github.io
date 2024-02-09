document.addEventListener("DOMContentLoaded", () => {
    let allCharacters = []; // Variable para almacenar todos los personajes

    // Función para obtener los personajes
    function getCharacters(done) {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => {
                allCharacters = data.results; // Almacena todos los personajes
                done(allCharacters);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    }

    function showFilteredCharacters(filter) {
        const filteredCharacters = allCharacters.filter(character =>
            Object.values(character).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(filter.toLowerCase())
            )
        );

        const itemList = document.getElementById("personaje");
        const template = document.getElementById("list-template");
        itemList.innerHTML = ''; 

        filteredCharacters.forEach((personaje, index) => {
            const clone = template.content.cloneNode(true);

            clone.querySelector("[data-id='number']").textContent = `${index + 1}`;
            clone.querySelector("[data-id='title']").textContent = personaje.name;
            clone.querySelector("[data-id='content']").textContent = `${personaje.status}, ${personaje.species}`;
            clone.querySelector("[data-id='image']").src = personaje.image;

            itemList.appendChild(clone);
        });
    }

    document.querySelector(".btn.btn-primary").addEventListener("click", event => {
        getCharacters(data => {
            showFilteredCharacters('');
        });
    });

    document.querySelector(".form-control").addEventListener("input", event => {
        const filter = event.target.value.trim();
        showFilteredCharacters(filter);
    });

    document.querySelector(".btn.btn-light").addEventListener("click", event => {
        const itemList = document.getElementById("personaje");
        itemList.innerHTML = '';
    });
});

