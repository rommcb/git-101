
var parentDiv = document.getElementById("container");

function Case(nombre, ticked = false) {
  this.nombre = nombre;
  this.ticked = ticked;
  // this.td crée via la méthode CreateTable
}

Case.prototype.TickCase = function (myCase) {
  var tab = grille.VerifierNombreTicked();

  if (this.ticked == false) {

    if (tab.length == 6) return;

    myCase.td.style.fontWeight = "bold";
    myCase.ticked = true;
    console.log(myCase);

    tab = grille.VerifierNombreTicked();
    if (tab.length == 6) {
      grille.effacerDiv();
      var div = document.getElementById("resultat");
      var p = div.appendChild(document.createElement("P"));
      p.appendChild(document.createTextNode("Les nombres choisis sont: " + tab))
    }

  }
  else {
    grille.effacerDiv();
    myCase.td.style.fontWeight = "normal";
    myCase.ticked = false;
    console.log(myCase);
  }

};

function Grille() //Créer l'objet Grille
{
  this.tableau = []; // this. pour créer une propriété. Attention! différent d'une variable.
  this.CreateTable(); //Appel de la fonction CreateTable
};

Grille.prototype.CreateTable = function () {
  this.table = document.createElement("table");

  for (i = 0; i < 7; i++) {

    var tr = document.createElement("tr");
    this.table.appendChild(tr);

    for (j = 0; j < 7; j++) {
      var myCase = new Case(i * 7 + j);
      this.tableau[this.tableau.length] = myCase; // this.grille.length > si le tableau est vide = 0 , donc ajoute à l'index 0, etc.
      myCase.td = document.createElement("td"); // ajout d'une propriété this.td à notre nouvel objet "Case"
      myCase.td.setAttribute("style", "width:30px; border:1px solid black; text-align: center;");
      myCase.td.appendChild(document.createTextNode(myCase.nombre));
      tr.appendChild(myCase.td);

      myCase.td.onclick = function (myCase) {
        return function () { myCase.TickCase(myCase) };
      }(myCase);

    };
  };
};

Grille.prototype.DisplayTable = function () {
  parentDiv.appendChild(this.table);
};

Grille.prototype.VerifierNombreTicked = function () {
  var nbCaseTicked = [];


  for (i = 0; i < grille.tableau.length; i++) {
    if (grille.tableau[i].ticked == true) {
      nbCaseTicked.push(grille.tableau[i].nombre);
    }
  }

  return nbCaseTicked;
};

Grille.prototype.effacerDiv = function () {

  var div = document.getElementById("resultat");
  if (div == null) return;
  while (div.firstChild) div.removeChild(div.firstChild);

};

var grille = new Grille();
grille.DisplayTable();

    //document.querySelectorAll("tr").addEventListener("click",this.TickCase);