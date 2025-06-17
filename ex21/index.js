function studentAnalisys(...students) {
  const studentInfo = students.reduce((initalText, student, index) => {
    const name = student.name

    const grade1 = student.grades[0]
    const grade2 = student.grades[1]
    const grade3 = student.grades[2]

    const avg = student.grades.length === 3 ? (grade1 + grade2 + grade3) / 3 : (grade1 + grade2) / 2

    const cloneStudentObject = avg >= 7 ? {...student, status: 'Aprovado'} : {...student, status: 'Reprovado'}

    return initalText + `
    O nome do estudante é: ${name}
    Média: ${avg.toFixed(2)}
    Email: ${student?.email ?? 'Email não informado'}
    Turma: ${student?.class ?? 'Turma não informada'}
    Status: ${cloneStudentObject.status}
    
    `
  }, '')

  console.log(studentInfo)
}

const result = studentAnalisys(
  { name: "Ana", grades: [9, 8], email: "ana@email.com" },
  { name: "Carlos", grades: [6, 5] },
  { name: "Bruna", grades: [10, 9, 10], class: "A" }
)

console.log(result)