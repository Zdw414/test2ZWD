   // ZachDickinson
	// this code will match regexps that are 4 or 6 chars in length
var brown = ["bark", "meow", "gobble", "mooooooooo"];
var brow = new RegExp("^[0-9]{4}([0-9]{6})?$")
var toop = [];
for ( var i = 0; i < brown.length; i++) {
	if ( brow.test(brown[i])= true ) {
	toop.push(brown[i]);
}
}
console.log(toop);
