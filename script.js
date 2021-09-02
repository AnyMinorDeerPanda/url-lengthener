const urlParams = new URLSearchParams(window.location.search);
const urlLength = urlParams.get('a');
const urlCode = urlParams.get('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');

if (urlCode) {
    if (urlLength) {
	if (!isNaN(urlLength)) {
            window.location.replace(degibify(urlCode, urlLength));
	}
    } else () {
        window.location.replace(degibify(urlCode, 10));
    }
}

const element = document.getElementById('lengthen')
element.addEventListener("click", () => {
    var url = document.getElementById('url').value
    var length = document.getElementById('length').value
    if (validURL(url)) {
        copyToClipboard("https://aaaaaaaaaaaaaaaaaaaa.xtract.space/?a="+ length+ "aaaaaaaaaaaaaaaaaaaaaaaaaaaa="+ gibify(url, length))
        alert("Link copied to clipboard!");
    } else {
        alert("Error: Invalid URL!");
    }
});

function gibify(str, length) {
    let hex = a2hex(str)
    let hexArray = hex.split('');
	let gibChars = hexArray.map(char => {
        const chars = {
            '0': 'a',
			'1': 'à',
			'2': 'á',
			'3': 'â',
			'4': 'ã',
			'5': 'ä',
			'6': 'å',
			'7': 'æ',
			'8': 'A',
			'9': 'À',
			'a': 'Á',
			'b': 'Â',
			'c': 'Ã',
			'd': 'Ä',
			'e': 'Å',
			'f': 'Æ'
        }
		return chars[char];
	})

    let out = gibChars.join('');
	return out.repeat(length)
}

function degibify(gib) {
    let gibArray = gib.split('');
	let strChars = gibArray.map(char => {
        const chars = {
            'a': '0',
			'à': '1',
			'á': '2',
			'â': '3',
			'ã': '4',
			'ä': '5',
			'å': '6',
			'æ': '7',
			'A': '8',
			'À': '9',
			'Á': 'a',
			'Â': 'b',
			'Ã': 'c',
			'Ä': 'd',
			'Å': 'e',
			'Æ': 'f'
        }
		return chars[char];
	})

    let out = hex2a(strChars.join(''))
    return out.substring(Object.keys(out).length - (Object.keys(out).length / length), Object.keys(out).length)
}

function a2hex(str) {
  var arr = [];
  for (var i = 0, l = str.length; i < l; i ++) {
    var hex = Number(str.charCodeAt(i)).toString(16);
    arr.push(hex);
  }
  return arr.join('');
}

function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        str = str+ String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
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
