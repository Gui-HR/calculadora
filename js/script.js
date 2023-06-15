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
 
for (i in numeros){
    let posicao = i
    numeros[i].addEventListener('click', () => {
        conta.innerHTML += numeros[posicao].textContent
        valor += numeros[posicao].textContent
    })
}

ce.addEventListener('click', () => {
    conta.innerHTML = ''
    resultado.innerHTML = ''
    valor = 0
    calculo = []
})

adicao.addEventListener('click', () => {
    calculo.push(valor)
    conta.innerHTML += '+'
    valor = 0
    calculo.push('+')
})

subtracao.addEventListener('click', () => {
    calculo.push(valor)
    conta.innerHTML += '-'
    valor = 0
    calculo.push('-')
})

divisao.addEventListener('click', () => {
    calculo.push(valor)
    conta.innerHTML += '/'
    valor = 0
    calculo.push('/')
})

multiplicacao.addEventListener('click', () => {
    calculo.push(valor)
    conta.innerHTML += 'x'
    valor = 0
    calculo.push('x')
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
    - Para fazer o apagar funcionar criar uma variável auxiliar, que armazena os valores e quando apagar a apaga dessa variavel.


    Feito:
    - Um jeito de armazenar o valor digitado (não pode ser assim que aperta o botão do dígito, pois o usuário pode querer um número com mais de 1 dígito).
    - Um jeito para armazenar os sinais das contas, para só realizar as contas quando apertar o '='.
    - Usar um array para armazenar os valores e sinais, depois usar switch e case para realizar as contas. Armazenar o valor escolhido quando apertar o botão de sinal. 
    - Para calculara o resultado, usar find() para saber quantas contas precisamos executar, um switch case dentro de um for detro de um if para calcular todas as contas independente de quantas operações sejam feitas.
*/


