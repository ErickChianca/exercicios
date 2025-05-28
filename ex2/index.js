const data = document.querySelector('#myForm')

data.addEventListener('submit', (e) => {
  e.preventDefault()

  const n1 = document.querySelector('#number1').value
  const n2 = document.querySelector('#number2').value
  let sum = parseFloat(n1) + parseFloat(n2)
  let subtract = parseFloat(n1) - parseFloat(n2)
  let multiply = parseFloat(n1) * parseFloat(n2)
  let divide = parseFloat(n1) / parseFloat(n2)
  
  alert('The results of the equations from the numbers ' + n1 + ' and ' + n2 + ' are: \n' 
    + "Sum: " + sum 
    + "\nSubtraction: " + subtract
    + "\nMultiplication: " + multiply 
    + "\nDivision: " + divide
  )
  
  console.log(n1)
  console.log(n2)
  console.log(typeof n1)
  console.log(typeof n2)
  console.log(n1 + n2)
})
