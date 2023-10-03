```` Javascript
O método every() é uma função de array em JavaScript que verifica se todos os elementos de um array satisfazem uma condição específica. Ele retorna um valor booleano (true ou false) com base na avaliação da condição para cada elemento do array.

Sintaxe:

array.every((element, index, array)=>{
    //Lógica de condição
})



Exemplo:

const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every(function(element) {
  return element > 0;
});

console.log(allPositive);  // Output: true


````