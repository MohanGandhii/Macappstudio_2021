        

(function(){  
var header1 ='<div class="togglebtn"><span></span></div>';
header1 += '<a class="logoheader" href="index"><img src="asserts/images/logo.png" alt="macappstudio"/></a>';
header1 +='<div class="navigation_main desktop_navigation" id="desktop_header">';
header1 +='<div class="navigation">';
header1 +='<span class="nav-item dropdown">';
header1 +='    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">What we do?</a>';
header1 +='    <div class="dropdown-menu submenu_box">';
header1 +='        <a href="appdevelopment" class="dropdown-item">App Development</a>';
header1 +='        <a href="technology_consulting" class="dropdown-item">Technology Consulting</a>';
header1 +='        <a href="R_D" class="dropdown-item">Research and Development</a>';
header1 +='    </div>';
header1 +='</span>';
// header1 +='<a class="smoothScroll Services" href="javascript:void(0)"><span>What we do?</span></a>';
header1 +='<a class="smoothScroll NewtoMacAppStudio" href="how_we_do_it"><span>How we do it?</span></a>';
// header1 +='<a class="smoothScroll Careers" href="careers"><span>Careers</span></a>';
header1 +='<a class="smoothScroll CaseStudy" href="case_study_list"><span>Success Stories</span></a>';
header1 +='<a class="smoothScroll AboutUs" href="who_we_are"><span>Who we are?</span></a>';
header1 +='<a class="smoothScroll typeform-share Get_Proposal" href="https://tally.so/r/xXyRrd" data-mode="popup"><span class="login proposal_model" id="get_proposal"><span>Get a Proposal</span></span></a>';
header1 +='</div>';
header1 +='</div>';

header1 += '<div class="navigation_main mobile_navigation" id="mobile_header">';
header1 += '<div class="navigation" id="set_nav_header_height">';

header1 += '<div class="nav_header_service_box">';
header1 +='<a class="smoothScroll CaseStudy" href="case_study_list"><span class="header_bold">What we do?</span></a>';
header1 +='<a class="smoothScroll AboutUs" href="appdevelopment"><span>App Development</span></a>';
header1 +='<a class="smoothScroll AboutUs" href="technology_consulting"><span>Technology Consulting</span></a>';
header1 +='<a class="smoothScroll AboutUs" href="R_D"><span>Research and Development</span></a>';
header1 +='</div>';
header1 +='<div class="nav_header_other_menu_option_box">';
header1 +='<a class="smoothScroll AboutUs" href="new_to_macappstudio"><span>How we do it?</span></a>';
header1 +='<a class="smoothScroll AboutUs" href="case_study_list"><span>Success Stories</span></a>';
header1 +='<a class="smoothScroll AboutUs" href="aboutus"><span>Who we are?</span></a>';
header1 +='<a class="smoothScroll AboutUs" href="contactus"><span>Contact Us</span></a>';
header1 +='<a class="smoothScroll AboutUs" href="careers"><span>Careers</span></a>';
// header1 +='<a class="smoothScroll AboutUs" href="javscript:void(0)"><span>Partners</span></a>';
header1 += '</div>';
header1 +='<div class="fbody footer_contactus_box headermenu_socialmedia_box">';     
header1 +='<h2>FOLLOW US</h2>';
header1 +='<ul class="footer_img_box">';
header1 +='    <li><a href="https://in.linkedin.com/company/macappstudioteam" target="_blank"><img src="asserts/images/linkedin.svg" class="footer_contactus_img" alt=""></a></li>';
header1 +='    <li><a href="https://www.youtube.com/channel/UCjAwopTaJUR5yXDzjg_8E_A" target="_blank"><img src="asserts/images/youtube.svg" class="footer_contactus_img" alt=""></a>';
header1 +='    </li>';
header1 +='</ul>';
header1 +='</div>'; 
header1 +='<a class="smoothScroll typeform-share Get_Proposal header_menu_Get_Proposal_btn" href="https://tally.so/r/xXyRrd" data-mode="popup" ><span class="login" id="get_proposal"><span>Get a Proposal</span></span></a>';
header1 += '</div>';
header1 += '</div>';

$(".headall").html(header1);
    
var footer = '<div class="container">';
footer +='<div class="row">';
footer +='<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero">';
footer +='<div class="footer_inner_box row">';
footer +='	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero">';
footer +=' 		 <a href="index"><img src="asserts/images/logo.png" class="logofooter" alt=""></a>';
footer +='	</div>';
footer +='	<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 padding_zero">';
footer +='	<div class="fbody footer_portfolio_box">';
footer +='	<a class="smoothScroll" href="javascript:void(0)"><span>What we do?</span></a>';
footer +='	<a href="appdevelopment">App Development</a>';
footer +='	<a href="technology_consulting">Technology Consulting</a>';
footer +='	<a href="R_D">Research and Development</a>';
footer +='	</div>';
footer +='	</div>';
footer +='	<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 padding_zero">';
footer +='	<div class="fbody footer_portfolio_box">';
footer +='	     <a class="smoothScroll" href="how_we_do_it"><span>How we do it?</span></a>';
footer +='	     <a href="case_study_list"><span>Success Stories</span></a>';
footer +='	     <a href="who_we_are"><span>Who we are?</span></a>';
footer +='	     <a href="contactus"><span>Contact Us</span></a>';
footer +='	     <a href="careers"><span>Careers</span></a>';
// footer +='	     <a href="javascript:void(0);"><span>Partners</span></a>';
footer +='	 </div>';
footer +='	</div>';
footer +='	<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 padding_zero">';
footer +='	<div class="fbody footer_contactus_box">';
footer +='     <h2>FOLLOW US</h2>';
footer +='     <ul class="footer_img_box">';
footer +=' 		 <li><a href="https://in.linkedin.com/company/macappstudioteam" target="_blank"><img src="asserts/images/linkedin.svg" class="footer_contactus_img" alt=""></a></li>';
footer +=' 		 <li><a href="https://www.youtube.com/channel/UCjAwopTaJUR5yXDzjg_8E_A" target="_blank"><img src="asserts/images/youtube.svg" class="footer_contactus_img" alt=""></a></li>';
footer +='     </ul>';
footer +='	</div>';
footer +='	</div>';
footer +='	</div>';
footer +='	</div>';
footer +='<div class="copyright"><p><span>MacAppStudio © Copyright</span> <span id="year"></span> <span class="footer_CR_dash">|</span <span>All Rights Reserved.</span></p></div>';
footer +='</div>';
footer +='</div>';
$("#Contact").html(footer);

$(document).ready(function(){
//   var result = $( window ).height();
  $('#set_nav_header_height').css("height", $(window).height()-30);
});
}());
//get current Year
$(document).ready(function(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("year").innerHTML = n;
});

/*************************************************/ 			
$(document).ready(function(){
    $(".dropdown").click(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});  

/****************************************/
    (function() {
      var qs,js,q,s,d=document,
          gi=d.getElementById,
          ce=d.createElement,
          gt=d.getElementsByTagName,
          id="typef_orm_share",
          b="https://embed.typeform.com/";
      if(!gi.call(d,id)){
          js=ce.call(d,"script");
          js.id=id;
          js.src=b+"embed.js";
          q=gt.call(d,"script")[0];
          q.parentNode.insertBefore(js,q)
      }
    })()
