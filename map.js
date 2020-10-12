let orders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 200, 300, 400, 3, 2, 0, 5000];
let otros =  [
             {
                 name:'Andres',
                 lastName:'Ortiz',
                 age:33,
                 salary:1200000
             },
             {
                name:'Maria',
                lastName:'Perolas',
                age:22,
                salary:200000
            },
            {
                name:'Jared',
                lastName:'Ortiz',
                age:4,
                salary:25.000
            }

]





function map(arr,callback)
{    
    let auxArray= new Array;
    
    for(var i=0;i<arr.length;i++)
    {    
        auxArray.push(callback(arr[i]));
    }

    return auxArray;
}
function filter(array, callback) {
    
    let auxArray = [];
    for (i = 0; i < array.length; i++) {
        
        if (callback(array[i]) === true) 
           {
            auxArray.push(array[i]);
           }
    }
    return auxArray;
}
function find(arr, callback) {
    
    let auxArray = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (callback(arr[i]) === true) {
            
            auxArray.push(arr[i]);
            return arr[i];
            break;
            
        }
    }
    return auxArray;
}
function findIndex(arr, callback) {
    let auxArray = []
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) 
        {
            result = i;
            auxArray.push(arr[i]);
            break;
        }
    }
    return result;
}
function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i++ ) {
        callback(array[i]);
    }
}

function contains(arr, callback) {
    var present = false;
    auxArray = [];
    for (let i =0; i< arr.length; i++) 
        {
        if (callback(arr[i])===true) {
            
            auxArray.push(arr[i]);
            present= true;
            break;
        }
    }
    if (present === true) {
        alert('el elemento  si existe en el arreglo')
        return(true);
    }    
    return present;
}
function pluck(arr, atributo) {
    console.log(arr);
    var cadena=("elemento=>elemento."+ atributo+'+" "');
    var tmpFunc = new Function(cadena);
    console.log(cadena);
    return map(arr,tmpFunc);
    //return map(...arr,"elemento => elemento.name" + " ");
}


// console.log("el original");
// console.log(orders);
// console.log("modificaciones");
// console.log ("elemento X 2");
// console.log(map(orders,elemento => elemento*2));
// console.log ("elemento / 2");
// console.log(map(orders,elemento => elemento/2));
// console.log ("elemento + 2");
// console.log(map(orders,elemento => elemento+2));
// console.log ("elemento - 2");
// console.log(map(orders,elemento => elemento-2));
// console.log("Pruebas del Filter");
// console.log(filter(otros,elemento => elemento.salary>40000));
// console.log(filter(orders,elemento=>elemento > 2));
// console.log(find(otros,(elemento=> elemento.lastName.endsWith('olas'))));
// console.log(find(otros,(elemento=> elemento.name.endsWith('dres'))));
// console.log(find(otros,(elemento=> elemento.name.endsWith('red'))));
// console.log(find(orders,(elemento=>elemento ==1)));
// console.log(findIndex(otros,(elemento=>elemento.name.endsWith('ared'))));
//console.log(contains(otros,(elemento=>elemento.name=='Andres')));
// console.log(otros.filter(elemento=> elemento.salary>40000));
// console.log(orders.filter(elemento=>elemento > 2));
// console.log(otros.find(elemento=> elemento.lastName.endsWith('olas')));
// console.log(otros.find(elemento=> elemento.name.endsWith('dres')));
// console.log(otros.find(elemento=> elemento.name.endsWith('red')));
// console.log(orders.find(elemento=>elemento==1));
// console.log(otros.findIndex(elemento=> elemento.name.endsWith('ared')));
// console.log(contains(otros,elemento=>elemento.lastName.endsWith('Ortiz')));
// console.log("el original");
// console.log(otros);

// console.log("modificaciones");

// console.log("elemento edad X 2");
//console.log(map(otros, (elemento=>elemento.name+"")));
console.log(pluck(otros,"name"));
// console.log("elemento nombres y apellidos en uno solo");
// console.log(map(otros, (elemento => elemento.name + elemento.lastName)));

// console.log("salario mayor a 400.000");
// console.log(map(otros, (elemento => elemento.salary > 400000)));

// console.log("El apellido Termina en olas")
// console.log(map(otros, elemento => elemento.lastName.endsWith("olas")));

// console.log("elemento edad X 2");
// console.log(otros.map(elemento => elemento.age * 2));
// console.log("nombres y apellidos en uno solo");
// console.log(otros.map(elemento => elemento.name + elemento.lastName));
// console.log("Salario mayor a 400.000");
// console.log(otros.map(elemento => elemento.salary > 400000));
// console.log("El apellido Termina en olas")
// console.log(otros.map(elemento => elemento.lastName.endsWith("olas")));

