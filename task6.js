let custompow=(x,n)=>{
    if(n==0){
        return 1;
    }
    let=result=1;
    if(n<0){             
        for(let i=1;i<=-n;i++){
            result*=x;
        }
        return 1/result;
    }

    for(let i=1;i<=n;i++){
        result*=x;
    }
    return result;    
}

console.log(custompow(3,2));
