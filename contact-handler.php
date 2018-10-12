<?php

$myEmail = "keegankelly1@gmail.com";

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$to = $myEmail;
$subject = "Contact form received: $name";
$emailMessage = "Contact form details are below. \n".
"Name: $name \n".
"Email: $email \n".
"Message: $message";

$headers = "From: $myEmail\n";
$headers .= "Reply-To: $email";

mail($to, $subject, $emailMessage, $headers);

 ?>
