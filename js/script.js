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

function limpaArray () {
    calculo[1] = ''
    calculo[2] = ''
    calculo = calculo.filter((v) => {
        return v
    })
}

function operadores (operador) {
    if(operador == '()') {
        if(qualParenteses == '(') {
            conta.innerHTML += '('
            apagar()
            calculo.push('(')   
            qualParenteses = ')'  
        } else if(qualParenteses == ')') {
            conta.innerHTML += ')'
            apagar()
            calculo.push(')')   
            qualParenteses = '('    
        }
    } else {
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

function ContaParenteses () {
    ordemOperacoes = calculo.some(sinal => sinal == '(')
    
    if(ordemOperacoes) {
        parentesesEsquerdo =  calculo.findIndex(posicao => posicao == '(')
        parentesesDireito =  calculo.findIndex(posicao => posicao == ')')

        let dentroParenteses = []

        for(let i = parentesesEsquerdo; i <= parentesesDireito; i++) {
            dentroParenteses.push(calculo[i])
        }

        console.log(dentroParenteses);

        // if(ordemOperacoesPosicao != -1){  
        //     if(operador == '%'){
        //         calculo[ordemOperacoesPosicao - 1] = String((Number(calculo[ordemOperacoesPosicao - 1]) / 100) * Number(calculo[ordemOperacoesPosicao + 1]))
        //     } else if(operador == 'x'){
        //         calculo[ordemOperacoesPosicao - 1] = String(Number(calculo[ordemOperacoesPosicao - 1]) * Number(calculo[ordemOperacoesPosicao + 1]))
        //     } else if(operador == '/') {
        //         calculo[ordemOperacoesPosicao - 1] = String(Number(calculo[ordemOperacoesPosicao - 1]) / Number(calculo[ordemOperacoesPosicao + 1]))
        //     }
        //     calculo[ordemOperacoesPosicao] = ''
        //     calculo[ordemOperacoesPosicao + 1] = ''
            
        //     calculo = calculo.filter((v) => {
        //         return v
        //     })

        //     ordemOperacoesPosicao = false
        // }
    }
}

// Eventos de click
 
for (i in numeros){
    let posicao = i
    numeros[i].addEventListener('click', () => {
        conta.innerHTML += numeros[posicao].textContent
        valor.push(numeros[posicao].textContent)
        digitosNumero += 1
    })
}

ponto.addEventListener('click', () => {
    conta.innerHTML += '.'
    valor.push('.')
    digitosNumero += 1
})

ce.addEventListener('click', () => {
    conta.innerHTML = ''
    resultado.innerHTML = ''
    calculo = []
    valor = []
    printApagar = []
})

c.addEventListener('click', () => {

    if(valor[0] == undefined) {
        calculo.pop()

        conta.innerHTML = ''
        for(i of calculo) {
            conta.innerHTML += i
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

    quantasContas = (calculo.length / 2) + .5

    ContaParenteses()

    operações('%')

    operações('x')

    operações('/')
    
    for(let i = 0; i <= quantasContas; i++){
        console.log(calculo);

        switch (calculo[1]) {
            case '+':
                calculo[0] = String(Number(calculo[0]) + Number(calculo[2]))
                limpaArray ()
                break
    
            case '-':
                calculo[0] = String(Number(calculo[0]) - Number(calculo[2]))
                limpaArray ()
                break
        
            default:
        }
    }

    resultado.innerHTML = calculo[0]
})

/*  Tarefas

    Fazer:
    - Botao de parenteses funcionar.
    - Arrumar a telinha dos calculos para caber todos os numeros.
    - Funcionar usando o teclado.
    
    Ideias:
    - Parênteses. (Usar algumas variáveis: uma para saber qual sinal vai colocar '(' ou  ')', uma para  o some() para saber se tem parênteses na conta, duas para armazenar as posições dos sinais) 
    - Para fazer o parenteses criar uma variavel auxiliar e usar um if, se o botão for apertado uma vez vai colocar "(" se for apertado pela segunda vez vai colocar ")".
    - Para o botao de parenteses colocar as contas dentro dele em um array separado, e realizar essas contas antes, depois mandar o resultado para a posição correta.
    
    
    Feito:
    - Um jeito de armazenar o valor digitado (não pode ser assim que aperta o botão do dígito, pois o usuário pode querer um número com mais de 1 dígito).
    - Um jeito para armazenar os sinais das contas, para só realizar as contas quando apertar o '='.
    - Usar um array para armazenar os valores e sinais, depois usar switch e case para realizar as contas. Armazenar o valor escolhido quando apertar o botão de sinal. 
    - Para calcular o resultado. (Usar find() para saber quantas contas precisamos executar, um switch case dentro de um for detro de um if para calcular todas as contas independente de quantas operações sejam feitas.)
    - Botao de apagar funcionar. (Para fazer o apagar funcionar criar uma variável auxiliar, que armazena os valores e apaga apagar dessa variavel. Quando o usuário apertar o numero ele vai armazenar digito por digito no 'array secundario', dessa forma se apertar no botão apagar ele vai apagar apenas o ultimo dígito, mas isso muda apos apertar em um sinal de operação, o sinal de operação fará com que concatene todos os digitos e envie para a ultima posição do 'array principal', e botao de operação tambem vai enviar para a ultima posição 'array principal' o seu sinal de operação, depois disso quando apertar o botão de apagar ele vai apagar todo o numero salvo e não só um digito dele. Posso usar outro array 'auxiliar secundario' para armazenar os digitos e a 'auxiliar principal' para armazenar os numeros completos.)
    - Botao de ponto funcionar.
    - Botao de porcentagem funcionar.
    - As operações seguirem a ordem correta.(Para as operações seguirem a ordem certa podemos usar um find() para identificar aonde tem os operadores que possuem prioridade, pegar o a posição desses operadores e usando essa posição pegar a posição dos números vizinhos para fazer a conta, depois fazer o procedimento normal para as contas)


    */

   

