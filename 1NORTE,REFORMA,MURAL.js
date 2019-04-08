function adelante() {
  javascript:AvanzaFoto();
    window.setTimeout("par()",2500);
}

function non() {
 javascript:Ampliar(1);
   window.setTimeout("adelante()",1000);
}

function par() {
 javascript:Ampliar(0);
   window.setTimeout("non()",3000);
}
non()
