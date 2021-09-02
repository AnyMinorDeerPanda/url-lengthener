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
    let hex = str.hexEncode()
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

    return strChars.join('').hexDecode()
}

// String.prototype.hexEncode = function() {
//     var hex, i;

//     var result = "";
//     for (i=0; i<this.length; i++) {
//         hex = this.charCodeAt(i).toString(16);
//         result += ("000"+hex).slice(-4);
//     }

//     return result
// };

String.prototype.hexDecode = function() {
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
};

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
