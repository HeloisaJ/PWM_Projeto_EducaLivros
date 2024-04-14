var is_logged = ''

const bem_vindo = document.getElementById('bem_vindo')
const nossa_estrutura = document.getElementById('nossa_estrutura')
const consulta_acervo = document.getElementById('consulta_acervo')
const login_bt = document.getElementById('login')

const in_email = document.getElementById('in_email')
const in_password = document.getElementById('in_password')

const error = document.getElementById('error')

const bt_aluno = document.getElementById('bt_aluno')
const bt_prof = document.getElementById('bt_prof')
const bt_func = document.getElementById('bt_func')

function goToPage(page){
    window.location.href = page;
}

bem_vindo.onclick = () => {
    goToPage('../../index.html');
}

nossa_estrutura.onclick = () => {
    goToPage('nossa_estrutura.html')
}

consulta_acervo.onclick = () => {
    goToPage('consulta_acervo.html')
}

login_bt.onclick = () => {
    goToPage('login.html')
}

function make_login(tipo, page){
    var email = in_email.value
    var password = in_password.value

    if(email && password)
    {
        is_logged = tipo
        window.location.href = page
    }
    else
    {
        alert('Por favor verifique se o email e a senha foram digitados corretamente.')
    }
}

bt_aluno.onclick = () => {
    make_login('aluno', 'AR_aluno.html')
}

bt_prof.onclick = () => {
    make_login('prof', 'AR_professor.html')
}
bt_func.onclick = () => {
    make_login('func', 'AR_funcionario.html')
}

if(is_logged)
{
    if(is_logged === 'aluno')
    {
        window.location.href = 'AR_aluno.html'
    }
    else if(is_logged === 'prof')
    {
        window.location.href = 'AR_professor.html'
    }
    else
    {
        window.location.href = 'AR_funcionario.html'
    }
}