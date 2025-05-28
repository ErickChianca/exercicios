let option = ''
const students = []

function addStudent() {
  const name = prompt('Qual o nome do aluno?')
  const age = parseInt(prompt('Qual a idade do aluno?'))
  const grade1 = parseFloat(prompt("Qual a 1ª nota do aluno?"))
  const grade2 = parseFloat(prompt("Qual a 2ª nota do aluno?"))
  const grade3 = parseFloat(prompt("Qual a 3ª nota do aluno?"))

  const grades = []
  grades.push(grade1, grade2, grade3)

  const newStudent = {
    name,
    age,
    grades,
    calculateAverage() {
      const averageGrade = this.grades.reduce((sum, grade)  => 
        sum + grade
      , 0) / this.grades.length
      return averageGrade.toFixed(1)
    }
  }

  students.push(newStudent)
  alert('Aluno adicionado com sucesso')
}

function showStudents() {
  const showStudentsText = students.reduce((finalText, student, index) => 
    finalText + (index + 1) + '- ' + student.name + ' (' + student.age + " anos) -" + " Notas: " + student.grades[0] + ", " 
    + student.grades[1] + ", " + student.grades[2] + " - Media das notas: " + student.calculateAverage() + "\n" 
  , '')

  alert("Lista completa dos alunos: \n" + showStudentsText)
} 

function showAprovedStudents() {
  const listOfApproved = students.filter(student =>  student.calculateAverage() >= 7)
  
  if (listOfApproved.length === 0) {
    alert('Nenhum aluno foi aprovado')
    return
  }

  const listOfApprovedText = listOfApproved.reduce((finalText, student) => 
    finalText + 'Nome: ' + student.name + " - Media: " + student.calculateAverage() + '\n'
  , '')
   
  alert('Os alunos aprovados foram: \n' + listOfApprovedText)
}

function changeAge() {
  const studentName = prompt('Qual o nome do aluno que deseja mudar a idade?')
  const student = students.find(student => student.name === studentName)

  if (student) {
    student.age = parseInt(prompt('Qual a idade atualizada do aluno?'))
    alert("A idade do aluno foi atualizada: " + student.age)
  } else {
    alert('Aluno não encontrado.')
  }
}

function removeStudent() {
  const studentIndex = parseFloat(prompt("Qual o número do estudante que deseja remover?"))
  
  if (studentIndex >= students.length || studentIndex <= 0 || isNaN(studentIndex)) {
    alert('Aluno não encontrado.')
  } else {
    students.splice((studentIndex - 1), 1)
    alert('Aluno removido com sucesso!')
  }
}

do {
  option = prompt(
    '====Menu==== \n1) Listar alunos \n2) Adicionar aluno \n3) Alunos aprovados \n4) Atualizar idade \n5) Remover aluno \n6) Sair' 
  )
  
  switch (option) {
    case "1":
      showStudents()
      break
    case "2":
      addStudent()
      break
    case "3":
      showAprovedStudents()
      break
    case "4":
      changeAge()
      break
    case "5":
      removeStudent()
      break
    case "6":
      alert('Saindo...')
      break
    default:
      alert('Opção inválida!')
  }
} while (option !== "6")