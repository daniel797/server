console.log("Iniciando indic.js");

const http=require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3001;


const test = require('./mod1')
const test2 = require('./mod2')
const test3 = require('./mod3')
const test4 = require('./mod4')

console.log(test.list);


a=test.list;

console.log("Iniciando modulo 2");
for (i=0;i<a.length;i++){
	if (test2.validar(a[i]) == false){
		a[i]=Math.round(Math.random()*20);
	}
}

console.log("Nueva lista");
console.log(a);

console.log("Iniciando modulo 3");

console.log(test3.eliminar(a));

console.log("Iniciando modulo 4");

console.log("el promedio es: "+test4.prom(a));


const server = http.createServer((req,res)=>{
	res.statusCode=200;
	res.writeHead(200,{"Content-Type":"text/html"});
	fs.readFile('./indic.html',(error,content)=>{
		res.write(content);
		res.end();
	});
});

server.listen(port,hostname,() =>{
	console.log("servidor corriendo en "+ `https://${hostname}:${port}/`);
});

