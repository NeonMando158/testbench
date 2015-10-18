<html>
<head>
	<script type="text/javascript" src="http://connect.facebook.net/en_US/sdk.js"></script>
  	<script src="https://code.jquery.com/jquery-1.11.3.js"></script>
  	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="menu.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="http://mydrive.apptarix.com:8080/apptajs/appta.js"></script>
    <script src="program.js"></script>
    <script src="common.js"></script>
    <script src="menu.js"></script>
    <title>Telemundo Program </title>
</head>
<body>
  <div class="" style="background: #f90f00;">
    <div class="container" style="background: #f90f00;">
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="javascript:void(0)" style="padding: 4px;"><img src="images/logo.png" alt="Telemundo"/></a>
      </div>
      
      <div class="collapse navbar-collapse js-navbar-collapse">
    		<ul class="nav navbar-nav">
          		<li class="dropdown mega-dropdown">
          			<a href="#" class="dropdown-toggle" data-toggle="dropdown">NOVELAS</a>       
          		</li>
          		<li class="dropdown mega-dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">SHOWS</a>        
          		</li>
          		<li class="dropdown mega-dropdown">
            		<a href="#" class="dropdown-toggle" data-toggle="dropdown">ENTRETENIMIENTO</a>        
            		<ul class="dropdown-menu mega-dropdown-menu">
              			<li><a href="#">INICIA</a></li>
              			<li><a href="#">VIDEOS</a></li>
              			<li><a href="#">BILLBOARD EN ESPANOL</a></li>
              			<li><a href="video.php">FANDANGO CINE</a></li>
              			<li><a href="#">FARANDULA</a></li>
              			<li><a href="#">LATIN AMAS</a></li>
            		</ul>       
          		</li>
          		<li><a onclick="videoPlay()" href="javascript:void(0)">VIDEOS</a></li>
          		<li><a href="#">NOTICIAS</a></li>
          		<li><a href="#">DEPORTES</a></li>
          		<li><a href="#">MUJER</a></li>
          		<li><a href="#">TALENTOS</a></li>
          		<li><a href="#">MAS</a></li>
          		<li><a href="#">TU CANAL</a></li>
          		<li style="background: darkred; padding: 11px; cursor: pointer;" class="privacyOptions"  onmouseover="privacyCheck(this)">
            		<a style="padding: 4px;"><i class="fa fa-eye" style="font-size: 21px; ">
 	             		<input style="display: none;" id="toggle-event" checked data-toggle="toggle" data-size="mini" data-onstyle="warning" type="checkbox" name="privacy-checkbox" onclick="settings()"></i>
            		</a>
          		</li>
          		<li style="background: #3b5958; padding: 11px; cursor: pointer; margin: 0px 10px;" class="facebookLogin" onmouseover="infoFB(this)">
           	 		<a onclick="fbLogin()" style="padding: 0px;">
             	 		<i class="fa fa-facebook" style="background: white none repeat scroll 0% 0%; color: rgb(59, 89, 88); padding: 4px 9px;font-size: 21px; border-radius: 50px;"></i>
              			<span class="customfblogin" style="font-size: 15px; text-transform: Capitalize;">login</span>
            		</a>
          		</li>
          		<li class="userimage" style="background: #9cbdff; padding: 3px;">
           		 	<a style="padding: 3px;" class="userimagecontainer" href="#"><i class="fa fa-user" style="font-size: 36px; padding: 2px;"></i></a>
          		</li>
				<li onclick="fbLogout()"><i class="fa fa-power-off" style="font-size: 26px; padding: 13px; background: white; cursor: pointer"></i></li>
        	</ul>
    	</div><!-- /.nav-collapse -->
      </nav>
    </div>
  </div>  
  <div class="container" style="background: lightblue; position: fixed; z-index: 99999; width: 500px !important; left: 50%; border-radius: 5px;">
	<div id="custom-privacy" class="custom-privacy-message" style="display: none;">
		 <div class="closePInfo" style="float: right; cursor: pointer;" onclick="closePINFO()"><i class="fa fa-remove"></i></div>
		<p>This setting enables you to let Telemundo know what you watch and publish that to your friends, 
		so that you can discuss and enjoy the shows together</p>
		<div class="privacy-option-form" style="position: relative; left: 30px;">
				<div class="radio">
				  <label>
					<input onclick="privacyUpdate(this)" type="radio" name="optradio" value="1" checked="true">Allow friends to see what I watch
				</label>
				</div>
				<div class="radio">
				  <label>
					<input onclick="privacyUpdate(this)" type="radio" name="optradio" value="2">Do not allow friends to see what I watch
				  </label>
				</div>
				<div class="radio disabled">
				  <label>
					<input onclick="privacyUpdate(this)" type="radio" name="optradio" value="3" disabled>Do not track what I watch 
				  </label>
				</div>
		</div>
		<p style="width: 370px; text-align: justify;  font-size: 10px; position: relative; left: 70px; top: -10px;">If you choose this option,
			 Telemundo will no longer know what you watch and hence will not offer 
		you content customized for you. If you want your past  viewing history to be removed, send an email 
		to Telemundo support.</p>
		<div class="okPrivacy">
			<input type="hidden" class="selectedprivacy" name="selectedprivacy" value="1"/>
			<a href="javascript:void(0)" onclick="updatePrivacyStatus()" style="float: right; padding: 5px; position: relative; top: -20px; cursor: pointer;" class="btn btn-sm btn-default">OK</a>
		</div>

	</div>
	<div class="custom-fb-message" style="display: none;">
		<div class="closeFBInfo" style="float: right; cursor: pointer;" onclick="closeFBINFO()"><i class="fa fa-remove"></i></div>
		<h4>Login using Facebook to see what your friends are watching!</h4>
		
		<p>Telemundo will collect a few basic information about you that you have shared with Facebook
		to provide you with better recommendation on what you'd love to watch and allow you to interact
		and watch together with your friends. Telemundo does not share your personal information  with anyone
		without your permission. <br/> See more from here: <a href="privacy.php">Telemundo privacy policy</a></p>

	</div>
  </div>
  <div class="container maincontainer" style="margin-top: 30px; ">
    <!-- main program video wrapper -->
    <div class="col-md-12" style="border: 1px solid lightgrey; padding: 0px;">
        <div class="col-md-8" style="padding: 0px;">
            <div class="col-md-12 program_video" style="padding: 0px;">
              <!-- <img src="images/video.png" alt="video" style="width: 100%;"/> -->
              <!-- 
              <video width="400" controls>
                <source src="mov_bbb.mp4" type="video/mp4">
                <source src="mov_bbb.ogg" type="video/ogg">
                Your browser does not support HTML5 video.
              </video> 
              -->
              <iframe id="videoloaderiframe" width="813" height="466" class="customprogramvideo" src="https://www.youtube.com/embed/G4eoUTkD0MQ" frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="col-md-12 program-video-parts" style="padding: 0px; display: none;">
              <div class="col-md-2 customwell">PARTE: </div>
              <div class="col-md-2 customwell">1</div>
              <div class="col-md-2 customwell">2</div>
              <div class="col-md-2 customwell">3</div>
              <div class="col-md-2 customwell">4</div>
              <div class="col-md-2 customwell">5</div>
            </div>
        </div>
        <div class="col-md-4 program-meta" style="padding: 0px;">
          <div class="col-md-6 program-meta-channel">...</div>
          <div class="col-md-12 program-meta-details">
              <span class="program-meta-caption">...</span><br/>
              <span class="program-meta-episode">...</span><br/>
              <span class="program-meta-time">ISSUED : ...</span><br/>
              <span class="program-meta-description">...</span><br/>
          </div>
		
          <div  class="col-sm-12 program-meta-share" onclick="fbshare();">
               <img class="share" src="images/share.png"/>
          </div>
          <div onclick="userLikes(null);" class="col-sm-12 program-meta-friends">
            <span> Friends who like this video</span>
			<div class="leaderboard" style="display: none;">
			</div>
          </div>
          <div class="col-sm-12 chatconversation program-meta-conversations" style=" border-bottom: 1px solid lightgrey;">
              <ul class="chatconversationslist" style="overflow-y: scroll; padding: 0px;">
              </ul>
          </div>
          <div class="conversationcontrol col-sm-12" style="margin: 2px 0px;">
            <!-- <div class="col-sm-2" style="padding: 10px 15px; " onclick="uploadVideo();">
				<img src="images/video.png" style=";"/>
            </div>
            <div class="col-sm-2" style="padding: 12px 15px; " onclick="uploadImage();">
				<img src="images/photo.png" style=""/>
            </div> -->
            <div class="col-sm-10 inputtextconversation" style="padding: 10px;">
                <input style="width: 300px; padding: 6px;" class="privatechat" type="text" name="privecomments" placeholder="Chat with your friends"/>
            </div>
            <div class="enterConversation col-sm-2" style="padding: 10px;">
                  <a onclick="submitComment()"><img src="images/send.png" style=""></a>
            </div>
          </div>
          <div class="program-meta-calendar col-sm-12" style="background: orange;">
              <span style="padding: 10px;"><i class="fa fa-calendar" style="font-size: 29px; color: white; padding: 5px"></i><span style="padding: 05px; font-size: 21px; color: white; font-weight: bold">CALENDARIO DE EPISODES </span><a href="javascript:void(0)" style="font-size: 28px; color: white; font-weight: bold; position: relative; top: 1px; left: 20px">&gt;</a></span>
          </div>
        </div>
    </div>
    <div class="col-md-12" style="padding: 0px;">
        <div class="col-md-3 program-social">
            <div class="col-md-12 program-social-icons">
              <div class="col-md-4 program-social-icon">
                <i class="fa fa-thumbs-up likeprogramicon"></i><span class="likeprogram">0</span>
              </div>
              <div class="col-md-4 program-social-icon">
                <i class="fa fa-eye"></i><span class="viewprogram">0</span>
              </div>
              <div class="col-md-4 program-social-icon no-right-border" >
                <i class="fa fa-comments commentprogramicon"></i><span class="commentprogram">0</span>
              </div>
              
            </div>
            <div class="col-md-12 program-social-actions">
              <div class="col-md-3 program-social-action">
                <a class="programLikeText" href="javascript:void(0)" onclick="programLike();">LIKE</a>
              </div>
              <div class="col-md-4 program-social-action">
                <a data-toggle="modal" data-target="#myModal" href="javascript:void(0)">COMMENT</a>
              </div>
              <div class="col-md-4 program-social-action" style="display: none;">
                <a href="javascript:void(0)" onclick="leaderboard()">LEADERBOARD</a>
              </div>
            </div>
            <div class="col-md-12 program-social-data" style="overflow-y: scroll; height: 400px; padding: 2px 3px; margin: 0px;">
            </div>
        </div>
        <div class="col-md-9 program-grid">
          <div class="col-md-12 program-grid-control">
              <div class="col-md-3 btn btn-large btn-warning">All Episodes</div>
              <div class="col-md-3"></div>
              <div class="col-md-3 btn btn-large btn-default">Channels <i class="fa fa-down"></i></div>
              <div class="col-md-3 btn btn-large btn-default">Recently Viewed <i class="fa fa-down"></i></div>
          </div>
          <div class="col-md-12 program-grid-view">
            <ul class="col-md-12 program-grid-programs">
              <li class="item"></li>
              <li class="item"></li>
              <li class="item"></li>
              <li class="item"></li>
              <li class="item"></li>
              <li class="item"></li>
              <li class="item"></li>
              <li class="item"></li>
              
            </ul>
          </div>
        </div>
    </div>
    <div class="col-md-12 ">
        
    </div>
	<!-- Modal -->
  <div class="modal" id="myModal" role="dialog">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Post A Comment</h4>
        </div>
        <div class="modal-body">
			<div>
			  <!-- Nav tabs -->
			  <ul class="nav nav-tabs" role="tablist">
			    <li role="presentation" class="active"><a href="#teletango" aria-controls="teletango" role="tab" data-toggle="tab">Teletango</a></li>
			    <li role="presentation"><a href="#facebook" aria-controls="facebook" role="tab" data-toggle="tab">Facebook</a></li>
			    <li role="presentation"><a href="#twitter" aria-controls="twitter" role="tab" data-toggle="tab">Twitter</a></li>
			  </ul>
			  <!-- Tab panes -->
			  <div class="tab-content" style="padding: 10px;">
			    <div role="tabpanel" class="tab-pane active" id="teletango">
					<div class="form-group">
					  <div class="">                     
					    <textarea class="form-control teletangocomment" id="textarea" name="textarea" placeholder="Enter your comment here"></textarea>
					  </div>
					</div>
			      <a href="javascript:void(0)" onclick="programComments()" class="btn btn-sm btn-warning" data-dismiss="modal">POST to Telemundo</a>
			    </div>
			    <div role="tabpanel" class="tab-pane" id="facebook">
					<div class="form-group">
					  <div class="">                     
					    <textarea class="form-control facebookcomment" id="textarea" name="textarea" placeholder="Enter your facebook message  here"></textarea>
					  </div>
					</div>
			      <a href="javascript:void(0)" onclick="postToFacebook()" class="btn btn-sm btn-default">Comment on Facebook</a>
			
				</div>
			    <div role="tabpanel" class="tab-pane" id="twitter">
					<div class="form-group">
					  <div class="">                     
					    <textarea class="form-control twittercomment" id="textarea" name="textarea" placeholder="Enter your tweet here"></textarea>
					  </div>
					</div>
			      <a href="javascript:void(0)" onclick="postToTwitter()" class="btn btn-sm btn-danger">Tweet here</a>
					
				</div>
			  </div>
			</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default"  data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
	<!-- twitter reply modal window -->
 	<div class="modal" id="myModalTwitter" role="dialog">
    	<div class="modal-dialog modal-md">
    	  <div class="modal-content">
    	    <div class="modal-header">
    	      <button type="button" class="close" data-dismiss="modal">&times;</button>
    	      <h4 class="modal-title">Reply to Tweet</h4>
    	    </div>
    	    <div class="modal-body">
    	    	<div class="form-group">
    	        	<textarea class="form-control replytweet" id="textarea" name="textarea" placeholder="Enter your tweet here"></textarea>
    	        </div>
	        </div>
	        <div class="modal-footer">
			  <input type="hidden" name="twitterIDinModal" class="twitterIDinModal" value="" id=""/>
    	      <a id="" href="javascript:void(0)" onclick="twitterReply()" class="btn btn-sm btn-danger">Reply</a>
	          <button type="button" class="btn btn-default"  data-dismiss="modal">Close</button>
	        </div>
	      </div>
	    </div>
	  </div>

	<!-- twiiter reply modal window closes -->

  </div>
</body>
</html>
