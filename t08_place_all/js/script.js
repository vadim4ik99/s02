function sortEvenOdd(arr) {
	return arr.sort((a,b) => (a%2-b%2) || (a%2 ? a-b : a-b))
}
