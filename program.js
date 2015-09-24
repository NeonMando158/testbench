    $( document ).ready(function(){
        getProgramDetails(window.location.search.replace("?id=", ""));
    });
    var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
    var apptaAgent = new ApptaAgent(api_key);

    function getProgramDetails(id){
        apptaAgent.getProgram(id, function sendData(data){
          renderProgramData(data);
        });
    }
    function renderProgramData(data){
        var details = JSON.parse(data);
        console.log(details.program.name);
    }
    function fbLogin(){
      console.log("fb Login Clicked");
      var api_key="ac2fdfd5fec83138415b9f98c82f0aac";
      var apptaAgent = new ApptaAgent();
      apptaAgent.login(api_key); 
    }
    $(document).ready( function(){
      $(".custompageclicked").show(); 
    });
