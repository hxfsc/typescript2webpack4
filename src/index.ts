function greeter(preson:string){
    return `Hello,${preson}`
}

function add(a:number, ...res:number[]){
    return a + res.reduce((prev, next)=>prev+next)
}


console.log(add(1, 12, 21212, 21212))
