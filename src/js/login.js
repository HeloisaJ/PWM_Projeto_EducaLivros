const in_email = document.getElementById('in_email')
const in_password = document.getElementById('in_password')

const bt_aluno = document.getElementById('bt_aluno')
const bt_prof = document.getElementById('bt_prof')
const bt_func = document.getElementById('bt_func')

function make_login(tipo, page){
    var email = in_email.value
    var password = in_password.value

    if(email && password)
    {
        window.localStorage.setItem('login', tipo)
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