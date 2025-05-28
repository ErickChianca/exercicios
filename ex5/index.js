const form = document.querySelector('#myForm')


form.addEventListener('submit', () => {
  const valueInMeters = parseFloat(document.querySelector('#valueMeters').value)
  const option = parseFloat(document.querySelector('#option').value)
  let result = 0
  let nameOfConversion = ''

  switch(option) {
    case 1: 
      nameOfConversion = "Milimetres"
      result =  valueInMeters * 1000
      break
    case 2:
      nameOfConversion = "Centimeters"
      result = valueInMeters * 100
      break
    case 3: 
      nameOfConversion = "Decimeters"
      result = valueInMeters * 10
      break
    case 4: 
      nameOfConversion = "Decameters"
      result = valueInMeters / 10
      break
    case 5: 
      nameOfConversion = "Hectometers"
      result = valueInMeters / 100
      break
    case 6: 
      nameOfConversion = "Kilometers"
      result = valueInMeters / 1000
      break
    default:
      alert('Opção inválida')
    break
  }

  alert("The conversion of the number " + valueInMeters + " in meters to " + nameOfConversion + "is: " + result)
})