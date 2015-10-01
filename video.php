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
    <script src="menu.js"></script>
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
        <a class="navbar-brand" href="#" style="padding: 4px;"><img src="images/logo.png" alt="Telemundo"/></a>
      </div>
      
      <div class="collapse navbar-collapse js-navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="dropdown mega-dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Novelas</a>       
          </li>
          <li class="dropdown mega-dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Shows</a>        
          </li>
          <li class="dropdown mega-dropdown">
           	<a href="#" class="dropdown-toggle" data-toggle="dropdown">Videos</a>        
            <ul class="dropdown-menu mega-dropdown-menu">
              <li><a href="#">Auto Carousel</a></li>
                  <li><a href="#">Carousel Control</a></li>
                  <li><a href="#">Left & Right Navigation</a></li>
                  <li><a href="video.php">Capitulo 99</a></li>
                  <li><a href="#">Glyphicon</a></li>
                  <li><a href="#">Google Fonts</a></li>
              
            </ul>       
          </li>
          <li><a href="#">Entretenimiento</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">Deportes</a></li>
          <li><a href="#">Mujer</a></li>
          <li><a href="#">Talentos</a></li>
          <li><a href="#">Mas</a></li>
          <li><a href="#">Tu Canal</a></li>
          <li style="background: darkred; padding: 11px; cursor: pointer;" >
            <!-- onclick="settings()" -->
            <a style="padding: 4px;"><i class="fa fa-eye" style="font-size: 21px; ">
              <input id="toggle-event" checked data-toggle="toggle" data-size="mini" data-onstyle="warning" type="checkbox" name="privacy-checkbox" onclick="settings()"></i>
            </a>
          </li>
          <li style="background: #3b5958; padding: 11px; cursor: pointer;">
            <a onclick="facebookLogin()" style="padding: 0px;">
              <i class="fa fa-facebook" style="background: white none repeat scroll 0% 0%; color: rgb(59, 89, 88); padding: 4px 9px;font-size: 21px; border-radius: 50px;"></i>
              <span class="customfblogin" style="font-size: 15px; text-transform: lowercase;">login</span>
            </a>
          </li>
          <li class="userimage" style="background: #9cbdff; padding: 3px;">
            <a style="padding: 3px;" class="userimagecontainer" href="#"><i class="fa fa-user" style="font-size: 36px; padding: 2px;"></i></a>
          </li>
        </ul>
      </div><!-- /.nav-collapse -->
      </nav>
    </div>
  </div>  
  <div class="container" style="margin-top: 30px; ">
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
              <iframe width="813" height="415" src="https://www.youtube.com/embed/G4eoUTkD0MQ" frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="col-md-12 program-video-parts" style="padding: 0px;">
              <div class="col-md-2 customwell">PARTE: </div>
              <div class="col-md-2 customwell">1</div>
              <div class="col-md-2 customwell">2</div>
              <div class="col-md-2 customwell">3</div>
              <div class="col-md-2 customwell">4</div>
              <div class="col-md-2 customwell">5</div>
            </div>
        </div>
        <div class="col-md-4 program-meta" style="padding: 0px;">
          <div class="col-md-6 program-meta-channel" style="background: red none repeat scroll 0% 0%; color: white; font-weight: bold; text-align: left; padding: 3px 8px; font-size: 18px;">Latest Chapter</div>
          <div class="col-md-12 program-meta-details" style="border-bottom: 1px solid lightgrey">
              <span class="program-meta-caption" style="margin-top: 20px; font-weight: bold; font-size: 14px; color: red; text-transform: lowercase;">EL SenoR DE LOS CApitulos</span><br/>
              <span class="program-meta-episode" style="font-size: 30px; font-weight: bold; color: black;">Capitulo 99</span><br/>
              <span class="program-meta-time" style="font-size: 12px; color: grey;">EMITIDO : LUNES, 09/14/2015</span><br/>
              <span class="program-meta-description" style="font-size: 14px; color: #222; text-align: justify">Casillas le dice a Venegas que le va cobrar meterse con su familia</span><br/>
          </div>
		
          <div  class="col-sm-12 program-meta-share" style="border-bottom: 1px solid lightgrey; cursor: pointer" onclick="fbshare();">
               <img style="padding: 4px; position: relative; left: 31%;" class="share" src="images/share.png"/>
          </div>
          <div onclick="userlikes(data);" class="col-sm-12 program-meta-friends" style="cursor: pointer; padding: 0px; margin: 0px; height: 20px; background: grey; color: white; text-align: center; font-size: 14px;">
            <span> Friends who like this video</span>
			<div class="leaderboard" style="display: none;"></div>
          </div>
          <div class="col-sm-12 chatconversation program-meta-conversations" style=" border-bottom: 1px solid lightgrey;">
              <ul class="chatconversationslist" style="overflow-y: scroll; padding: 0px;">
              </ul>
          </div>
          <div class="conversationcontrol col-sm-12" style="margin: 2px 0px;">
            <div class="col-sm-2" style="padding: 10px 15px;" onclick="uploadVideo();">
				<img src="images/video.png" style=";"/>
            </div>
            <div class="col-sm-2" style="padding: 12px 15px;" onclick="uploadImage();">
				<img src="images/photo.png" style=""/>
            </div>
            <div class="col-sm-6 inputtextconversation" style="border-left: 1px solid lightgrey; padding: 10px;">
                <input class="privatechat" type="text" name="privecomments" placeholder="Chat with your friends"/>
            </div>
            <div class="enterConversation col-sm-2" style="padding: 10px;">
                  <a onclick="submitComment()"><img src="images/send.png" style=""></a>
            </div>
          </div>
          <div class="program-meta-calendar col-sm-12" style="background: orange;">
              <span style="padding: 10px;"><i class="fa fa-calendar" style="font-size: 29px; color: white; padding: 5px"></i><span style="padding: 05px; font-size: 21px; color: white; font-weight: bold">CALENDARIO DE EPISODES </span><a href="#" style="font-size: 28px; color: white; font-weight: bold; position: relative; top: 1px; left: 20px">&gt;</a></span>
          </div>
        </div>
    </div>
    <div class="col-md-12" style="padding: 0px;">
        <div class="col-md-3 program-social">
            <div class="col-md-12 program-social-icons">
              <div class="col-md-4 program-social-icon">
                <i class="fa fa-thumbs-up"></i><span>30</span>
              </div>
              <div class="col-md-4 program-social-icon">
                <i class="fa fa-eye"></i><span>30</span>
              </div>
              <div class="col-md-4 program-social-icon no-right-border" >
                <i class="fa fa-comments"></i><span>30</span>
              </div>
              
            </div>
            <div class="col-md-12 program-social-actions">
              <div class="col-md-3 program-social-action">
                <a href="#" onclick="programLike();">LIKE</a>
              </div>
              <div class="col-md-4 program-social-action">
                <a data-toggle="modal" data-target="#myModal" href="#">COMMENT</a>
              </div>
              <div class="col-md-4 program-social-action">
                <a href="#" onclick="leaderboard()">LEADERBOARD</a>
              </div>
            </div>
            <div class="col-md-12 program-social-data">
              <div class="col-md-12" style="padding: 18px 0px; margin: 4px 0px; background: white;">
                <div class="col-md-3 program-social-data-image">
                  <img src="http://placehold.it/50x50/2ecc71/f5f5f5" alt="" style="border-radius: 50px;"/>
                </div>
                <div class="col-md-7 program-social-data-name">
                  <span>John Nash</span>
                </div>
                <div class="col-md-2 program-social-data-srcmedia">
                  <img src="http://placehold.it/25x25/234ff3/f5f5f5" alt="" style="border-radius: 50px;"/>
                </div>
                <div class="col-md-12">
                    Text data from social content with description
                </div>
              </div>
              <div class="col-md-12" style="padding: 18px 0px; margin: 4px 0px; background: white;">
                <div class="col-md-3 program-social-data-image">
                  <img src="http://placehold.it/50x50/2ecc71/f5f5f5" alt="" style="border-radius: 50px;"/>
                </div>
                <div class="col-md-7 program-social-data-name">
                  <span>Jake</span>
                </div>
                <div class="col-md-2 program-social-data-srcmedia">
                  <img src="http://placehold.it/25x25/234ff3/f5f5f5/?F" alt="" style="border-radius: 50px;"/>
                </div>
                <div class="col-md-12">
                    Text data from social content with description
                </div>
              </div>
              <div class="col-md-12" style="padding: 18px 0px; margin: 4px 0px; background: white;">
                <div class="col-md-3 program-social-data-image">
                  <img src="http://placehold.it/50x50/2ecc71/f5f5f5/?F" alt="" style="border-radius: 50px;"/>
                </div>
                <div class="col-md-7 program-social-data-name">
                  <span>Joe Brownski</span>
                </div>
                <div class="col-md-2 program-social-data-srcmedia">
                  <img src="http://placehold.it/25x25/234ff3/f5f5f5/?T" alt="" style="border-radius: 50px;"/>
                </div>
                <div class="col-md-12">
                    Text data from social content with description
                </div>
              </div>
            </div>
        </div>
        <div class="col-md-9 program-grid">
          <div class="col-md-12 program-grid-control">
              <div class="col-md-3 btn btn-large btn-warning">All Episodes</div>
              <div class="col-md-3"></div>
              <div class="col-md-3 btn btn-large btn-default">Temporada 3 <i class="fa fa-down"></i></div>
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
  <div class="modal fade" id="myModal" role="dialog">
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
			      <a href="#" onclick="programComments()" class="btn btn-sm btn-warning">POST to Teletango</a>
			    </div>
			    <div role="tabpanel" class="tab-pane" id="facebook">
					<div class="form-group">
					  <div class="">                     
					    <textarea class="form-control facebookcomment" id="textarea" name="textarea" placeholder="Enter your facebook message  here"></textarea>
					  </div>
					</div>
			      <a href="#" onclick="postToFacebook()" class="btn btn-sm btn-default">Comment on Facebook</a>
			
				</div>
			    <div role="tabpanel" class="tab-pane" id="twitter">
					<div class="form-group">
					  <div class="">                     
					    <textarea class="form-control twittercomment" id="textarea" name="textarea" placeholder="Enter your tweet here"></textarea>
					  </div>
					</div>
			      <a href="#" onclick="postToTwitter()" class="btn btn-sm btn-danger">Tweet here</a>
					
				</div>
			  </div>
			</div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</body>
</html>
