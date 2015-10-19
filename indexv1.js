    //Declare Global Variables for the use
    var defaultPrograms = [];
    var friendsFootPrint = [];
    var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
    var apptaAgent = new ApptaAgent(api_key, "414920308635429");
    var column1=[];
    var column2=[];
    var column3=[];
    var columnPrograms1=[];
    var columnPrograms2=[];
    var columnPrograms3=[];
    var requested_page_size=10;
    var is_loggedin;
	
//Load Lounge on ready
    $( document ).ready(function(){
		//make a call to lounge
        getLoungeInfo();
    });
	
    function fbLogin(){
      apptaAgent.getLoginDetails(function(data){
		is_loggedin=data.is_logged_in;
        if(data.is_logged_in === false){
      		apptaAgent.login();
        }else{
		
			firstname = data.name;
			image = 'http://graph.facebook.com/'+data.fb_id+'/picture?type=small';
      		$(".userimagecontainer").empty();
            $(".customfblogin").text(firstname);
      		html = '<img src="'+image+'" alt="'+firstname+'" style="border-radius: 50px; padding: 5px; height: 40px; width: 40px;" class="userimagesrc"/>';
      		$(".userimagecontainer").append(html);
			if($(".friendsList").children().length === 0){
      			updateFriendsListInPrograms(data.is_logged_in);	
			}
        }
      });
    }

  	function updateFriendsListInPrograms(logged_in_status){
        for(var x=0; x<friendsFootPrint.length;x++){
  			html = '<ul>';
  			html += '<li><img src="http://graph.facebook.com/10205352910559157/picture?type=small" /></li>';
  			html += '<li><img src="http://graph.facebook.com/10203529817677626/picture?type=small" /></li>';
  			html += '<li><img src="http://graph.facebook.com/311511622372166/picture?type=small" /></li>';
  			html += '</ul>';
  			$("#friendsListForPrg-"+friendsFootPrint[x].program.id).append(html);
  		}
  	}

    function getLoungeInfo(){
		getColumn1();
		getColumn2();
		getColumn3();
    }

	function getColumn1(){
		var filter_data={
	 		channel_name:'English',
	 		page_size:requested_page_size,
		 };
		//get lounge data with the right filters
      	apptaAgent.getLounge(filter_data, function sendData(data){
			column1.push(data);
			renderLoungeData(filter_data.channel_name, data);
      	});
		
	}
	function getColumn2(){
		var filter_data={
	 		channel_name:'Novelas',
	 		page_size:requested_page_size,
		 };
		//get lounge data with the right filters
      	apptaAgent.getLounge(filter_data, function sendData(data){
			column2.push(data);
			renderLoungeData(filter_data.channel_name, data);
      	});
		
	}
	function getColumn3(){
		var filter_data={
	 		channel_name:'Telemundo',
	 		page_size:requested_page_size,
		 };
		//get lounge data with the right filters
      	apptaAgent.getLounge(filter_data, function sendData(data){
			column3.push(data);
			renderLoungeData(filter_data.channel_name, data);
      	});
		
	}

/*    function settings(){
      if($("[name='privacy-checkbox']").is(':checked') === true){
        //if checked or true => privacy enabled
        apptaAgent.postSettings(true);
      }else{
        //if unchecked or false => privacy disabled 
        apptaAgent.postSettings(false);
      }
    }
*/

    function checkinProgram(id,name){
      var event_data = {'program_id':id, 'program_name':name };
      var event_type = 'CHECK_IN_TO_PROGRAM';
      apptaAgent.eventLog(event_type, event_data);
      window.location.href = "http://telemundo.teletango.com/ref_01_02/program.php?id="+id;
    }

    function renderLoungeData(channel, data){
      	var programs = data;
		if(channel === "English"){
    	  	for(var b=0; b<programs.loungePrograms.length;b++){
    		      columnPrograms1.push(programs.loungePrograms[b]);
				  friendsFootPrint.push(programs.friendsfootprint.programs[b]);
      		}
      		updateDefaultPrograms(columnPrograms1);
	  	}
	  	if(channel === "Novelas"){
    	  	for(var b=0; b<programs.loungePrograms.length;b++){
    		      columnPrograms2.push(programs.loungePrograms[b]);
				  friendsFootPrint.push(programs.friendsfootprint.programs[b]);
      		}
      		updateDefaultPrograms(columnPrograms2);
		}
	  	if(channel === "Telemundo"){
    	  	for(var b=0; b<programs.loungePrograms.length;b++){
    		      columnPrograms3.push(programs.loungePrograms[b]);
				  friendsFootPrint.push(programs.friendsfootprint.programs[b]);
      		}
      		updateDefaultPrograms(columnPrograms3);
		}
		
    }
	
    function updateDefaultPrograms(defaultPrograms){
	    for(var a=0; a<defaultPrograms.length;a++){
			if(defaultPrograms[a].channel==="English"){
				if(defaultPrograms[a].thumbnail){
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
				}
			}else if(defaultPrograms[a].channel==="Novelas"){
				if(defaultPrograms[a].thumbnail){
        			bhtml = '<div data-program="'+defaultPrograms[a].id+'" class="default programs col-md-12" style="cursor:pointer; border: 1px solid #cecece;" onclick="checkinProgram('+defaultPrograms[a].id+')">';
        			bhtml +='  <div class="col-md-12" style="padding: 0px; margin: 0px;">';
        			bhtml +='    <img src="'+defaultPrograms[a].thumbnail+'" class="img-responsive" style="width: 100% ">';
        			bhtml +='    <span style="font-weight: 10px; color: red;">'+defaultPrograms[a].channel+'</span><br/>';
        			bhtml +='    <span style="font-size: 20px; font-weight: bold;">'+defaultPrograms[a].name+'</span><br/>';
        			bhtml +='  </div>';
        			bhtml +='  <div class="col-md-12 program-tile" style="padding: 9px 0px 0px 3px;  border-top: 1px solid lightgrey;  font-size: 17px;" >';
        			bhtml +='    <div class="col-md-5 friendsList" id="friendsListForPrg-'+defaultPrograms[a].id+'" data-program-id="'+defaultPrograms[a].id+'">';
        			bhtml +='    </div>';
        			bhtml +='    <div class="col-md-7 metalist" style="border-left: 1px solid lightgrey; color: lightgrey;">';
        			bhtml +='      <div class="col-md-6 metaviews">';
        			bhtml +='       <i class="fa fa-eye" style="color: lightgrey;"></i>';
        			bhtml +='       <span>'+defaultPrograms[a].nbr_views+'</span>';
        			bhtml +='      </div>';
        			bhtml +='      <div class="col-md-6 metaConversations">';
        			bhtml +='       <i class="fa fa-comment" style="color: lightgrey;"></i>';
        			bhtml +='       <span>'+defaultPrograms[a].nbr_conversations+'</span>';
        			bhtml +='      </div>';
        			bhtml +='    </div>';
        			bhtml +='  </div>';
        			bhtml +='</div>';
	    			$(".column2").append(bhtml);
				}
			}else if(defaultPrograms[a].channel==="Telemundo"){
				if(defaultPrograms[a].thumbnail){
        			chtml = '<div data-program="'+defaultPrograms[a].id+'" class="default programs col-md-12" style="cursor:pointer; border: 1px solid #cecece;" onclick="checkinProgram('+defaultPrograms[a].id+')">';
        			chtml +='  <div class="col-md-12" style="padding: 0px; margin: 0px;">';
        			chtml +='    <img src="'+defaultPrograms[a].thumbnail+'" class="img-responsive" style="width: 100% ">';
        			chtml +='    <span style="font-weight: 10px; color: red;">'+defaultPrograms[a].channel+'</span><br/>';
        			chtml +='    <span style="font-size: 20px; font-weight: bold;">'+defaultPrograms[a].name+'</span><br/>';
        			chtml +='  </div>';
        			chtml +='  <div class="col-md-12 program-tile" style="padding: 9px 0px 0px 3px;  border-top: 1px solid lightgrey;  font-size: 17px;" >';
        			chtml +='    <div class="col-md-5 friendsList" id="friendsListForPrg-'+defaultPrograms[a].id+'" data-program-id="'+defaultPrograms[a].id+'">';
        			chtml +='    </div>';
        			chtml +='    <div class="col-md-7 metalist" style="border-left: 1px solid lightgrey; color: lightgrey;">';
        			chtml +='      <div class="col-md-6 metaviews">';
        			chtml +='       <i class="fa fa-eye" style="color: lightgrey;"></i>';
        			chtml +='       <span>'+defaultPrograms[a].nbr_views+'</span>';
        			chtml +='      </div>';
        			chtml +='      <div class="col-md-6 metaConversations">';
        			chtml +='       <i class="fa fa-comment" style="color: lightgrey;"></i>';
        			chtml +='       <span>'+defaultPrograms[a].nbr_conversations+'</span>';
        			chtml +='      </div>';
        			chtml +='    </div>';
        			chtml +='  </div>';
        			chtml +='</div>';
	    			$(".column3").append(chtml);
				}

			}
      	}	
    }

    function updateServicePrograms(servicePrograms){
      for(var c=0; c<servicePrograms.length;c++){
        html = '<div class="service programs" style="cursor:pointer;" onclick="checkinProgram('+servicePrograms[c].id+')">';
		if(servicePrograms[c].thumbnail){
        	html +='  <img src="'+servicePrograms[c].thumbnail+'" class="img-responsive" style="width: 100% ">';
		}
        html +='  <span style="font-weight: 10px; color: red;">'+servicePrograms[c].channel+'</span><br/>';
        html +='  <span style="font-size: 20px; font-weight: bold;">'+servicePrograms[c].name+'</span><br/>';
        html +='</div>';
        $(".column2").append(html);
      }
    }


