//Declare Global Variables if required here
var is_loggedin;
var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
var apptaAgent = new ApptaAgent(api_key, "414920308635429");

//On Ready
$( document ).ready(function(){
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
	if(is_loggedin == false || typeof is_loggedin == "undefined"){
		//disable the eye button
		//$(".privacyOptions").hide();
		if(facebookOnce == 0){
			$(".custom-fb-message").show();
		}else{
			$(".custom-fb-message").hide();
		}
	}else if(is_loggedin == true){
		//enable the privacy options button
		var privy=$(".privystatus").val();
		$(".privacyOptions").show();
		if(privy!=99){
			privacyCheck();
		}
		$(".custom-fb-message").hide();

	}
}

function closeFBINFO(){
	$(".custom-fb-message").hide();
	$(".facebookOnce").val(1);
}

function updatePrivacyStatus(){
	var selectedvalue = $(".selectedprivacy").val();	
	$(".privystatus").val(99);
	if(selectedvalue == 1){
        apptaAgent.postSettings(false);
    }else if(selectedvalue == 2){
        apptaAgent.postSettings(true);
    }else{
        apptaAgent.postSettings(true);

    }
	$(".custom-privacy-message").hide();
	$(".maincontainer").attr('style','margin-top: 30px;');
}
function privacyUpdate(data){
	if(data.value == 1){
		$(".selectedprivacy").val(data.value);
	}else if(data.value == 2){
		$(".selectedprivacy").val(data.value);
	}else{
		$(".selectedprivacy").val(data.value);

	}
	$(".privystatus").val(99);
}
	function fbLogout(){
		apptaAgent.logout();
		$(".customfblogin").text("Login");
		html = '<i style="font-size: 36px; padding: 2px;" class="fa fa-user"></i>';
		$(".userimagecontainer").empty();
		$(".userimagecontainer").append(html);
		var is_loggedin=false;
	}

    function loadEnglish(){
	    var url = location.href;
        var loc = url.split('ref_01_03/');
        var loc2 = loc[1].split('?');
        if(loc2[0] === "program.php"){
            document.location.href="http://telemundo.teletango.com/ref_01_03/index.php?channel_name=English";
            var filter_object={
                channel_name:'Telemundo',
                page_size:30,
            };
            apptaAgent.getLounge(filter_object,function(data){
                console.log("called from program page for novelas");
                renderChannelLounge(data.loungePrograms);
            });
            $(".custom-banner-image").attr('src','images/english.png');
        }else{
            var filter_object={
                channel_name:'Telemundo',
                page_size:30,
            };
            apptaAgent.getLounge(filter_object,function(data){
                renderChannelLounge(data.loungePrograms);
            });
			$(".custom-banner-image").attr('src','images/english.png');
        }

		
    }
    function loadEnt(){
		        var url = location.href;
        var loc = url.split('ref_01_03/');
        var loc2 = loc[1].split('?');
        if(loc2[0] === "program.php"){
            document.location.href="http://telemundo.teletango.com/ref_01_03/index.php?channel_name=Novelas";
            var filter_object={
				channel_name:'Entretenimiento',
                page_size:30,
            };
            apptaAgent.getLounge(filter_object,function(data){
                console.log("called from program page for novelas");
                renderChannelLounge(data.loungePrograms);
            });
			$(".custom-banner-image").attr('src','images/ent.png');
        }else{
            var filter_object={
				channel_name:'Entretenimiento',
                page_size:30,
            };
            apptaAgent.getLounge(filter_object,function(data){
                renderChannelLounge(data.loungePrograms);
            });
			$(".custom-banner-image").attr('src','images/ent.png');
        }
    }

    function loadNovelas(){
		var url = location.href;
		var loc = url.split('ref_01_03/');
		var loc2 = loc[1].split('?');
		if(loc2[0] === "program.php"){
            document.location.href="http://telemundo.teletango.com/ref_01_03/index.php?channel_name=Novelas";
			var filter_object={
				channel_name:'Novelas',
				page_size:30,
			};
			apptaAgent.getLounge(filter_object,function(data){
				console.log("called from program page for novelas");
				renderChannelLounge(data.loungePrograms);
			});
			$(".custom-banner-image").attr('src','images/novelas.png');
		}else{
			var filter_object={
				channel_name:'Novelas',
				page_size:30,
			};
			apptaAgent.getLounge(filter_object,function(data){
				renderChannelLounge(data.loungePrograms);
			});
			$(".custom-banner-image").attr('src','images/novelas.png');
		}
    }

	function renderChannelLounge(defaultPrograms){
		$(".column1").empty();
		$(".column2").empty();
		$(".column3").empty();
		for(var a=0; a<defaultPrograms.length;a++){
		  if(defaultPrograms[a].thumbnail){
			if(a<=9){
          		ahtml = '<div data-program="'+defaultPrograms[a].id+'" class="default programs col-md-12" style="cursor:pointer; border: 1px solid #cecece;" onclick="checkinProgram('+defaultPrograms[a].id+')">';
            	ahtml +='  <div class="col-md-12" style="padding: 0px; margin: 0px;">';
            	ahtml +='    <img src="'+defaultPrograms[a].thumbnail+'" class="img-responsive" style="width: 100% ">';
            	ahtml +='    <span style="font-weight: 10px; color: red;">'+defaultPrograms[a].channel+'</span><br/>';
            	ahtml +='    <span style="font-size: 20px; font-weight: bold;">'+defaultPrograms[a].name+'</span><br/>';
            	ahtml +='  </div>';
            	ahtml +='  <div class="col-md-12 program-tile" style="padding: 9px 0px 0px 3px;  border-top: 1px solid lightgrey;  font-size: 17px;" >';
            	ahtml +='    <div class="col-md-5 friendsList" id="friendsListForPrg-'+defaultPrograms[a].id+'" data-program-id="'+defaultPrograms[a].id+'">';
            	ahtml +='    </div>';
            	ahtml +='    <div class="col-md-7 metalist" style="border-left: 1px solid lightgrey; color: lightgrey;">';
            	ahtml +='      <div class="col-md-6 metaviews">';
            	ahtml +='       <i class="fa fa-eye" style="color: lightgrey;"></i>';
            	ahtml +='       <span>'+defaultPrograms[a].nbr_views+'</span>';
            	ahtml +='      </div>';
            	ahtml +='      <div class="col-md-6 metaConversations">';
            	ahtml +='       <i class="fa fa-comment" style="color: lightgrey;"></i>';
            	ahtml +='       <span>'+defaultPrograms[a].nbr_conversations+'</span>';
            	ahtml +='      </div>';
            	ahtml +='    </div>';
            	ahtml +='  </div>';
            	ahtml +='</div>';
            	$(".column1").append(ahtml);
			}else if(a <=19){
          		ahtml = '<div data-program="'+defaultPrograms[a].id+'" class="default programs col-md-12" style="cursor:pointer; border: 1px solid #cecece;" onclick="checkinProgram('+defaultPrograms[a].id+')">';
            	ahtml +='  <div class="col-md-12" style="padding: 0px; margin: 0px;">';
            	ahtml +='    <img src="'+defaultPrograms[a].thumbnail+'" class="img-responsive" style="width: 100% ">';
            	ahtml +='    <span style="font-weight: 10px; color: red;">'+defaultPrograms[a].channel+'</span><br/>';
            	ahtml +='    <span style="font-size: 20px; font-weight: bold;">'+defaultPrograms[a].name+'</span><br/>';
            	ahtml +='  </div>';
            	ahtml +='  <div class="col-md-12 program-tile" style="padding: 9px 0px 0px 3px;  border-top: 1px solid lightgrey;  font-size: 17px;" >';
            	ahtml +='    <div class="col-md-5 friendsList" id="friendsListForPrg-'+defaultPrograms[a].id+'" data-program-id="'+defaultPrograms[a].id+'">';
            	ahtml +='    </div>';
            	ahtml +='    <div class="col-md-7 metalist" style="border-left: 1px solid lightgrey; color: lightgrey;">';
            	ahtml +='      <div class="col-md-6 metaviews">';
            	ahtml +='       <i class="fa fa-eye" style="color: lightgrey;"></i>';
            	ahtml +='       <span>'+defaultPrograms[a].nbr_views+'</span>';
            	ahtml +='      </div>';
            	ahtml +='      <div class="col-md-6 metaConversations">';
            	ahtml +='       <i class="fa fa-comment" style="color: lightgrey;"></i>';
            	ahtml +='       <span>'+defaultPrograms[a].nbr_conversations+'</span>';
            	ahtml +='      </div>';
            	ahtml +='    </div>';
            	ahtml +='  </div>';
            	ahtml +='</div>';
            	$(".column2").append(ahtml);
			
			}else if(a <=29){
          		ahtml = '<div data-program="'+defaultPrograms[a].id+'" class="default programs col-md-12" style="cursor:pointer; border: 1px solid #cecece;" onclick="checkinProgram('+defaultPrograms[a].id+')">';
            	ahtml +='  <div class="col-md-12" style="padding: 0px; margin: 0px;">';
            	ahtml +='    <img src="'+defaultPrograms[a].thumbnail+'" class="img-responsive" style="width: 100% ">';
            	ahtml +='    <span style="font-weight: 10px; color: red;">'+defaultPrograms[a].channel+'</span><br/>';
            	ahtml +='    <span style="font-size: 20px; font-weight: bold;">'+defaultPrograms[a].name+'</span><br/>';
            	ahtml +='  </div>';
            	ahtml +='  <div class="col-md-12 program-tile" style="padding: 9px 0px 0px 3px;  border-top: 1px solid lightgrey;  font-size: 17px;" >';
            	ahtml +='    <div class="col-md-5 friendsList" id="friendsListForPrg-'+defaultPrograms[a].id+'" data-program-id="'+defaultPrograms[a].id+'">';
            	ahtml +='    </div>';
            	ahtml +='    <div class="col-md-7 metalist" style="border-left: 1px solid lightgrey; color: lightgrey;">';
            	ahtml +='      <div class="col-md-6 metaviews">';
            	ahtml +='       <i class="fa fa-eye" style="color: lightgrey;"></i>';
            	ahtml +='       <span>'+defaultPrograms[a].nbr_views+'</span>';
            	ahtml +='      </div>';
            	ahtml +='      <div class="col-md-6 metaConversations">';
            	ahtml +='       <i class="fa fa-comment" style="color: lightgrey;"></i>';
            	ahtml +='       <span>'+defaultPrograms[a].nbr_conversations+'</span>';
            	ahtml +='      </div>';
            	ahtml +='    </div>';
            	ahtml +='  </div>';
            	ahtml +='</div>';
            	$(".column3").append(ahtml);

			}
		 }
	  }

	}