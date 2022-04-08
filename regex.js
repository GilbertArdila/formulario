//acepatamos caracteres almenos una vez, que no sean salto de linea, de  la a-z, A-Z,0-9,caracteres especiales @*$#, y no acepamos =+-/_ ni saltos de linea, ni espacio en blanco, min 6 max 12
const regex_password=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#*])(?!.*[ +-/_=]).{6,12}$/)

//validamos nombre espacio apellido, puede o no iniciar con mayusculas, solo admite letras; no caracteres especiales, no números
const regex_name = new RegExp(/^[ÁÉÍÓÚA-Z]?[a-záéíóú]+[\s]+([ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/) ;

//regext recomendado por la w3c
const regex_email=new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)

//validamos solamente numeros, le damos una longitud de 10 dígitos
const regex_phone=new RegExp(/^[0-9](\d{9})$/)
