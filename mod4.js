const prom = (list)=>{
	c=0;
	suma=0;
	for(i=0;i<list.length;i++){
		suma=suma+list[i];
		c=c+1;
	}
	p=suma/c;
	return p;
};

module.exports={
	prom
};






