class CustomArray{
    constructor()
    {
        this.length = 0; 
        this.data = {};
    }

    get(index)
    {
        return this.data[index];
    }

    push(item)
    {
        this.data[this.length] = item;
        this.length++; 
        return this.length;
    }

    pop()
    {
        delete this.data[this.length-1];
        this.length--;
    }
    delete(index)
    {
        const item = this.data[index];
        this.shiftItems(index);
    }
    
    shiftItems(index){
        for(let i = index; i <= this.length-1; i++)
        {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}


function customArrayTesting()
{
    const newArray = new CustomArray();
    console.log(newArray.get(2));
    newArray.push('Hello');
    newArray.push('World');
    //newArray.pop();
    console.log(newArray);
}
customArrayTesting();