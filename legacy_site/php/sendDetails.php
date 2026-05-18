<?php
$input_data = json_decode($_POST['params']);
// $result=customerMail($input_data->emailId);
// $result1=officeMail($input_data);
if($input_data->name!='' && $input_data->emailId!='' && $input_data->phone!='' && $input_data->serviceNeeded!='' && $input_data->description!='' && $input_data->chooseMonth!='')
{
    $result=customerMail($input_data->emailId);
    $result1=officeMail($input_data);
   echo "success";
}else{
  echo "please fill all details";
}


  // echo "success";
function customerMail($email) {
        require_once 'PHPMailer-master/PHPMailerAutoload.php';
        $mail = new PHPMailer;
        $mail->isSMTP();                                                  // Set mailer to use SMTP
        $mail->setFrom('contact@macappstudio.com', 'Macapp');

        $mail->addAddress($email);
        $mail->Username = 'AKIAJSVSYRQO4FESVN3A';                         // SMTP username
        $mail->Password = 'Aj1zQ4rbkT/eY4YIjNAaoTlOAhPOuxwe5Dd4wHjjVjvs'; // SMTP password
        $mail->Host = 'email-smtp.us-west-2.amazonaws.com';              // Specify main and backup SMTP servers
        $mail->Subject = 'Macappstudio';
        $mail->Body .= '<html><head>
        </head>
        <body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="font-size:16px; border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; background-color: #ececec; color: #7F7F7F;" bgcolor="#ececec" text="#333333">
          <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;">
            <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#fff">
               
                <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f7f7f7" width="600" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 600px; margin: 30px 0 0 0;" class="container">
                 
                  <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-top: 20px;">
                      <img border="0" vspace="0" hspace="0" src="https://www.macappstudio.com/Macappstudio_2021/asserts/images/mailfrom/logo.png" alt="macapp logo" width="600" style="border: none;color: #333333;display: block;font-size: 13px;margin: 0;max-width: 600px;padding: 0;outline: none;text-decoration: none;width: 34%;padding: 20px 0px;-ms-interpolation-mode: bicubic;"/>
                    </td>
                  </tr> 
                  
                  <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-top: 0px;">
                      <img border="0" vspace="0" hspace="0" src="https://www.macappstudio.com/Macappstudio_2021/asserts/images/mailfrom/mailfrom_banner.png" alt="macapp poster" width="600" style="border: none; color: #333333; display: block; font-size: 13px; margin: 0; max-width: 600px; padding: 0; outline: none; text-decoration: none; width: 50%; -ms-interpolation-mode: bicubic;"/>
                    </td>
                  </tr>
                  
                  <tr>
                    <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 3px; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
                      <h3 style="font-size: 32px;line-height: 40px;margin:0px;font-family: Helvetica,sans-serif;padding-bottom: 0px;color: #2B2B2B;"><strong>Thank you for choosing us.</strong></h3>
                    </td>
                  </tr>
                  
                  <tr>
                  <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;">
                      <p style="color: #2B2B2B; font-size: 16px; font-family: Helvetica,sans-serif; line-height: 200%;">We have received your details and we are more passionate to do great things together.</p>
                      <p style="color: #2B2B2B; font-size: 16px; font-family: Helvetica,sans-serif; line-height: 200%;">Our team will review your details and provide you with a world-class proposal. It may take up to two days to get a proposal based on your project needs. We have a stringent policy to maintain quality and provide world-class solutions, and because of this criteria we will take only two projects per month to execute. Your hard-earned money is more valuable and we respect that, so we take this criteria seriously. </p>
                      <p style="color: #2B2B2B; font-size: 16px; font-family: Helvetica,sans-serif; line-height: 200%;">We are as excited as you are and we hope to build a strong relationship over the long run. Now be relaxed and you will hear from our team soon. Once again we thank you for your trust and for choosing us. Let’s do great things together.</p>
                      <ul style="list-style-type: none;padding: 0px;">
                        <li style="font-size: 16px;line-height: 30px;margin: 0px;font-family: Helvetica,sans-serif;color:#2B2B2B;"><strong>With </strong> <img src="https://www.macappstudio.com/Macappstudio_2021/asserts/images/mailfrom/love.png" alt="" style="width: 25px;"> <strong>from MacAppStudio</strong></li>
                        <li style="font-size: 16px;line-height: 30px;margin: 0px;font-family: AvenirNext-Medium;color:#2B2B2B;"><a href="https://www.macappstudio.com/" target="_blank" style="color:#2B2B2B">www.macappstudio.com</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;">
                        <div style="padding-bottom: 25px;">
                            <h2 style="font-size:16px;line-height: 30px;margin: 0px;font-family: Helvetica,sans-serif;padding-top: 25px;color:#2B2B2B">FOLLOW US</h2>
                            <ul style="display:flex;margin: 0px;padding-left: 0px;list-style: none;min-height: 33px;width: 85px;align-items: flex-end;justify-content: space-between;">
                                <li style="margin-left: 0px;"><img src="https://www.macappstudio.com/Macappstudio_2021/asserts/images/mailfrom/linkedin.png" alt="" style="width: 30px;margin-right:10px"></li>
                                <li style="margin-left: 0px;"><img src="https://www.macappstudio.com/Macappstudio_2021/asserts/images/mailfrom/youtube.png" alt="" style="width: 30px;"></li>
                            </ul>
                        </div>
                    </td>
                  </tr>
                </table>
                
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="600" bgcolor="#f7f7f7" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: 100%; max-width: 600px; border-top: 1px solid #ededed;" class="wrapper">
                  <tr>
                    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; font-size: 12px; font-weight: 400; line-height: 150%; padding-top: 10px; padding-bottom: 10px; color: #2B2B2B; font-family: Arial, sans-serif;" class="footer">
                        <p style="font-size: 13px;line-height: 40px;margin: 0px;font-family: AvenirNext-Medium;"><span>MacAppStudio © Copyright</span> <span>2021</span> <span style="padding: 0px 15px;">|</span> All Rights Reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>';
        $mail->Body .= '</body>';
        $mail->Body .= '</html>';

        $mail->SMTPAuth = true;                                         // Enable SMTP authentication

        $mail->SMTPSecure = 'tls';                                      // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                              // TCP port to connect to
                                                                        // Add a recipient
        $mail->isHTML(true);                                            // Set email format to HTML
        if(!$mail->send()) {
           //echo 'Message could not be sent.';
           $message = 'Mailer Error: ' . $mail->ErrorInfo;
           return false;
        } else {
           $message = 'sended Successfully ......';
           return true;
        }
    }
function officeMail($input_data) {
        $emailId ='sathishkumar@macappstudio.com';// $input_data->emailId;
        $modules_val = $input_data->val;
        require_once 'PHPMailer-master/PHPMailerAutoload.php';
        $e_mail = new PHPMailer;
        $e_mail->isSMTP();                                                  // Set mailer to use SMTP
        $e_mail->setFrom('contact@macappstudio.com', 'Macapp');

        $e_mail->addAddress($emailId);
        $e_mail->Username = 'AKIAJSVSYRQO4FESVN3A';                         // SMTP username
        $e_mail->Password = 'Aj1zQ4rbkT/eY4YIjNAaoTlOAhPOuxwe5Dd4wHjjVjvs'; // SMTP password
        $e_mail->Host = 'email-smtp.us-west-2.amazonaws.com';              // Specify main and backup SMTP servers
        $e_mail->Subject = 'Macappstudio';
        $e_mail->Body .= '<html><head></head><body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; background-color: #ececec; color: #333333;" bgcolor="#ececec" text="#333333">
<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;">
  <tr>
    <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;" bgcolor="#fff">
      <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#fff" width="600" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 600px; margin: 30px 0 0 0;" class="container">
        <tr bgcolor="#f7f7f7">
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-top: 20px;padding-bottom: 3px;padding-left: 6.25%;padding-right: 6.25%;">
                <img border="0" vspace="0" hspace="0" src="https://www.macappstudio.com/Macappstudio_2021/asserts/images/mailfrom/logo.png" alt="macapp logo" width="600" style="border: none; color: #333333; display: block; font-size: 13px; margin: 0; max-width: 600px; padding: 0; outline: none; text-decoration: none; width: 38%;padding: 20px 0px 30px;-ms-interpolation-mode: bicubic;margin-right:auto"/>
                <h3 style="font-size: 42px;line-height: 50px;margin:0px;font-family:Helvetica,sans-serif;padding-bottom: 0px;text-align: left;">Hurrah! You have got a new lead...</h3>
                <img border="0" vspace="0" hspace="0" src="https://www.macappstudio.com/Macappstudio_2021/asserts/images/mailto/mailto_banner.png" alt="macapp poster" width="600" style="border: none;color: #333333;display: block;max-width: 600px;padding: 0;outline: none;text-decoration: none;width: 60%;margin: 40px auto;-ms-interpolation-mode: bicubic;"/>
          </td>
        </tr> 
        <tr>
          <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 0px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 30px;">
            <h2 style="font-size: 18px;line-height: 25px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">Personal Information :</h2>
          </td>
        </tr>
        <tr>
            <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 10px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
                <h2 style="color: #7F7F7F;font-size: 12px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">Name</h2>
                <p style="font-size: 16px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">'.$input_data->name.'</p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 10px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
                <h2 style="color: #7F7F7F;font-size: 12px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">Email Address</h2>
                <p style="font-size: 16px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">'.$input_data->emailId.'</p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 10px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
                <h2 style="color: #7F7F7F;font-size: 12px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">Phone Number</h2>
                <p style="font-size: 16px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">'.$input_data->phone.'</p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 3px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
                <span style="border-bottom: 2px solid #cecece;display: block;margin: 5px 0px 10px;"></span>
            </td>
        </tr>
        <tr>
          <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 0px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
            <h2 style="font-size: 18px;line-height: 25px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">Project Information :</h2>
          </td>
        </tr>
        <tr>
            <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 10px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
                <h2 style="color: #7F7F7F;font-size: 12px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">Service Needed</h2>
                <p style="font-size: 16px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">'.$input_data->serviceNeeded.'</p>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 10px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
                <h2 style="color: #7F7F7F;font-size: 12px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">Modules Needed</h2>
                <ul style="padding: 0px;padding-left: 0px;margin: 0px;">';
                     foreach($modules_val as $m_value){

                    $e_mail->Body .='<li style="padding-bottom: 7px;"><p style="font-size: 16px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">'.$m_value.'</p></li>';
                    
                     }
                $e_mail->Body .='</ul>
            </td>
        </tr>
        <tr>
            <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 30px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
                <h2 style="color: #7F7F7F;font-size: 12px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">Launch Slot</h2>
                <p style="font-size: 16px;font-family: Helvetica,sans-serif;line-height: 22px;margin: 0px;">'.$input_data->chooseMonth.'</p>
            </td>
        </tr>
        <tr>
          <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 10px; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%; line-height: 150%; padding-top: 5px;">
            <h3 style="font-size: 18px;line-height: 25px;margin:0px;font-family: Helvetica,sans-serif;padding-bottom: 0px;">Project Description</h3>
          </td>
        </tr>
        <tr>
        <td valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 4.25%; padding-right: 4.25%; width: 87.5%;padding-bottom: 30px;">
            <p style="color: #2B2B2B; font-size: 16px; font-family: Helvetica,sans-serif; line-height: 200%;margin: 0px;">'.$input_data->description.'</p>
        </td>
        </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" align="center" width="600" bgcolor="#fff" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: 100%; max-width: 600px; border-top: 1px solid #ededed;" class="wrapper">
        <tr>
          <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; font-size: 12px; font-weight: 400; line-height: 150%; padding-top: 10px; padding-bottom: 10px; color: #2B2B2B; font-family: Arial, sans-serif;" class="footer">
              <p style="font-size: 13px;line-height: 40px;margin: 0px;font-family: Helvetica,sans-serif;"><span>MacAppStudio © Copyright</span> <span>2021</span> <span style="padding: 0px 15px;">|</span> All Rights Reserved.</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>';
        $e_mail->Body .= '</html>';

        $e_mail->SMTPAuth = true;                                         // Enable SMTP authentication

        $e_mail->SMTPSecure = 'tls';                                      // Enable TLS encryption, `ssl` also accepted
        $e_mail->Port = 587;                                              // TCP port to connect to
                                                                        // Add a recipient
        $e_mail->isHTML(true);
         $totalFiles = count($_FILES['files']['tmp_name']);
         for ($i = 0; $i < $totalFiles; $i++) {
         $name = $_FILES['files']['name'][$i];
         $path = $_FILES['files']['tmp_name'][$i];
         $e_mail->addAttachment($path,$name);
         }                                    
        if(!$e_mail->send()) {
           //echo 'Message could not be sent.';
           $message = 'Mailer Error: ' . $mail->ErrorInfo;
           return false;
        } else {
           $message = 'sended Successfully ......';
           return true;
        }
    }
