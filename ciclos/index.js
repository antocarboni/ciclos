for( let i = 1 ; i <= 10 ; i++){

    console.log( i );

}

var pendingIntents=2;
var pass = prompt(`Introduzca la contraseña. Dispone de ${pendingIntents+1} intentos`);
while (pass != undefined) {

  if (pendingIntents > 0) {

    if (pass == "Antonella") {

      alert("Bienvenida Antonella!");
      break;

    } else if (pass != "Antonella") {

      pass = prompt(`Introduzca una clave valida. Quedan ${pendingIntents} intentos`);
      pendingIntents--;
      continue;

    }

  } else {

    alert("Ha intentado demasiadas veces.");
    break;

  }

}