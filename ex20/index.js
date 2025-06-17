function getDDD(...userInfo) {
  const user = {
    name: userInfo[0],
    contact: {ddd: userInfo[1], number: userInfo[2]}
  }

  console.log(user?.contact?.ddd ?? 'Não informado')
}

getDDD('João', 81, '99999-8888')
getDDD('Cleber')