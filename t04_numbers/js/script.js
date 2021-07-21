let start = prompt('Input first number', 1);
let end = prompt('Input last number', 100);


if (start == null) {start = 1;}
if (end == null) {end = 100;}

function checkDivision(start, end) {
	let a = Number(start);
	let b = Number(end);

	for (let i = a; i <= b; i++ ) {
		let str =`${i}`
		if (i % 2 == 0) { 
			if( i % 3 == 0) { 
				if ( i % 10 == 0) {console.log(`${i} is even, is mul of 3, is mul of 10`); continue;}
			console.log(`${i} is even, is mult 3`); continue;}
			if( i % 10 == 0) {
				console.log(`${i} is even, is mult 10`); continue;
			}
		console.log(`${i} is even`);
		}	
		else if (i % 3  == 0) {
		console.log(`${i} is mult of 3`);
		}
		else {console.log(str+ ' -')}
	 }
}
checkDivision(start,end);
