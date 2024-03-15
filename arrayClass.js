class arr{
    constructor(){
        this.data = {};
        this.length = 0
    }
    get(idx){
        return data[idx];
    }
    insert(idx, val){
        if(idx < 0 || idx >= this.length) throw "Array Index out of bound";
        data[idx] = val;
    }
    push(val){
        this.data[this.length] = val;
        this.length++;
    }
    pop(){
        if(this.length === 0)throw "Array out of bound";
        delete this.data[this.length-1];
        this.length--;
    }
    delete(idx){
        if(idx < 0 || idx >= this.length) throw "Array Index out of bound";
        for(let i = idx ; i < this.length-1 ; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
    forEach(callback){
        for(let i = 0 ; i < this.length ; i++){
            callback(this.data[i],i,this.data);
        }
    }
}


let b = new arr();
b.push(1);
b.push(2);
b.push(3);
b.push(4);
b.pop()
b.push(5)
b.forEach((val)=>{
    console.log(val)
})

