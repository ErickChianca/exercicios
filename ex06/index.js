const name = prompt('Qual o seu nome?')
let cityCount = 0
let citiesList = []
let hasVisited = prompt('Você já visitou alguma cidade? [Sim/Não]').toLowerCase()

while (hasVisited === "sim") {
  cityName = prompt('Qual o nome da cidade?')
  citiesList.push(cityName)
  cityCount += 1
  hasVisited = prompt('Você já visitou alguma outra cidade? [Sim/Não]').toLowerCase()
}

alert('The user ' + name + " has visited " + cityCount + " cities." + 
  '\nThe name(s) of the city(ies) he visited is(are) ' + citiesList.join(', ')
)