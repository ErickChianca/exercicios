function createObjectPerson(...person) {
  const personObj = {
    name: person[0],
    age: person[1],
    city: person[2],
    job: person[3]
  }

  const {name, ...otherData} = personObj
  console.log(`Nome: ${name}`)
  console.log('Outros dados: ', otherData)
}

createObjectPerson('João', 19, 'João Pessoa', 'Engenheiro')