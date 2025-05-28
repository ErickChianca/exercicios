const formInfos = document.querySelector('#myForm')

formInfos.addEventListener('submit', function() {
  const firstName = document.querySelector('#firstName').value
  const secondName = document.querySelector('#secondName').value
  const major = document.querySelector('#major').value
  const birthday = document.querySelector('#birthday').value

  const birthYear = new Date(birthday).getFullYear()
  const age = 2025 - birthYear

  alert("Bros name is: " + firstName + secondName + ", he is " + (age) + "yo and hes major is " + major)
})
