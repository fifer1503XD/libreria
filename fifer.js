
function fiferFilter(array, callback) {
    let ResultArray=[];
  
    for(i=0;i<array.length; i++){
        // for(j=0;j<(Object.keys(array[i])).length; j++){
                if(callback(array[i]) === true){
                    row= JSON.stringify(array[i])
                    ResultArray +=row}
            }
            console.log(ResultArray)
             
        }
        
      
    
    
    
   

    