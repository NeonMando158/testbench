//Declare Global Variables if required here
var is_loggedin;
var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
var apptaAgent = new ApptaAgent(api_key, "414920308635429");

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
	var facebookOnce = $(".facebookOnce").val();
	console.log(facebookOnce+": facebookOnce status");
	if(is_loggedin == false || typeof is_loggedin == "undefined"){
		//disable the eye button
		$(".privacyOptions").hide();
		if(facebookOnce == 0){
			console.log("if facebookOnce is first time show the message");
			$(".custom-fb-message").show();
			setTimeout(function(){ $(".custom-fb-message").hide(); }, 5000);
		}else{
			console.log("if the facebookOnce is marked then do not show the message");
			$(".custom-fb-message").hide();
		}
	}else if(is_loggedin == true){
		//enable the privacy options button
		$(".privacyOptions").show();
		privacyCheck();
		$(".custom-fb-message").hide();

	}
}

function closeFBINFO(){
	$(".custom-fb-message").hide();
	$(".facebookOnce").val(1);
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
		apptaAgent.logout();
		$(".customfblogin").text("Login");
		var is_loggedin=false;
		console.log("logout clicked");
	}

    function loadEnglish(){
        console.log("load english channel");
		
    }
    function loadEnt(){
        console.log("load entretinmiento channel");
    }
    function loadNovelas(){
        console.log(" load novelas channel");
		var filter_object={
			channel_name:'Novelas',
			page_size:30,
		};
		apptaAgent.getLounge(filter_object,function(data){
			console.log("novelas data"); 
			console.log(data);
		});
    }

