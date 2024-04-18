const black = 'rgb(40, 37, 37)'

const list_items = document.getElementById('aluno_nav').getElementsByTagName('li')

const aulas = document.getElementById('aulas')
const notas = document.getElementById('notas')
const aluno_emprestimos = document.getElementById('al_emprestimos')

let select = aulas

for(let i = 0; i < list_items.length; i++)
{
    list_items[i].addEventListener('mouseenter', function(e){
        list_items[i].style.backgroundColor = "white";
        list_items[i].style.color = black;
    })

    list_items[i].addEventListener('mouseleave', function(e){
        if(select != list_items[i])
        {
            list_items[i].style.backgroundColor = black;
            list_items[i].style.color = 'white';
        }
    })
}

aulas.onclick = () => {
    if(select != aulas)
    {
        select.style.backgroundColor = black;
        select.style.color = 'white';
        select = aulas;
    }
}

notas.onclick = () => {
    if(select != notas)
    {
        select.style.backgroundColor = black;
        select.style.color = 'white';
        select = notas;
    }
}

aluno_emprestimos.onclick = () => {
    if(select != aluno_emprestimos)
    {
        select.style.backgroundColor = black;
        select.style.color = 'white';
        select = aluno_emprestimos;
    }
}