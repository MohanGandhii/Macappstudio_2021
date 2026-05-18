(function(){  
var Proposal = '';
Proposal +='';

var Proposal = ' <div id="getproposal_modal" class="modal fade" role="dialog" style="z-index: 9999;width:100%;height:100%;overflow: unset;">';
    Proposal +='      <div class="modal-dialog" style="height: 100%;">';
    Proposal +='        <div class="modal-content">';
    Proposal +='          <div class="modal-header remove_bottom_border">';
    Proposal +='            <button type="button" class="close" data-dismiss="modal"><img src="asserts/images/index/popup_close_icon.svg" class="" alt=""></button>';
    Proposal +='          </div>';
    Proposal +='          <div class="modal-body modal_body">';
    Proposal +='            <div class="row">';
    Proposal +='                <div class="col_lg_12 propposal_popup_mobile_view">';
    Proposal +='                    <div class="col_lg_4 col_md_4 col_sm_12 col_xs_12">';
    Proposal +='                        <div class="get_proposal_left_box">';
    Proposal +='                            <img src="asserts/images/logo.png" class="proposallogo" alt="">';
    Proposal +='                            <h2>Your next breakthrough a few clicks away</h2>';
    Proposal +='                            <div class="proposalimg_box">';
    Proposal +='                                <img src="asserts/images/index/proposalimg.jpg" class="proposalimg" alt="">';
    Proposal +='                            </div>';
    Proposal +='                        </div>';
    Proposal +='                    </div>';
    Proposal +='                    <div class="col_lg_8 col_md_8 col_sm_12 col_xs_12">';
    Proposal +='                        <div class="get_proposal_right_box">';
    Proposal +='                            <h2>Get a Proposal</h2>';
    Proposal +='                            <p><span>Let’s bring your ideas to reality. Just tell us your needs and we will send you a</span> <span>proposal in just two days</span></p>';
    Proposal +='                            <div class="form_input_box">';
    Proposal +='                                <div class="input_box">';
    Proposal +='                                    <p>Name</p>';
    Proposal +='                                    <input type="text" class="getproposal_input" id="name">';
    Proposal +='                                </div>';
    Proposal +='                                <div class="input_box">';
    Proposal +='                                    <p>Email Address</p>';
    Proposal +='                                    <input type="email" class="getproposal_input" id="emailId">';
    Proposal +='                                </div>';
    Proposal +='                                <div class="input_box">';
    Proposal +='                                    <p>Phone Number</p>';
    Proposal +='                                    <input type="tel" class="mobileNumber" id="phone">';
    Proposal +='                                </div>';
    Proposal +='                            </div>';
    Proposal +='                            <div class="service_option_box">';
    Proposal +='                                <h2>Service Needed</h2>';
    Proposal +='                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="option_box">';
    Proposal +='                                            <input type="radio" id="radio-1" name="serviceNeeded" value="App Development" class="option_input"  checked>';
    Proposal +='                                            <label for="radio-1" class="radio-label serviceneed" data-value="App Development">App Development</label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="option_box">';
    Proposal +='                                            <input type="radio" id="radio-2" name="serviceNeeded" value="Technology Consulting"  class="option_input">';
    Proposal +='                                            <label for="radio-2" class="radio-label serviceneed" data-value="Technology Consulting">Technology Consulting</label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="option_box">';
    Proposal +='                                            <input type="radio" id="radio-3" name="serviceNeeded" value="Research and Development" class="option_input">';
    Proposal +='                                            <label for="radio-3" class="radio-label serviceneed" data-value="Research and Development">Research and Development</label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                </div>';
    Proposal +='                            </div>';
    Proposal +='                            <div class="service_option_box">';
    Proposal +='                                <h2>Modules Needed</h2>';
    Proposal +='                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero" id="App_Development">';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="iOS Application" name="checkbox_input" id="customCheckBox1">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox1"><p>iOS Application</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Android Application" name="checkbox_input"  id="customCheckBox2">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox2"><p>Android Application</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Website" name="checkbox_input"  id="customCheckBox3">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox3"><p>Website</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Admin Dashboard" name="checkbox_input"  id="customCheckBox4">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox4"><p>Admin Dashboard</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Payment Integration" name="checkbox_input"  id="customCheckBox5">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox5"><p>Payment Integration</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Location Services Integration" name="checkbox_input"  id="customCheckBox6">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox6"><p>Location Services Integration</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                </div>';
    Proposal +='                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero" id="Technology_Consulting">';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Digital Transformation" id="customCheckBox7" name="checkbox_input">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox7"><p>Digital Transformation</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Customer Insight" id="customCheckBox8" name="checkbox_input">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox8"><p>Customer Insight</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Marketing and Sales" id="customCheckBox9" name="checkbox_input">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox9"><p>Marketing and Sales</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="IT Consulting" id="customCheckBox10" name="checkbox_input">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox10"><p>IT Consulting</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                </div>';
    Proposal +='                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero" id="Research_and_Development">';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="AI/ML" id="customCheckBox11" name="checkbox_input">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox11"><p>AI/ML</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="AR/VR/MR" id="customCheckBox12" name="checkbox_input">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox12"><p>AR/VR/MR</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="Blockchain" id="customCheckBox13" name="checkbox_input">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox13"><p>Blockchain</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="check_box">';
    Proposal +='                                            <input type="checkbox" class="checkbox_input" value="IoT and Wearables" id="customCheckBox14" name="checkbox_input">';
    Proposal +='                                            <label class="custom-control-label" for="customCheckBox14"><p>IoT and Wearables</p></label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                </div>';
    Proposal +='                            </div>';
    Proposal +='                            <div class="service_option_box">';
    Proposal +='                                <h2>Project Description</h2>';
    Proposal +='                                <textarea class="proj_desc_box" id="description" rows="3"></textarea>';
    // Proposal +='                                ';
    Proposal +='                            </div>';
    Proposal +='                            <div class="service_option_box service_option_mg_btm">';
    Proposal +='                                <h2>Attachments</h2>';
    Proposal +='                                <div class="exclamatory_icon_box">';
    Proposal +='                                    <img src="asserts/images/index/info.svg" class="exclamatory_icon"> <p>Applicable formats : pdf, xlsx, xls, doc, docx, jpeg, jpg, png</p>';
    Proposal +='                                </div>';
    Proposal +='                                ';
    Proposal +='                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                  <div class="attached_mainbox">';
    Proposal +='                                    <div class="attached_box" id="file_list">';
    Proposal +='                                        ';
    Proposal +='                                    </div>';
    // Proposal +='                                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 padding_zero">';
    Proposal +='                                        <label class="addattach_box" for="files">';
    Proposal +='                                            <input type="file" class="file_attchment" id="files" name="files[]" multiple />';
    Proposal +='                                            <span class="attchment_btn_box"><img src="asserts/images/index/attchment_icon.svg" class="proposal_attchment_icon" alt="attach"> <p>Add Attachments</p></span>'; //<a href="#" class="close_1"> or <i class="fa fa-paperclip" aria-hidden="true"></i>
    Proposal +='                                        </label>';
    // Proposal +='                                    </div>';
    Proposal +='                                   </div> ';
    Proposal +='                                </div> ';
    Proposal +='                            </div>';
    Proposal +='                            <div class="service_option_box">';
    Proposal +='                                <h2>Launch Slot</h2>';
    Proposal +='                                <div class="exclamatory_icon_box">';
    Proposal +='                                    <img src="asserts/images/index/info.svg" class="exclamatory_icon"> <p>Launch period might vary depending on the scope of project after review</p>';
    Proposal +='                                </div>';
    Proposal +='                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="option_box">';
    Proposal +='                                            <input type="radio" class="option_input" id="July" value="July"name="chooseMonth" checked>';
    Proposal +='                                            <label class="radio-label" for="July">July</label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="option_box">';
    Proposal +='                                            <input type="radio" class="option_input" id="August" value="August" name="chooseMonth">';
    Proposal +='                                            <label class="radio-label" for="August">August</label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 padding_zero">';
    Proposal +='                                        <div class="option_box">';
    Proposal +='                                            <input type="radio" class="option_input" id="September" value="September" name="chooseMonth">';
    Proposal +='                                            <label class="radio-label" for="September">September</label>';
    Proposal +='                                        </div>';
    Proposal +='                                    </div>';
    Proposal +='                                </div>';
    Proposal +='                            </div>';
    Proposal +='                            <div class="submit_btn_box">';
    Proposal +='                                <button class="" onclick="submitCall()">Submit</button>';
    Proposal +='                            </div>';
    Proposal +='                            <div class="underline"></div>';
    Proposal +='                            <div class="popup_cpy_right_box">';
    Proposal +='                                <p class="">MacAppStudio © Copyright 2021 | All Rights Reserved.</p>';
    Proposal +='                            </div>';
    Proposal +='                        </div>';
    Proposal +='                    </div>';
    Proposal +='                </div>';
    Proposal +='             </div>';
    Proposal +='          </div>';
    Proposal +='        </div>';
    Proposal +='      </div>';
    Proposal +='    </div>';
$(".append_getproposal_modal").html(Proposal);

// modal popup
$('.proposal_model_stop').on('click',function(){
   $('#getproposal_modal').modal('show');
});

$('.mobileNumber').keypress(function (e) {    
var charCode = (e.which) ? e.which : event.keyCode    
if (String.fromCharCode(charCode).match(/[^0-9]/g))    
return false;                        
}); 
/****************************************/ 
$('.serviceneed').on('click',function(){
    // $("input[name=checkbox_input]:checked");
    $('input[name=checkbox_input]').prop('checked', false);
    var result = $(this).attr('data-value');
    if (result == "App Development") {
        $('#App_Development').show();
        $('#Technology_Consulting').hide();
        $('#Research_and_Development').hide();
    }
    else if (result == "Technology Consulting") {
        $('#App_Development').hide();
        $('#Technology_Consulting').show();
        $('#Research_and_Development').hide();
    }
    else if(result == "Research and Development"){
        $('#App_Development').hide();
        $('#Technology_Consulting').hide();
        $('#Research_and_Development').show();
    }
});
/************************************/ 

//International Telephone 
var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  // separateDialCode:true,
  utilsScript: "https://macappstudioserver.com/Macappstudio_case_study/home/js/utils.js",
});

// store the instance variable so we can access it in the console e.g. window.iti.getNumber()
window.iti = iti;

$(document).ready(function() {
    // $('.iti__flag').removeClass('iti__us');
    $('.iti__selected-flag .iti__flag').removeClass('iti__us');
    $('.iti__selected-flag .iti__flag').addClass('iti__in');
    $("#phone").attr("placeholder", "");
    $('.iti__selected-flag').attr('title','India (भारत): +91');
});
/***********************************/
// $(document).ready(function() {
//   if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function(input) {
        $("#file_list").empty();
      var files = input.target.files;
       newFileList = Array.from(input.target.files);
      console.log(newFileList);
      var  filesLength = files.length;
     
      for (var i = 0; i < filesLength; i++) {
         //var filename = e.target.files;
      var filename = files[i].name;
        var f = files[i];
        // var fileReader = new FileReader();
        // fileReader.onload = (function(e) {
               // console.log(e);
                var uploadedimg = '<span class="pip attached_box_border">';
                uploadedimg += '<span class="attached_file_name">' + filename + '</span><a href="#" class="close_1 remove remove_class'+ i +'" attr-value="'+i+'"></a>';  
                uploadedimg += '</span>';
            $("#file_list").append(uploadedimg);
            $(".remove").eq(i).click(function() {
               var findIndex= $(this).attr('attr-value');
               // var findIndex = newFileList.indexOf(i);
               newFileList.splice(findIndex,1);
               console.log(newFileList);
            $(this).parent(".pip").remove();
          });


        // });
        //fileReader.readAsDataURL(f);
      }
    });
  // } else {
  //   alert("Your browser doesn't support to File API")
  // }
/****************************************/ 
// });

}());
var newFileList;
function submitCall(){
    var name=$("#name").val();
    var emailId=$("#emailId").val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var phonenumber=$("#phone").val();
    var phonecode = $('.iti__selected-flag').attr('title');
    var splitphonecode = phonecode.split(':');
    var phone = splitphonecode[1].concat(phonenumber);
    var serviceNeeded=$('input[name=serviceNeeded]:checked').val();
    var description=$("#description").val();
    var chooseMonth=$('input[name=chooseMonth]:checked').val();
    var val=[];
    var count=0;
    

    $('[name="checkbox_input"]:checked').each(function(i){
          val[i] = $(this).val();
    });
    var checked = $("input[name=checkbox_input]:checked").length;
    if(name==''){
    swal("","Please enter your name","warning");
    }else if(emailId==''){
    swal("","Please enter your email","warning");
    }else if(!pattern.test(emailId))
    {
    swal("","Not a valid e-mail address","warning");
    }else if(phone==''){
    swal("","Please enter your mobile number","warning");    
    }else if(newFileList.length==0){
    swal("","Please attach your document","warning"); 
        return false;
    }else if(!checked){
    swal("","You must check at least one checkbox.","warning"); 
        return false;
    }else{
        var datas={'name':name,'emailId':emailId,'phone':phone,'serviceNeeded':serviceNeeded,'description':description,'chooseMonth':chooseMonth,'val':val}
        var params=JSON.stringify(datas);
       var files =newFileList;//Global Value//$('#files')[0].files;
       console.log(files);
        var myFormData = new FormData();
        for(var count = 0; count<files.length; count++)
   {
        myFormData.append("files[]", files[count]);
   }
       myFormData.append('params',params);
            $.ajax({
            url: 'php/sendDetails.php',
            type: 'POST',
            async: false,
            processData: false, // important
            contentType: false, // important
            data: myFormData,
            success: function(data){
        }
            });
            swal("","Your details submitted successfully!","success"); 
               location.reload();
   }
}