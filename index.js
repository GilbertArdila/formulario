

//getting the form inputs
const userName=document.getElementById("name");
const mail=document.getElementById("mail");
const phone=document.getElementById("phone");
const getFormDate=document.getElementById("birth-day");
const password=document.getElementById("password");
const confirm_password=document.getElementById("confirm-password");
const button=document.getElementById("button");




//checking if person is older than 18 years
function calcularEdad (getDate){
    //obtenemos el valor del input
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
    }else{
        mensaje.innerText="";
        getFormDate.style.border="1px solid blue"
    }
 })

 userName.addEventListener("blur",function(){
    var mensaje=document.getElementById("name-message");
    console.log(userName.value)
    if(regex_name.test(userName.value.trim())){
        mensaje.innerText="";
        userName.style.border="1px solid blue"
    }else{
        mensaje.innerText="El formato de nombre es invalido; por favor ingresa nombre apellido sin caracteres especiales ni números ";
        userName.style.border="1px solid red"
    }
 })



