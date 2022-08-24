
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
    // 2 -> Pozitia pe care dorim sa punem elementul
    // 0 -> Numarul de coloane pe care dorim sa le stergem
    // "Alien" -> elementele pe care le adaugam
    // Complexitate O(n);
    return strings;
}


content.innerHTML = arraysFunction();
