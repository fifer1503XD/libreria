
const users= [
    {
    age : 49, 
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
        age : 60, 
        name: 'josefa',
        genero: 'mujer',
        email: 'mariaortiz@gmail.com'
        },
        {
            age : 60, 
            name: 'ana',
            genero: 'mujer',
            email: 'mariaortiz@gmail.com'
            },
      {
        age : 60, 
        genero: 'hombre',
        email: 'mariaortiz@gmail.com'
        },
        {
        age : 60, 
        genero: 'mujer',
        email: 'juanaortiz@gmail.com'
            }
  ]

  const array =[14,17,48,45,48,45,4];

  function writeArrays() {
      let location = document.getElementById('arrays')
      const array2= JSON.stringify(users)
      let objects =`<h2> Array números </h2>
                    ${array}
                    <h2> Array Users </h2>
                    ${array2} `
     location.innerHTML=objects
     
      
  }
  writeArrays()
  // console.log(Object.keys(users));
  // console.log(Object.getOwnPropertyNames(users));
//   let findUsers= users.filter(function(users){
//       return users.age>40
//   })
//   console.log(findUsers)
  // let row =  findUsers.map(({email})=> email)
  //     console.log(row)

  let recibo='name'
    
      function search(elemento){
          
          let resultArray=[]
         for(let i=0;i<elemento.length;i++){
        for(let j=0;j<Object.keys(elemento[i]).length;j++){
            let propiedadesObjeto =Object.keys(elemento[i])
         if(recibo===propiedadesObjeto[j]){
            resultArray.push(elemento[i])
                       ;}
            }
      }
      return resultArray;
      
    }  

    function fiferMap(elemento,callback){
        let resultArray=[]
        for(let i=0;i<elemento.length;i++){
            for(let j=0;j<Object.keys(elemento[i]).length;j++){
                let propiedadesObjeto =Object.keys(elemento[i])
                if(callback(propiedadesObjeto[j]) === true){
                    resultArray.push(elemento[i].name);
                }
            
    }
        }
        alert('Resultado map '+resultArray)
}
    
    
function fiferFilter(array, callback) {
    let ResultArray=[];
    let resultado
  
    for(i=0;i<array.length; i++){
                if(callback(array[i]) === true){
                    row= JSON.stringify(array[i])
                    ResultArray +=row
            }
            
            // resultado= JSON.parse(ResultArray);
            
    }
    alert(ResultArray)
            
        }
        

        
    function menuFunctions(){
      const dataMenu = document.getElementById('menu').value
      if(dataMenu==='1'){
        fiferFilter(users,(elemento=> elemento.age<30))
                        }
        else{
            if(dataMenu==='2'){
            fiferMap((search(users)),(elemento=> elemento===recibo))
                              }
              else{
                if(dataMenu==='3'){
                fiferMap2(array,(elemento=> elemento*8))
                                  }
                  else{
                    if(dataMenu==='4'){
                    fiferFind(array,(elemento=> elemento>3))
                                      }
                      else{
                        if(dataMenu==='5'){
                        fiferFindIndex(array,(elemento=> elemento===4))
                                          }
                        else{
                          if(dataMenu==='6'){
                          fiferContains(array,3,1)
                                            }
                            else{
                             if(dataMenu==='7'){
                             fiferWhithout(array,(elemento=> elemento===48))
                                               }
                                }
                            }
                          }
                       }
                 }
            }
        }
        function fiferMap2(elemento,callback){
            let Arraymap=[]
            for(let i=0;i<elemento.length;i++){
                let result =callback(array[i]);
                Arraymap.push(result)
                
        }
        alert('resultado array *8 '+Arraymap)
    }
        // function operacioMatematica(array){
        //    array=array +1;
        //    return array
        // }

        
        function fiferFind(elemento,callback){
            let ArrayFind=[]
            for(let i=0;i<elemento.length;i++){
                if(callback(elemento[i]) === true){
                let result = elemento[i];
                ArrayFind.push(result)
                break;
        }
        }
        alert('el primer elemento que cumple con la condicion de ser mayor que 3 es '+ArrayFind)
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
            alert('el lugar donde se encuentra el elemento  es '+IndexFind)
        }else{
            alert('el elemento no existe en el arreglo')
        }
    }
        function fiferContains(array,valor,desde){
            result= false;
            for(let i=desde-1;i<array.length;i++){
                if(valor===array[i]){
                    result=true;
                }
        } 
        if(result===true){
            alert('el elemento '+valor+' si esxiste en el arreglo')
        } else{
            alert('el elemento '+valor+' no esxiste en el arreglo')
        }
        }
        let propiedad='name'
        function fiferPluck(elemento,propiedad){
            let resultArray=[]
            for(let i=0;i<elemento.length;i++){
                for(let j=0;j<Object.keys(elemento[i]).length;j++){
                    let propiedadesObjeto =Object.keys(elemento[i])
                    if(propiedadesObjeto[j]=== propiedad){
                        alert('entro al if')
                        let result=resultArray.push(`${elemento[i]}.${propiedad}`);
                        console.log('elemento con propiedad'+`${elemento[i]}.${propiedad}`)
                    }
                
        }
            }console.log(resultArray)

        }

        fiferPluck(users,(elemento=> elemento===propiedad),propiedad)

        function fiferWhithout(elemento,callback){
            let ArrayWhithout=elemento
            for(let i=0;i<elemento.length;i++){
                if(callback(elemento[i]) === true){
                    console.log(elemento[i])
                    let j=i+1
                ArrayWhithout.splice(i,1)
                                                  }
                                             }
        alert('el nuevo array es '+ArrayWhithout)
        }
       