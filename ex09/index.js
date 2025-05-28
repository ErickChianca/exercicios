let chosenNumber = parseFloat(prompt('Qual número você escolhe para fazer a operação? [1/20]'))
let multiplicationTable = ''

for (let i = 1; i < 21; i++) {
  let result = chosenNumber * i
  alert('Resultado da equação: ' + chosenNumber + "x" + i + " = " + result)
  multiplicationTable += "  |  " + result
}

alert('A tabuada do número ' + chosenNumber + ' é: ' + multiplicationTable) 