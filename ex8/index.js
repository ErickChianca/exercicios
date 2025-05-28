let amountOfMoney = parseFloat(prompt('Qual a quantidade inicial de dinheiro?'))  
let keepGoing = ''
  
do {
  keepGoing = prompt("A quantidade de dinheiro é: " + amountOfMoney + 
    "\nDeseja fazer alguma dessas operações abaixo? \n1- Adicionar quantia \n2- Remover quantia \n3- Sair"
  )

  switch (keepGoing) {
    case '1': 
      let addMoney = parseFloat(prompt('Qual quantidade deseja adicionar?'))
      amountOfMoney += addMoney
      alert(amountOfMoney)
      break
    case '2':
      let removeMoney = parseFloat(prompt('Qual quantidade deseja remover?'))
      amountOfMoney -= removeMoney
      alert(amountOfMoney)
      break
    case '3':
      alert('Saindo')
      break
    default:
      alert('Opção inválida.')
      break
  }
} while (keepGoing !== "3")
  
alert('Finalizado com sucesso')
