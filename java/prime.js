x=11
    if (x>1){
        let flag=0
        for (let i=2;i<x;i++){
            if (x%i==0){
                flag=1
                break
            } 
        } 
    
    if(flag==1){
                console.log("It's not a prime number")
        }
    else{
        console.log("Its  a prime number")
    }
    }
