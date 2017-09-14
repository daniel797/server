

const validar = (nota)=>{
	c = typeof nota;
	if (c == "number"){
		return true;
	}
	else
		return false;
};

module.exports ={
	validar
};

