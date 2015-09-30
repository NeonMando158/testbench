    $( document ).ready(function(){
        getLoungeInfo();
    });


    var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
    var apptaAgent = new ApptaAgent(api_key, "414920308635429");

    function fbLogin(){
      apptaAgent.getLoginDetails(function(data){
        if(data.is_logged_in === false){
      		apptaAgent.login();
          	console.log(data);
        }else{
          	console.log(data);
			      firstname = data.first_name;
			      lastname = data.last_name;
			      image = 'http://graph.facebook.com/'+data.fb_id+'/picture?type=small';
			
      			$(".userimagecontainer").empty();
                	$(".customfblogin").text(firstname);
      			html = '<img src="'+image+'" alt="'+firstname+'" style="border-radius: 50px; padding: 5px; height: 40px; width: 40px;" class="userimagesrc"/>';
      			$(".userimagecontainer").append(html);
      		
      			updateFriendsListInPrograms(data.is_logged_in);	
        }
      });
    }

  	function updateFriendsListInPrograms(logged_in_status){
  		console.log("updateFriendsListInPrograms");
  		console.log(logged_in_status);
  		console.log(defaultPrograms);
  		console.log(friendsFootPrint);
  		//get all the programs in the current view
        	for(var x=0; x<friendsFootPrint.length;x++){
  			console.log(friendsFootPrint[x].program.id);			
  			console.log(friendsFootPrint[x].friendswatching);
  			html = '<ul>';
  			html += '<li><img src="http://graph.facebook.com/10205352910559157/picture?type=small" /></li>';
  			html += '<li><img src="http://graph.facebook.com/10203529817677626/picture?type=small" /></li>';
  			html += '<li><img src="http://graph.facebook.com/311511622372166/picture?type=small" /></li>';
  			html += '</ul>';
  			$("#friendsListForPrg-"+friendsFootPrint[x].program.id).append(html);
  		}
  	}

    function getLoungeInfo(){
      apptaAgent.getLounge(function sendData(data){
        renderLoungeData(data);
      });

    }

    function settings(){
      if($("[name='privacy-checkbox']").is(':checked') === true){
        //if checked or true => privacy enabled
        console.log($("[name='privacy-checkbox']").is(':checked'));
        apptaAgent.postSettings(true);
      }else{
        //if unchecked or false => privacy disabled 
        console.log($("[name='privacy-checkbox']").is(':checked'));
        apptaAgent.postSettings(false);
      }
    }

    function checkinProgram(id,name){
      var event_data = {'program_id':id, 'program_name':name };
      var event_type = 'CHECK_IN_TO_PROGRAM';
      console.log(event_data);
      apptaAgent.eventLog(event_type, event_data);
      window.location.href = "http://telemundo.teletango.com/testbench/video.php?id="+id;
    }

      var defaultPrograms = [];
      var friendsFootPrint = [];

    function renderLoungeData(data){
      //      var programs = JSON.parse(data);
      var programs = data;
      console.log(programs.loungePrograms.length);
      //var defaultPrograms = [];
      var servicePrograms = [];
      for(var b=0; b<programs.loungePrograms.length;b++){
        if(programs.loungePrograms[b].program_type=="default"){
          defaultPrograms.push(programs.loungePrograms[b]);
		  friendsFootPrint.push(programs.friendsfootprint.programs[b]);
        }else
        if(programs.loungePrograms[b].program_type=="web_service"){
          servicePrograms.push(programs.loungePrograms[b]);
		  friendsFootPrint.push(programs.friendsfootprint.programs[b]);
        }
        
      }
      updateDefaultPrograms(defaultPrograms);
        updateServicePrograms(servicePrograms);

    }

    function updateDefaultPrograms(defaultPrograms){
      for(var a=0; a<defaultPrograms.length;a++){
		
        html = '<div data-program="'+defaultPrograms[a].id+'" class="default programs col-md-12" style="cursor:pointer; border: 1px solid #cecece;" onclick="checkinProgram('+defaultPrograms[a].id+')">';
        html +='  <div class="col-md-12" style="padding: 0px; margin: 0px;">';
        html +='    <img src="'+defaultPrograms[a].thumbnail+'" class="img-responsive" style="width: 100% ">';
        html +='    <span style="font-weight: 10px; color: red;">'+defaultPrograms[a].channel+'</span><br/>';
        html +='    <span style="font-size: 20px; font-weight: bold;">'+defaultPrograms[a].name+'</span><br/>';
        html +='  </div>';
        html +='  <div class="col-md-12 program-tile" style="padding: 9px 0px 0px 3px;  border-top: 1px solid lightgrey;  font-size: 17px;" >';
        html +='    <div class="col-md-5 friendsList" id="friendsListForPrg-'+defaultPrograms[a].id+'" data-program-id="'+defaultPrograms[a].id+'">';
        html +='    </div>';
        html +='    <div class="col-md-7 metalist" style="border-left: 1px solid lightgrey; color: lightgrey;">';
        html +='      <div class="col-md-6 metaviews">';
        html +='       <i class="fa fa-eye" style="color: lightgrey;"></i>';
        html +='       <span>'+defaultPrograms[a].nbr_views+'</span>';
        html +='      </div>';
        html +='      <div class="col-md-6 metaConversations">';
        html +='       <i class="fa fa-comment" style="color: lightgrey;"></i>';
        html +='       <span>'+defaultPrograms[a].nbr_conversations+'</span>';
        html +='      </div>';
        html +='    </div>';
        html +='  </div>';
        html +='</div>';
        $(".column3").append(html);
      }
    }
    function updateServicePrograms(servicePrograms){
      for(var c=0; c<servicePrograms.length;c++){
        html = '<div class="service programs" style="cursor:pointer;" onclick="checkinProgram('+servicePrograms[c].id+')">';
        // html +='  <img src="'+servicePrograms[c].thumbnail+'" class="img-responsive" style="width: 100% ">';
        html +='  <span style="font-weight: 10px; color: red;">'+servicePrograms[c].channel+'</span><br/>';
        html +='  <span style="font-size: 20px; font-weight: bold;">'+servicePrograms[c].name+'</span><br/>';
        html +='</div>';
        $(".column2").append(html);
      }

    }
