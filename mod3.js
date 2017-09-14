
const eliminar = (list)=>{
	men = list[0];
	for (i=1;i<list.length;i++){
		if (list[i]<men){
			men = list[i];
			j=i;
		}
	}
	list.splice(j,1);
	
	return list;
};

module.exports={
	eliminar
};		
