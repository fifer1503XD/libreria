const ciudades = [
    {
      pais: 'Venezuela',
      nombre: 'Maracaibo',
      habitantes: 1209000
    },
    {
      pais: 'Turquía',
      nombre: 'Denizli',
      habitantes: 850300
    },
    {
      pais: 'Italia',
      nombre: 'Siena',
      habitantes: 53700
    },
    {
      pais: 'Italia',
      nombre: 'Genova',
      habitantes: 583600
    },
    {
      pais: 'Brasil',
      nombre: 'Fortaleza',
      habitantes: 2400100
    }
  ];
  const users= [
    {
    age : 49, 
    name: 'felipe',
    genero: 'hombre',
    email: 'pedrofelipeortiz@gmail.com'
    },
    {
      age : 60, 
      name: 'maria',
      genero: 'mujer',
      email: 'mariaortiz@gmail.com'
      }
  ]

  
  const obtenerCiudadesPobladas = array => array.filter(({ age }) => age >= 1);

const ciudadesPobladas = obtenerCiudadesPobladas(users);
console.log(ciudadesPobladas)

const obtenerNombreDeCiudadesPobladas = array => array.map(( {name} ) => name);
// ciudadesPobladas es el resultado de nuestro ejemplo anterior donde usamos .filter
const nombreDeCiudadesPobladas = obtenerNombreDeCiudadesPobladas(ciudadesPobladas);
console.log(nombreDeCiudadesPobladas)


// let propiedadesobject=[(Object.keys(ciudades[0]))];
// console.log(propiedadesobject[0][2])
// console.log('variable'+propiedadesobject)
//   console.log('length propiedades objeto'+(Object.keys(ciudades[0])).length)
function search(elemento){
  let recibo='name'
  let resultArray=[]
 for(let i=0;i<elemento.length;i++){
for(let j=0;j<Object.keys(elemento[i]).length;j++){
    propiedadesObjeto =Object.keys(elemento[i])
 if(recibo===propiedadesObjeto){
    resultArray.push(elemento[i])
               ;}
    }
}console.log(resultArray)
return ResultArray;

}  


function fiferMap(array, callback) {
let ResultArray=[];
let propiedadesObjeto
for(let i=0;i<array.length; i++){
    for(let j=0;j<Object.keys(array[i]).length;j++){
        propiedadesObjeto =Object.keys(array[i])
            if(callback === propiedadesObjeto[j]){
                let row= JSON.stringify(array[i])
                ResultArray +=row}
        }
    }
    console.log(ResultArray)
}

// const obtenerCiudadesPobladas = array => array.filter(({ age }) => age >= 1);

// const ciudadesPobladas = obtenerCiudadesPobladas(users);
// console.log(ciudadesPobladas)

// const obtenerNombreDeCiudadesPobladas = array => array.map(( {name} ) => name);
// // ciudadesPobladas es el resultado de nuestro ejemplo anterior donde usamos .filter
// const nombreDeCiudadesPobladas = obtenerNombreDeCiudadesPobladas(ciudadesPobladas);
// console.log(nombreDeCiudadesPobladas)

let pruebamap= ciudades.map(( {name} ) => name);
alert(pruebamap)

function fiferMap(array, callback) {
  let ResultArray=[];
  let propiedadesObjeto
  for(let i=0;i<array.length; i++){
      for(let j=0;j<Object.keys(array[i]).length;j++){
          propiedadesObjeto =Object.keys(array[i])
              if(callback === propiedadesObjeto[j]){
                  let row= JSON.stringify(array[i])
                  ResultArray +=row}
          }
      }
      console.log(ResultArray)
  }
search(users)
fiferMap(users,search)
    
const obtenerCiudadesPobladas = array => array.filter(({ age }) => age >= 1);

const ciudadesPobladas = obtenerCiudadesPobladas(users);
console.log(ciudadesPobladas)

const obtenerNombreDeCiudadesPobladas = array => array.map(( {name} ) => name);
// ciudadesPobladas es el resultado de nuestro ejemplo anterior donde usamos .filter
const nombreDeCiudadesPobladas = obtenerNombreDeCiudadesPobladas(ciudadesPobladas);
console.log(nombreDeCiudadesPobladas)

 