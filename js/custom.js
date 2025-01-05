/* --- A place where you can add your own code -- */



function updateQRCode(e,formdata) {
 var v=e[0].value;
 if (v.length==0) {
	e[0].focus();
	return;
 }
 console.log(v);
 var elt=document.getElementById("obj-tmfbff782");
 nodeQrcode.drawQR(elt,v)
}



if (app.initialized==true) {
	//Add your code here
	thoriumapi.showNotification("Ready to generate QR Codes");
}



