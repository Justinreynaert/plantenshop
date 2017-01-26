/**
 * Created by cyber07 on 9/01/2017.
 */


$(function(){

    $advZoeken = $('#adv_zoeken');
    $advZoekenLink = $('#adv_zoeken_link');

    //$advZoeken.hide();

    //lees localstorage

    var zoek = localstorage.getItem("advZoeken");
    var setting = (zoek!=0 && zoek!=1)?0:zoek;

    //onmiddelijkg toepassen
    toggleZoeken(setting,$advZoekenLink,$advZoeken);

    $advZoekenLink.click(function(e){
        e.preventDefault();
        setting = 1 - setting; //bitwise
        toggleZoeken(setting,$(this),$advZoeken);
        localstorage.setItem("advZoeken",setting);
    });

    $advZoekenLink.click(function(e){
        e.preventDefault();
        toggleZoeken($(this),$advZoeken)
    });

    // coe adv zoeken/verbergen, slider

    $("#plantenlijst").dataTable();

});

function toggleZoeken($link, $el) {
    /*
    @$link = de hyperlink
    @$el = het element dat getoggled moet worden
     */

    $el.toggle('slow', function(){
        tekst = ($el.css('display')=="none")?"geavanceerd zoeken":"eenvoudig zoeken";
        $link.text(tekst);
    })

}