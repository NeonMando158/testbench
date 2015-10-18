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
    <script src="script.js"></script>
    <script src="common.js"></script>
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
          		<li><a href="#">VIDEOS</a></li>
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
          		<li style="background: #3b5958; padding: 11px; cursor: pointer;" class="facebookLogin" onmouseover="infoFB(this)">
           	 		<a onclick="fbLogin()" style="padding: 0px;">
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
  <div class="container" style="background: lightblue; position: fixed; z-index: 99999; width: 500px !important; left: 50%; border-radius: 5px; box-shadow: 1px 0px 6px 1px;">
    <div id="custom-privacy" class="custom-privacy-message" style="display: none;">
        <p>This setting enables you to let Telemundo know what you watch and publish that to your friends,
        so that you can discuss and enjoy the shows together</p>
        <div class="privacy-option-form" style="position: relative; left: 30px;">
                <div class="radio">
                  <label>
                    <input onclick="privacyUpdate(this)" type="radio" name="optradio" value="1">Allow friends to see what I watch
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

    </div>
    <div class="custom-fb-message" style="display: none;">
        <h4>Login using Facebook to see what your friends are watching!</h4>
        <p>Telemundo will collect a few basic information about you that you have shared with Facebook
        to provide you with better recommendation on what you'd love to watch and allow you to interact
        and watch together with your friends. Telemundo does not share your personal information  with anyone
        without your permission. <br/> See more from here: <a href="privacy.php">Telemundo privacy policy</a></p>

    </div>
  </div>

  <div class="container" style="margin-top: 30px; padding: 0px; border-right: 1px solid lightgrey; border-left: 1px solid lighgrey; ">
    <div class="col-md-12" style="margin-bottom: 10px;">
        <img src="images/banner.png" alt="banner" style="width: 100%;"/>
    </div>
    <div class="col-md-4 column1">
    </div>
    <div class="col-md-4 column2">
      <div class="well"><img src="images/ad1.png" style="width: 100%;" class="img-responsive" alt="adv 1"></div>
    </div>
    <div class="col-md-4 column3">
    </div>
  </div>
</body>
</html>
