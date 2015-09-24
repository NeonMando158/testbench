    $( document ).ready(function(){
        //$("[name='privacy-checkbox']").bootstrapSwitch();
        getLoungeInfo();

    });


    var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
    var apptaAgent = new ApptaAgent(api_key, "414920308635429");

    function fbLogin(){
      // var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
      // var apptaAgent = new ApptaAgent(api_key, "760586213");
      apptaAgent.login();
      apptaAgent.getLoginDetails(function(data){
        if(data.is_logged_in === false){
          //alert("Please login to Facebook");
        }else{
          $(".customfblogin").text("Vrandesh");
        }
      });
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
      window.location.href = "http://localhost/testbench/testbench/video.php?id="+id;
    }

    function renderLoungeData(data){
      var programs = JSON.parse(data);
      console.log(programs.loungePrograms.length);
      var defaultPrograms = [];
      var servicePrograms = [];
      for(var b=0; b<programs.loungePrograms.length;b++){
        if(programs.loungePrograms[b].program_type=="default"){
          defaultPrograms.push(programs.loungePrograms[b]);
        }else
        if(programs.loungePrograms[b].program_type=="web_service"){
          servicePrograms.push(programs.loungePrograms[b]);
        }
        
      }
      updateDefaultPrograms(defaultPrograms);
        updateServicePrograms(servicePrograms);

    }

    function updateDefaultPrograms(defaultPrograms){
      for(var a=0; a<defaultPrograms.length;a++){

        html = '<div class="default programs col-md-12" style="cursor:pointer; border: 1px solid #cecece;" onclick="checkinProgram('+defaultPrograms[a].id+')">';
        html +='  <div class="col-md-12" style="padding: 0px; margin: 0px;">';
        html +='    <img src="'+defaultPrograms[a].thumbnail+'" class="img-responsive" style="width: 100% ">';
        html +='    <span style="font-weight: 10px; color: red;">'+defaultPrograms[a].channel+'</span><br/>';
        html +='    <span style="font-size: 20px; font-weight: bold;">'+defaultPrograms[a].name+'</span><br/>';
        html +='  </div>';
        html +='  <div class="col-md-12" style="padding: 9px 0px 0px 3px;  border-top: 1px solid lightgrey;  font-size: 17px;" >';
        html +='    <div class="col-md-5 friendsList">';
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