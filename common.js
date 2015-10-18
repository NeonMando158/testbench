//Declare Global Variables if required here
var is_loggedin;
//On Ready
$( document ).ready(function(){
	console.log("common.js");
	infoFB();
	$(".custom-privacy-message").hover(function(){
		$(".custom-privacy-message").show();	
	$(".maincontainer").attr('style','margin-top: 30px; pointer-events: none;');
	}, function(){
		//$(".custom-privacy-message").hide();	
		//$(".maincontainer").attr('style','margin-top: 30px;');
	});
});


    function settings(){
      if($("[name='privacy-checkbox']").is(':checked') === true){
        //if checked or true => privacy enabled
        apptaAgent.postSettings(true);
      }else{
        //if unchecked or false => privacy disabled
        apptaAgent.postSettings(false);
      }
    }


function privacyCheck(){
	console.log("Privacy Called");
	$(".custom-privacy-message").show();
	//setTimeout(function(){ $(".custom-privacy-message").hide(); }, 1000);
	$(".maincontainer").attr('style','margin-top: 30px; pointer-events: none;');
}

function closePINFO(){
	$(".custom-privacy-message").hide();
	$(".maincontainer").attr('style','margin-top: 30px;');
}

function infoFB(){
	console.log("info Facebook Called");
	if(is_loggedin == false){
		$(".custom-fb-message").show();
		//setTimeout(function(){ $(".custom-fb-message").hide(); }, 2000);
	}else if(is_loggedin == true){
		$(".custom-fb-message").hide();
	}
}

function closeFBINFO(){
	$(".custom-fb-message").hide();
}

function updatePrivacyStatus(){
	var selectedvalue = $(".selectedprivacy").val();	
	if(selectedvalue == 1){
        console.log("disable presence");
        apptaAgent.postSettings(false);
    }else if(selectedvalue == 2){
        console.log("enable presence");
        apptaAgent.postSettings(true);
    }else{
        console.log("enable presence 3rd option");
        apptaAgent.postSettings(true);

    }
	$(".custom-privacy-message").hide();
	$(".maincontainer").attr('style','margin-top: 30px;');
}
function privacyUpdate(data){
	if(data.value == 1){
		console.log("disable presence");
		$(".selectedprivacy").val(data.value);
	}else if(data.value == 2){
		console.log("enable presence");
		$(".selectedprivacy").val(data.value);
	}else{
		console.log("enable presence 3rd option");
		$(".selectedprivacy").val(data.value);

	}
}
function fbLogout(){
	console.log("logout clicked");
}
