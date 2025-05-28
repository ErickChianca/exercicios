let answer = ''
do {
  answer = prompt("Menu: \n1- Opção 1 \n2- Opção 2 \n3- Opção 3 \n4- Opção 4 \n5- Encerrar")
  switch (answer) {
    case "1": 
      alert('O usuário escolheu a opção 1')
      break
    case "2": 
      alert('O usuário escolheu a opção 2')
      break
    case "3": 
      alert('O usuário escolheu a opção 3')
      break
    case "4": 
      alert('O usuário escolheu a opção 4')
      break
    case "5":
      alert('O sistema está sendo encerrado...')
      break
    default:
      alert('Opção inválida')
  }
} while (answer !== "5") 
  
alert('O sistema foi encerrado com sucesso')