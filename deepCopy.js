
function deepCopy(data){
    if(typeof data !== 'object' || data === null)
        return data;
    let copy = Array.isArray(data) ? [] : {};
    for(let key in data){
        copy[key] = deepCopy(data[key]);
    }
    return copy;
}

let a = {
    name: "abc",
    info:{
        section:'a',
        name:'jkhad',
        list:[2,32,3,3]
    },
    list:[34,4,3,34,34]
}

let c = a;
let e = deepCopy(a);
e.info.list.push(43908234);
console.log(e);
console.log(a);
console.log(c);
c.info.list.push(43908234);
console.log(a);
console.log(c);