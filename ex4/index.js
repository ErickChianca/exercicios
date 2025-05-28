const form = document.querySelector('#myForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const nameP1 = document.querySelector('#nameP1').value
  const powerP1 = parseFloat(document.querySelector('#powerP1').value)
  const nameP2 = document.querySelector('#nameP2').value
  let lifeP2 = parseFloat(document.querySelector('#lifeP2').value)
  const defenseP2 = parseFloat(document.querySelector('#defenseP2').value)
  const hasShield = document.querySelector('#shield').value
  let damage = 0

  if (powerP1 > defenseP2 && hasShield === "Sim") {
    damage = (powerP1 - defenseP2) / 2
  } else if (powerP1 > defenseP2 && hasShield === "Não") {
    damage = powerP1 - defenseP2
  }

  console.log(damage) 
  console.log(lifeP2) 
  console.log(hasShield) 


  lifeP2 -= damage 

  alert(nameP2 + ' has suffered an attack of ' + damage + ' points by ' + nameP1 + 
    "\nNow " + nameP2 + " has an HP of: " + lifeP2 
  )
})