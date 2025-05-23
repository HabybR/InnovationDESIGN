function getCharacters(done) {

    const results = fetch("https://dragonball-api.com/api/characters");

    results
        .then(response =>  response.json())
        .then(data => {
            done(data);
        });
      
}

getCharacters(data => {
 
        data.results.forEach(personaje => {
            
            const article = document.createRange().createContextualFragment(/*html*/ `
                <article>

                    <div class="imagen-container">
                        <img src="${personaje.image}" alt="Personaje">
                    </div>

                    <h2>${personaje.name}</h2>
                    <span>${personaje.status}</span>


                </article>
            `);

            const main = document.querySelector("main");

            main.append(article);
        });
   
    
});