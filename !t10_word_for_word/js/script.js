const obj = {
  words: 'newspapers newspapers  books magazines'
};

console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers   ');
console.log(obj); // {words: "newspapers books magazines radio"} 

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"} 


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
								/*let length = elm.length;
								let ind = obj.words.indexOf(elm);
								console.log(length, ind); */
								obj.words = obj.words.replace(elm,"").trim();
							}
						}
						
	)
	
	
}


function changeWords(obj, oldWrds, newWrds) {
	oldWrds = oldWrds.replace(/ +(?= )/g,'');
	newWrds = newWrds.replace(/ +(?= )/g,'');
	let arr = obj.words.split(" ");
	
	console.log(arr);
	
	console.log(oldWrds.indexOf(obj.words));
	
	if(obj.words == oldWrds) {console.log("1")}
}
