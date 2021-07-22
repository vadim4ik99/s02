function addWords(obj,wrds) {
	let arr = wrds.replace(/ +(?= )/g,'').split(" ");
	obj.words = obj.words.replace(/ +(?= )/g,'');
	arr.forEach(elm => { if( obj.words.includes(elm)) {removeWords(obj,elm)} 
						else {obj.words = obj.words+' '+elm}
	
						}
	)
}

function removeWords(obj, wrds) {
	
	let arr = wrds.replace(/ +(?= )/g,'').split(" ");
	obj.words = obj.words.replace(/ +(?= )/g,'');
	arr.forEach(elm => {if( obj.words.includes(elm))
							{
								obj.words = obj.words.replace(elm,"").trim();
							}
						}
						
	)
	
	
}


function changeWords(obj, oldWrds, newWrds) {
	oldWrds = oldWrds.replace(/ +(?= )/g,'');
	newWrds = newWrds.replace(/ +(?= )/g,'');
	let arr = obj.words.split(" ");
	
	if(arr.every( elem =>{
		if (obj.words.indexOf(elem) >= 0 )
			return true;
	})) {
		obj.words = newWrds;
	}
	
}
