let findMax=(first,second,third)=>{
    if(first>second){
        if(first>third){
            return first;
        }
        return third;
    }
    if(second>third){
        return second;
    }
    return third;
    
}

console.log(findMax(12,10.5,-11));