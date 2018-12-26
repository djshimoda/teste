function calc(x1,x2, operator){

return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(2,3,"-");
console.log(resultado);