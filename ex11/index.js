let patients = []
let patientName = ''
let lastPosition = 0
let option = ''

do {
  option = prompt(
    "----MENU---- \n1) Novo Paciente \n2) Consultar Paciente \n3) Sair" + 
    "\n\nLista de Pacientes:" + patients
  )

  // console.log(patients)
  
  switch(option) {
    case '1': 
      patientName = prompt('Qual o nome do paciente?')
      lastPosition = patients.length / 2
      patients.push("\n" + (lastPosition + 1) + "º - ")
      patients.push(patientName)
      // console.log(patients)
      break
    case "2":
      patients.slice(0, 2)
      // console.log(patients)
      break
    case "3":
      alert('Saindo...')
      break
    default:
      alert('Opção invalida')
      break
  }
} while (option != "3")