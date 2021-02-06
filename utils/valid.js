const valid = (name, email, password, cf_password) => {
    if(!name || !email || !password)
    return 'Por favor, preencha todos os campos'
    
    if (!validateEmail(email))
    return 'Email inválido'
    
    if(password.length < 6)
    return 'A senha deve ter pelo menos 6 caracteres'

    if(password !== cf_password)
    return 'Confirmação de senha não corresponde.'
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  export default valid