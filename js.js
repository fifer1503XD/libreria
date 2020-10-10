
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

  const array =[1,2,3,4,5,6,7];
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
            }else{
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
                if(callback(array[i]) === true){
                let result = array[i];
                ArrayFind.push(result)
                break;
        }
        }
        alert('el primer elemento que cumple con la condicion de ser mayor que 3 es '+ArrayFind)
        }