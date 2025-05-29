const addPlayer = document.getElementById('addPlayer')
const removePlayer = document.getElementById('removePlayer')
const listOfPlayers = document.getElementById('listOfPlayers')

addPlayer.addEventListener('click', () => {
  const playerPosition = document.getElementById('playerPosition').value
  const jerseyNumber = document.getElementById('jerseyNumber').value
  const playerName = document.getElementById('playerName').value

  const playerInfos = document.createElement('div')
  playerInfos.id = 'playerInfos-' + jerseyNumber

  const playerNameInfo = document.createElement('h2')
  playerNameInfo.innerText = playerName

  const playerPositionInfo = document.createElement('p')
  playerPositionInfo.innerText = '- A posição do jogador ' + playerName + ' é: ' + playerPosition

  const jerseyNumberInfo = document.createElement('p')
  jerseyNumberInfo.id = 'jerseyNumber'
  jerseyNumberInfo.innerText = '- O número da camisa do jogador ' + playerName + ' é: ' + jerseyNumber 
  
  playerInfos.append(playerNameInfo, playerPositionInfo, jerseyNumberInfo)
  listOfPlayers.appendChild(playerInfos)

  document.getElementById('playerPosition').value = ''
  document.getElementById('jerseyNumber').value = ''
  document.getElementById('playerName').value = ''
}) 

removePlayer.addEventListener('click', () => {
  const removePlayerSection = document.getElementById('removePlayerSection')

  const br = document.createElement('br')
  removePlayerSection.appendChild(br)

  const removeLabel = document.createElement('label')
  removeLabel.innerText = 'Qual número da camisa do jogador que deseja remover? '
  removePlayerSection.appendChild(removeLabel)

  const removeInput = document.createElement('input')
  removeInput.id = 'removeInput'
  removePlayerSection.appendChild(removeInput)

  const br2 = document.createElement('br')
  removePlayerSection.appendChild(br2)

  const confirmRemove = document.createElement('button')
  confirmRemove.innerText = 'Confirmar Remoção'
  removePlayerSection.appendChild(confirmRemove)

  confirmRemove.addEventListener('click', () => {
    const playerNumber = removeInput.value 
    const playerToRemove = document.getElementById('playerInfos-' + playerNumber)

    playerToRemove.remove()
    document.getElementById('removeInput').value = ''
  })
})