$(document).ready(() => {
    $("#button").click(function () {

      const valorHero = $("#inputHero").val();
      const URLBASE = `https://akabab.github.io/superhero-api/api/id`;
       

      $.ajax({
        // Endpoint API
        url: `${URLBASE}/${valorHero}.json`, //`https://akabab.github.io/superhero-api/api/id/${valorHero}.json`,
        type: "GET",
        dataType: "JSON",
        success: (data) => {
          const hero = data;
          console.log(hero);
          const img = hero.images.lg;
          const name = hero.name;
          const connections = hero.connections.groupAffiliation;
          const occupation = hero.work.occupation;
          const firstAppearance = hero.biography.firstAppearance;
          const publisher = hero.biography.publisher;
          const height = hero.appearance.height.join(" - ");
          const weight = hero.appearance.weight.join(" - ");
          const aliases = hero.biography.aliases.join(" - ");
          const combat = hero.powerstats.combat;

          //const infoHeroe = document.getElementById("infoHeroe"); Sintaxis para JS
          //const graphicHeroe = document.getElementById("graphicHeroe"); Sintaxis para JS

          //infoHeroe.innerHTML =` `; Sintaxis para JS
          $("#infoHeroe").html(`
            <h2 class="text-center super-heroe mt-5">SuperHero encontrado</h2>
            <div class="card mt-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${img}" class="img-fluid rounded-start" alt="${name}">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title super-heroe"><b>Nombre :</b> ${name}</h5>
                    <p class="card-text"><small><b>Conexiones:</b> ${connections}.</small></p>
                    <p class="card-text"><small><b>Publicado por:</b> ${publisher}</small></p>
                    <hr>
                    <p class="card-text"><small><b>Ocupación:</b> ${occupation}</small></p>
                    <hr>
                    <p class="card-text"><small><b>Primera aparición:</b> ${firstAppearance}</small></p>
                    <hr>
                    <p class="card-text"><small><b>Altura:</b> ${height}</small></p>
                    <hr>
                    <p class="card-text"><small><b>Peso:</b> ${weight}</small></p>
                    <hr>
                    <p class="card-text"><small><b>Alianzas:</b> ${aliases}</small></p>
                  </div>
                </div>
              </div>
            </div>
          `);
          //graphicHeroe.innerHTML =` `; Sintaxis para JS 
          $("#graphicHeroe").html(`
            <h2 class="text-center super-heroe mt-5">Estadísticas de poder para ${name}</h2>
            

            `);
        }
      });
    });
  });



