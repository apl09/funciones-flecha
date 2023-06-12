// Convierte la siguiente función en una función flecha:
// function saludar() {
//   return "Hola";

const saludar = () => 'Hola'




// Convierte la siguiente función en una función flecha en línea:
// function division(a,b) {
//   return a / b;
// }

const division = ((a,b) => a/b )





// Convierte la siguiente función en una función flecha:
// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => `Mi nombre es ${nombre}`




// Convierte las siguientes funciones en funciones flecha:
// function test2() {
//   console.log("Función test 2 ejecutada.");
// }

const test2 = () => console.log("Función test 2 ejecutada.")





// function test1(callback) {
//   callback();
// }

const test1 =(callback) => callback()




// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];
    

// Crea un array con la gente mayor de 25 años y muéstralo por consola.
genteMayor =[] 
gente.forEach = (mayor) => { 
    if(gente.edad > 25){
      genteMayor.push(mayor)
    }}


    

 
    


   
	



// Crea un array con la gente que empieza por J.
const arrayConJota = [] 
const empiezaConJota = gente.forEach((conJota) => {
    if(conJota.includes('J')) {
        arrayConJota.push(conJota)
    }
} )





// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const moreThan25 = gente.map(persona => persona.edad > 25)
console.log(persona)




// Crea un array con la gente que empieza por J. 
const startsWithJ = gente.map((jota) => {
    if(jota.includes('J'))
        return jota
    
})



// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
 //const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const elevarNumero = numbers.map(a => a**a)
console.log(elevarNumero)







// 4. Filter
// Crea un segundo array que devuelva los impares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = []
const impares = numbers.filter(number=> {
    if(number %2 !==0){
        odd.push(number)
    }
})
console.log(odd)




// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
 const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];
      
         const veggiesArray = []
         const veggies = foodList.filter(veggie=> {
             if(veggie.isVeggie == true ){
                 veggiesArray.push(`Que rica ${veggie.name} me estoy comiendo`)
             }
         })
         console.log(veggiesArray)
         


// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
// const numeros = [39, 2, 4, 25, 62];
// // Salida--> 483600

const multiplicacion = ((a,b) => a*b )



// Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo
//  a las propiedades del objeto proporcionado:
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];
 
const personal = staff.map( person => `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}` )
console.log(personal)



// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */
// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
 const listaComida = ["Pizza", "Ramen", "Paella", "Entrecot"];
 


 

 const comida = listaComida.map( comer => {
    if (comer == 'Pizza'){
        return `Como soy de Italia, amo comer Pizza`
    } else if(comer == 'Ramen'){
        return `Como soy de Japon, amo comer Ramen`
    } else if (comer == 'Paella') {
        return `Como soy de Valencia, amo comer Paella`
    } else return 'Aunque no como carne, el Entrecot es sabroso'
 } )

 console.log(comida)
 






//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/
//Filter
//Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];

      const productos = inventory.map(obj => {
        if (obj.price > 300){
        return obj.name} 
             
    
    })
    
    
        
      
      
      



      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */



// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'Adrian',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];

    let reduce = sentenceElements.reduce ((a,b) => {
        return  a + ' ' + b})
        console.log(reduce)
        
    
    
   





   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

