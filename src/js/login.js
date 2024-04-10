var is_logged = ''

const in_email = document.getElementById('in_email')
const in_password = document.getElementById('in_password')

const error = document.getElementById('error')

const bt_aluno = document.getElementById('bt_aluno')
const bt_prof = document.getElementById('bt_prof')
const bt_func = document.getElementById('bt_func')

function make_login(tipo, page){
    var email = in_email.value
    var password = in_password.value

    if(email && password)
    {
        is_logged = tipo
        window.location.href = page
        error.style.display = 'none'
    }
    else
    {
        error.style.display = 'block'
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