/*$(function() {
	if(jQuery().validate) { console.log("validate geladen"); }

	else { console.log("validate NIET geladen");}
}); 
*/

$(function() {

	// alle dialoogvensters: instellingen
	$(".dialoogvenster").dialog({
		autOpen: false,
		buttons: {
			"OK": function() {$(this).dialog("close");}
		},
		modal:true,
		width: 600
	});

	// de dialoog Button
	$('#dialog_link_username')
		.button({icons: {secondary: "ui-icon-help"}})
		.click(function(e){
			e.preventDefault();
			$('#dialog_username').dialog('open');
	});

	$.validator.addMethod("wwCheck", function(value, element){
		return value.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/);
	});

	$("#geboren").datepicker({
		dateFormat: "yy-mm-dd",
		yearRange: '-80:+00',
		changeMonth: true,
		changeYear: true
	});

	$("#regForm").submit(function(e){e.preventDefault() })

	$("#promos").click(function(){
		if ($(this).is(':checked')) {
			$("#email").removeAttr('disabled')[0].focus();
		}
		else {
			$("#email").attr('disabled', true).val("");
		}
	})

	var $foutBoksen = $('div.foutBox');

	$('#regForm').validate({

		debug: true,

		/*errorPlacement: function(error,element) {
			var $ctrlbx = element.parents("div.controlbox");

			if($ctrlbx.length!=0) {
				error.insertAfter($ctrlbx);
			}
			else {
				error.insertAfter(element);
			}
		},*/



		rules: {
			username:{
				required: true,
				minlength:8
			},

			ww1: {
				wwCheck:true
			},

			ww2: {
				equalTo: "#ww1"
			},

			vnaam: "required",
			fnaam: "required",

			postnr: {
				required: true,
				digits: true,
				minlength: 4,
				maxlength: 4
			},

			geboren: {
				required: true,
				dateISO: true
			},

			sexe: "required",

			"ruimte[]":"required",

			"soort_id[]": {
				required:true,
				rangelength:[1,4]
			},

			email: {
				required: "#promos:checked",
				email:true
			}


		},

		messages:{
			vnaam: "voornaam is verplicht",
			postnr: {
				required: "de postcode is verplicht",
				digits: "een postcode bestaat enkel uit getallen",
				minlength: "een postcodenummer bestaat uit exact 4 getallen",
				maxlength: "een postcodenummer bestaat uit exact 4 getallen"
			},

			geboren: {
				required: "geboortedatum moet ingevuld zijn",
				dateISO: "de datum moet het formaat YYYY-MM-DD hebben"
			},

			sexe: "kies uw geslacht",

			"ruimte[]":"kies minstens &eacute;&eacute;n optie",

			"soort_id[]":"kies minstens &eacute;&eacute;n soort maar niet meer dan 4",

			username:"uw gebruikersnaam is verplicht en moet minimum 8 karakters hebben",

			ww1:"het wachtwoord moet min 8 karakters lang zijn en minster &eacute,&eacute,nkleine letter, 1 HOOFDLETTER 1 getal en 1 speciaal karakter (@#$%^&+=) bevatten",
		
			ww2: "wachtwoord niet identiek",

			email: {
				required: "Een emailadres is nodig om u te kunnen contacteren",
				email: "het emailadres is ongeldig"
			}
		},

		errorContainer: $foutBoksen,
		errorLabelContainer: $("ul", $foutBoksen),
		wrapper: "li",

		submitHandler:function(form){

			form.submit();
		}
	})
});




// eind doc
