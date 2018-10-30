<?php

$errors = "";

if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
  $errors .= "\n Error: All fields are required.";
}
$myEmail = "keegankelly1@gmail.com";
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email))
{
    $errors .= "\n Error: Invalid email address";
}

if(empty($errors))
{
$to = $myEmail;
$subject = "Contact form received: $name";
$emailMessage = "Contact form details are below. \n".
"Name: $name \n".
"Email: $email \n".
"Message: $message";

$headers = "From: $myEmail\n";
$headers .= "Reply-To: $email";

mail($to, $subject, $emailMessage, $headers);
}

header('Location: contact-thanks.html');
 ?>
