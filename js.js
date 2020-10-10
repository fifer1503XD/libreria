
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
                    resultArray.push(JSON.parse(`${elemento[i]}.${recibo}`));
                }

    }
        }
        console.log('Resultado map '+resultArray)
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
    console.log(ResultArray)
            console.log(resultado)  
        }
        

        
        function menuFunctions(){
            const dataMenu = document.getElementById('menu').value
            alert(dataMenu)
            if(dataMenu==='1'){
                alert('ingresa al 1')
                fiferFilter(users,(elemento=> elemento.age<30))
            }else{
                if(dataMenu==='2'){
                    fiferMap((search(users)),(elemento=> elemento===recibo))
                }
                else{
                    if(dataMenu==='3'){
                    fiferMap2(array,(elemento=> elemento*8))
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
        console.log(Arraymap)
    }
        // function operacioMatematica(array){
        //    array=array +1;
        //    return array
        // }

        