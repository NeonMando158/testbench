    $( document ).ready(function(){
        getProgramDetails(window.location.search.replace("?id=", ""));
    });


    var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
    var apptaAgent = new ApptaAgent(api_key, "414920308635429");
	var twitterdata = [];
	var facebookcomments = [];
	var friendsfootprint = [];	
	var program_id;
	var program_name;
	var facebook_object_id;
	var link =window.location.href;
	var message="";

    function fbLogin(){
      // var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
      // var apptaAgent = new ApptaAgent(api_key, "760586213");
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

    function getProgramDetails(id){
        apptaAgent.getProgram(id, function sendData(data){
          renderProgramData(data);
        });
    }

	function fbshare(){
		apptaAgent.postFBShare(program_id,program_name,link,message);
	}

	function userlikes(){
		console.log("show all user likes");
		html='<div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">';
		html+='  <div class="modal-dialog modal-sm">';
		html+='    <div class="modal-content">';
		html+='    </div>';
		html+='  </div>';
		html+='</div>'; 
		$(".leaderboard").append(html);
	}

    function renderProgramData(data){
        var details = data;
		console.log("program details");
		program_id=details.program.id;
		program_name=details.program.name;
		facebook_object_id=details.program.fb_page_url;
		var conversations = data.conversations;
		renderConversations(conversations);
		for(var x=0; x<data.twittercomments.comments.length;x++){
			twitterdata.push(data.twittercomments.comments[x]);
		}
		for(var y=0; y<data.facebookcomments.comments.length;y++){
			facebookcomments.push(data.facebookcomments.comments[y]);
		}
		friendsfootprint.push(data.friendsfootprint);	
		renderTwitterComments(twitterdata);
		renderFacebookComments(facebookcomments);
		
    }
		
	function findTwitterDetails(id){
		$.ajax({
		  url: 'https://api.twitter.com/1.1/users/show.json?user_id=173354553',
		  type: 'GET',
		  headers: {
			'Authorization':'OAuth oauth_consumer_key="Dv0qgHLVONdRuScuSruGhdJYM",oauth_token="72164110-Gyy2Uw480HqEOcEydx9zhKF5cNHeZky8O5XVoAYrf",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1443517065",oauth_nonce="87a2e5d71cecd0fee8bb36553ae1a875",oauth_version="1.0",oauth_signature="RuELno7ZGY9Wt5mGOH1Ur540iHA%3D"'
		  },
		  success: function(data) {
			console.log(data);
			console.log(headers);
		  },
		  error: function(e) {
			console.log(e.message);
		  }
		});	
	}

	function renderTwitterComments(twitter){
		$(".program-social-data").empty();
		for(var d=0; d<twitter.length;d++){
			//var name = findTwitterDetails(twitter[d].twuserid);
			html = '<div style="padding: 18px 0px; margin: 4px 0px; background: white;" class="col-md-12">';
			html += '	<div class="col-md-3 program-social-data-image">';
			html += '	  <img style="border-radius: 50px;" alt="" src="'+twitter[d].profileurl+'">';
			html += '	</div>';
			html += '	<div class="col-md-7 program-social-data-name">';
			html += '	  <span>'+twitter[d].twusername+'</span>';
			html += '	</div>';
			html += '	<div class="col-md-2 program-social-data-srcmedia">';
			html += '	  <img style="border-radius: 50px; height: 20px; width: 20px;" alt="" src="http://telemundo.teletango.com/testbench/images/twitterlogo.png">';
			html += '	</div>';
			html += '	<div class="col-md-12">';
			html += '	    '+twitter[d].comment+' ';
			html += '	</div>';
			html += '</div>'; 
			$(".program-social-data").append(html);

		}
	}

	function renderFacebookComments(facebook){
		console.log(facebook);
		for(var f=0; f<facebook.length;f++){
			console.log(facebook[f].fbuserid);
			html = '<div style="padding: 18px 0px; margin: 4px 0px; background: white;" class="col-md-12">';
			html += '	<div class="col-md-3 program-social-data-image">';
			html += '	  <img style="border-radius: 50px;" alt="" src="'+facebook[f].thumbnail+'">';
			html += '	</div>';
			html += '	<div class="col-md-7 program-social-data-name">';
			html += '	  <span>'+facebook[f].name+'</span>';
			html += '	</div>';
			html += '	<div class="col-md-2 program-social-data-srcmedia">';
			html += '	  <img style="border-radius: 50px; height: 20px; width: 20px;" alt="" src="http://telemundo.teletango.com/testbench/images/facebooklogo.png">';
			html += '	</div>';
			html += '	<div class="col-md-12">';
			html += '	    '+facebook[f].comment+' ';
			html += '	</div>';
			html += '</div>'; 
			$(".program-social-data").append(html);
		}
	}
		
	function renderConversations(data){
		$(".chatconversationslist").empty();
		for(var b=0; b<data.length;b++){
			html = '<li>';
			html +='<span>'+data[b].text+'</span>';
			html +='</li>';
			$(".chatconversationslist").append(html);
		}
	}

    function fbLogin(){
      console.log("fb Login Clicked");
      var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
      var apptaAgent = new ApptaAgent();
      apptaAgent.login(api_key); 
    }
	
	function programLike(){
		program_id=2;
		program_name="Lets Go Places";
		apptaAgent.likeProgram(program_id,program_name);	
	}

	function programComment(){
		//apptaAgent.likeProgramComment(program_id,program_name,comment_id,type);	
		apptaAgent.getFBComments(program_id,program_name,facebook_object_id,function(data){console.log(data);});
	}

	function leaderboard(){

	}

	function submitcomment(){
		apptaAgent.postComment(program_id,program_name,comment_id,comment_text,type);
	}
