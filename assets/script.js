
const content = document.getElementById('content');
// content.innerHTML = "Mendark: <strong>Hahaha Hahahahaha Hahaha Hahahahaha</strong>";

function arraysFunction()
{
    const strings = ['a', 'b','c','d'];


    //PUSH -> Add to end of Array ->  O(1)
    strings.push('e');

    //POp -> Remove last item of Array ->  O(1)
    strings.pop();

    //UNSHIFT -> Adaugare de elemente noi la inceputul Array-ului ->  O(n)
    strings.unshift('x');


    //SPLICE -> Adauga unul sau mai multe elemente in mijlocul Array-ului
    strings.splice(2,0,'alien')
    // 2 -> Pozitia pe care dorim sa punem elementul-+
    // 0 -> Numarul de coloane pe care dorim sa le stergem
    // "Alien" -> elementele pe care le adaugam
    // Complexitate O(n);
    return strings;
}


function reverseAString(str)
{
    let newString = [];
    for(let i = 0; i<= str.length - 1; i++)
    {
        newString[i] = str[str.length-1-i];
    }
    return newString.toString();
}

function mergeSortedArray(arr1, arr2)
{
    let size = arr1.length + arr2.length;
    let newArray= [];
    while(arr1.length > 0 && arr2.length > 0){
        let tmp1, tmp2;
        tmp1 = arr1.pop();
        tmp2 = arr2.pop();
        if(tmp1 <= tmp2 )
        {
            newArray.push(tmp1);
            newArray.push(tmp2);
        }else
        {
            newArray.push(tmp2);
            newArray.push(tmp1);
        }
    }
    return newArray;
}

content.innerHTML = arraysFunction();
// console.log(reverseAString("Ceau PISI"));
console.log(mergeSortedArray([3,4,31], [4,6,30]));



 class HashTable
 {
    constructor(size)
    {
        this.data = new Array (size);
    }

    set(key, value)
    {
        this.data.push([key, value]);
        return [key, value];
    }
    get(key)
    {
        for(let i = 0; i<= this.data.length-1; i++)
        {
            if(this.data[i+50][0] == key)
            {
                return this.data[i+50];
            }
        }
        return "Value for the key " + key + " was not found";
    }
 }

let ht = new HashTable(50);
ht.set('banana', 400);
ht.set('portocala', 503);
ht.set('rodie', 404);
ht.set('avocado', 402);
console.log(ht.get('banana'));

function findFactorialOfANumber(number)
{
    let factorialResult =1
     function factorial(nr)
    {
        factorialResult *=nr
        if(nr == 1)
        {
            return factorialResult;
        }
        nr--;
        factorial(nr);
    }
    factorial(number);
    return factorialResult;
}


function fibonaciRecursiv(index)
{
/*
Algorimtul lui Fibonaci se bazeaza pe adunarea Ultimilor doi termeni pentru al genera pe al 3-lea
 */
        debugger
        if(index == 1)
        {
            return 1;
        }else{
            return fibonaciRecursiv(index-2) + fibonaciRecursiv(index-1);
        }

}

console.log(fibonaciRecursiv(5));