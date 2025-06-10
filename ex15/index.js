const form = document.getElementById('registerDev')
const addTecnologia = document.getElementById('addANewTecnologia')
const devsList = document.getElementById('devsList')
const registredDevs = document.getElementById('registredDevs') 
const listOfDevs = []

  
const p = document.createElement('p')
registredDevs.appendChild(p) 

addTecnologia.addEventListener('click', (event) => {
  event.preventDefault()
  const devName = document.getElementById('fullName')

  const div = document.createElement('div')
  div.classList = 'tecnologiaDiv'

  const br = document.createElement('br')
  const h2 = document.createElement('h2')
  h2.innerText = devName.value
  
  const tecnologiaName = document.createElement('input')
  tecnologiaName.placeholder = 'Qual o nome da tecnologia?'
  tecnologiaName.id = 'tecnologiaName'
  
  const registerDevBtn = document.createElement('button')
  registerDevBtn.innerText = 'Registrar' 

  registerDevBtn.addEventListener('click', (event) => {
    event.preventDefault()

    const devInfos = event.target.closest('.tecnologiaDiv')

    console.log(devInfos)

    const devTecnologia = devInfos.querySelector('#tecnologiaName').value
    const devExperience = devInfos.querySelector('.timeExpirience:checked').value
    
    const dev = {
      devName: h2.innerText,
      devTecnologia,
      devExperience
    }

    listOfDevs.push(dev)

    const showListOfDevs = listOfDevs.reduce((finalText, dev, index) => 
      finalText + (index + 1) + '- ' + dev.devName + " usa a tecnologia " + dev.devTecnologia + 
      ' e tem ' + dev.devExperience + ' anos de experiência;\n'
    , '')
    
    p.innerText = showListOfDevs

    devInfos.remove()
  })  

  const removeLineBtn = document.createElement('button')
  removeLineBtn.innerText = 'Remover linha'
  removeLineBtn.classList = 'removeLineBtn'
  
  removeLineBtn.addEventListener('click', (event) => {
    event.preventDefault()
    const removeTecnologiaDiv = event.target.closest('.tecnologiaDiv')
    
    removeTecnologiaDiv.remove()
  })
  
  devsList.append(br, div)
  div.append(h2, tecnologiaName)

  
  for (let i = 1; i <= 3; i++) {
    const timeExperienceLabel = document.createElement('label')
    const timeExperienceInput = document.createElement('input')
    timeExperienceInput.type = 'radio'
    timeExperienceInput.classList = 'timeExpirience'
    
    if (i == 1) {
      timeExperienceLabel.innerText = ' Tempo de experiência de 0-2 ano(s)' 
      timeExperienceInput.name = 'timeExp-' + Date.now()
      timeExperienceInput.value = '0-2'
    } else if (i == 2) {
      timeExperienceLabel.innerText = ' Tempo de experiência de 3-4 ano(s)' 
      timeExperienceInput.name = 'timeExp-' + Date.now()
      timeExperienceInput.value = '3-4'
    } else {
      timeExperienceLabel.innerText = ' Tempo de experiência de 5+ ano(s) ' 
      timeExperienceInput.name = 'timeExp-' + Date.now()
      timeExperienceInput.value = '5+'
    }
    
    div.append(timeExperienceInput, timeExperienceLabel)
  }
  
  div.append(registerDevBtn, removeLineBtn)
  devName.value  = ''
})
