let calculateBMI=(Weight,Height)=>Weight/(Math.pow(Height,2));
let x=calculateBMI(10,10);
console.log(x);

let printstatusforBMI= ()=> {
    
    if(x<18.5){
        return "Underweight";
    }
    if(x<24.9){
        return "Normal Weight";
    }
    if(x<29.9){
        return "Overweight";
    }
    return "Obese";
}

console.log(printstatusforBMI());