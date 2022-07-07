function calculateSalary(salario, vendas) {
  // 3% = 0.03
  let totalVendas

  if (vendas < 1200) {
    let comissao = vendas * 0.03
    totalVendas = salario + vendas + comissao
    return totalVendas
  } else if (vendas > 1200) {
    tresPorcento = 1200 * 0.03
    cincoPorcento = (vendas - 1200) * 0.05
    totalVendas = salario + vendas + cincoPorcento + tresPorcento
    return totalVendas
  }
}

//=====// Coloquei o salário total em uma variável para utilizar na função cashMachine()   //=====//
let salarioFixo = 800
let valorVendas = 1300

let salarioTotal = calculateSalary(salarioFixo, valorVendas)

function cashMachine(saque) {
  let saldoTotal = salarioTotal
  let saldoAtual = saldoTotal - saque
  console.log(`|| SALDO TOTAL ||\n\n R$${saldoTotal},00\n\n`)

  //=====//
  let notasDuzentos = parseInt(saque / 200)
  let restoDuzentos = parseFloat(saque % 200)
  //=====//
  let notasCem = parseInt(restoDuzentos / 100)
  let restoCem = parseFloat(restoDuzentos % 100)
  //=====//
  let notasCinquenta = parseInt(restoCem / 50)
  //=====//

  console.log(`|| SAQUE REALIZADO || \n
  Notas de 200: ${notasDuzentos}\n
  Notas de 100: ${notasCem}\n
  Notas de 50: ${notasCinquenta}\n
  SALDO ATUAL: R$ ${saldoAtual},00
  `)
}

cashMachine(2000)

function calculateStock(stock, maxStock, minStock) {
  let mediumStock = (maxStock + minStock) / 2

  if (stock >= mediumStock) {
    console.log('Não efetuar compra')
    return 'Não efetuar compra'
  } else console.log('Efetuar compra')
  return 'Efetuar compra'
}

calculateStock(25, 30, 15)

function calculateAge(ageBirth) {
  let data = new Date()
  let dataAtual = data.getFullYear()

  let idade = dataAtual - ageBirth
  let idadeMeses = idade * 12
  let idadeDias = idade * 365
  let idadeSemanas = idade * 52.143

  console.log(`\n  Idade: ${idade}\n
  Idade em meses: ${idadeMeses}\n
  Idade em dias: ${idadeDias}\n
  Idade em semanas: ${idadeSemanas}`)
}

calculateAge(1997)

let matrizQuadrada = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function getDiagonal(matrizQuadrada) {
  let diagonalPrincipal = [
    matrizQuadrada[0][0],
    matrizQuadrada[1][1],
    matrizQuadrada[2][2]
  ]
  console.log(diagonalPrincipal)
}

getDiagonal(matrizQuadrada)
