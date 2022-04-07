//acepatamos caracteres almenos una vez, que no sean salto de linea, de  la a-z, A-Z,0-9,caracteres especiales @*$#, y no acepamos =+-/_ ni saltos de linea, ni espacio en blanco, min 6 max 12
const regex_password=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#*])(?!.*[ +-/_=]).{6,12}$/)

const password="M@ry0208";
//console.log (regex_password.test(password));

//obtenemos el input
const getFormDate=document.getElementById("birth-day");
//comprobar que la persona sea mayor de 18 años

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
getFormDate.addEventListener("blur", function(evento){
  
    if(calcularEdad(evento.target)<18){
        const mensaje=document.getElementById("date-message");
        mensaje.innerText="Lo sentimos, eres menor de edad; no podemos permitir tu registro"
        getFormDate.style.border="1px solid red"
    }
})