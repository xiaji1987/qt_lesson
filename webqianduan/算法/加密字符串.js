function encode (str) {
	return btoa(encodeURIComponent(str));
}

function decode (str) {
	return decodeURIComponent(atob(str));
}
console.log(encode('nasuifhau'))