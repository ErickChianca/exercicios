let word = prompt('Verificador de palíndromo! Qual palavra deseja verificar se é um palíndromo?')
let wordWrittenBackwards = ''

for (let i = word.length - 1; i >= 0; i--) {
  wordWrittenBackwards += word[i]
}

if (word == wordWrittenBackwards) {
  alert('A palavra é um palíndromo. Sua escrita de trás pra frente é: ' + wordWrittenBackwards)
} else {
  alert('A palavra não é um palíndromo. Sua escrita de trás pra frente é: ' + wordWrittenBackwards)
}