let first = prompt('Input first name');
let last = prompt('Input last name');
const reg = /^[a-z]{0,15}$/i;

if( first != null && last !=null) {

	let valid_first = first.search(reg);
	let valid_last = last.search(reg);
		
	if(valid_first == 0 && valid_last == 0) {
		first = first[0].toUpperCase() + first.slice(1);
		last = last[0].toUpperCase() + last.slice(1);
		console.log('Hi '+first+' '+last);
		alert('Hi '+first+' '+last);
	}
	else {console.log('Wrong data'); alert('Wrong data');
	}

}
else {console.log('Wrong data'); alert('Wrong data');}
