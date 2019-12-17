document.forms['form'].addEventListener('submit', function (event) {
  event.preventDefault();
});
function checkBlank() {
  var name = document.forms['form'].elements[0].value;
  var email = document.forms['form'].elements[1].value;
  if (name == "" && email == "") {
    alert("Enter your details");
  }
  else if (name == "") {
    alert("Enter a valid name");
  }
  else if (email == "") {
    alert("Please enter a valid email");
  }
  else {
    alert("Dear " + name + "Thank you.Your feedback has been successfully submitted");
    document.getElementById('para').innerHTML = "Dear " + name + " Your feedback was successfully submitted.Thank you."
  }
}
function _t(a) { return document.getElementsByTagName(a); }
function _i(a) { return document.getElementById(a); }
function _c(a) { return document.getElementsByClassName(a); }
function _f(a) { return document.forms[a]; }
function _p(a) { return a.preventDefault(); }

var globVarA;
debugger;
_i("close").addEventListener('click', function () { this.removeEventListener('click', choose); _i('details').style.display = "none"; });
_i("closeb").addEventListener('click', function () { this.removeEventListener('click', choose); _i('cart').style.display = "none"; });
_i("viewCart").addEventListener('click', function () { this.removeEventListener('click', choose); _i('details').style.display = "none"; _i('cart').style.display = "block"; });
_f('details').addEventListener('submit', function (e) { _p(e); })
function btnCust() {
  var a, b, c;
  a = _t('button'); b = a.length;
  for (c = 0; c < b; c++) {
    a[c].addEventListener('click', choose);
  }
} btnCust();
function choose() {
  var a, b, c, d;
  a = this.parentNode.children;
  _i('details').style.display = "block";
  _i('detailsName').innerText = a[1].innerText;
  _i('detailsImg').src = a[0].src;
  d = a[2].innerText.replace('price: Ksh.', '');
  globVarA = parseInt(d.replace(' ', ''));
  _i('detailsPrice').innerText = globVarA;
  _f('details')[0].value = 1;
  for (c = 0; c < _f('details').length; c++) { _f('details')[c].addEventListener('change', dtlChange); }
}
function dtlChange() {
  var a, b, c, d, e, f, g;
  a = parseFloat(qnty()); b = parseFloat(ram()); c = parseFloat(storage()); d = parseFloat(cpu()); e = parseFloat(display());
  _i('detailsPrice').innerText = a * (globVarA + b + c + d + e);
  f = _i('detailsPrice').innerText = a * (globVarA + b + c + d + e);
  // _i('buyBtn').addEventListener('click', function () {
  //   alert("Grand Tota:Ksh " + f);
  //   if (true) {
  //     confirm("Do you want it delivered? Remember that cost depend on location");
  //     prompt('Enter location');
  //     alert(' Delivery will be made soon. Thank you for using our services.');
  //     return 0;
  //   }


  // });
}


function qnty() {
  var a = parseInt(_f('details')[0].value);
  if (a < 1) { _f('details')[0].value = 1; a = 1; }
  return a;
}

function ram() {
  switch (parseInt(_f('details')[1].value)) {
    case 1: return 0; break;
    case 2: return 2 * globVarA * 0.05; break;
    case 3: return 4 * globVarA * 0.05; break;
    case 4: return 8 * globVarA * 0.05; break;
    case 5: return 16 * globVarA * 0.05; break;
    default: alert(_f('details')[1].value + 'invalid Selection Ram'); break;
  }
}
function storage() {
  switch (parseInt(_f('details')[2].value)) {
    case 1: return 0; break;
    case 2: return 2 * globVarA * 0.1; break;
    case 3: return 4 * globVarA * 0.1; break;
    case 4: return 8 * globVarA * 0.1; break;
    case 5: return 16 * globVarA * 0.1; break;
    default: alert(_f('details')[2].value + 'invalid Selection Storage'); break;
  }
}
function cpu() {
  switch (parseInt(_f('details')[3].value)) {
    case 1: return 0; break;
    case 2: return 2 * globVarA * 0.2; break;
    case 3: return 4 * globVarA * 0.2; break;
    case 4: return 8 * globVarA * 0.2; break;
    case 5: return 16 * globVarA * 0.2; break;
    default: alert(_f('details')[3].value + 'invalid Selection cpu'); break;
  }
}
function display() {
  switch (parseInt(_f('details')[4].value)) {
    case 1: return 0; break;
    case 2: return 1 * globVarA * -0.1; break;
    case 3: return 2 * globVarA * 0.2; break;
    case 4: return 2 * globVarA * 0.1; break;
    case 5: return 4 * globVarA * 0.4; break;
    case 6: return 4 * globVarA * 0.3; break;
    default: alert(_f('details')[4].value + 'invalid Selection display'); break;
  }
}


