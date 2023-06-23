// Botôes da calculadora
const ce = document.querySelector('#ce')
const c = document.querySelector('#c')
const porcentagem = document.querySelector('#porcentagem')
const divisao = document.querySelector('#divisao')
const numero7 = document.querySelector('#numero-7')
const numero8 = document.querySelector('#numero-8')
const numero9 = document.querySelector('#numero-9')
const multiplicacao = document.querySelector('#multiplicacao')
const numero4 = document.querySelector('#numero-4')
const numero5 = document.querySelector('#numero-5')
const numero6 = document.querySelector('#numero-6')
const subtracao = document.querySelector('#subtracao')
const numero1 = document.querySelector('#numero-1')
const numero2 = document.querySelector('#numero-2')
const numero3= document.querySelector('#numero-3')
const adicao = document.querySelector('#adicao')
const parenteses = document.querySelector('#parenteses')
const numero0 = document.querySelector('#numero-0')
const ponto = document.querySelector('#ponto')
const igual = document.querySelector('#igual')

const numeros = [numero0, numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9]

// Tela
const conta = document.querySelector('#conta')
const resultado = document.querySelector('#resultado')

// Auxiliares
var calculo = []
var valor = []
var quantasContas
var printApagar = []
var digitosNumero = 0
var ordemOperacoes
var ordemOperacoesPosicao
var qualParenteses = '('
var parentesesEsquerdo
var parentesesDireito
var dentroParenteses = []
var quantosParenteses = 0
var calculoCopia = []
var maisConta

// Funções
function apagar () {

    for(let i = 1; i <= (valor.length - 1); i++) {
        valor[0] += valor[i]
        valor[i] = ''
    }

    valor = valor.filter((v) => {
        return v
    })

    if(valor[0] != undefined){
        calculo.push(valor[0])
    }

    valor = []
}

function limpaArray (array) {
    if(array == calculo) {
        calculo[1] = ''
        calculo[2] = ''
        calculo = calculo.filter((v) => {
            return v
        })
    }else if(array == dentroParenteses) {
        dentroParenteses[2] = ''
        dentroParenteses[3] = ''
        dentroParenteses = dentroParenteses.filter((v) => {
            return v
        })
    }
}

function operadores (operador) {
    if(operador == '()') {
        if(qualParenteses == '(') {
            conta.innerHTML += '('
            apagar()
            calculo.push('(')   
            qualParenteses = ')'  
            quantosParenteses ++

        } else if(qualParenteses == ')') {
            conta.innerHTML += ')'
            apagar()
            calculo.push(')')   
            qualParenteses = '('    
            quantosParenteses ++  
        }
    } else {
        conta.innerHTML += operador
        apagar()
        calculo.push(operador)
    }

    if(maisConta == 1) {
        calculo = [...calculoCopia]
            calculoCopia = []
            maisConta = 0

        conta.innerHTML += operador
        apagar()
        calculo.push(operador)
    }

    conta.innerHTML = ''
    for(let i = 0; i <= (calculo.length - 1); i++) {
        conta.innerHTML += calculo[i]
    }

    digitosNumero = 0
}

function operações (operador) {
    ordemOperacoes = calculo.some(sinal => sinal == operador)
    
    if(ordemOperacoes) {
        for(let i = 0; i <= quantasContas; i++){
           ordemOperacoesPosicao =  calculo.findIndex(posicao => posicao == operador)

            if(ordemOperacoesPosicao != -1){  
                if(operador == '%'){
                    calculo[ordemOperacoesPosicao - 1] = String((Number(calculo[ordemOperacoesPosicao - 1]) / 100) * Number(calculo[ordemOperacoesPosicao + 1]))
                } else if(operador == 'x'){
                    calculo[ordemOperacoesPosicao - 1] = String(Number(calculo[ordemOperacoesPosicao - 1]) * Number(calculo[ordemOperacoesPosicao + 1]))
                } else if(operador == '/') {
                    calculo[ordemOperacoesPosicao - 1] = String(Number(calculo[ordemOperacoesPosicao - 1]) / Number(calculo[ordemOperacoesPosicao + 1]))
                }

                calculo[ordemOperacoesPosicao] = ''
                calculo[ordemOperacoesPosicao + 1] = ''
                
                calculo = calculo.filter((v) => {
                    return v
                })

                ordemOperacoesPosicao = false
            } else {
                break
            }
        }
    }
}

function operaçõesParenteses (operador) {
    ordemOperacoes = dentroParenteses.some(sinal => sinal == operador)
    
    if(ordemOperacoes) {
        for(let i = 0; i <= quantasContas; i++){
           ordemOperacoesPosicao =  dentroParenteses.findIndex(posicao => posicao == operador)

            if(ordemOperacoesPosicao != -1){  
                if(operador == '%'){
                    dentroParenteses[ordemOperacoesPosicao - 1] = String((Number(dentroParenteses[ordemOperacoesPosicao - 1]) / 100) * Number(dentroParenteses[ordemOperacoesPosicao + 1]))
                } else if(operador == 'x'){
                    dentroParenteses[ordemOperacoesPosicao - 1] = String(Number(dentroParenteses[ordemOperacoesPosicao - 1]) * Number(dentroParenteses[ordemOperacoesPosicao + 1]))
                } else if(operador == '/') {
                    dentroParenteses[ordemOperacoesPosicao - 1] = String(Number(dentroParenteses[ordemOperacoesPosicao - 1]) / Number(dentroParenteses[ordemOperacoesPosicao + 1]))
                }

                dentroParenteses[ordemOperacoesPosicao] = ''
                dentroParenteses[ordemOperacoesPosicao + 1] = ''
                
                dentroParenteses = dentroParenteses.filter((v) => {
                    return v
                })

                ordemOperacoesPosicao = false
            } else {
                break
            }
        }
    }
}

function ContaParenteses () {
    ordemOperacoes = calculo.some(sinal => sinal == '(')
    
    if(ordemOperacoes) {
        parentesesEsquerdo =  calculo.findIndex(posicao => posicao == '(')
        parentesesDireito =  calculo.findIndex(posicao => posicao == ')')

        for(let i = parentesesEsquerdo; i <= parentesesDireito; i++) {
            dentroParenteses.push(calculo[i])
        }

        operaçõesParenteses('%')
        operaçõesParenteses('x')
        operaçõesParenteses('/')

        for(let i = 0; i <= quantasContas; i++){
            switch (dentroParenteses[2]) {
                case '+':
                    dentroParenteses[1] = String(Number(dentroParenteses[1]) + Number(dentroParenteses[3]))
                    limpaArray (dentroParenteses)
                    break

                case '-':
                    dentroParenteses[1] = String(Number(dentroParenteses[1]) - Number(dentroParenteses[3]))
                    limpaArray (dentroParenteses)
                    break
            
                default:
            }

            if(dentroParenteses.length == 3) {
                calculo[parentesesEsquerdo] = dentroParenteses[1]

                for(let i = (parentesesEsquerdo + 1); i <= parentesesDireito; i++) {
                    calculo[i] = ''
                }

                calculo = calculo.filter((v) => {
                    return v
                })

                dentroParenteses = []

                break
            }
        }
    }
}

function ponto () {
    conta.innerHTML += '.'
    valor.push('.')
    digitosNumero += 1
}

function ceReset () {
    conta.innerHTML = ''
    resultado.innerHTML = ''
    calculo = []
    valor = []
    printApagar = []
    qualParenteses = '('
    quantasContas = ''
    digitosNumero = 0
    ordemOperacoes = ''
    ordemOperacoesPosicao = ''
    parentesesEsquerdo = ''
    parentesesDireito = ''
    dentroParenteses = []
    quantosParenteses = 0
    calculoCopia = []
    maisConta = 0
}

// Eventos de click 
for (i in numeros){
    let posicao = i
    numeros[i].addEventListener('click', () => {
        conta.innerHTML += numeros[posicao].textContent
        valor.push(numeros[posicao].textContent)
        digitosNumero += 1
        if(maisConta == 1){
            valor.unshift(calculoCopia[calculoCopia.length - 1])
            calculoCopia.pop()
            calculo = [...calculoCopia]
            calculoCopia = []
            maisConta = 0
        }
    })
}

ponto.addEventListener('click', () => {
    ponto()
})

ce.addEventListener('click', () => {
    ceReset()
})

c.addEventListener('click', () => {

    if(valor[0] == undefined) {
        calculo.pop()

        conta.innerHTML = ''
        for(i of calculo) {
            conta.innerHTML += i
        }

        let parentesesApagado = calculo.some(el => el == '(')

        if(parentesesApagado){
            if(qualParenteses == '('){
                qualParenteses = ')'
            }
        }

    } else {
        valor.pop()

        printApagar = [...conta.innerHTML]

        for(let i = 0; i<= (digitosNumero - 1); i++) {
            printApagar.pop()
        }

        digitosNumero = digitosNumero - 1
        
        conta.innerHTML = ''
        
        for(i of printApagar) {
            conta.innerHTML += i
        }

        for(i of valor) {
            conta.innerHTML += i
        }

    }

    
})

porcentagem.addEventListener('click', () => {
    operadores('%')
})

adicao.addEventListener('click', () => {
    operadores('+')
})

subtracao.addEventListener('click', () => {
    operadores('-')
})

divisao.addEventListener('click', () => {
    operadores('/')
})

multiplicacao.addEventListener('click', () => {
    operadores('x')
})

parenteses.addEventListener('click', () => {
    operadores('()')
})

igual.addEventListener('click', () => {
    apagar()
    calculo = calculo.filter((v) => {
        return v
    })

    calculoCopia = [...calculo]
    maisConta = 1
    quantasContas = (calculo.length / 2) + .5

    for(let i = 0; i <= (quantosParenteses / 2); i++) {
        ContaParenteses()
    }
    operações('%', calculo)
    operações('x', calculo)
    operações('/', calculo)

    for(let i = 0; i <= quantasContas; i++){

        switch (calculo[1]) {
            case '+':
                calculo[0] = String(Number(calculo[0]) + Number(calculo[2]))
                limpaArray (calculo)
                break
    
            case '-':
                calculo[0] = String(Number(calculo[0]) - Number(calculo[2]))
                limpaArray (calculo)
                break
        
            default:
        }

        if(calculo.length == 1){
            break
        }
    }
    resultado.innerHTML = calculo[0]
})