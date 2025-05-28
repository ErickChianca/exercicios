const form = document.querySelector('#myForm')

form.addEventListener('submit', () => {
  const nameV1 = document.querySelector('#nameV1').value
  const nameV2 = document.querySelector('#nameV2').value
  const velocityV1 = document.querySelector('#velocityV1').value
  const velocityV2 = document.querySelector('#velocityV2').value

  if (velocityV1 > velocityV2) {
    alert('The ' + nameV1 + " is faster than " + nameV2 + 
      "\nonce its velocity is: " + velocityV1 + 
      "\nand the other car velocity is: " + velocityV2
    )
  } else if (velocityV2 > velocityV1) {
    alert('The ' + nameV2 + " is faster than " + nameV1 + 
      "\nonce its velocity is: " + velocityV2 + 
      "\nand the other car velocity is: " + velocityV1
    )
  } else 
  alert ('The velocities are equal')
})