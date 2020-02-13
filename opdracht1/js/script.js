/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/* niet nodig */

//var poster1 = document.querySelector ('#p1');
//var poster2 = document.querySelector ('#p2');
//var poster3 = document.querySelector ('#p3');
//var poster4 = document.querySelector ('#p4');
//
//var postersArr = [poster1, poster2, poster3, poster4];

var filmlijst = document.querySelector('.filmList');
var mijnlijst = document.querySelector('.myList');

new Sortable(filmlijst, {
   group: {
      name: 'shared',
      pull: 'clone',
      put: false // Do not allow items to be put into this list
   },
   animation: 150,
   sort: false // To disable sorting: set sort to false

});

new Sortable(mijnlijst, {
   group: 'shared',
   animation: 150,
   onAdd: function(event) {
      // op het moment dat een een film aan myList wordt toegevoegd
      
      // dit is de film die net is toegevoegd
      var deNieuweFilm = event.item;
      // dit is het DataFilm attribuut van de net toegevoegde film
      var dataFilmVanNieuweFilm = deNieuweFilm.getAttribute("data-film");
      
      // zoeken we naar alle films in myList en stoppen deze in de variabele filmsInMylist
      // NB. De film die net is toegevoegd zit daar bij
      var filmsInMylist = mijnlijst.querySelectorAll('figure');
      
      // een variabele om te tellen hoe vaak de net toegevoegde film in de lijst zit
      var aantalduplicaten = 0;
      
      // we gaan het dataFilm attribuut van de film die net is toegeveogd vergelijkem met de dataFilm attributen van de film in de lijst
      for (var teller=0; teller < (filmsInMylist.length); teller++) {
         // als het dataFilm attribuut gelijk is aan het attribuut van een film in de lijst...
         if (filmsInMylist[teller].getAttribute("data-film") == dataFilmVanNieuweFilm) {
            // ...dan verhogen we aantal duplicaten met 1  
            aantalduplicaten++
         }
      }
      
      // als aantalduplicaten 1 is - dan komt de net toegevoegde film maar 1x voor in de lijst en hoeven we niets te doen
      // als aantalduplicaten > 1 is - dan komt de net teogevoegde film vaker voor in de lijst en moeten we de net toegeveogde film weer verwijderen
      if (aantalduplicaten > 1) {
         // het verwijderen gebeurt hier
         deNieuweFilm.remove();
         // na een kleine tomeput wordt daarna een melding getoond.
         setTimeout(function(){ alert("he joh - die zit er al in"); }, 10);
      }
   }
});
