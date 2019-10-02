var texto = " \
Mido un metro ochenta y uno, tengo un sillon azul \
En mi cuarto hay un baul y me gusta el almendrado \
Me despierto alunado, mi madre es medio terca \
Aunque nunca estuve preso, anduve cerca \
Soy de Aries, pelo castaño, algo tacaño y no colecciono nada \
Guardo la ropa ordenada, me aburro en noche buena \
Si estornudo no hago ruido y no hablo con la boca llena \
Mjpoter MMama mama \
'Perfecto' \
";

var expresion = /[a-z|A-Z]{7,}/g
result = texto.match(expresion);
console.log(result);

var expresion2 = /[a-z]+[^aeiou ]\b/gmi;
result = texto.match(expresion2);
console.log(result);

var expresion3 = /[M][^aeiou][a-z]+/g
result = texto.match(expresion3);
console.log(result);

let texto4 = "'Perfecto' es lo que soy o bueno es dice mi 'Mami'"
let expresion4 = texto4.match(/['][a-z|A-Z]+[']/g);
console.log(expresion4);

let texto5 = "La ip de mi casa es 192.168.10.10"
let expresion5 = texto5.match(/(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})/g)
console.log(expresion5);

var horas = "\
12:30:00 \
13:60:61 \
01:11:30\
";

var expresion6 = /([0-12]{1,2})[:]([0-59]{1,2})[:]([0-59]{1,2})\b/g;
result = horas.match(expresion6)
console.log(result);

var expresion7 = /(\d{3})[-](\d{3})[-](\d{4})\b/g;

var telefono = "\
985-109-4107 \
1000-1000-1000 \
998-300-99\
998-300-0001\
";
result = telefono.match(expresion7)
console.log(result);

var expresion8 = /([a-z|0-9])+[@]([a-z|0-9])+[.]([a-z|0-9]{3})+\b/g;

var correos = "\
edoardo1jr@live.com \
juliandxjhoncena@hotmail.com \
julian09@hotmail.com\
asdfghjk\
";
result = correos.match(expresion8)
console.log(result);

let mensaje9 = "http//:www.Netflix.com";
let newMensaje9 = mensaje9.match(/\S+[.com | .net |.org]/g);
console.log(newMensaje9);

let mensaje10 = "97780"; 
let newMensaje10 = mensaje10.match(/[0-9]{5}/g);
console.log(newMensaje10);