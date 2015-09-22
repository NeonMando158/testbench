<?php
// //Always place this code at the top of the Page
// session_start();
// if (isset($_SESSION['id'])) {
//     // Redirection to login page twitter or facebook
//     header("location: index.php");
// }

// if (array_key_exists("login", $_GET)) {
//     $oauth_provider = $_GET['oauth_provider'];
//     if ($oauth_provider == 'twitter') {
//         header("Location: login-twitter.php");
//     } else if ($oauth_provider == 'facebook') {
//         header("Location: login-facebook.php");
//     }
// }
?>
<html>
<head>
	<script src="https://code.jquery.com/jquery-1.11.3.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="menu.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
    <script src="menu.js"></script>
</head>
<body>
  <!-- Facebook Initialization -->
  <script>
    // window.fbAsyncInit = function() {
    //   FB.init({
    //     appId      : 'your-app-id',
    //     xfbml      : true,
    //     version    : 'v2.4'
    //   });
    // };

    // (function(d, s, id){
    //    var js, fjs = d.getElementsByTagName(s)[0];
    //    if (d.getElementById(id)) {return;}
    //    js = d.createElement(s); js.id = id;
    //    js.src = "//connect.facebook.net/en_US/sdk.js";
    //    fjs.parentNode.insertBefore(js, fjs);
    //  }(document, 'script', 'facebook-jssdk'));
  </script>
  <!-- Facebook Initialization Ends -->
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
    				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Novels</a>				
    				<ul class="dropdown-menu mega-dropdown-menu">
    					<li class="col-sm-3">
    						<ul>
    							<li class="dropdown-header"></li>                            
                    <div id="menCollection" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="item active">
                            <a href="#"><img src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" class="img-responsive" alt="programs 1"></a>
                            <h4><small>Some Text</small></h4>                                        
                            <!-- <button class="btn btn-primary" type="button">49,99 €</button> <button href="#" class="btn btn-default" type="button"><span class="glyphicon glyphicon-heart"></span> </button>        -->
                        </div><!-- End Item -->
                        <div class="item">
                            <a href="#"><img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" class="img-responsive" alt="programs 2"></a>
                            <h4><small>asdasd</small></h4>                                        
                            
                        </div><!-- End Item -->
                        <div class="item">
                            <a href="#"><img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" class="img-responsive" alt="programs 3"></a>
                            <h4><small>asdasdasded</small></h4>                                        
                            
                        </div><!-- End Item -->                                
                      </div><!-- End Carousel Inner -->
                      <!-- Controls -->
                      <a class="left carousel-control" href="#menCollection" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#menCollection" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div><!-- /.carousel -->
                    <li class="divider"></li>
                    <li><a href="#">View all Programs <span class="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
    						</ul>
    					</li>
    					<li class="col-sm-3">
    						<ul>
    							<li class="dropdown-header">INICIO</li>
    							<li><a href="#">EL sENOR DE lOS cIELOS3 </a></li>
                  <li><a href="#">Bajo el Mismo Cielo</a></li>
                  <li><a href="#">Avendia Brasil</a></li>
                  <li><a href="#">Senora Acero 2</a></li>
    							<li class="divider"></li>
    							<li class="dropdown-header">Capitulos</li>
                  <li><a href="#"></a></li>
    							<li><a href="#">Google Fonts</a></li>
    						</ul>
    					</li>
    					<li class="col-sm-3">
    						<ul>
    							<li class="dropdown-header">Plus</li>
    							<li><a href="#">Navbar Inverse</a></li>
    							<li><a href="#">Pull Right Elements</a></li>
    							<li><a href="#">Coloured Headers</a></li>                            
    							<li><a href="#">Primary Buttons & Default</a></li>							
    						</ul>
    					</li>
    					<li class="col-sm-3">
    						<ul>
    							<li class="dropdown-header">Much more</li>
                                <li><a href="#">Easy to Customize</a></li>
    							<li><a href="#">Calls to action</a></li>
    							<li><a href="#">Custom Fonts</a></li>
    							<li><a href="#">Slide down on Hover</a></li>                         
    						</ul>
    					</li>
    				</ul>				
    			</li>
          <li class="dropdown mega-dropdown">
        	  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Shows</a>				
    				<ul class="dropdown-menu mega-dropdown-menu">
    					<li class="col-sm-3">
        					<ul>
    							<li class="dropdown-header">Features</li>
    							<li><a href="#">Auto Carousel</a></li>
                                <li><a href="#">Carousel Control</a></li>
                                <li><a href="#">Left & Right Navigation</a></li>
    							<li><a href="#">Four Columns Grid</a></li>
    							<li class="divider"></li>
    							<li class="dropdown-header">Fonts</li>
                                <li><a href="#">Glyphicon</a></li>
    							<li><a href="#">Google Fonts</a></li>
    						</ul>
    					</li>
    					<li class="col-sm-3">
    						<ul>
    							<li class="dropdown-header">Plus</li>
    							<li><a href="#">Navbar Inverse</a></li>
    							<li><a href="#">Pull Right Elements</a></li>
    							<li><a href="#">Coloured Headers</a></li>                            
    							<li><a href="#">Primary Buttons & Default</a></li>							
    						</ul>
    					</li>
    					<li class="col-sm-3">
    						<ul>
    							<li class="dropdown-header">Much more</li>
                                <li><a href="#">Easy to Customize</a></li>
    							<li><a href="#">Calls to action</a></li>
    							<li><a href="#">Custom Fonts</a></li>
    							<li><a href="#">Slide down on Hover</a></li>                         
    						</ul>
    					</li>
              <li class="col-sm-3">
        					<ul>
    							<li class="dropdown-header">Live Program</li>                            
                    <div id="womenCollection" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                        <div class="item active">
                            <a href="#"><img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" class="img-responsive" alt="program 1"></a>
                            <h4><small>asdasd</small></h4>                                        
                            <!-- <button class="btn btn-primary" type="button">49,99 €</button> <button href="#" class="btn btn-default" type="button"><span class="glyphicon glyphicon-heart"></span> Add to Wishlist</button>        -->
                        </div><!-- End Item -->
                        <div class="item">
                            <a href="#"><img src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" class="img-responsive" alt="program 2"></a>
                            <h4><small>asdasdasd</small></h4>                                        
                            <!-- <button class="btn btn-primary" type="button">9,99 €</button> <button href="#" class="btn btn-default" type="button"><span class="glyphicon glyphicon-heart"></span> Add to Wishlist</button>         -->
                        </div><!-- End Item -->
                        <div class="item">
                            <a href="#"><img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" class="img-responsive" alt="program 3"></a>
                            <h4><small>asdasded</small></h4>                                        
                            <!-- <button class="btn btn-primary" type="button">49,99 €</button> <button href="#" class="btn btn-default" type="button"><span class="glyphicon glyphicon-heart"></span> Add to Wishlist</button>       -->
                        </div><!-- End Item -->                                
                      </div><!-- End Carousel Inner -->
                      <!-- Controls -->
                      <a class="left carousel-control" href="#womenCollection" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#womenCollection" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div><!-- /.carousel -->
                    <li class="divider"></li>
                    <li><a href="#">View all Collection <span class="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
    						</ul>
    					</li>
    				</ul>				
    			</li>
          <li class="dropdown mega-dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Videos</a>        
            <ul class="dropdown-menu mega-dropdown-menu custompageclicked" style="display: visible;">
              <li><a href="#">Auto Carousel</a></li>
                  <li><a href="#">Carousel Control</a></li>
                  <li><a href="#">Left & Right Navigation</a></li>
                  <li><a href="video.php" style="color: red; cursor: pointer;">Capitulo 99</a></li>
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
          <li style="background: darkred; padding: 11px;">
            <a style="padding: 4px;"><i class="fa fa-eye" style="font-size: 21px; "></i></a>
          </li>
          <li style="background: #3b5958; padding: 11px;">
            <a onclick="fbLogin()" style="padding: 0px;">
              <i class="fa fa-facebook" style="background: white none repeat scroll 0% 0%; color: rgb(59, 89, 88); padding: 4px 9px;font-size: 21px; border-radius: 50px;"></i>
              <span style="font-size: 15px; text-transform: lowercase;">login</span>
            </a>
          </li>
          <li style="background: #9cbdff; padding: 3px;">
            <a href="#"><i class="fa fa-user"></i></a>
          </li>
    		</ul>
    	</div><!-- /.nav-collapse -->
      </nav>
    </div>
  </div>
  <div class="container" style="margin-top: 30px; ">
    <!-- <div class="col-md-12" style="margin-bottom: 10px;">
        <img src="images/banner.png" alt="banner" style="width: 100%;"/>
    </div> -->
    <!-- main program video wrapper -->
    <div class="col-md-12" style="border: 1px solid lightgrey; padding: 0px;">
        <div class="col-md-8" style="padding: 0px;">
            <div class="col-md-12" style="padding: 0px;">
              <!-- <img src="images/video.png" alt="video" style="width: 100%;"/> -->
<!-- 
              <video width="400" controls>
                <source src="mov_bbb.mp4" type="video/mp4">
                <source src="mov_bbb.ogg" type="video/ogg">
                Your browser does not support HTML5 video.
              </video> -->
              <iframe width="813" height="415" src="https://www.youtube.com/embed/G4eoUTkD0MQ" frameborder="0" allowfullscreen></iframe>
            </div>

            <div class="col-md-12" style="padding: 0px;">
              <div class="col-md-2 customwell">PARTE: </div>
              <div class="col-md-2 customwell">1</div>
              <div class="col-md-2 customwell">2</div>
              <div class="col-md-2 customwell">3</div>
              <div class="col-md-2 customwell">4</div>
              <div class="col-md-2 customwell">5</div>
            </div>
        </div>
        <div class="col-md-4" style="padding: 0px;">
          <div class="col-md-6" style="background: red none repeat scroll 0% 0%; color: white; font-weight: bold; text-align: left; padding: 3px 8px; font-size: 18px;">ULTIMO CAPITULO</div>
          <div class="col-md-12" style="border-bottom: 1px solid lightgrey">
              <span style="margin-top: 20px; font-weight: bold; font-size: 14px; color: red; text-transform: lowercase;">EL SenoR DE LOS CApitulos</span><br/>
              <span style="font-size: 30px; font-weight: bold; color: black;">Capitulo 99</span><br/>
              <span style="font-size: 12px; color: grey;">EMITIDO : LUNES, 09/14/2015</span><br/>
              <span style="font-size: 14px; color: #222; text-align: justify">Casillas le dice a Venegas que le va cobrar meterse con su familia</span><br/>
          </div>
        </div>
    </div>
    <div class="col-md-12 ">

    </div>
    <div class="col-md-12 ">

    </div>
    <!-- <div class="col-md-4 column1">
        <div class="well programs">
          <span class="program-type"><a href="#">DECISION 2016</a></span>
          <h5 class="program-title">Hillary Clinton popular entre los latinos</h5>
          <img src="http://placehold.it/354x200/2ecc71/f5f5f5/&text=Program+1" class="img-responsive" alt="program 1">
        </div>
        <div class="well programs"><img src="http://placehold.it/354x200/2ecc71/f5f5f5/&text=Program+2" class="img-responsive" alt="program 2"></div>
        <div class="well programs"><img src="http://placehold.it/354x200/2ecc71/f5f5f5/&text=Program+3" class="img-responsive" alt="program 3"></div>
        <div class="well programs"><img src="http://placehold.it/354x200/2ecc71/f5f5f5/&text=Program+4" class="img-responsive" alt="program 4"></div>
        <div class="well programs"><img src="http://placehold.it/354x200/2ecc71/f5f5f5/&text=Program+5" class="img-responsive" alt="program 5"></div>
    </div> -->
    <!-- <div class="col-md-4 column2">
      <div class="well"><img src="images/ad1.png" style="width: 100%;" class="img-responsive" alt="adv 1"></div>
      <div class="well programs"><img src="http://placehold.it/354x200/d9534f/f5f5f5/&text=Program+6" class="img-responsive" alt="program 6"></div>
      <div class="well programs"><img src="http://placehold.it/354x100/1caf9a/f5f5f5/&text=Adv+2" class="img-responsive" alt="adv 2"></div>
      <div class="well programs"><img src="http://placehold.it/354x200/f0ad4e/f5f5f5/&text=Program+6" class="img-responsive" alt="program 6"></div>
    </div> -->
    <!-- <div class="col-md-4 column3">
      <div class="well programs"><img src="http://placehold.it/354x354/f0ad4e/f5f5f5/&text=Adv+1" class="img-responsive" alt="adv 1"></div>
      <div class="well programs"><img src="http://placehold.it/354x354/d9534f/f5f5f5/&text=Program+7" class="img-responsive" alt="program 6"></div>
      <div class="well programs"><img src="http://placehold.it/354x100/f0ad4e/f5f5f5/&text=Adv+2" class="img-responsive" alt="adv 2"></div>
    </div> -->
  </div>
  <script type="text/javascript" src="http://connect.facebook.net/en_US/sdk.js"></script>
  <script src="http://mydrive.apptarix.com:8080/apptajs/appta-min.js"></script>
  <script type="text/javascript">
    function fbLogin(){
      console.log("fb Login Clicked");
      var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
      var apptaAgent = new ApptaAgent();
      apptaAgent.login(api_key); 
    }
    $(document).ready( function(){
      $(".custompageclicked").show(); 
    });
      
    
  </script>
</body>
</html>
