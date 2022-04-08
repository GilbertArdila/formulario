

//getting the form inputs
const userName=document.getElementById("name");
const mail=document.getElementById("mail");
const phone=document.getElementById("phone");
const getFormDate=document.getElementById("birth-day");
const password=document.getElementById("password");
const confirm_password=document.getElementById("confirm-password");
const button=document.getElementById("button");


 //create a function to launch error messages
 function errores(input,mensajeError,regext,mensajeId){
   
      if(!regext.test(input.value.trim())){
           mensajeId.innerText=mensajeError;
           input.style.border="1px solid red";
       }
      else{
          mensajeId.innerText=""
          input.style.border="1px solid blue";
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
   
    var actualAge=actualYear - birthYear;
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
    var mensaje=document.getElementById("date-message");

     if(calcularEdad(evento.target)<18){
        mensaje.innerText="Lo sentimos, eres menor de edad; no podemos permitir tu registro"
        getFormDate.style.border="1px solid red"
    }
    else if(getFormDate.value===""){
          mensaje.innerText="El campo no puede estar vacío"
          getFormDate.style.border="1px solid red"
    }else{
        mensaje.innerText="";
        getFormDate.style.border="1px solid blue"
    }
    
 })

 //adding blur to name´s input
 userName.addEventListener("blur",function(){
    var mensaje=document.getElementById("name-message");
    var mensajeError;
    if(userName.value===""){
        mensajeError="el campo nombre no puede estar vacio"
    }else{
        mensajeError="El formato de nombre es invalido; por favor ingresa nombre apellido sin caracteres especiales ni números"
    }
    
    errores(userName,mensajeError,regex_name,mensaje)
 })
 
//addin blur to mail´s input
mail.addEventListener("blur",function(){
    var mensaje=document.getElementById("mail-message");
    var mensajeError;
    if(mail.value===""){
        mensajeError="el campo E-mail no puede estar vacio"
    }else{
        mensajeError="El formato de correo electronico es invalido; debe llevar @ y un punto como minimo  "
    }
    errores(mail,mensajeError,regex_email,mensaje)
 })

 //addin blur to phone's input
 phone.addEventListener("blur",function(){
    var mensaje=document.getElementById("phone-message");
    var mensajeError;
    if(phone.value===""){
        mensajeError="el campo no puede estar vacio ni contener caracteres especiales como '-'"
    }else{
        mensajeError="El número telefonico debe llevar 10 dígitos"
    }
    errores(phone,mensajeError,regex_phone,mensaje)
 })

  
  //addin blur to password's input

 password.addEventListener("blur",function(){
    var mensaje=document.getElementById("password-message");
    var mensajeError;
    if(password.value===""){
        mensajeError="el campo no puede estar vacio"
    }else{
        mensajeError="La contraseña debe contener entre 6 y 12 caracteres, almenos una letra mayúscula, una letra minúscula, un número y un caracter especial (@*$#)"
    }
    errores(password,mensajeError,regex_password,mensaje)
 })
   //addin blur to confirm-password's input

 confirm_password.addEventListener("blur",function(){
    var mensaje=document.getElementById("confirm-message");
    if(confirm_password.value != password.value){
        mensaje.innerText="La contraseña no coincide"
        confirm_password.style.border="1px solid red"
    }else{
        mensaje.innerText=""
        confirm_password.style.border="1px solid blue"
    }
    
 })


