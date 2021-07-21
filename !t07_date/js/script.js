function getFormattedDate(obj) {
	let d = obj;
	d = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'' + d.getFullYear(),
		'0' + d.getHours(),
		'0' + d.getMinutes()
	].map(component => component.slice(-4));
	let day = obj.getDay()-1;
	
	let arrday = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
	
	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')+ ' ' +arrday[day];
	
}
