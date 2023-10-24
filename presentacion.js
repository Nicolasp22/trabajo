function surfto(form)
{ 
    var myindex=form.opciones.selectedIndex
    window.open(form.opciones.options[myindex].value,"_top");
}
