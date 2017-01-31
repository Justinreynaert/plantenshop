/**
 * Created by cyber07 on 9/01/2017.
 */


$(function(){


    var oTable = $("#plantenlijst").dataTable({
        "sAjaxSource": "services/ajax_json_dt_planten.php",
        "fnServerData": function(sSource, aoData, fnCallback) {
          $.getJSON(    sSource,
                        $('form').serializeArray(),
                        function(json) {fnCallback(json)});

              },
        "bPaginate":true,
        "bSort":true,
        "iDisplayLenght": 20,
        //"iDisplayStart": 20,
        "sPaginationType": "full_numbers",
        "aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Alle records"]],
        "bProcessing":true,
        "aaSorting": [[6,'asc'],[2,'desc']],
        "aoColumnDefs": [
            {"bVisible": false, "aTargets": [ 5 ] },
            {"bSortable": false, "aTargets": [ 2,6 ] },
            {"asSorting": ["desc"], "aTargets": [ 3 ] },
            {"bSearchable": false, "sTitle": "Rubriek", "aTargets": [ 6 ] },
            {"sTitle": "Lengte", "aTargets": [ 2 ] },
            {"sClass": "dt_fluo", "aTargets": [ 0 ] }

        ],

        "oLanguage": {"sUrl":"js/vendor/DataTables-1.10.13/media/js/datatables.nederlands.txt"}

    });




    $advZoeken = $('#adv_zoeken');
    $advZoekenLink = $('#adv_zoeken_link');

    //$advZoeken.hide();

    //lees localstorage

  /*  var zoek = localStorage.getItem("advZoeken");
    var setting = (zoek!=0 && zoek!=1)?0:zoek;*/

    //onmiddelijkg toepassen
   /* toggleZoeken(setting,$advZoekenLink,$advZoeken);

    $advZoekenLink.click(function(e){
        e.preventDefault();
        setting = 1 - setting; //bitwise
        toggleZoeken(setting,$(this),$advZoeken);
        localstorage.setItem("advZoeken",setting);
    });

    $advZoekenLink.click(function(e){
        e.preventDefault();
        toggleZoeken($(this),$advZoeken)
    });*/

    // coe adv zoeken/verbergen, slider

    // datatables

    /**** event handlers ****/

    $("#kleur, #soort_id").change(function(){
        herlaadTabel();
    });

    $("#slider-range-hoogte").slider({
        range: true,
        values:[0,5000],
        min: 0,
        max: 5000,
        step: 10,
        slide:function(event, ui) {
            $("#hoogte-min").val($(this).slider("values",0));
            $("#hoogte-max").val($(this).slider("values",1));
            herlaadTabel();

        },

        stop: function(event,ui) {
            $("#hoogte-min").val($(this).slider("values",0));
            $("#hoogte-max").val($(this).slider("values",1));
            herlaadTabel();
        }

    });

    function herlaadTabel() {
        //ajaxcall vr nieuwe gegevens vanuit sAjaxSource
        var qs = $('form').serialize();
        var qsa = $('form').serializeArray();
        console.log(qs);
        console.log(qsa);




        oTable.fnReloadAjax();
    }

    function toggleZoeken($lienk, $el) {
        /*
         @$link = de hyperlink
         @$el = het element dat getoggled moet worden
         */

        $el.toggle('slow', function(){
            tekst = ($el.css('display')=="none")?"geavanceerd zoeken":"eenvoudig zoeken";
            $lienk.text(tekst);
        })

    }



});

