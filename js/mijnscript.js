document.write("AAAAAAAAAAAAAAAAAAAAAAA");

var getal1 = 25;
var getal2 = 50;

var getal3 = getal1 + getal2;

document.write(getal3);

if (confirm("Get geolocation?")) {
	navigator.geolocation.getCurrentPosition((data) => {
		document.write(data.coords.latitude + " " + data.coords.longitude);
	});
}

//opdracht 
