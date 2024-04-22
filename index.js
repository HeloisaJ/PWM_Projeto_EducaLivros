const bem_vindo = document.getElementById('bem_vindo')
const nossa_estrutura = document.getElementById('nossa_estrutura')
const consulta_acervo = document.getElementById('consulta_acervo')
const login_bt = document.getElementById('login')

const fardamento = document.getElementById('fardamento')
const ebooks = document.getElementById('ebooks')
const material = document.getElementById('material')
const esportes = document.getElementById('esportes')
const cursos = document.getElementById('cursos')
const aulas_particulares = document.getElementById('aulas_particulares')
const emprestimos = document.getElementById('emprestimos')

var is_logged = window.localStorage.getItem('login')
if(is_logged)
{
    const str = window.localStorage.getItem('email');
    let string = '';
    for(let i = 0; i < str.length; i++)
    {
        if(i === 6)
        {
            break;
        }
        if(str[i] !== '@')
        {
            string += str[i];
        }
        else
        {
            break;
        }
    }
    if(is_logged === 'aluno')
    {
        login_bt.innerHTML = string+': aluno';
    }
    else if(is_logged === 'prof')
    {
        login_bt.innerHTML = string+': professor';
    }
    else
    {
        login_bt.innerHTML = string+': funcionário';
    }
}

function goToPage(page){
    window.location.href = page;
}

bem_vindo.onclick = () => {
    goToPage('src/html/index.html');
}

nossa_estrutura.onclick = () => {
    goToPage('src/html/nossa_estrutura.html')
}

consulta_acervo.onclick = () => {
    goToPage('src/html/consulta_acervo.html')
}

login_bt.onclick = () => {
    if(is_logged)
    {
        if(is_logged === 'aluno')
        {
            goToPage('src/html/AR_aluno.html');
        }
        else if(is_logged === 'prof')
        {
            goToPage('src/html/AR_professor.html');
        }
        else
        {
            goToPage('src/html/AR_funcionario.html');
        }
    }
    else
    {
        goToPage('src/html/login.html')
    }
}

fardamento.onclick = () => {
    goToPage('src/html/fardamento.html')
}

ebooks.onclick = () => {
    goToPage('src/html/ebooks.html')
}

material.onclick = () => {
    goToPage('src/html/material.html')
}

esportes.onclick = () => {
    goToPage('src/html/esportes.html')
}

cursos.onclick = () => {
    goToPage('src/html/cursos.html')
}

aulas_particulares.onclick = () => {
    goToPage('src/html/aulas_particulares.html')
}

emprestimos.onclick = () => {
    goToPage('src/html/emprestimos.html')
}