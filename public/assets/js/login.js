
btnLogin = document.querySelector('#btn-login');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let card = document.querySelector('.card');

btnLogin.onclick = function() {
let emailLogin = email.value;
let senhaLogin = senha.value;

verificacao();


function verificacao() {
    if(emailLogin == '' && senhaLogin == ''){
        spanEmailSenha();
        
    }else if(emailLogin != '' && senhaLogin == ''){
        spanSenha();
    
       
    }else if(emailLogin == '' && senhaLogin != ''){
        spanEmail();
       
    }else {
        spanSuccess();
       
    }
        
    };


    function spanEmail() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');

        let mensagem = document.createTextNode('Digite seu email');

        span.appendChild(mensagem);

        card.appendChild(span);
    };

    function spanSenha() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');

        let mensagem = document.createTextNode('Digite sua senha');

        span.appendChild(mensagem);

        card.appendChild(span);
    };

    function spanEmailSenha() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');

        let mensagem = document.createTextNode('Digite seu email e senha');

        span.appendChild(mensagem);

        card.appendChild(span);
    };

    function spanSuccess() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-success');

        let mensagem = document.createTextNode('OK');

        span.appendChild(mensagem);

        card.appendChild(span);
        paginaInicial();

    };


function removerSpans() {
    let spans = document.querySelector('span');

        for(let i = 0; i < spans.length; i++){
            card.removeChild(spans[i]);
        }   

    };

}
