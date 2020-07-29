
var array1=[6,3];
var array2=[2,3,1,1,2]

/*     ---------------- TESTES  ------------------------   */
    //cresce(array1);
    //cresce2(array2);
    //question();
    //question2();
    //indices([1,2,1,3,2,1,3,1], 1);
    //fibonacci();
fatorial();


/*********** LISTA DE EXERCICIOS **************
 * 
 * 
01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.
*/ 
function cresce(array) {
    if (array[0] > array[1]){
        var aux = array[1];
        array[1] = array[0];
        array[0] = aux;
        alert(array);
    } else {
        alert(array);
    }
}

/*
02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.
05. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, 
não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.
*/
function cresce2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if (array[j] > array[j+1]){
            var aux = array[j+1];
            array[j+1] = array[j];
            array[j] = aux;
            }
        }   
    }   
    return array;
    }

/*
03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1
*/
function question() {
    var num = [];
    num[0] = parseInt(prompt("Digite o número 1:"));
    num[1] = parseInt(prompt("Digite o número 2:"));
    num[2] = parseInt(prompt("Digite o número 3:"));
    cresce2(num);
}
/*

04. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir 
no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor.
Ao final, exiba o array e o array ao contrário (generalização do script anterior).
*/
function question2() {
    var n = parseInt(prompt("Digite o quantos números:"));
    var num = [];
    for (let i = 0; i < n; i++) {
        num[i] = parseInt(prompt("Digite o número " + (i+1) + ":"));
    }
    document.write("Array: " + num + "<br><br>");
    document.write("Crescente: " + cresce2(num));
}
/*

06. Crie uma função que recebe um vetor e um número.
Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro 
e/ou  último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).
*/
function indices(vet,num) {
    var indice = [], j=0;
    for (let i = 0; i < vet.length; i++) {
        if(vet[i] == num){
            indice[j]=i;
            j++;
        }
    }
    document.write(indice);
}
/*

07. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array 
com os números de Fibonacci, na hora de somar com os termos anteriores, some com elementos 
anteriores do array.
*/
function fibonacci() {

var num = parseInt(prompt("Digite um número inteiro: "));
var cont=2;
var fib = [];
fib[0] = 0;
fib[1] = 1;

while (num > cont){
    fib[cont] = fib[cont-1]+fib[cont-2];
    cont++;
}
document.write(fib);
}
/*
08. Faça o mesmo do exercício anterior, mas com fatorial.
Fatorial de 0: 0! = '
Fatorial de 1: 1 x elemento0 = 1
Fatorial de 2: 2 x elemento1 = 2
Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
...
Fatorial de n: n x elemento(n-1) = n x (n-1)! = n!

*/
function fatorial() {
    var fat = parseInt(prompt("Fatorial de: "));
    var f = 1;
    for (let i = 1; i <= fat; i++) {
        f*=i;
    }
    document.write("Fatorial de " + fat + "! é = " + f);
}

/*
08. Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias.
O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for o 
jogador 1 ou jogador 2) que

09. Peça ao usuário uma quantidade de linhas e e outra de colunas, depois declare tal matriz, inicialize 
todos os elementos de 1 até 'linha x coluna'.

*/