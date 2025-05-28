let option = ''
const vacancyList = []

function showVacancyList() {
  const textOfVacancyList = vacancyList.reduce((finalText, vacancy, vacancyIndex) => {
    finalText += vacancyIndex + ". "
    finalText += vacancy.name
    finalText += " (" + vacancy.candidates.length + " candidatos)\n"
    return finalText
  }, "")

  alert(textOfVacancyList)
}

function createNewVacancy() {
  const name = prompt('Qual o nome da vaga?')
  const description = prompt('Qual a descrição da vaga?')
  const limitDate = prompt("Qual a data limite? (dd/mm/aaaa)")

  const confirmationOfVacancyCreation = confirm('Deseja confirmar a criação da vaga?')

  if (confirmationOfVacancyCreation) {
    const newVacancy = {
      name,
      description,
      limitDate,
      candidates: []
    }
    vacancyList.push(newVacancy)
    alert('Vaga criada com sucesso!')
  } else {
    alert('Criação da vaga cancelada!')
  }
}

function visualizeVacancy() {
  const vacancyIndex = prompt('Qual o número da vaga?')
  
  if (vacancyIndex >= vacancyList.length || vacancyIndex < 0 || isNaN(vacancyIndex)) {
    alert("Indicie inválido")
    return
  }

  const vacancy = vacancyList[vacancyIndex]
  
  const listOfCandidates = vacancy.candidates.reduce((finalText, candidate) => finalText + "\n - " + candidate, "")

  alert("Vaga " + vacancyIndex
    + ": \nNome da vaga: " + vacancy.name 
    + "\nDescrição da vaga: " + vacancy.description
    + "\nData limite: " + vacancy.limitDate
    + "\nQuantidade de candidatos nesta vaga: " + vacancy.candidates.length
    + "\nNome dos candidatos inscritos nessa vaga: " + listOfCandidates
  )
}

function registerCandidateForTheVacancy() {
  const candidate = prompt('Qual o nome do candidato a ser registrado?')
  const vacancyIndex = prompt('Qual o número da vaga que deseja registar o candidato?')
  const vacancy = vacancyList[vacancyIndex]

  const candidateRegisterConfirmation = confirm("Deseja inscrever " + candidate + " na vaga " + vacancyIndex + "?"
    + "\nInformações da vaga: \n" + "Vaga " + vacancyIndex 
    + ": \nNome da vaga: " + vacancy.name 
    + "\nDescrição da vaga: " + vacancy.description
    + "\nData limite: " + vacancy.limitDate
  ) 

  if (candidateRegisterConfirmation) {
    vacancy.candidates.push(candidate)
    alert('Candidato registrado com sucesso!')
  } else {
    alert('Candidato não registrado.')
  }
}

function excludeVacancy() {
  const vacancyIndex = prompt("Qual o número da vaga que deseja excluir?")
  const vacancy = vacancyList[vacancyIndex]

  const exclusionConfirmation = confirm("Deseja excluir a vaga: " + vacancyIndex + "?" 
    + "\nInformações da vaga: \n" + "Vaga " + vacancyIndex 
    + ": \nNome da vaga: " + vacancy.name 
    + "\nDescrição da vaga: " + vacancy.description
    + "\nData limite: " + vacancy.limitDate
  )

  if (exclusionConfirmation) {
    vacancyList.splice(vacancyIndex, 1)
    alert('Vaga excluída com sucesso!')
  } else {
    alert('Exclusão de vaga cancelada!')
  }
}

do {
  option = prompt(
    '----Menu---- \n1- Listar vagas disponíveis \n2- Criar um nova vaga \n3- Visualizar uma vaga \n4- Inscrever um candidato em uma vaga \n5- Excluir uma vaga \n6- Sair'
  )

  switch (option) {
    case "1":
      showVacancyList()
      break
    case "2":
      createNewVacancy()
      break
    case "3":
      visualizeVacancy()
      break
    case "4":
      registerCandidateForTheVacancy()
      break
    case "5":
      excludeVacancy()
      break
    case "6":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }
} while (option !== '6')