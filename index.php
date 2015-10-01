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
    <script src="http://mydrive.apptarix.com:8080/apptajs/appta-min.js"></script>
    <script src="script.js"></script>
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
