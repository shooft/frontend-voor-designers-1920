/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

/*
var listButton = document.querySelector('button');

listButton.addEventListener('click', listMenu) ;

function listMenu() {
      document.body.style.backgroundColor = 'black';

}
*/
var poster1 = document.querySelector ('#p1');
var poster2 = document.querySelector ('#p2');
var poster3 = document.querySelector ('#p3');
var poster4 = document.querySelector ('#p4');


var postersArr = [poster1, poster2, poster3, poster4];


var mijnlijst = document.querySelector('.myList');


var filmlijst = document.querySelector('.filmlist');
//var sortable = Sortable.create(filmlijst);


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
    onChange: function(evt) {

        var lijstArr = document.querySelectorAll('.myList figure');

        var posterNames = [];

        for (var teller=0; teller < lijstArr.length; teller++) {
            console.log( lijstArr[teller] );
        }



    }
});


