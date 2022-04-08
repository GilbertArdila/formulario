
let WrongInput=true;

//getting the form inputs
const userName=document.getElementById("name");
const mail=document.getElementById("mail");
const phone=document.getElementById("phone");
const getFormDate=document.getElementById("birth-day");
const password=document.getElementById("password");
const confirm_password=document.getElementById("confirm-password");

//getting buttons form and sections
const form=document.getElementById("my-form");
const button=document.getElementById("button");
const error_message_container=document.getElementsByClassName("message");
const closeButton=document.getElementById("close");

//getting the message section
const message_box=document.getElementById("checked");

 //create a function to launch error messages
 function errores(input,mensajeError,regext,mensajeId){
   
      if(!regext.test(input.value.trim())){
           mensajeId.innerText=mensajeError;
           input.style.border="1px solid red";
          

       }
      else{
          mensajeId.innerText=""
          input.style.border="1px solid blue";
          WrongInput=false;
          
       }
   }

//checking if person is older than 18 years
function calcularEdad (getDate){
    //getting the input´s value
    getDate=getFormDate.value;
    const actualDate=new Date();
    const actualYear=parseInt(actualDate.getFullYear());
    const actualMonth=parseInt(actualDate.getMonth()+1);
    const actualDay=parseInt(actualDate.getDate());
  
    const birthYear=parseInt(String(getDate).substring(0,4));
    const birthMonth=parseInt(String(getDate).substring(5,7));
    const birthDay=parseInt(String(getDate).substring(8,10));
   
    let actualAge=actualYear - birthYear;
    if(actualMonth<birthMonth){
        actualAge--;
    }
    else if(actualDay<birthDay){
        actualAge--;
    }
    return actualAge;
}

//adding blur to the date input to check age
 getFormDate.addEventListener("blur", function(evento){
    let mensaje=document.getElementById("date-message");

     if(calcularEdad(evento.target)<18){
        mensaje.innerText="Lo sentimos, eres menor de edad; no podemos permitir tu registro"
        getFormDate.style.border="1px solid red"
        WrongInput=true;
    }
    else if(getFormDate.value===""){
          mensaje.innerText="El campo no puede estar vacío"
          getFormDate.style.border="1px solid red"
          WrongInput=true;
    }else{
        mensaje.innerText="";
        getFormDate.style.border="1px solid blue"
        WrongInput=false;
    }
    
 })

 //adding blur to name´s input
 userName.addEventListener("blur",function(){
    let mensaje=document.getElementById("name-message");
    let mensajeError;
    if(userName.value===""){
        mensajeError="el campo nombre no puede estar vacio"
        WrongInput=true;
    }else{
        mensajeError="El formato de nombre es invalido; por favor ingresa nombre apellido sin caracteres especiales ni números"
        WrongInput=true;
    }
    
    errores(userName,mensajeError,regex_name,mensaje)
 })
 
//addin blur to mail´s input
mail.addEventListener("blur",function(){
    let mensaje=document.getElementById("mail-message");
    let mensajeError;
    if(mail.value===""){
        mensajeError="el campo E-mail no puede estar vacio"
        WrongInput=true;
    }else{
        mensajeError="El formato de correo electronico es invalido; debe llevar @ y un punto como minimo  "
        WrongInput=true;
    }
    errores(mail,mensajeError,regex_email,mensaje)
 })

 //addin blur to phone's input
 phone.addEventListener("blur",function(){
    let mensaje=document.getElementById("phone-message");
    let mensajeError;
    if(phone.value===""){
        mensajeError="el campo no puede estar vacio ni contener caracteres especiales como '-'"
        WrongInput=true;
    }else{
        mensajeError="El número telefonico debe llevar 10 dígitos"
        WrongInput=true;
    }
    errores(phone,mensajeError,regex_phone,mensaje)
 })

  
  //addin blur to password's input

 password.addEventListener("blur",function(){
    let mensaje=document.getElementById("password-message");
    let mensajeError;
    if(password.value===""){
        mensajeError="el campo no puede estar vacio"
        WrongInput=true;
    }else{
        mensajeError="La contraseña debe contener entre 6 y 12 caracteres, almenos una letra mayúscula, una letra minúscula, un número y un caracter especial (@*$#)"
        WrongInput=true;
    }
    errores(password,mensajeError,regex_password,mensaje)
 })
   //addin blur to confirm-password's input

 confirm_password.addEventListener("blur",function(){
    let mensaje=document.getElementById("confirm-message");
    if(confirm_password.value != password.value){
        mensaje.innerText="La contraseña no coincide"
        confirm_password.style.border="1px solid red"
        WrongInput=true;
    }else{
        mensaje.innerText=""
        confirm_password.style.border="1px solid blue"
        WrongInput=false;
    }
    
 })

 //adding listener to the buttons and message section
 button.addEventListener("click", function(evennt){
    event.preventDefault();
    console.log(WrongInput)
    checked_section_filler(WrongInput)
 })

 function checked_section_filler(WrongInput){
     const header=document.getElementById("title");
     const body=document.getElementById("checked_message");
     message_box.style.display="flex"

     if(!WrongInput){
           header.innerHTML="Envio exitoso!!";
           body.innerText="Tus datos se han enviado correctamente";
           message_box.style.border="1px solid blue";
           form.reset();
           
     }else{
        header.innerHTML="Error!!"
        body.innerText="Por favor revisa que los campos esten diligenciados correctamente"
        message_box.style.border="1px solid red"
     }


 }
 closeButton.addEventListener("click", function(event){
    event.preventDefault();
    message_box.style.display="none"
 })
 //whatch password
 const ver=document.getElementById("watch-img");

 ver.addEventListener("click", function(){
     if( password.type==="password" ||  confirm_password.type==="password"){
        password.type="text";
        confirm_password.type="text";
     }else{
        password.type="password";
        confirm_password.type="password";
     }
      
      
       
 })