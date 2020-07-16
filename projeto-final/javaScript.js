/*
6.1variáveis e constantes, quero exemplos.
    variáveis são espços na memorias que podem ser criados para armazenar um valor especificado pelo programador
    ex: var x = 3
    ex: var y = 'olá'

    constantes são espços na memorias que podem ser criados para armazenar um valor especificado pelo programador e esses não
    podem ser mutaveis
    ex: const a = "olá"
    ex const b = 3

6.2comandos de decisão, quero exemplos.
    comandos de decisão são aqueles em que o código deve saber se executa a tarefa ou não, por exemplo:
    usando o if e else o código está decidindo se toma a decisão 1 caso a condição seja true ou a decisão 2 caso a condição seja false
    ir(0 == 0){"document.write("do this")"}
    else{"document.write("ops")"}

6.3loops, quero exemplos.
    os loops são comandos que repetem uma serie de comandos enquanto a condição estabelecida pelo programador for verdade.
    ex:
    while
    do while
    for in
    for of
    for(var variavel = 0; minha condição; variavel++)

    ex2:
    while(0 == 0){
        "document.write("do this")";
    }

6.4funções, quero exemplos.
    funções são blocos de códios que podem ser criados e usados de acordo com a vontade e necessidade do programador, no momento em que a função é criada,
    o programador pode usar diversas vezes para que não precise ficar fazendo sempre o mesmo comando, ou grupo de comandos, desse jeito otimizando seu código.
    ex:
    function doThis(){
        "document.write("do this")";
    }

6.5escopos, quero exemplos.
    escopos pode ser divididos em geral e local, escopo geral é aquele que emgloba todos os comandos e linhas de códigos, e o escopo local é um bloco de códigos
    que não possui ligação com todo o restante do código.

    ex:

    // ==== esse é meu escopo geral
    function doThis(){
        //====== esse é meu escopo local
        "document.write("do this")";
    }
    
6.6 inputs e outputs, quero exemplos.
    inputs são comandos que pertmitem que o usuário entre com alguma informação. ex: prompt()
    outputs são comandos que permitem que a maquina se comunique com o usuário. ex: document.write()

6.7array, quero exemplos.
    array é um elemento composto de n elementos, diferentes ou iguais, e que cada elemento dentro deste array possui um índice para indentificar sua posição.
    ex: x = [2, 3, 65, 'oi', {palavra: "olá"}, [3, 5, 6, 7, 8, 'tch']]

6.8objetos, quero exemplos. 
    objetos são compostos de keys e values, onde cada key representa um value e podem contar uma série de indificações. 
    ex: x = {palavra: "olá", frita:'pera', idade: 39}

6.9(camelCase, PascalCase, kibab-case, snake_case)
    camelCase => a primeira letra minúscula e as demais palavras possum suas primeiras letras maiúscola e sem espaço usado como boas práticas.
    PascalCase => cada palavra possui a primeira letra maiúscola usado como boas práticas.
    kibab-case => a primeira letra maiúscola e as outras palavras são separadas por um ifem usado como boas práticas.
    snake_case => todas as letras minúscolas e as palavras são separadas po um underline.

6.10Diferença entre caminho absoluto e caminho relativo
    caminho relativo são aqueles em que o código pode retornar valores diferentes dependendo do caso.
    caminho absoluto são aqueles que sempre devem retornar o mesmo resultado.

6.11Diferença entre os operadores &&, ||, == e != 
    && representa o e no js
    || representa o ou no js
    == representa o operador de comparação no js
    != representa o diferente, comparador de diferença no js

6.12O que é EPER, e para que serve.
    Entender, Plandejar, Executar, Revisar. serve para que o programador permanessa focado e saiba o que está fazendo , evitando que se perca em seu raciocínio lógico durante a programação

.13Explique o que é Pilha e Fila, quero exemplos. 
    fila => primeiro item a entrar em uma fila, é o primeiro item a sair dela
    pilha => primeiro item a entrar em uma pilha é o ultimo item a sair dela

6.14Explique com suas palavras qual a diferença entre html, javascript e css.
    html é a parte que estrutura uma webpage e que conecta js e css
    css é a parte em que torna tudo bonito e convidativo para o usuário
    js é a parte operacional que toma decisões e torna as coisas funcionais
    
*/