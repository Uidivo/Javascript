// on va changer l'objet className


// on identifie l'Element

var megaman = document.getElementById('megaman').getElementsByTagName('div')[0]

// on defin,ie notre fonction Jump

function jump(){
  console.log([megaman]);
  megaman.className= "jump"

  setTimeout( function(){
    megaman.className = 'run'
  }, 300);
}


// on utilise le Eventlistener

megaman.addEventListener("click" , jump)

console.log(megaman)
