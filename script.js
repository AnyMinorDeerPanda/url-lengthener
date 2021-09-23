const urlParams = new URLSearchParams(window.location.search);
const urlLength = urlParams.get('aa');
const urlURL = urlParams.get('a');

if (urlURL) {
    window.location.replace(unlengthen(urlURL, urlLength));
}

function lengthenURL() {
    let url = document.getElementById('inputURL').value
    let length = document.getElementById('length').value

    let output = document.getElementById('output');
    output.value = window.location.href+ "?aa="+ length+ "&a="+ lengthen(url, length);
}

function lengthen(input, length) {
    if (validURL(input)) {
        let output = toBinary(input).replaceAll(' ', '').replaceAll('0', 'a').replaceAll('1', 'A').repeat(length);
        return output;
    } else {
        console.log('Invalid URL!')
    }
}

function unlengthen(input, length) {
    let output = toAscii(input.replaceAll('a', '0').replaceAll('A', '1').substring(input.length - (input.length / length), input.length));
    return output;
}

function copyText() {
    let textbox = document.getElementById('output')
    textbox.select();
    textbox.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

function toBinary(input) {
	var result = "";
	for (var i = 0; i < input.length; i++) {
		var bin = input[i].charCodeAt().toString(2);
		result += Array(8 - bin.length + 1).join("0") + bin;
	} 
	return result;
}

function toAscii(input) {
	var result = "";
	var arr = input.match(/.{1,8}/g);
	for (var i = 0; i < arr.length; i++) {
		result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
	}
	return result;
}