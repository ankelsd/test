
// certificate number selected
$(document).on('click', '.chkSelectAll', function () {

	if(this.checked) {
		$('.astchk').each(function() {
			this.checked = true;
		});
	} else {
		$('.astchk').each(function() {
			this.checked = false;
		});
	}
	$('.astchk').click(function () {

		if ($('.astchk:checked').length == $('.astchk').length){
			document.getElementById("chkSelectAll").checked = true;
		} else {
			document.getElementById("chkSelectAll").checked = false;
		}
	});
});



	// container certificate id get
function noteadd(rowid,container_id,container_name,seal_no){

	$("#note_container_no").html(container_name);
	$("#note_seal_no").html(seal_no);

	$("#message").val('');
	$("#fileupload").val('');
	$("#conatiner_id").val(container_id);

	$("#note_certificate_id").val('');
	$("#note_contract_id").val('');
	$('#note_message_body').html('');

	var input=$('#message');
	var element=input;
	var error_ueleent=$("#doc", element.parent());
	error_ueleent.removeClass("error_show").addClass("error");
	input.removeClass("invalid").addClass("valid");

	var murl = document.URL;
	var arr = murl.split('admin/');
	var urlgt = arr[0];

	$.ajax({
      type: "GET",
	  url: urlgt+"admin/warehouse/container-certno",
      data: "container_id="+encodeURIComponent(container_id),
      beforeSend: function() {

      }, success: function(response) {

			$("#note_certificate_id").val(response['certificate_number']);
			$("#note_contract_id").val(response['contract_number']);

			console.log("certificate_no", response['certificate_number']);
			console.log("contract_number", response['contract_number']);

			dataloadfn();
        }
    });
}


function deleteid(gtid,cnid){
	$("#deleteids").val(cnid);
	$("#deleterw").val(gtid);
}


function deletedid(){

	var murl = document.URL;
	var arr = murl.split('admin/');
	var urlgt=arr[0];

	var dlid = $("#deleteids").val();
	var rlidrw = $("#deleterw").val();

	$.ajax({
      type: "get",
      url: urlgt+"admin/warehouse/container-delete",
      data: "container_id="+encodeURIComponent(dlid),
      beforeSend: function() {

      }, success: function(response) {

		//$("#row_"+rlidrw).hide();
		setTimeout(function(){ window.location.href = urlgt+"admin/warehouse/container"; }, 60);
		console.log("loaddatas", response);
        }
    });
}

function redata(gtid){
	$("#rws_"+gtid).show();
	$("#rw_"+gtid).hide();
	$('#data_'+gtid).remove();
}

function sldata(gtid,woid){

var murl = document.URL;
var arr = murl.split('admin/');
var urlgt=arr[0];

    $.ajax({
      type: "get",
      url: urlgt+"admin/warehouse/container-data",
      data: "container_id="+encodeURIComponent(woid),
      beforeSend: function() {

      }, success: function(response) {

		console.log("loaddatas", response);

		$('#row_'+gtid).after('<tr id="data_'+gtid+'"><td colspan="9" class="tbl-2-td"><div class="loaddatas_'+gtid+'"></div></td></tr>');
		$(".loaddatas_"+gtid).html(response);

		$("#rws_"+gtid).hide();
		$("#rw_"+gtid).show();

        }
    });
}



// Edit Container //
$(document).ready(function() {

$('#OriginPort').on('change', function() {

	var input=$(this);
	var is_name=input.val();
	if(is_name){
		var element=input;
		var error_ueleent=$("#nam1", element.parent());
		error_ueleent.removeClass("error_show").addClass("error");
		input.removeClass("invalid").addClass("valid");
	} else {
		var element=input;
		var error_ueleent=$("#nam1", element.parent());
		error_ueleent.removeClass("error").addClass("error_show");
		input.removeClass("valid").addClass("invalid");
	}
});
$('#DestinationPort').on('change', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){
		var element=input;
		var error_ueleent=$("#nam2", element.parent());
		error_ueleent.removeClass("error_show").addClass("error");
		input.removeClass("invalid").addClass("valid");
	} else {
		var element=input;
		var error_ueleent=$("#nam2", element.parent());
		error_ueleent.removeClass("error").addClass("error_show");
		input.removeClass("valid").addClass("invalid");
	}
});
$('#message').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){
		var element=input;
		var error_ueleent=$("#doc", element.parent());
		error_ueleent.removeClass("error_show").addClass("error");
		input.removeClass("invalid").addClass("valid");
	} else {
		var element=input;
		var error_ueleent=$("#doc", element.parent());
		error_ueleent.removeClass("error").addClass("error_show");
		input.removeClass("valid").addClass("invalid");
	}
});


$(".sv-btn").click(function(event){

	var form_data=$("#addcontainer").serializeArray();
	var error_free=true;

		var input=$("#OriginPort");
		var urlvl=$("#OriginPort").val();

		if (urlvl==''){
			input.removeClass("valid").addClass("invalid");
			$('#nam1').remove();
			$("#nam1").removeClass("error").addClass("error_show");
			$('<label id="nam1" class="text-danger">Origin Port is required</label>').insertAfter('#ValidOriginPort');
			$("#ValidOriginPort").focus;
			error_free=false;
		} else {
			input.removeClass("invalid").addClass("valid");
			$("#ValidOriginPort").removeClass("error_show").addClass("error");
		}

		var input=$("#DestinationPort");
		var urlvl=$("#DestinationPort").val();

		if (urlvl==''){
			input.removeClass("valid").addClass("invalid");
			$('#nam2').remove();
			$("#nam2").removeClass("error").addClass("error_show");
			$('<label id="nam2" class="text-danger">Destination Port is required</label>').insertAfter('#ValidDestinationPort');
			$("#ValidDestinationPort").focus;
			error_free=false;
		} else {
			input.removeClass("invalid").addClass("valid");
			$("#ValidDestinationPort").removeClass("error_show").addClass("error");
		}

		var input=$("#SealNumber");
		var urlvl=$("#SealNumber").val();

		if (urlvl==''){
			input.removeClass("invalid").addClass("valid");
			$("#ValidSealNumber").removeClass("error_show").addClass("error");
		} else {
			//input.removeClass("invalid").addClass("valid");
			//$("#ValidSealNumber").removeClass("error_show").addClass("error");
			var container_id = $("#mdcontainer_id").val();

			var murl = document.URL;
			var arr = murl.split('admin/');
			var url=arr[0];

			$.ajax({
				headers: {
				  'X-CSRF-Token': $('meta[name="_token"]').attr('content')
				},
				type: 'POST',
				async: false,
				url: url+"admin/warehouse/container/seal_number_check",
				data: {'container_id': container_id, 'SealNumber': urlvl},
				success: function(res){
					if(res=='false') {
						input.removeClass("valid").addClass("invalid");
						$('#nam3').remove();
						$("#nam3").removeClass("error").addClass("error_show");
						$('<label id="nam3" class="text-danger">Seal Number must be unique</label>').insertAfter('#ValidSealNumber');
						$("#ValidSealNumber").focus;
						error_free=false;
					} else {
						input.removeClass("invalid").addClass("valid");
						$("#ValidSealNumber").removeClass("error_show").addClass("error");
						$('#nam3').remove();
						$("#nam3").removeClass("error").addClass("error_show");
					}
				},
			});
		}

		var input=$("#ContainerNumber");
		var urlvl=$("#ContainerNumber").val();

		if (urlvl==''){
			input.removeClass("invalid").addClass("valid");
			$("#ValidContainerNo").removeClass("error_show").addClass("error");
		} else {
			//input.removeClass("invalid").addClass("valid");
			//$("#ValidContainerNo").removeClass("error_show").addClass("error");
			var container_id = $("#mdcontainer_id").val();

			var murl = document.URL;
			var arr = murl.split('admin/');
			var url=arr[0];

			$.ajax({
				headers: {
				  'X-CSRF-Token': $('meta[name="_token"]').attr('content')
				},
				type: 'POST',
				async: false,
				url: url+"admin/warehouse/container/container_number_check",
				data: {'container_id': container_id, 'ContainerNumber': urlvl},
				success: function(res){
					if(res=='false') {
						input.removeClass("valid").addClass("invalid");
						$('#nam4').remove();
						$("#nam4").removeClass("error").addClass("error_show");
						$('<label id="nam4" class="text-danger">Container Number must be unique</label>').insertAfter('#ValidContainerNo');
						$("#ValidContainerNo").focus;
						error_free=false;
					} else {
						input.removeClass("invalid").addClass("valid");
						$("#ValidContainerNo").removeClass("error_show").addClass("error");
						$('#nam4').remove();
						$("#nam4").removeClass("error").addClass("error_show");
					}
				},
			});
		}

		var input=$("#ShipmentDate");
		var urlvl=$("#ShipmentDate").val();

		if (urlvl=='-1'){
			input.removeClass("valid").addClass("invalid");
			$('#nam5').remove();
			$("#nam5").removeClass("error").addClass("error_show");
			$('<label id="nam5" class="text-danger">Shipment Date is required</label>').insertAfter('#ValidShipmentDate');
			$("#ValidShipmentDate").focus;
			error_free=false;
		} else {
			input.removeClass("invalid").addClass("valid");
			$("#ValidShipmentDate").removeClass("error_show").addClass("error");
		}

	if (!error_free){
		event.preventDefault();
	} else {

		var murl = document.URL;
		var arr = murl.split('admin/');
		var url=arr[0];

		$('.sv-btn').hide();
		$('.cncl-btn').hide();
		$('.fcnbtn').show();
		$('.fnsav').show();

		var originport = $("#OriginPort").val();
		var destinationport = $("#DestinationPort").val();
		var containernumber = $("#ContainerNumber").val();
		var sealnumber = $("#SealNumber").val();
		var stuffingdate = $("#StuffingDate").val();
		var shipmentdate = $("#ShipmentDate").val();

		var vesselname = $("#VesselName").val();
		var voyageno = $("#VoyageNo").val();

	$.ajax({
			type: "get",
			url: url+"admin/warehouse/store-container",
			data: "originport="+encodeURIComponent(originport)+"&destinationport="+encodeURIComponent(destinationport)+'&containernumber='+encodeURIComponent(containernumber)+"&sealnumber="+encodeURIComponent(sealnumber)+"&stuffingdate="+encodeURIComponent(stuffingdate)+"&shipmentdate="+encodeURIComponent(shipmentdate)+"&vesselname="+encodeURIComponent(vesselname)+"&voyageno="+encodeURIComponent(voyageno),
			beforeSend: function() {
				showLoader();
			//$("#loaddata").html('<div align="center" style="width:144px;padding:10px;"><div style="float:left;"><img src="'+url+'/backend/_assets/img/loading.gif" width="25px" height="25px;"></div><div style="float:left;margin-left:10px;">Loading...</div></div>');

			}, success: function(datad){

			setTimeout(function(){ window.location.href = url+"admin/warehouse/edit-container/"+datad; /*$(".updv").hide();*/ }, 5);

			//$('.pageaction').html('Edit Container');

				//$('.sv-cntr').hide();
				//$('.sv-cntr').show();
				//$('.ad-cntr').hide();
				//$('.aft-sve').hide();

				//$('.dataload').html(datad);
				//return false;
			}
		});
	}
});

$(".certnovl").keyup(function(){
	var gtvl=$(this).val();
	loadCertNo(gtvl);
});

$(".fnsav").click(function(event){

		var form_data=$("#addcontainer").serializeArray();
		var error_free=true;

		var input=$("#OriginPort");
		var urlvl=$("#OriginPort").val();

		if (urlvl==''){
			input.removeClass("valid").addClass("invalid");
			$('#nam1').remove();
			$("#nam1").removeClass("error").addClass("error_show");
			$('<label id="nam1" class="text-danger">Origin Port is required</label>').insertAfter('#ValidOriginPort');
			$("#ValidOriginPort").focus;
			error_free=false;
		} else {
			input.removeClass("invalid").addClass("valid");
			$("#ValidOriginPort").removeClass("error_show").addClass("error");
		}

		var input=$("#DestinationPort");
		var urlvl=$("#DestinationPort").val();

		if (urlvl==''){
			input.removeClass("valid").addClass("invalid");
			$('#nam2').remove();
			$("#nam2").removeClass("error").addClass("error_show");
			$('<label id="nam2" class="text-danger">Destination Port is required</label>').insertAfter('#ValidDestinationPort');
			$("#ValidDestinationPort").focus;
			error_free=false;
		} else {
			input.removeClass("invalid").addClass("valid");
			$("#ValidDestinationPort").removeClass("error_show").addClass("error");
		}

		var input=$("#SealNumber");
		var urlvl=$("#SealNumber").val();

		if (urlvl==''){
			input.removeClass("invalid").addClass("valid");
			$("#ValidSealNumber").removeClass("error_show").addClass("error");
		} else {
			//input.removeClass("invalid").addClass("valid");
			//$("#ValidSealNumber").removeClass("error_show").addClass("error");
			var container_id = $("#mdcontainer_id").val();

			var murl = document.URL;
			var arr = murl.split('admin/');
			var url=arr[0];

			$.ajax({
				headers: {
				  'X-CSRF-Token': $('meta[name="_token"]').attr('content')
				},
				type: 'POST',
				async: false,
				url: url+"admin/warehouse/container/seal_number_check",
				data: {'container_id': container_id, 'SealNumber': urlvl},
				success: function(res){
					if(res=='false') {
						input.removeClass("valid").addClass("invalid");
						$('#nam3').remove();
						$("#nam3").removeClass("error").addClass("error_show");
						$('<label id="nam3" class="text-danger">Seal Number must be unique</label>').insertAfter('#ValidSealNumber');
						$("#ValidSealNumber").focus;
						error_free=false;
					} else {
						input.removeClass("invalid").addClass("valid");
						$("#ValidSealNumber").removeClass("error_show").addClass("error");
						$('#nam3').remove();
						$("#nam3").removeClass("error").addClass("error_show");
					}
				},
			});
		}

		var input=$("#ContainerNumber");
		var urlvl=$("#ContainerNumber").val();

		if (urlvl==''){
			input.removeClass("invalid").addClass("valid");
			$("#ValidContainerNo").removeClass("error_show").addClass("error");
		} else {
			//input.removeClass("invalid").addClass("valid");
			//$("#ValidContainerNo").removeClass("error_show").addClass("error");
			var container_id = $("#mdcontainer_id").val();
			//alert(container_id);

			var murl = document.URL;
			var arr = murl.split('admin/');
			var url=arr[0];

			$.ajax({
				headers: {
				  'X-CSRF-Token': $('meta[name="_token"]').attr('content')
				},
				type: 'POST',
				async: false,
				url: url+"admin/warehouse/container/container_number_check",
				data: {'container_id': container_id, 'ContainerNumber': urlvl},
				success: function(result){
					if(result=='false') {
						input.removeClass("valid").addClass("invalid");
						$('#nam4').remove();
						$("#nam4").removeClass("error").addClass("error_show");
						$('<label id="nam4" class="text-danger">Container Number must be unique</label>').insertAfter('#ValidContainerNo');
						$("#ValidContainerNo").focus;
						error_free=false;
					} else {
						input.removeClass("invalid").addClass("valid");
						$("#ValidContainerNo").removeClass("error_show").addClass("error");
						$('#nam4').remove();
						$("#nam4").removeClass("error").addClass("error_show");
					}
				},
			});
		}

	if (!error_free){
		event.preventDefault();
	} else {

	var certno=$('#certfno').val();
	var gid=$('#container_id').val();
	$('.updvs').show();

	var murl = document.URL;
	var arr = murl.split('admin/');
	var url=arr[0];

	var originport = $("#OriginPort").val();
	var destinationport = $("#DestinationPort").val();
	var containernumber = $("#ContainerNumber").val();
	var sealnumber = $("#SealNumber").val();
	var stuffingdate = $("#StuffingDate").val();
	var shipmentdate = $("#ShipmentDate").val();
	var deleteids = $("#deleteids").val();

	var vesselname = $("#VesselName").val();
	var voyageno = $("#VoyageNo").val();

	$.ajax({
		type: "get",
		url: url+"admin/warehouse/subcontainer-save",
		data: "container_id="+encodeURIComponent(gid)+"&sel_id="+encodeURIComponent(certno)+"&originport="+encodeURIComponent(originport)+"&destinationport="+encodeURIComponent(destinationport)+'&containernumber='+encodeURIComponent(containernumber)+"&sealnumber="+encodeURIComponent(sealnumber)+"&stuffingdate="+encodeURIComponent(stuffingdate)+"&shipmentdate="+encodeURIComponent(shipmentdate)+"&vesselname="+encodeURIComponent(vesselname)+"&voyageno="+encodeURIComponent(voyageno)+"&deleteids="+encodeURIComponent(deleteids),
		beforeSend: function() {
			showLoader();

			console.log("data", certno);
			//$("#updatebtn").css('background', '#95a9127a');
			//$("#updatebtn").removeClass("fnsav");
			$(".updv").html('<div align="center" style="width:144px;padding:10px;"><div style="float:left;"><img src="'+url+'/backend/_assets/img/loading.gif" width="25px" height="25px;"></div><div style="float:left;margin-left:10px;">Loading...</div></div>');

		}, success: function(datad){
			hideLoader();
            dataloadfn();
			//$("#updatebtn").css('background', '#95a912');
			//$("#updatebtn").addClass("fnsav");
			//console.log("updated_data", datad);
			//$(".updv").html('<div class="alert alert-success">Data updated successfully</div>');
			//setTimeout(function(){ window.location.href = url+"admin/warehouse/container"; /*$(".updv").hide();*/ }, 60);
			$(".updv").html('');
			$(".updvmsg").html('<div class="alert alert-success">Data updated successfully</div>');
			setTimeout(function(){ $(".updvmsg").html(''); }, 3600);
			//window.location.href = url+"admin/warehouse/container";
			}
		});

		}
	});
});

var _validFileExtensions = [".doc", ".docx", ".pdf", ".jpg", ".png", ".xlsx"];
function ValidateInput(oInput) {
	if (oInput.type == "file") {
	var sFileName = oInput.value;
	if (sFileName.length > 0) {
		var blnValid = false;
		for (var j = 0; j < _validFileExtensions.length; j++) {
			var sCurExtension = _validFileExtensions[j];

			if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
				blnValid = true;
				break;
				}
			}
			if (!blnValid) {
				$(".errorup").show();
				$(".errorup").removeClass("error").addClass("error_show");
				$(".errorup").html("Please Select valid files, allowed extensions are: " + _validFileExtensions.join(", "));
				oInput.value = "";
				return false;
			} else {
				$(".errorup").hide();
				$(".errorup").removeClass("error_show").addClass("error");
				$(".errorup").html("");
			}
		}
	}
return true;
}
