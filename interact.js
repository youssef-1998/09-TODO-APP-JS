const ztext = document.querySelector('input');
const add = document.querySelector('button');
let text = ''                                                // declaration de lement text vide

ztext.addEventListener('change', function (e) {              // creation d'un event change (fin saiser sortir de zone de txt par click)sur ztext
    text = e.target.value;                                   // get the value of the input a la elment text 
})
    add.addEventListener('click', function () {              // creation d'un event click sur btn add

        var btnComplete = document.createElement('button');  // creation d'un element (button)
        btnComplete.innerHTML = "complete";                  // Ajout un text  a la button
        btnComplete.classList.add('btn-complete');           // Ajoute class pur style scc

        var btnDelete = document.createElement('button');    // creation d'un element (button)
        btnDelete.innerHTML = "Delete";                      // Ajout un text  a la button
        btnDelete.classList.add('btn-delete');               // Ajoute class pur style scc

        var toDo = document.createElement('h1');             // creation d'un element (titre h1)
        toDo.innerText = text;                               // ajout text dans un element (toDo = 'h1') par [.innerText]

        var container = document.createElement('div');       // creation d'un element (div)
        container.appendChild(btnComplete);                  // ajout les element (button comp) a l element (div)
        container.appendChild(btnDelete);                    // ajout les element (button dele) a l element (div)
        container.appendChild(toDo);                         // ajout les element (toDo = 'h1') a l element (div)
        container.classList.add('todo');                     // Ajoute class pur style scc

        var main = document.querySelector('main');           // declaration && sélectionner main
        main.appendChild(container);   //ajout les element{(container):btncomplete + btndelete + (toDo='h1')}a la element(main)

        document.querySelector('.zone-text').value = '';     // vide zone de text


        btnComplete.addEventListener("click", function () {  // creation d'un event click sur btnComplete
            if (btnComplete.innerHTML === "complete") {      // condtoin si text de btnComplete = complete 
                btnComplete.innerHTML = "Undo";              // remplace txte btnComplete [complete] par [undo]        
                toDo.style.textDecoration = 'line-through';  // hachere txte toDo  
            }
            else if (btnComplete.innerHTML === "Undo") {     // condtoin si text de btnComplete = Undo 
                btnComplete.innerHTML = "complete";          // remplace txte btnComplete [undo] par [complete]
                toDo.style.textDecoration = 'none';          // not! hachere txte toDo
            }
        }) 
        btnDelete.addEventListener('click', function () {    // creation d'un event click sur btnDelete
            btnComplete.remove();                            // supprimer btnComplete 
            btnDelete.remove();                              // supprimer btnDelete
            toDo.remove();                                   // supprimer toDo
        })
    })