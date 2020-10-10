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
function fiferFilter(array, callback) {
    let ResultArray=[];
    let resultado
  
    for(i=0;i<array.length; i++){
        // for(j=0;j<(Object.keys(array[i])).length; j++){
                if(callback(array[i]) === true){
                    row= JSON.stringify(array[i])
                    ResultArray +=row
                    resultado= JSON.parse(ResultArray);

            }
            
            
            console.log(resultado)
    }  
        }
        

        fiferFilter(users,(elemento=> elemento.age>10))
