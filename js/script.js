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
const igual = document.querySelector('#igual')

const numeros = [numero0, numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9]

// Tela
const conta = document.querySelector('#conta')
const resultado = document.querySelector('#resultado')

// Auxiliares
var calculo =  []
var valor = 0
var quantasContas
var digitosApagar = []
var concatenaApagar = []
var printApagar = []
var digitosNumero = 0

// Funções
function apagar () {

    for(let i = 1; i <= (digitosApagar.length - 1); i++) {
        digitosApagar[0] += digitosApagar[i]
        digitosApagar[i] = ''
    }

    digitosApagar = digitosApagar.filter((v) => {
        return v
    })

    concatenaApagar.push(digitosApagar[0])

    digitosApagar = []
}

function operadores (operador) {
    calculo.push(valor)
    conta.innerHTML += operador
    valor = 0
    calculo.push(operador)
    apagar()
    concatenaApagar.push(operador)

    conta.innerHTML = ''
    for(let i = 0; i <= (concatenaApagar.length - 1); i++) {
        conta.innerHTML += concatenaApagar[i]
    }

    digitosNumero = 0
}
 
for (i in numeros){
    let posicao = i
    numeros[i].addEventListener('click', () => {
        valor += numeros[posicao].textContent
        conta.innerHTML += numeros[posicao].textContent
        digitosApagar.push(numeros[posicao].textContent)
        digitosNumero += 1
    })
}

ce.addEventListener('click', () => {
    conta.innerHTML = ''
    resultado.innerHTML = ''
    valor = 0
    calculo = []
    digitosApagar = []
    concatenaApagar = []
    printApagar = []
})

c.addEventListener('click', () => {
    console.log(digitosApagar)

    if(digitosApagar[0] == undefined) {
        console.log('if concatenaApagar: ' + concatenaApagar)
        concatenaApagar.pop()
        console.log('if concatenaApagar: ' + concatenaApagar)

        conta.innerHTML = ''
        for(i of concatenaApagar) {
            conta.innerHTML += i
        }

    } else {
        digitosApagar.pop()

        printApagar = [...conta.innerHTML]
        console.log(printApagar);

        for(let i = 0; i<= (digitosNumero - 1); i++) {
            printApagar.pop()
        }

        digitosNumero = digitosNumero - 1
        console.log(digitosNumero);
        console.log(printApagar);
        
        conta.innerHTML = ''
        
        for(i of printApagar) {
            conta.innerHTML += i
        }

        for(i of digitosApagar) {
            conta.innerHTML += i
        }

        console.log('else digitosApagar ' + digitosApagar)
    }

    
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

function limpaArray () {
    calculo[1] = ''
    calculo[2] = ''
    calculo = calculo.filter((v) => {
        return v
    })
}

igual.addEventListener('click', () => {
    calculo.push(valor)
    valor = 0
    calculo = calculo.filter((v) => {
        return v
    })

    quantasContas = (calculo.length / 2) + .5

    console.log(calculo);

    for(let i = 0; i <= quantasContas; i++){

        console.log(calculo)


        switch (calculo[1]) {
            case '+':
                calculo[0] = String(Number(calculo[0]) + Number(calculo[2]))
                limpaArray ()
                break
    
            case '-':
                calculo[0] = String(Number(calculo[0]) - Number(calculo[2]))
                limpaArray ()
                break
    
            case 'x':
                calculo[0] = String(Number(calculo[0]) * Number(calculo[2]))
                limpaArray ()
                break
    
            case '/':
                calculo[0] = String(Number(calculo[0]) / Number(calculo[2]))
                limpaArray ()
                break
        
            default:
        }
    }

    resultado.innerHTML = calculo[0]
})


/*
    Fazer:
    - Funcionar usando o teclado.
    - Arrumar a telinha dos calculos para caber todos os numeros.
    - Botao de apagar funcionar.
    - As operações seguirem a ordem correta.
    - Botao de porcentagem funcionar.
    - Botao de parenteses funcionar

    Ideias:
    - Para fazer o parenteses criar uma variavel auxiliar e usar um if, se o botão for apertado uma vez vai colocar "(" se for apertado pela segunda vez vai colocar ")".
    - Para o botao de parenteses colocar as contas dentro dele em um array separado, e realizar essas contas antes, depois mandar o resultado para a posição correta.
    - Para fazer o apagar funcionar criar uma variável auxiliar, que armazena os valores e apaga apagar dessa variavel. Quando o usuário apertar o numero ele vai armazenar digito por digito no 'array secundario', dessa forma se apertar no botão apagar ele vai apagar apenas o ultimo dígito, mas isso muda apos apertar em um sinal de operação, o sinal de operação fará com que concatene todos os digitos e envie para a ultima posição do 'array principal', e botao de operação tambem vai enviar para a ultima posição 'array principal' o seu sinal de operação. (depois disso quando apertar o botão de apagar ele vai apagar todo o numero salvo e não só um digito dele. Posso usar outro array 'auxiliar secundario' para armazenar os digitos e a 'auxiliar principal' para armazenar os numeros completos)


    Feito:
    - Um jeito de armazenar o valor digitado (não pode ser assim que aperta o botão do dígito, pois o usuário pode querer um número com mais de 1 dígito).
    - Um jeito para armazenar os sinais das contas, para só realizar as contas quando apertar o '='.
    - Usar um array para armazenar os valores e sinais, depois usar switch e case para realizar as contas. Armazenar o valor escolhido quando apertar o botão de sinal. 
    - Para calculara o resultado, usar find() para saber quantas contas precisamos executar, um switch case dentro de um for detro de um if para calcular todas as contas independente de quantas operações sejam feitas.
*/


