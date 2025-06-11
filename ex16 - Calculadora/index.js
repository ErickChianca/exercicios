const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', () => {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', () => {
  input.value = ''
  input.focus()
})

input.addEventListener('keydown', (ev) => {
  ev.preventDefault()

  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === 'Enter') {
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate() {
  resultInput.value = 'Error'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}

document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
  const button = ev.currentTarget
  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
    return
  } 
  button.innerText = 'Copy'
  button.classList.remove('success')
})

document.getElementById('themeSwitcher').addEventListener('click', () => {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#F8F4F9')
    root.style.setProperty('--font-color', '#2B1C2D')
    root.style.setProperty('--primary-color', '#2B1C2D')
    root.style.setProperty('--border-color', '#aaa')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#2B1C2D')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#F2E86D')
    root.style.setProperty('--border-color', '#707070')
    main.dataset.theme = 'dark'
  }
})