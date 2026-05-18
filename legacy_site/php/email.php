<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');
//$email='karthickraja@macappstudio.com'; 

// sendEmail($email);

 // $image_name = $_FILES['file']['name'];
 // $image_name = uniqid() . '.' . strtolower(pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION));
 //    $target_path = "images/" . $_FILES['file']['name'];
 //    if (!move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) $image_upload_error = true;

function sendEmail($email){

         require_once 'PHPMailer-master/PHPMailerAutoload.php';
        $mail = new PHPMailer;
        $mail->isSMTP();                                                  // Set mailer to use SMTP
        $mail->setFrom('contact@macappstudio.com', 'Macapp');

        $mail->addAddress($email);
        $mail->Username = 'AKIAJSVSYRQO4FESVN3A';                         // SMTP username
        $mail->Password = 'Aj1zQ4rbkT/eY4YIjNAaoTlOAhPOuxwe5Dd4wHjjVjvs'; // SMTP password
        $mail->Host = 'email-smtp.us-west-2.amazonaws.com';              // Specify main and backup SMTP servers

        $bodyContent = '<h1>Your Mail Has been Sent</h1>';
        $bodyContent .= 'Hai! Welcome';
        $mail->Subject = 'Macapp Chat';
        $mail->Body    .= '<html><head><style>.table-bordered td {border: 1px solid #ddd!important;padding:5px; }</style></head><body>';
        $mail->Body    .= '<b>Your otp for Macapp</b>';
        $mail->Body    .= '</body>';
        $mail->Body    .= '</html>';
        
        $mail->SMTPAuth = true;                                         // Enable SMTP authentication

        $mail->SMTPSecure = 'tls';                                      // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                              // TCP port to connect to
                                                                        // Add a recipient
        $mail->isHTML(true); 
       // $image_path='https://www.macappstudio.com/Macappstudio_2021/php/images/'.$image_name;
         $totalFiles = count($_FILES['files']['tmp_name']);
         for ($i = 0; $i < $totalFiles; $i++) {
         $name = $_FILES['files']['name'][$i];
         $path = $_FILES['files']['tmp_name'][$i];
         $mail->addAttachment($path,$name);
         }

        //$mail->addAttachment($target_path);                                   // Set email format to HTML
        if(!$mail->send()) {
           //echo 'Message could not be sent.';
          echo $message = 'Mailer Error: ' . $mail->ErrorInfo;
           return false;
        } else {
           echo $message = 'sended Successfully ......';
           return true;
        }
        }
?>