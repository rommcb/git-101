
var parentDiv = document.getElementById("container");
console.log(parentDiv);

function Grille()
  {
    this.tableau = []; // this. pour créer une propriété. Attention! différent d'une variable.
    this.CreateTable(); 
  };

Grille.prototype.CreateTable = function ()
  {
      this.table = document.createElement("table");
      
      for (i = 0; i < 7; i++) {
        
        var tr = document.createElement("tr");
        this.table.appendChild(tr);

        for (j = 0; j < 7; j++){
          var myCase = new Case(i * 7 + j);
          this.tableau[this.tableau.length] = myCase; // this.grille.length > si le tableau est vide = 0 , donc ajoute à l'index 0, etc.
          myCase.td = document.createElement("td"); // ajout d'une propriété this.td à notre nouvel objet "Case"
          myCase.td.appendChild(document.createTextNode(myCase.nombre));
          tr.appendChild(myCase.td);
        };
      };
  };


  Grille.prototype.DisplayTable = function ()
    {
       parentDiv.appendChild(this.table);
    };


var grille = new Grille();

grille.DisplayTable();


// for (i = 0; i < 49; i++) {
// var case1 = new Case(nombre);
// }

function Case(nombre, ticked = false)
    {
    this.nombre=nombre; 
    this.ticked=ticked;
    // this.td crée via la méthode CreateTable
    }



Case.prototype.TickCase = function ()
    {
      if (this.ticked == false) {
        return this.ticked = true;
      } else {
        return this.ticked = false;
      }
    };



// console.log(case1.TickCase());



//.innerHTML = caseString;
