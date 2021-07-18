const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LogonSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: false, default: ''},
    usuario: {type: String, required: false, default: ''},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    endereco: {type: String, required: false, default: ''},
    criadoEm: {type: Date, default: Date.now}

});

const LogonModel = mongoose.model('Logon', LogonSchema)

class Logon {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register(){
        this.valida();
        if(this.errors.length > 0) return;

        await this.userExists();

        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt);

        this.user = await LogonModel.create(this.body);
    }

    async userExists(){
        const user = await LogonModel.findOne({email: this.body.email});
        if(this.user) this.errors.push('Usuário já existe');
    }

    valida(){
        this.cleanUp();


        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail Inválido');

        if(this.body.senha.length < 3 || this.body.senha.length >= 50) {
            this.errors.push('A senha precisa estar entre 3 e 50 caracteres');
        }
        
    }

    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            usuario: this.body.usuario,
            email: this.body.email,
            senha: this.body.senha,
            endereco: this.body.endereco
            
        };
    }

    async entrada(){
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await LogonModel.findOne({email:this.body.email});
        if(!this.user){
            this.errors.push('Usuário não existe');
            return;
        }

        if(!bcryptjs.compareSync(this.body.senha, this.user.senha)){
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }
    }

    
}

module.exports = Logon;