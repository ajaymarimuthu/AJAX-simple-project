// HTTP RESPONSES
// 200: OK
// 403: FORBIDDEN
// 404: NOT FOUND 


// READYSTATE VALUES
// 0: requst not initialized
// 1: server connection established
// 2:request recieved
// 3:processing request
// 4:request finished and response is readyState

 
 
  document.getElementById('button').addEventListener('click',loadData);


  document.getElementById('button-second').addEventListener('click',loadDatas);
 



  function loadData(){
 
    
    // creating xhr Object
    const  xhr=new XMLHttpRequest();

    // OPEN 
    xhr.open('GET', 'customer.json' , true);   
    // this is synchronous so third param is true

    // console.log('READYSTATE', xhr.readyState);


    // OPTIONAL- used for spinners/loaders

    // xhr.onprogress=function (){
    //     console.log('READYSTATE', xhr.readyState);
    // }




    xhr.onload = function(){
     //   console.log('READYSTATE', xhr.readyState);
        if(this.status===200){
            //console.log(this.responseText);                      
            // document.getElementById('output').innerHTML=`<h1>${this.responseText}</h1>`

            const customer=JSON.parse(this.responseText);

            const output=`
            <ul>
              <li>Name:${customer.Name}</li>
              <li>ID:${customer.Age}</li>
              <li>Company:${customer.Company}</li>
              <li>Phone Num:${customer.Phone}</li>
            </ul>
            
            `

            document.getElementById('output').innerHTML=output;



        }       
        
    }

     // below is old method
    // xhr.onreadystatechange = function(){
    //    // console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState=== 4){
    //                 console.log(this.responseText);            
    //     }       
    // }


    xhr.onerror=function(){
        console.log('REQUEST Error:');
    }


    xhr.send();
 }


 // Second button fetching from Array of Objects

 function loadDatas(e){
 
    
   
    const  xhr=new XMLHttpRequest();
    
    xhr.open('GET', 'customers.json' , true);   
    // this is synchronous so third param is true
 

    // OPTIONAL- used for spinners/loaders

    // xhr.onprogress=function (){
    //     console.log('READYSTATE', xhr.readyState);
    // }




    xhr.onload = function(){
     
        if(this.status===200){
            
            const customers=JSON.parse(this.responseText);

            let output ='';

            customers.forEach(function (customer){

                output+=`
                <ul>
                  <li>Name:${customer.Name}</li>
                  <li>ID:${customer.Age}</li>
                  <li>Company:${customer.Company}</li>
                  <li>Phone Num:${customer.Phone}</li>
                </ul>
                
                `


            })

         

            document.getElementById('output-2').innerHTML=output;



        }       
        
    }

     // below is old method
    // xhr.onreadystatechange = function(){
    //    // console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState=== 4){
    //                 console.log(this.responseText);            
    //     }       
    // }


    xhr.onerror=function(){
        console.log('REQUEST Error:');
    }


    xhr.send();
 }




 