<html>
<head>
	<script type="text/javascript" src="http://connect.facebook.net/en_US/sdk.js"></script>
	<script src="https://code.jquery.com/jquery-1.11.3.js"></script>
	<link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="bootstrap-theme.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="menu.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- <script type="text/javascript" src="http://mydrive.apptarix.com:8080/apptajs/lib/ajaxq.js"/></script>
    <script type="text/javascript" src="http://mydrive.apptarix.com:8080/apptajs/lib/jstz-1.0.4.min.js"/></script> -->
    <script src="http://mydrive.apptarix.com:8080/apptajs/appta.js"></script>
	<!-- <script type="text/javascript" src="http://mydrive.apptarix.com:8080/apptajs/commons/commons.js"></script>
    <script type="text/javascript" src="http://mydrive.apptarix.com:8080/apptajs/events/events.js"/></script>
    <script type="text/javascript" src="http://mydrive.apptarix.com:8080/apptajs/gamification/gamification.js"/></script>
    <script type="text/javascript" src="http://mydrive.apptarix.com:8080/apptajs/social/social.js"/></script>-->
    <script src="index.js"></script>
    <script src="commons.js"></script>
    <script src="menu.js"></script>
    <title>Telemundo</title>
</head>
<body class="mainbody">
   <div class="" style="background: #f90f00;">
    <div class="container menucontainer" style="background: #f90f00;">
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
        	<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
    			<span class="sr-only">Toggle navigation</span>
    			<span class="icon-bar"></span>
    			<span class="icon-bar"></span>
    			<span class="icon-bar"></span>
    		</button>
    		<a class="navbar-brand" href="index.php" style="padding: 4px;"><img src="images/logo.png" alt="Telemundo"/></a>
    	</div>
    	
    	<div class="collapse navbar-collapse js-navbar-collapse">
    		<ul class="nav navbar-nav">
          		<li class="dropdown mega-dropdown">
          			<a href="javascript:void(0)" onclick="loadNovelas()" class="dropdown-toggle" data-toggle="dropdown">NOVELAS</a>       
          		</li>
          		<li class="dropdown mega-dropdown">
            		<a href="javascript:void(0)" onclick="loadEnglish()" class="dropdown-toggle" data-toggle="dropdown">SHOWS</a>        
          		</li>
          		<li class="dropdown mega-dropdown">
            		<a href="javascript:void(0)" onclick="loadEnt()" class="dropdown-toggle" data-toggle="dropdown">ENTRETENIMIENTO</a>        
            		<ul class="dropdown-menu mega-dropdown-menu">
              			<li><a href="#">INICIA</a></li>
              			<li><a href="#">VIDEOS</a></li>
              			<li><a href="#">BILLBOARD EN ESPANOL</a></li>
              			<li><a href="video.php">FANDANGO CINE</a></li>
              			<li><a href="#">FARANDULA</a></li>
              			<li><a href="#">LATIN AMAS</a></li>
            		</ul>       
          		</li>
          		<li><a href="#">VIDEOS</a></li>
          		<li><a href="#">NOTICIAS</a></li>
          		<li><a href="#">DEPORTES</a></li>
          		<li><a href="#">MUJER</a></li>
          		<li><a href="#">TALENTOS</a></li>
          		<li><a href="#">MAS</a></li>
          		<li><a href="#">TU CANAL</a></li>
          		<li style="display: none;" class="privacyOptions"  onclick="checkPrivacySettings(this)">
            		<a style="padding: 4px;"><i class="fa fa-eye" style="font-size: 21px; ">
 	             		<input style="display: none;" id="toggle-event" checked data-toggle="toggle" data-size="mini" data-onstyle="warning" type="checkbox" name="privacy-checkbox" onclick="settings()"></i>
            		</a>
          		</li>
          		<li style="background: #3b5958; padding: 11px; cursor: pointer; margin: 0px 10px;" class="facebookLogin" onclick="showFacebookInformation(this)">
           	 		<a style="padding: 0px;">
             	 		<i class="fa fa-facebook" style="background: white none repeat scroll 0% 0%; color: rgb(59, 89, 88); padding: 4px 9px;font-size: 21px; border-radius: 50px;"></i>
              			<span class="customfblogin" style="font-size: 15px; text-transform: Capitalize;">login</span>
            		</a>
          		</li>
          		<li class="userimage" style="background: #9cbdff; padding: 3px;">
           		 	<a data-toggle="modal" data-target="#GLeaderBoard" style="padding: 3px;" class="userimagecontainer" href="javascript:void(0)" onclick="GlobalLeaderBoard();"><i class="fa fa-user" style="font-size: 36px; padding: 2px;"></i></a>
          		</li>
				<li onclick="fbLogout()"><i class="fa fa-power-off" style="font-size: 26px; padding: 13px; background: white; cursor: pointer"></i></li>
        	</ul>
    	</div><!-- /.nav-collapse -->
      </nav>
    </div>
  </div>  
  <div class="container" style="position: fixed; z-index: 99999; width: 500px ! important; border-radius: 5px; font-family: Open Sans; text-transform: none !important;">
	 <div id="custom-privacy" class="custom-privacy-message" style="display: none;">
		<input type="hidden" value="0" class="privystatus" name="privystatus"/>
		<p>This setting enables you to let Telemundo know what you watch and publish that to your friends, 
		so that you can discuss and enjoy the shows together</p>
		<div class="privacy-option-form" style="position: relative; left: 30px;">
				<div class="radio">
				  <label>
					<input onclick="privacyUpdate(this)" type="radio" name="optradio" value="1" checked>Allow friends to see what I watch
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
			 Telemundo will no longer know what you watch and hence will not offer you content customized for you. If you want your past viewing history to be removed, send an email 
		to Telemundo support.</p>
		<div class="okPrivacy">
			<input type="hidden" class="selectedprivacy" name="selectedprivacy" value="1"/>
			<a href="javascript:void(0)" onclick="updatePrivacyStatus()" style="float: right; padding: 5px; position: relative; top: -20px; cursor: pointer;" class="btn btn-sm btn-default">OK</a>
		</div>

	</div>
	<div class="custom-fb-message" style="display: none;">
		<h4>Login using Facebook to see what your friends are watching!</h4>
    <p>
      By logging in through Facebook, Telemundo will receive your first and last name, your avatar, your email address, and your friends list from your Facebook profile. Telemundo will collect these basic information to provide you with better recommendation on what you'd love to watch and allow you to interact and watch together with your friends. 
      </p> 
      <p>
      Once you log in, your Facebook friends who are also logged into Telemundo.com will be able to see what content you are viewing unless you click on the privacy settings 
      icon <i class="fa fa-eye" style="padding: 2px; background: darkred; color: white;"></i> in the toolbar and turn this option off.
      </p>
		  <label>
        <input class="landingPrivacySetting" onclick="privacyUpdate(this)" type="radio" name="optradio" value="1"/>
        <input class="landing" type="hidden" name="landing" value="999"/>
			  <span>By checking here I agree that Telemundo may share personal information about me, including my viewing choices with third parties, and that I have read and agree to the <a href="http://www.nbcuniversal.com/terms">Telemundo Terms of Use</a> and <a href="http://www.telemundocolumbus.tv/politica-de-privacidad/">Telemundo privacy policy</a>.</span>
      </label>
		  <div class="" style="position: relative; left: 74%;">
		  	<a href="javascript:void(0)" onclick="hideFacebookinformationalways()" class="hidefacebookinformationalways btn btn-sm btn-primary" style="width: 100px; display: none;">OK</a>
			  <a href="javascript:void(0)" onclick="hideFacebookinformationonce()" class="hidefacebookinformationonce btn btn-sm btn-warning" style="width: 100px;">Close</a>
		  </div>

		  <input type="hidden" class="facebookOnce" name="facebookOnce" value="0">
	</div>
  </div>

  <div class="container maincontainer" style="margin-top: 30px; padding: 0px; border-right: 1px solid lightgrey; border-left: 1px solid lighgrey; ">
    <div class="col-md-12 custom-banner" style="margin-bottom: 10px;">
        <img class="custom-banner-image" src="images/banner.png" alt="banner" style="width: 100%;"/>
    </div>
    <div class="col-md-4 column1">
    </div>
    <div class="col-md-4 column2">
      <div class="well"><img src="images/ad1.png" style="width: 100%;" class="img-responsive" alt="adv 1"></div>
    </div>
    <div class="col-md-4 column3">
    </div>
  </div>
	<!-- Global LeaderBoard -->
      <div class="modal fade" id="GLeaderBoard" role="dialog">
		<div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Global LeaderBoard</h4>
            </div>
            <div class="modal-body" style="background: #222; padding: 0px;">
				<div class="profile_container" style="height: 420px;">
					<div class="col-md-4" style="text-align: center;">
						<div class="col-md-12" style="height: 50px; color: white; font-size: 18px; font-weight: bold; margin-top: 80px;">
							<span >Rank</span>
						</div>
						<div class="col-md-12" style="height: 70px;">
							<i class="fa fa-trophy" style="font-size: 60px; color: white; position: relative; padding: 0px 20px;"></i>
						</div>
						<div class="col-md-12" style="color: white; font-size: 25px; font-weight: bold;">
							<span class="rank">
								<a  data-toggle="modal" data-target="#GRankBoard" class="btn btn-lg btn-warning glb_rankvalue" href="javascript:void(0)"></a>
							</span>
						</div>
					</div>
					<div class="col-md-4" style="color: white; text-align: center;">
						<div class="col-md-12" style="height: 50px; color: white; font-size: 18px; font-weight: bold; margin-top: 40px;">
							<span class="glb_username"></span>
						</div>
						<div class="col-md-12">
							<img src="" style="border-radius: 150px;" class="glb_userimage"/>
						</div>
						<div class="col-md-12" style="color: white;">
						</div>
					</div>
					<div class="col-md-4" style="text-align: center;">
						<div class="col-md-12" style="height: 50px; color: white; font-size: 18px; font-weight: bold; margin-top: 80px;">
							<span>Points</span>
						</div>
						<div class="col-md-12" style="height: 70px;">
							<i class="fa fa-diamond" style="font-size: 60px; color: white; position: relative; padding: 0px 20px;"></i>
						</div>
						<div class="col-md-12" style="color: white; font-size: 25px; font-weight: bold;">
							<span class="rank">
								<a class="btn btn-lg btn-success glb_leaderboard" href="javascript:void(0)"></a>
							</span>
						</div>
					</div>
					<div class="col-md-12" style="border-top: 1px solid #f5f5f5; margin-top: 20px; color: white; display: none;">
						<h4>Teletango Friends</h4>
					</div>
				</div>
            </div>
            <div class="modal-footer" style="background: #000; padding: 10px; display: none;">
              <button type="button" class="btn btn-default"  data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>	
	<!-- Global LeaderBoard ends here-->
	<!-- Ranking Leaderboard tobe called within from global leaderboard-->
      <div class="modal fade" id="GRankBoard" role="dialog">
		<div class="modal-dialog modal-sm" style="margin-top: 100px;">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Ranking LeaderBoard</h4>
            </div>
            <div class="modal-body" style="background: #aaa; padding: 0px;">
				<div class="rank_container">
					<ul style="list-style: none;  padding: 10px; height: 200px;" class="glb_rankboard">
					</ul>
				</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default"  data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>	
	<!-- Ranking Leaderboard stops -->
</body>
</html>
