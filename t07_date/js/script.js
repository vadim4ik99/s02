function getFormattedDate(obj) {
	let d = obj;
	d = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'00' + d.getHours(),
		'00' + d.getMinutes()
	].map(component => component.slice(-2));
	let year = obj.getFullYear();
	let day = obj.getDay()-1;
	
	let arrday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
	
	return d.slice(0, 2).join('.') + ' '+year+ ' ' + d.slice(2).join(':')+ ' ' +arrday[day];
	
}
