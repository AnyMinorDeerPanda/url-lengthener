const urlParams = new URLSearchParams(window.location.search);
const aCode = urlParams.get('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');

if (aCode) {
    //window.location.replace(degibify(aCode));
    console.log(degibify(aCode))       
}

const element = document.getElementById('lengthen')
element.addEventListener("click", () => {
    var url = document.getElementById('url').value
    if (validURL(url)) {
        copyToClipboard("https://aaaaaaaaaaaaaaaaaaaa.xtract.space/?aaaaaaaaaaaaaaaaaaaaaaaaaaaa="+ gibify(url))
        alert("Link Created for "+ url);
    } else {
        alert("Error: Invalid URL!");
    }
});

function gibify(str) {
    let hex = a2hex(str)
    let hexArray = hex.split('');
	let gibChars = hexArray.map(char => {
        const chars = {
            "0": "غ",
            "1": "ب",
            "2": "ج",
            "3": "د",
            "4": "ه",
            "5": "و",
            "6": "ز",
            "7": "ح",
            "8": "ط",
            "9": "ي",
            "A": "ك",
            "B": "ل",
            "C": "م",
            "D": "ن",
            "E": "ص",
            "F": "ع",
        }
		return chars[char];
	})

	return gibChars.join('');
}

function degibify(gib) {
    let gibArray = gib.split('');
	let strChars = gibArray.map(char => {
        const chars = {
            "غ": "0",
            "ب": "1",
            "ج": "2",
            "د": "3",
            "ه": "4",
            "و": "5",
            "ز": "6",
            "ح": "7",
            "ط": "8",
            "ي": "9",
            "ك": "A",
            "ل": "B",
            "م": "C",
            "ن": "D",
            "ص": "E",
            "ع": "F",
        }
		return chars[char];
	})

    return hex2a(strChars.join(''))
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
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
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
