// class NameGenerator {

//     constructor(name) {
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }
// }
1,{2:3},3,4,5
// let nameGenerator = new NameGenerator("John");
// console.log(`My name is ${nameGenerator.name}`); // My name is John
// nameGenerator._name = "Jane"; // Cannot assign to 'name' because it is a read-only property.
// console.log(nameGenerator)

let arr = [{2:3},56];
arr.map((val,key)=>{
    console.log(val,val[2])
    val[2] = "dadsd";
})
console.log(arr)