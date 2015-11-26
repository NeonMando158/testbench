	//Declare all global variables required for program page
    var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
    var apptaAgent = new ApptaAgent(api_key, "414920308635429");
	var twitterdata = [];
	var facebookcomments = [];
	var friendsfootprint = [];	
	var program_id;
	var program_name;
	var facebook_object_id;
	var friend_fb_user_id;
	var link =window.location.href;
	var message="";
	var likeuserlist;
	var conversations;
	var private_conversations;
	var is_loggedin;
	var fb_username;
	var fb_profileurl;
	var fb_user_id;
	var program_video_url;
	var program_episode;
	var program_channel;
	var program_meta;
	var program_views;
	var program_comments;
	var program_likes;
	var hash_tag;
	var is_fav;
	var program_data;
	var app_user_id;
	var unique_id;
	var facebook_object_id=99881661864;
		
    $( document ).ready(function(){
	//	callPlayer();
		jQuery.noConflict();
		unique_id = window.location.search.substring(18);
		var urlpid=	getParameterByName('id');
		var urluniqueid=getParameterByName('unique_id');
		setInterval(function() {
        	//getProgramDetails(window.location.search.replace("?id=", ""), unique_id);
        	getProgramDetails(urlpid, urluniqueid);

			//$(".program-meta-friends").click(function() { 
			//    $(".leaderboard").toggle();
			//});
			getPrivateComments();
			
		}, 6000000);
		/*setInterval(function() {
		}, 15000);*/
        apptaAgent.getLoginDetails(function(data){
	     	if(data.is_logged_in === false){
				//apptaAgent.login();	
	        	is_loggedin=data.is_logged_in;
				showFacebookInformation();
	  		}else{
	        	is_loggedin=data.is_logged_in;
	  			hideFacebookInformation();
	  			$(".facebookOnce").val(1);
	  			$(".privacyOptions").show();
	  			$(".custom-fb-message").hide();
	  			firstname = data.name;
	  		  	image = 'http://graph.facebook.com/'+data.fb_id+'/picture?type=small';
	        	$(".userimagecontainer").empty();
	        	$(".customfblogin").text(firstname);
	        	html = '<img src="'+image+'" alt="'+firstname+'" style="border-radius: 50px; padding: 5px; height: 40px; width: 40px;" class="userimagesrc"/>';
	        	$(".userimagecontainer").append(html);
	  		}
	    });

        //getProgramDetails(window.location.search.replace("?id=", ""), unique_id);
        getProgramDetails(urlpid, urluniqueid);
		$(".program-meta-friends").click(function() { 
		    $(".leaderboard").toggle();
		});
		getPrivateComments();
		getFacebookComments();
		facebookLogin();
		//getProgramsofChannel(program_channel);
    });

	function getParameterByName(name){
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function getCommentsData(){
		var type="program";
		apptaAgent.getComments(program_id,program_name,type,function(data){});	
	}

	function getCookie(cname) {
    	var name = cname + "=";
    	var ca = document.cookie.split(';');
    	for(var i=0; i<ca.length; i++) {
    	    var c = ca[i];
    	    while (c.charAt(0)==' ') c = c.substring(1);
    	    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    	}
    	return "";
	} 
	function test(data){
	}

	function facebookLogin(){
        if(is_loggedin == false){
      		//apptaAgent.login();
        }else{
			image = 'http://graph.facebook.com/'+fb_user_id+'/picture?type=small';
			$(".userimagecontainer").empty();
            $(".customfblogin").text(fb_username);
      		html = '<img src="'+image+'" alt="'+fb_username+'" style="border-radius: 50px; padding: 5px; height: 40px; width: 40px;" class="userimagesrc"/>';
      		$(".userimagecontainer").append(html);
        }
    }

    function getProgramDetails(id, unqid){
		apptaAgent.getLoginDetails(function(data){
			is_loggedin = data.is_logged_in;
			fb_profileurl=data.image_url;
			fb_username=data.name;
			fb_user_id=data.fb_id;
			friend_fb_user_id=data.fb_id;
		});
        apptaAgent.getProgram(id, unqid, function sendData(data){
        	console.log(data);
          renderProgramData(data);
        });
    }

	function fbshare(){
		apptaAgent.postFBShare(program_id,program_name,link,message);
	}

	function userLikes(data){
	
		if(data!=null){
			$(".likefriends").remove();
			html='<ul class="likefriends">';
			for(var m=0; m<data.length;m++){
			  if(data[m].fb_user_id===null){
			   html+='<li><i class="fa fa-user" style="font-size: 20px; padding: 7px 10px; background: grey; border-radius: 50px; color: white;"></i></li>';
			  }else{
			   html+='<li><img src="http://graph.facebook.com/'+data[m].fb_user_id+'/picture?type=small" alt="" style="height: 30px; width: 30px; border-radius: 50px; padding: 1px;"/></li>';
			  }
			}
			html+='</ul>';
			$(".leaderboard").append(html);
			$(".program-meta-friends").attr('style','padding: 0px; margin: 0px; background: grey; color: white; text-align: center; font-size: 14px; cursor: pointer; margin: 0 0 37px;');
			var likefriends = $(".likefriends").children().length;
			if(likefriends != 0){
				$(".program-meta-friends > span").text(likefriends+" friends like this video");
			}
		}	
	}


    function renderProgramData(data){
        var details = data;
		
		program_id=details.program.id;
		//unique id
		program_unique_id=details.program.unique_id;
		program_meta=details.program.name.split('|');
		program_name=program_meta.pop(0);
		program_episode=program_meta.pop(1);
		program_channel=program_meta.pop(2);
		program_views=details.program.nbr_views;
		program_comments=details.program.nbr_conversations;
		program_likes=details.program.nbr_favs;
		is_fav=details.program.is_favorite;
		if(is_fav == 1){
			$(".programLikeText").text("LIKED");
		}
		$('.program-meta-caption').text(program_name);
		$('.program-meta-time').text("ISSUED: "+details.program.start_time);
		$('.program-meta-episode').text(program_episode);
		$('.program-meta-channel').text(program_channel);
		$(".program-meta-description").text(details.program.synopsis);
		program_video_url="https://www.youtube.com/embed/"+details.program.recorded_video.split('v=').pop();
		$(".customprogramvideo").attr('src', program_video_url);
		$(".likeprogram").text(program_likes);
		$(".commentprogram").text(program_comments);
		$(".viewprogram").text(program_views);

		facebook_object_id=details.program.fb_page_url;
		likeuserlist=details.like_user_list;
		conversations = data.conversations;
		for(var x=0; x<data.twittercomments.comments.length;x++){
			twitterdata.push(data.twittercomments.comments[x]);
		}
		for(var y=0; y<data.facebookcomments.comments.length;y++){
			facebookcomments.push(data.facebookcomments.comments[y]);
		}
		friendsfootprint.push(data.friendsfootprint);	
		//renderTwitterComments(twitterdata);
		renderFacebookComments(facebookcomments);
		renderConversations(conversations);
		hash_tag=details.program.twitter;
		getTweets(hash_tag);
		userLikes(likeuserlist);
		updateCommentCount();
		getLeaderBoard();	
    }

	function getLeaderBoard(){
		//apptaAgent.getLeaderBoard(program_id,program_name,function(data){console.log(data);});
		//console.log("get program Leader Board");
		//apptaAgent.getProgramLeaderBoard(program_id,program_name,function(data){console.log(data);});
		//console.log("get global Leader Board");
		//apptaAgent.getGlobalLeaderBoard(friend_fb_user_id,function(data){console.log(data);});
		apptaAgent.getUserWall(app_user_id,fb_user_id,function(data){console.log(data);});
	}

	function updateCommentCount(){
		var count=$(".program-social-data").children().length;
		$(".commentprogram").text(count);
	}
	
	function callUserLikes(){
		if(likeuserlist){
			userlikes(likeuserlist);
		}else{
		}
	}

	function getTweets(hash){
		//api to get twitter feeds
		hash_tag=hash;
		apptaAgent.getTweets(hash_tag, program_id,function(data){
			renderTwitterComments(data.tweets);
		});
	}
		
	function getPublicComments(){
		type="public";
		apptaAgent.getComments(program_id,program_name,type, function(data){
			public_conversations=data.conversations;
			renderPublicComments(public_conversations);
			//reverseRenderedData();
		});
	}
	function reverseRenderedData(data){
		var aData = $(".program-social-data").children().toArray();
			aData.reverse();
			$.each(aData, function(){
				$(".program-social-data").append(this);
			});
			
	}

	function renderPublicComments(public_conversations){
		$(".teletango-data").remove();
		renderConversations(public_conversations);
		$('.teletango-data').sort(function(a, b){return a-b});
	}

	function getPrivateComments(){
		type="private";
		apptaAgent.getComments(program_id,program_name,type, function(data){
			private_conversations=data.conversations;
			renderPrivateComments(private_conversations);
		});

	}
	
	function getFacebookComments(){
		facebook_object_id="99881661864";
		console.log("get Facebook Comments");
		apptaAgent.getFBComments(program_id,program_name,facebook_object_id,function(data){
				processFacebookComments(data);
		});	
	}

	function processFacebookComments(posts){
		console.log(posts.length);
		
	}
	
	function renderPrivateComments(private_comments){
		console.log(private_comments);
		$(".chatconversationslist").empty();
		for(var n=0; n<private_comments.length; n++){
			html = '<li style="width: 300px; float: right" class="">';
			html += '	<div style="padding: 0px;" class="col-md-10">';
			html +='		<span>'+private_comments[n].text+'</span>';
			html += '		<span style="font-size: 10px; float: right; color: grey;">'+private_comments[n].name+'</span>';
			html += '	</div>';
			html += '	<div class="col-md-2" style="padding: 0px;">';
			html += '		<img src="http://graph.facebook.com/'+fb_user_id+'/picture?type=small" style="" alt="">';
			//html += '		<i class="fa fa-user" style="font-size: 30px; color: grey; padding: 7px 10px; border-radius: 50px; background: #f5f5f5; border: 1px solid lightgrey;"></i>';
			html += '	</div>';
			html += '</li>';
			$(".chatconversationslist").append(html);
		}
	}
		
	function renderTwitterComments(twitter){
		for(var d=0; d<twitter.length;d++){
			//var name = findTwitterDetails(twitter[d].twuserid);
			var time = timeAgo(twitter[d].created_time);
			if(parseInt(time)<0){time=0;}
			html = '<div style="padding: 18px 0px; margin: 4px 0px; background: white;" class="col-md-12 twitter-data">';
			html += '	<div class="col-md-3 program-social-data-image">';
			html += '	  <img style="border-radius: 50px;" alt="" src="'+twitter[d].profileurl+'">';
			html += '	</div>';
			html += '	<div class="col-md-7 program-social-data-name">';
			html += '	  <span>'+twitter[d].twusername+'</span>';
			html += '	</div>';
			html += '	<div class="col-md-2 program-social-data-srcmedia">';
			html += '	  <img style="border-radius: 50px; height: 20px; width: 20px;" alt="" src="http://telemundo.teletango.com/reference/images/twitterlogo.png">';
			html += '	</div>';
			html += '	<div class="col-md-12">';
			html += '	    '+twitter[d].comment+' ';
			html += '	</div>';
			html += '	<div class="time-ago col-md-12">';
			html += ' 	<span class="timeago" style="font-size: 10px; float: right;">'+time+'</span>';
			html += ' 	</div>';
			html += '	<div class="social-actions col-md-12">';
			html += '		<a class="twitterReply" data-toggle="modal" data-target="#myModalTwitter" id="'+twitter[d].twuserid+'" onclick="triggerReplyWindow('+twitter[d].twuserid+');"></a>';
			html += '		<a class="twitterRetweet" onclick="twitterRetweet('+twitter[d].twuserid+');""></a>';
			html += '		<a class="twitterFav" onclick="twitterFav('+twitter[d].twuserid+');""></a>';
			html += '	</div>';
			html += '</div>'; 
			$(".program-social-data").append(html);

		}
	}
	
	function triggerReplyWindow(id){
		$(".twitterIDinModal").val(id);
	}

	function timeAgo(time){
		var now_time = 	new Date(time);
		current_time=$.now();
		var cur_time = new Date(current_time);
		var diff = cur_time - now_time;
		seconds = Math.floor(diff/1000);
		minutes = Math.floor(seconds/60);
		hours = Math.floor(minutes/60);
		days = Math.floor(hours/24);

		hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

		if(days> 0 && hours > 0 && minutes > 0 && seconds > 0){
			var time = days+" days "+hours+" hrs "+minutes+" mins "+seconds+" seconds ago";
		}else if(days <= 0){
			var time = hours+" hrs "+minutes+" mins "+seconds+" seconds ago";

		}else if(days <= 0 && hours<=0){
			var time = minutes+" mins "+seconds+" seconds ago";

		}else if(days <=0 && hours<=0 && minutes <=0 ){
			var time = seconds+" seconds ago";
		}else{
			var time = "moments ago";
			
		}

		return time			
			
	}

	function timeAgoComments(time){
		var my_date =time;
		my_date = my_date.replace(/-/g, "/"); //this will replace "-" with "/"
		var  javascript_date = new Date(my_date);
		current_time=$.now();
		var cur_time = new Date(current_time);
		var diff = cur_time - javascript_date;
		
		seconds = Math.floor(diff/1000);
		minutes = Math.floor(seconds/60);
		hours = Math.floor(minutes/60);
		days = Math.floor(hours/24);

		hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
		//var time = days+" days "+hours+" hrs "+minutes+" mins "+seconds+" seconds ago";
		if(days > 0){
			var time = days+" days ago";
		}else if(days <=0 && hours > 0){
			var time = hours+" hrs ago";
		}else if(days <=0 && hours <=0 && minutes > 0){
			var time = minutes+" mins ago";
		}else{
			var time = "moments ago";
		}
		//var time = days+" days "+hours+" hrs "+minutes+" mins "+seconds+" seconds ago";
	
		return time				
	}

	function renderFacebookComments(facebook){
		//var time = timeAgo(twitter[d].created_time);
		for(var f=0; f<facebook.length;f++){
			html = '<div style="padding: 18px 0px; margin: 4px 0px; background: white;" class="col-md-12 facebook-data">';
			html += '	<div class="col-md-3 program-social-data-image">';
			html += '	  <img style="border-radius: 50px;" alt="" src="'+facebook[f].thumbnail+'">';
			html += '	</div>';
			html += '	<div class="col-md-7 program-social-data-name">';
			html += '	  <span>'+facebook[f].name+'</span>';
			html += '	</div>';
			html += '	<div class="col-md-2 program-social-data-srcmedia">';
			html += '	  <img style="border-radius: 50px; height: 20px; width: 20px;" alt="" src="http://telemundo.teletango.com/reference/images/facebooklogo.png">';
			html += '	</div>';
			html += '	<div class="col-md-12">';
			html += '	    '+facebook[f].comment+' ';
			html += '	</div>';
			html += '	<div class="time-ago col-md-12">';
			html += ' 	<span style="font-size: 10px; float: right;">'+facebook[f].created+'</span>';
			html += ' 	</div>';
			html += '	<div class="social-actions col-md-12">';
			html += '		<a class="facebookLike" onlick="facebookLike();"></a>';
			html += '	</div>';
			html += '</div>'; 
			$(".program-social-data").append(html);
		}
	}
		
	function renderConversations(data){
		for(var b=0; b<data.length;b++){
			if(data[b].likes == 0){
				var likestatus = '<a class="teletangoLike" id="comment-'+data[b].conversation_id+'" onclick="teletangoLike('+data[b].conversation_id+')"><i class="fa fa-thumbs-up"></i><span class="comment-'+data[b].conversation_id+'">Like</span></a>'; 
			}else{
				var likestatus = '<a class="teletangoLike" style="color: darkred;"><i class="fa fa-thumbs-up"></i><span class="comment-'+data[b].conversation_id+'">Liked</span></a>'; 
			}
			var ctime = timeAgoComments(data[b].created);

			if(parseInt(ctime)<0){ctime=0+" seconds ago";}
			chtml = '<div style="padding: 18px 0px; margin: 4px 0px; background: white;" class="col-md-12 teletango-data teletango-data-'+data[b].conversation_id+'">';
			chtml += '	<div class="col-md-3 program-social-data-image">';
			chtml += '		<i class="fa fa-user" style="font-size: 30px; color: grey; padding: 7px 10px; border-radius: 50px; background: #f5f5f5; border: 1px solid lightgrey;"></i>';
			//chtml += '	  <img style="border-radius: 50px;" alt="" src="'+data[b].app_user_id+'">';
			chtml += '	</div>';
			chtml += '	<div class="col-md-7 program-social-data-name">';
			if(data[b].name){
				chtml += '	  <span>'+data[b].name+'</span>';
			}
			chtml += '	</div>';
			chtml += '	<div class="col-md-2 program-social-data-srcmedia">';
			chtml += '	  <img style="border-radius: 50px; height: 20px; width: 20px;" alt="" src="images/logo.png">';
			chtml += '	</div>';
			chtml += '	<div class="col-md-12">';
			chtml += '	    '+data[b].text+' ';
			chtml += '	</div>';
			chtml += '	<div class="time-ago col-md-12">';
			//chtml += ' 	<span  style="font-size: 10px; float: right;">'+data[b].created+'</span>';
			chtml += ' 	<span  style="font-size: 10px; float: right;">'+ctime+'</span>';
			chtml += ' 	</div>';
			chtml += '	<div class="social-actions col-md-12">';
			//chtml += '		<a class="teletangoLike" id="comment-'+data[b].conversation_id+'" onclick="teletangoLike('+data[b].conversation_id+')"><i class="fa fa-thumbs-up"></i><span class="comment-'+data[b].conversation_id+'">Like</span></a>';
			chtml += likestatus;
			chtml += '	</div>';

			chtml += '</div>'; 
			//$(".chatconversationslist").append(html);
			$(".program-social-data").append(chtml);
			$('.teletango-data').sort(function(a, b){return a-b});

		}
	}

	function teletangoLike(id){
		var comment_id=id;
		var type="public";
		apptaAgent.likeProgramComment(program_id,program_name,comment_id,type, function(){
			$(".comment-"+comment_id).text("Liked");
			$("#comment-"+comment_id).attr('style','color: darkred');
			//currentlikecount = parseInt($('.likeprogram').text());
			//currentlikecount += 1;
			//$(".likeprogram").text(currentlikecount);
			
		});
	}
    function fbLogin(){
      var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
      var apptaAgent = new ApptaAgent();
      apptaAgent.login(api_key); 
    }
	
	function programLike(){
		if(is_fav == 0){	
			
			apptaAgent.likeProgram(program_id,program_name);	
			$(".likeprogramicon").attr('style','color: blue');
			var likevalue = $(".likeprogram").text();
			$(".likeprogram").text(parseInt(likevalue)+1);
			$(".programLikeText").text("LIKED");
			is_fav=1;
		}else if(is_fav == 1){
			$(".programLikeText").text("LIKED");
		}
		//getProgramDetails(program_id);
		//$.bootstrapGrowl("Successfully liked the program");
		
	}

	function programComments(){
		var comment_text = $(".teletangocomment").val();
		var type="program";
		apptaAgent.postComment(program_id,program_name,comment_text,type);
		apptaAgent.getComments(program_id,program_name,type, function(data){ 
				getPublicComments();
				$(".commentprogramicon").attr('style','color: blue');
				var total_comment_count = $(".commentprogram").text();
				$(".commentprogram").text(parseInt(total_comment_count)+1);
		});
		$('#myModal').hide();			
	}

	function leaderboard(){

	}

	function submitComment(chat_type){
		if(is_loggedin === true){
			comment_text=$(".privatechat").val();
			type = "private";
			apptaAgent.postComment(program_id,program_name,comment_text,type);
			$('.privatechat').val("");
			getPrivateComments();
		}else if(is_loggedin === false){
			apptaAgent.login();
		}
	}

	function postToFacebook(){
		var facebook_message=$(".facebookcomment").val();
		apptaAgent.postFBComment(program_id,program_name,facebook_object_id,facebook_message);
	}
	function postToTwitter(){
		var twitter_text = $(".twittercomment").val();
		apptaAgent.postTweet(program_id,program_name,twitter_text);
		//$.bootstrapGrowl("Post to twitter Successfull");
	}
	function twitterRetweet(id){
		tweet_id=id;
		apptaAgent.postReTweet(program_id,program_name,tweet_id);
		//$.bootstrapGrowl("Retweet Successfull");
	}
	function twitterReply(id){
		twitter_text=$(".replytweet").val();
		tweet_id=$(".twitterIDinModal").val();
		apptaAgent.postReplyTweet(program_id,program_name,twitter_text,tweet_id);
		//$.bootstrapGrowl("Tweet Reply successfull");
	}
	function twitterFav(id){
		tweet_id=id;
		apptaAgent.postFavouriteTweet(program_id,program_name,tweet_id);
		//$.bootstrapGrowl("Tweet Favourite Successfull");
	}

	function refresh(){
		$(".teletango-data").empty();
		//call tango comments public programs	
		apptaAgent.getComments(program_id,program_name,type, function(data){renderConversations(data);});
		//call facebook comments
		//call getTweets
	}

	function getProgramsofChannel(channel_passed){
		var filter_object={
			channel_name:channel_passed,
			page_size:15,
		};
		apptaAgent.getLounge(filter_object,function(data){
			renderProgramsinChannel(data.loungePrograms);
		});			
	}	

	function renderProgramsinChannel(programs){
		
		for(var a=0; a<programs.length;a++){
			html = '<li class="item">';
			html += '<img src="'+programs[a].thumbnail+'" alt="'+programs[a].name+'"/>';
			$(".program-grid-programs").append(html);
		}
		
		
	}
	function videoPlay(){
		$("#videoloaderiframe").playVideo();
	
	}
	
	function randomNum(hi){
	    return Math.floor(Math.random()*hi);
	} 
	function randomChar(){
	    return String.fromCharCode(randomNum(100));
	}
	function randomString(length){
	   var str = "";
	   for(var i = 0; i < length; ++i){
	        str += randomChar();
	   }
	   return str;
	}
	var RandomString = randomString(32); //32 length string

	
	function callPlayer(frame_id, func, args){
		frame_id="videoloaderiframe";
		
		if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
    	var iframe = document.getElementById(frame_id);
    	  if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
    	    iframe = iframe.getElementsByTagName('iframe')[0];
    	  }
    	  // When the player is not ready yet, add the event to a queue
    	  // Each frame_id is associated with an own queue.
    	  // Each queue has three possible states:
    	  //undefined = uninitialised / array = queue / 0 = ready
    	  if (!callPlayer.queue) callPlayer.queue = {};
    	  
    	  var queue = callPlayer.queue[frame_id],
    	  domReady = document.readyState == 'complete';
    	  
    	  if (domReady && !iframe) {
    	    // DOM is ready and iframe does not exist. Log a message
    	    window.console && console.log('callPlayer: Frame not found; id=' + frame_id);
    	      if (queue) clearInterval(queue.poller);
    	  } 
    	  else if (func === 'listening') {
    	    // Sending the "listener" message to the frame, to request status updates
    	    if (iframe && iframe.contentWindow) {
    	      func = '{"event":"listening","id":' + JSON.stringify(''+frame_id) + '}';
    	      iframe.contentWindow.postMessage(func, '*');
    	    }
    	  } 
    	  else if (!domReady ||
    	    iframe && (!iframe.contentWindow || queue && !queue.ready) ||
    	      (!queue || !queue.ready) && typeof func === 'function') {
    	        if (!queue) queue = callPlayer.queue[frame_id] = [];
    	          queue.push([func, args]);
    	            if (!('poller' in queue)) {
    	              // keep polling until the document and frame is ready
    	              queue.poller = setInterval(function() {
    	                callPlayer(frame_id, 'listening');
    	              }, 250);
    	    
    	    // Add a global "message" event listener, to catch status updates:
        	messageEvent(1, function runOnceReady(e) {
        	    if (!iframe) {
        	        iframe = document.getElementById(frame_id);
        	          if (!iframe) return;
        	          if (iframe.tagName.toUpperCase() != 'IFRAME') {
        	            iframe = iframe.getElementsByTagName('iframe')[0];
        	            if (!iframe) return;
        	          }
        	    }
	
	            if (e.source === iframe.contentWindow) {
	                // Assume that the player is ready if we receive a
	                // message from the iframe
	                clearInterval(queue.poller);
	                queue.ready = true;
	                messageEvent(0, runOnceReady);
	                // .. and release the queue:
	                while (tmp = queue.shift()) {
	                    callPlayer(frame_id, tmp[0], tmp[1]);
	                }
    	        }
    	    }, false);
    	}
	  } 	
	  else if (iframe && iframe.contentWindow) {
    	// When a function is supplied, just call it (like "onYouTubePlayerReady")
    	if (func.call) return func();
    	// Frame exists, send message
    	iframe.contentWindow.postMessage(JSON.stringify({
    	    "event": "command",
    	    "func": func,
    	    "args": args || [],
    	    "id": frame_id
    	}), "*");
 	 }	
		/* IE8 does not support addEventListener... */
		function messageEvent(add, listener) {
  		 	var w3 = add ? window.addEventListener : window.removeEventListener;
    	 	w3 ?
 		    w3('message', listener, !1)
 		    :
 		    (add ? window.attachEvent : window.detachEvent)('onmessage', listener);
		}
	}
		

