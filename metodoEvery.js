//Exemplos

//Exemplo 1: Verificando se todos os elementos são pares:

const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(function(element) {
  return element % 2 === 0;
});

console.log(allEven);  // Output: true


/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------------")


//Exemplo 2: Verificando se todos os elementos são strings:

const items = ['apple', 'banana', 'cherry'];

const allStrings = items.every(function(element) {
  return typeof element === 'string';
});

console.log(allStrings);  // Output: true


/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------------")

//Exemplo 3: Verificando se todas as pessoas no array de objetos são maiores de idade. 

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 17 },
    { name: 'David', age: 22 }
  ];
  
  const allAdults = people.every(function(person) {
    return person.age >= 18;
  });
  
  console.log(allAdults);  // Output: false (porque Charlie tem 17 anos, e queremos 18 anos ou mais para ser considerado adulto)

  
/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------------")


//Exemplo 4: Verifica se todas as chaves (propriedades) do objeto são do tipo string.

const personKey = {
    name: 'John',
    age: 30,
    salary: 50000,
  };
  
  const allStringKeys = Object.keys(personKey).every(function(key) {
    return typeof key === 'string';
  });
  
  console.log(allStringKeys);  // Output: true, pois todas as chaves de um objetos são consideras strings, mesmo que você as declare sem aspas
  

/*-----------------------------------------------------------------------------------------------------------------------*/
console.log("-----------------------------------------------------------------------------------------------------------")


//Exemplo 5: Verificar se todos os valores das propriedades de um objeto são números.


  const personNumberPositive = {
    name: 'John',
    age: 30,
    salary: 50000,
  };
  
  const allPositiveValues = Object.values(personNumberPositive).every(function(value) {
    return typeof value === 'number'
  });
  
  console.log(allPositiveValues);  // Output: false, pois o valor de name é uma string
  





