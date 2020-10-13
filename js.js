Array.prototype.fiferForeach=fiferForeach
Array.prototype.fiferFilter=fiferFilter
Array.prototype.fiferMap=fiferMap
Array.prototype.fiferWithout=fiferWithout
Array.prototype.fiferPluck=fiferPluck
Array.prototype.fiferFind=fiferFind
Array.prototype.fiferFindIndex=fiferFindIndex
Array.prototype.fiferContains=fiferContains

const users= [
    {
    age : 19, 
    name: 'felipe',
    genero: 'hombre',
    email: 'pedrofelipeortiz@gmail.com'
    },
    {
      age : 6, 
      name: 'maria',
      genero: 'mujer',
      email: 'mariaortiz@gmail.com'
      },
      {
        age : 30, 
        name: 'josefa',
        genero: 'mujer',
        email: 'mariaortiz@gmail.com'
        },
        {
            age : 25, 
            name: 'ana',
            genero: 'mujer',
            email: 'mariaortiz@gmail.com'
            },
      {
        age : 40, 
        genero: 'hombre',
        email: 'mariaortiz@gmail.com'
        },
        {
        age : 10, 
        genero: 'mujer',
        email: 'juanaortiz@gmail.com'
            }
  ]
  let array=readarray()
  writeArrays()
function readarray() {
let c=0;
var tamaño = prompt("indica el tamaño del arreglo");
 size=parseInt(tamaño);
 let arrayRead=[];
     for( let i=0; i<size ;i++){
         var num = prompt("indica el valor de la posiciòn "+i);
        
         arrayRead.push(num);
        
     }
     console.log('tipo'+typeof arrayRead[0])
     return arrayRead    
}

function readPropiedad() {
    let readPropiedad = prompt("indica el valor a trabajar con la función");
    return readPropiedad;
}
function readPosition() {
    let readPosition = prompt("indica el valor de la posicion desde la cual se empieza la busqueda");
    return readPosition;
}



  function writeArrays() {
      let location = document.getElementById('arrays')
      const array2= JSON.stringify(users)
      let objects =`<h2> Array números </h2>
                    ${array}
                    <h2> Array Users </h2>
                    ${array2} `
     location.innerHTML=objects
     
      
  }
  
  // console.log(Object.keys(users));
  // console.log(Object.getOwnPropertyNames(users));
//   let findUsers= users.filter(function(users){
//       return users.age>40
//   })
//   console.log(findUsers)
  // let row =  findUsers.map(({email})=> email)
  //     console.log(row)


    
      function search(elemento){
          let resultArray=[]
        for(let i=0;i<elemento.length;i++){
        for(let j=0;j<Object.keys(elemento[i]).length;j++){
        let propiedadesObjeto =Object.keys(elemento[i])
        if(recibo===propiedadesObjeto[j]){
        resultArray.push(elemento[i]);   }
                }
      }
      return resultArray;
      
    }  

    
    function fiferFilter(array,callback) {
        let ResultArray=[];
        let resultado
        for(i=0;i<array.length; i++){
            if(callback(array[i])===true){
            row= JSON.stringify(array[i])
            ResultArray +=row
            }
        }
        alert(ResultArray)
    }
    function menuFunctions(){
      const dataMenu = document.getElementById('menu').value
      if(dataMenu==='1'){
        let propiedad=readPropiedad();
        fiferFilter(users,(elemento=> elemento.age<propiedad))
        }
        else{
            if(dataMenu==='2'){
            fiferForeach(users,(elemento => alert(JSON.stringify(elemento))))
                              }
              else{
                if(dataMenu==='3'){
                    let propiedad=readPropiedad();
                fiferMap(array,(elemento=> elemento*parseInt(propiedad)))
                                  }
                  else{
                    if(dataMenu==='4'){
                        let propiedad=readPropiedad();
                    fiferFind(array,(elemento=> elemento>propiedad))
                                      }
                      else{
                        if(dataMenu==='5'){
                            let propiedad=readPropiedad();
                        fiferFindIndex(array,(elemento=> elemento===propiedad))
                                          }
                        else{
                          if(dataMenu==='6'){
                            let propiedad=readPropiedad();
                            let fromPosition=readPosition();
                          fiferContains(array,propiedad,fromPosition)
                                            }
                            else{
                             if(dataMenu==='7'){
                              let values=readarray();
                             fiferWithout(array,values)
                             
                            }
                                               
                               
                                else{
                                    if(dataMenu==='8'){
                                        let propiedad=readPropiedad();
                                        fiferPluck(users,elemento=>elemento===propiedad)
                                        
                                    }
                                }
                             }
                           }
                         }
                        }
                    }
                 }
            }
        
        function fiferForeach(elemento,callback) {
            for(let i=0;i<elemento.length;i++){
               callback(elemento[i]);
                
                }
            } 

        function fiferMap(elemento,callback){
            let Arraymap=[]
            for(let i=0;i<elemento.length;i++){
                let result =callback(array[i]);
                Arraymap.push(result)    
            }
          alert('resultado array del callback  es '+Arraymap)
       }
        function fiferFind(elemento,callback){
            let ArrayFind=[];
            let c=0;
            for(let i=0;i<elemento.length;i++){
                if(callback(elemento[i]) === true){
                    alert('ingresa al if')
                    c=1;
                let result = elemento[i];
                ArrayFind.push(result)
                break;
                }
            }
            if(c===1){
            alert('el primer elemento que cumple con la condicion ingresada es '+ArrayFind)
            }   
            else{
            alert('ningun elemento es valido en la busqueda.')
            }
        }

        function fiferFindIndex(elemento,callback){
            let IndexFind=[]
            let noexist=0;
            for(let i=0;i<elemento.length;i++){
                if(callback(array[i]) === true){
                let result = i;
                IndexFind.push(result)
                noexist=1;
                break;}
            }
            if(noexist===1){
            alert('la posición dentro del arreglo  donde se encuentra el elemento  es '+IndexFind)
            }
            else{
            alert('el elemento no existe en el arreglo')
            }
        }
        
        function fiferContains(array,valor,desde){
            result= false;
            for(let i=desde;i<array.length;i++){
                if(valor===array[i]){
                    result=true;
                }
            } 
            if(result===true){
            alert('el elemento '+valor+' si existe en el arreglo')
            } 
            else{
            alert('el elemento '+valor+' no existe en el arreglo')
            }
        }

        function fiferPluck(elemento,callback,propiedad){
            let resultArray=[]
            for(let i=0;i<elemento.length;i++){
                for(let j=0;j<Object.keys(elemento[i]).length;j++){
                    let propiedadesObjeto =Object.keys(elemento[i])
                    if(callback(propiedadesObjeto[j])===true){
                    resultArray.push(elemento[i][propiedad]);
                    }  
                }
            }     
            alert('el array resultado es'+resultArray)
        }
 
        function fiferWithout(elemento,arrayvalores){
            let ArrayWhithout=elemento
            for(let i=0;i<elemento.length;i++){
                for(let j=0; j<arrayvalores.length;j++){
                if(callbackw(elemento[i],arrayvalores[j]) === true){
                    console.log(elemento[i])
                    ArrayWhithout.splice(i,1)
                    j=-1;
                    i=-1;
                }
            }
        }
        alert('array resultado es '+ArrayWhithout)
            ArrayWhithout=elemento
            
     }
     function callbackw(elemento, valorw){
        if(elemento===valorw){
            return true
        }
    }