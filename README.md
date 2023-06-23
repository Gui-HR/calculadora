# calculadora
 Projeto de calculadora com Javascript

PROJETO FINALIZADO!

TAREFAS: 
Aqui temos algumas tarefas que fui colocando durante o projeto, essas tarefas foram colocadas na sessão "Fazer" e em ordem de prioridade, assim que uma tarefa tivesse concluida ela era movida para a sessão "Feito". A sessão de ideias é aonde escrevi as ideias que tive para resolver as tarefas durante o projeto, assim que uma tarefa vai para a sessão "Feito" coloquei a ideia para resolve-la entre parênteses ao lado da mesma.

A Fazer:


Ideias:

Feito:
- Um jeito de armazenar o valor digitado (não pode ser assim que aperta o botão do dígito, pois o usuário pode querer um número com mais de 1 dígito).

- Um jeito para armazenar os sinais das contas, para só realizar as contas quando apertar o '='.

- Usar um array para armazenar os valores e sinais, depois usar switch e case para realizar as contas. Armazenar o valor escolhido quando apertar o botão de sinal.

- Para calcular o resultado. (Usar find() para saber quantas contas precisamos executar, um switch case dentro de um for detro de um if para calcular todas as contas independente de quantas operações sejam feitas.)

- Botao de apagar funcionar. (Para fazer o apagar funcionar criar uma variável auxiliar, que armazena os valores e apaga apagar dessa variavel. Quando o usuário apertar o numero ele vai armazenar digito por digito no 'array secundario', dessa forma se apertar no botão apagar ele vai apagar apenas o ultimo dígito, mas isso muda apos apertar em um sinal de operação, o sinal de operação fará com que concatene todos os digitos e envie para a ultima posição do 'array principal', e botao de operação tambem vai enviar para a ultima posição 'array principal' o seu sinal de operação, depois disso quando apertar o botão de apagar ele vai apagar todo o numero salvo e não só um digito dele. Posso usar outro array 'auxiliar secundario' para armazenar os digitos e a 'auxiliar principal' para armazenar os numeros completos.)

- Botao de ponto funcionar.

- Botao de porcentagem funcionar.

- As operações seguirem a ordem correta.(Para as operações seguirem a ordem certa podemos usar um find() para identificar aonde tem os operadores que possuem prioridade, pegar o a posição desses operadores e usando essa posição pegar a posição dos números vizinhos para fazer a conta, depois fazer o procedimento normal para as contas)

- Botao de parenteses funcionar. (Usar algumas variáveis: uma para saber qual sinal vai colocar '(' ou  ')', uma para o some() para saber se tem parênteses na conta, duas para armazenar as posições dos sinais. Usar um if, se o botão for apertado uma vez vai colocar "(" se for apertado pela segunda vez vai colocar ")". Colocar as contas dentro dele em um array separado, e realizar essas contas antes, depois mandar o resultado para a posição do "abre parênteses".)

- Arrumar o apagar para quando o usuario já fez a conta e quer adicionar mais algum número, operação ou dígito no número. (Deixar salva toda a conta em uma variável. Ter uma variável auxiliar para saber quando usar e conta "bruta", essa variável seria ativda apénas em determinada situação (Quando o usuario já fez a conta e quer adicionar mais algum dígito no número.). Para fazera verificação da variavel de ativação usar um if.) 

- Se a conta tiver 2 parênteses. (Usar um for para exeutar a função mais de uma vez.)

- Arrumar a telinha dos calculos para caber todos os numeros.

- Funcionar usando o teclado. 
