(function () {

    let formulario = document.getElementById('form');
    formulario.addEventListener('submit', enviar);
    
    let email = document.getElementById('email');
    email.addEventListener('change', femail);

    let nombre = document.getElementById('nombre');
    nombre.addEventListener('change', fnombre);

    let pass = document.getElementById('pass');
    pass.addEventListener('change', fpass);

    let pass2 = document.getElementById('pass2');
    pass2.addEventListener('change', fpass2);

    function enviar(e) {
        
        let email = femail();
        let nombre = fnombre(); 
        let pass = fpass();
        let pass2 = fpass2();
        if (!nombre || !email || !pass || !pass2) {
            e.preventDefault();        
        }else{
            alert("Registro completado");
        }
    }

    function fnombre() {
        let elemento = document.getElementById('nombre');
        let error = document.getElementById('mensajeN');
        let formato = /^[A-Z]+$/i;
        let r = false;     
        
        if ( elemento.value.length > 0 ) {
          let numero = formato.test(elemento.value) ? true : false;
            error.innerText = numero ? ' ' : '** Campo incorrecto, sólo se admiten letras';
            if(!numero){
                elemento.classList.add('incorrecto')
              }else{
                elemento.classList.remove('incorrecto');
                elemento.classList.add('correcto')
              };
            r = true;   
        } else {
         error.innerText = '** Rellene este campo'; 
         elemento.classList.add('incorrecto');       
        }        
        return r;
    }

    function femail() {
        let email = document.getElementById('email');
        let regEgex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
       
        let r = false;
        let error = document.getElementById('mensajeE');

        if ( email.value.length > 0 ) {
            let contenido = regEgex.test(email.value) ? true : false;
              error.innerText = contenido ? ' ' : 'Formato inválido. Ejemplo: correo@correo.com';
              if(!contenido){               
                email.classList.add('incorrecto')
              }else{
                email.classList.remove('incorrecto');
                email.classList.add('correcto')
              };
              r = true;   
          } else {
           error.innerText = '** Rellene este campo';
           email.classList.add('incorrecto');      
          }        
        return r;
    }
   
    function fpass() {
        let pass = document.getElementById('pass');              
        let r = false;
        let error = document.getElementById('mensajeP');

        if ( pass.value.length > 0 ) {
            let contenido = pass.value.length <= 8 ? true : false;
              error.innerText = contenido ? ' ' : 'Máximo 8 caracteres';
              if(!contenido){
                pass.classList.add('incorrecto')
              }else{
                pass.classList.remove('incorrecto');
                pass.classList.add('correcto')
              };
              r = true;   
          } else {
           error.innerText = '** Rellene este campo';
           pass.classList.add('incorrecto');      
          }        
        return r;
    }

    function fpass2() {
        let pass = document.getElementById('pass');   
        let pass2 = document.getElementById('pass2');              
        let r = false;
        let error = document.getElementById('mensajeP2');

        if ( pass2.value.length > 0 ) {
            let contenido = pass.value === pass2.value ? true : false;
              error.innerText = contenido ? ' ' : 'Las contraseñas no coinciden';
              if(!contenido){
                pass2.classList.add('incorrecto')
              }else{
                pass2.classList.remove('incorrecto');
                pass2.classList.add('correcto')
              };
              r = true;   
          } else {
           error.innerText = '** Rellene este campo';
           pass2.classList.add('incorrecto');      
          }        
        return r;
    }



})();
