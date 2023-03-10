<?php
// Load the PHPMailer library
require 'phpmailer/PHPMailerAutoload.php';

// Get the CSV data from the POST request
$csv = $_POST['csv'];


// Get the recipient email address from the POST request
$recipient = $_POST['email'];

// Create a new PHPMailer object
$mail = new PHPMailer;

// Set the From and To addresses
$mail->setFrom('trading_game@test.com', 'Result');
$mail->addAddress($recipient);

// Set the subject and body of the email
$mail->Subject = 'CSV File Attachment';
$mail->Body = 'Please find attached the CSV file.';
$mail->isHTML(false);

// Add the CSV file as an attachment
$mail->addStringAttachment($csv, 'record.csv', 'base64', 'text/csv');

// Send the email
if(!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}
?>