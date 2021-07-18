const Logon = require('../models/LogonModel');

exports.inscrever = (req, res) => {
    res.render('logon');
};

exports.entrar = (req, res) => {
    res.render('login');
}


exports.register = async function(req, res) {
    try {

    const logon = new Logon(req.body);
    await logon.register();

    if(logon.errors.length > 0){
        req.flash('errors', logon.errors);
        req.session.save(function(){
            return res.redirect('cadastro');
        });
        return;
    }
    
        req.flash('success', 'Seus dados foram cadastrados com sucesso!');
        req.session.save(function(){
            return res.redirect('cadastro');
        });
           

    }catch(e){
        console.log(e);
        return res.render('404');

    }
};

exports.entrada = async function(req, res) {
    try {
     const logon = new Logon(req.body);
        await logon.entrada();
        if(logon.errors.length > 0) {
        req.flash('errors', logon.errors);
        req.session.save(function() {
            return res.redirect('entrar');
            });
            return;
        }

        req.flash('success', 'Você entrou no sistema com sucesso!');
        req.session.user = logon.user;
        req.session.save(function() {
            return res.redirect('entrar');
            });
    }catch(e) {
    console.log(e);
    return res.render('404');
      }
    };
    