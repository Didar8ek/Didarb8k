function big(to){
    to.style.fontSize = "115%"; 
}
function small(to){
    to.style.fontSize = "100%"; 
}
function lg() {
   var vc = document.getElementById("5").innerHTML;
   if(vc == "Log In"){
   document.querySelector(".lg").style.display = "flex";
   $(".lg").animate({opacity: "1"}, "slow"); 
   document.body.style.overflow = "hidden";

   }
    else{
        logout();
    }
}

function login(name){
    document.querySelector(".user").style.display = "inline";
    document.getElementById("uname").innerHTML = name;
    document.getElementById("5").innerHTML = "Log Out";
    close_popup();
}
function logout(){
    document.querySelector(".user").style.display = "none";
    document.getElementById("5").innerHTML = "Log In";
}
function close_popup(){
    $(".lg").animate({opacity: "0"}, "slow");
    document.querySelector(".lg").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("user").value = "";
    document.getElementById("password").value = "";
}
function close_popupc(){
$(".contactus").animate({opacity: "0"}, "slow");
document.querySelector(".lg").style.display = "none";
document.body.style.overflow = "scroll";
document.getElementById("fullname").value = "";
document.getElementById("pnumber").value = "";
document.getElementById("mail").value = "";
window.location.reload();
}
function cont(){
	document.querySelector(".contactus").style.display = "flex";
   $(".contactus").animate({opacity: "1"}, "slow"); 
   document.body.style.overflow = "hidden";
}
function send(){
	var fulname = document.getElementById("fullname").value;
    var pnumber = document.getElementById("pnumber").value;
    var mail = document.getElementById("mail").value;
    var message = document.getElementById("message").value;
	close_popup()
  alert("The data is saved, we will answer you as soon as possible");
 window.location.reload();
}
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: { lat: 59.92270488280511, lng: 30.306996069710593 },
    });
    marker = new google.maps.Marker({
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: 59.92270488280511, lng: 30.306996069710593 },
      });
      marker.addListener("click", toggleBounce);
    }
    
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  
