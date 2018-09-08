<?php
$to = "jaylohokare@gmail.com";
$noReply = "jaylohokare@gmail.com";
$from = $_POST['email'];
$name = $_POST['name'];
$text = $_POST['message'];
$phone = $_POST['phone'];
$subject = "Jay Lohokare website Contact Form";
$subject2 = "You just sent a message to Jay Lohokare!";

if (!$name == "" && !$name == null)
	{
	if (filter_var($from, FILTER_VALIDATE_EMAIL))
		{
		$phone = preg_replace('/[^0-9]/', '', $_POST['phone']);
		if (!$text == "" && !$text == null)
			{
			$message = $name . " " . " contacted you." . "\n\n" . "Following is the message received : " . "\n" . $_POST['message'] . "\n\n" . "Phone number :" . $phone;
			$message2 = "Hey! I just received a message from you, through my website. Here is a copy of your message: " . "\n\nName : " . $name . "\nMessage : " . $_POST['message'] . "\n" . "Contact number : " . $phone . "\n\n" . "Give me a day or two to get back to you!" . " Have a great day!"."\n\nThanks and Warm Regards"."\n\nJay Lohokare";
			$headers = "From:" . $from;
			$headers2 = "From:" . $noReply;
			mail($to, $subject, $message, $headers);
			mail($from, $subject2, $message2, $headers2); ?>

<html lang="en">
<head>
<title>Contact | Jay Lohokare</title>
<meta name="msapplication-TileColor" content="#01579b">
<meta name="theme-color" content="#01579b">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">
</head>
<body class="green lighten-2">
<div class="center flow-text white-text center-align" style="top:45vh;position:relative">
Message sent. Redirecting to home page...
</div>
<script>setTimeout(function(){window.location.href="http://www.jaylohokare.com"},3000);</script>
</body>
</html>
<?php }else{?>
<html lang="en">
<head>

<title>Failed | Contact | Jay Lohokare</title>
<meta name="msapplication-TileColor" content="#F44336">
<meta name="theme-color" content="#F44336">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
</head>

<body class="red lighten-2">
<div class="center flow-text white-text center-align" style="top:45vh;position:relative">
Message cant be empty. Please try again. Redirecting to home page...
</div>
</body>
</html>
<?php }}else{?>
<html lang="en">
<head>
<title>Failed | Contact | Jay Lohokare</title>
<meta name="msapplication-TileColor" content="#F44336">
<meta name="theme-color" content="#F44336">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
</head>
<body class="red lighten-2">
<div class="center flow-text white-text center-align" style="top:45vh;position:relative">
Invalid email ID. Please try again. Redirecting to home page...
</div>
<script>setTimeout(function(){window.location.href="http://www.jaylohokare.com"},3000);</script>
</body>
</html>
<?php }}else{?>
<html lang="en">
<head>
<title>Failed | Contact | Jay Lohokare</title>
<meta name="msapplication-TileColor" content="#F44336">
<meta name="theme-color" content="#F44336">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
</head>
<body class="red lighten-2">
<div class="center flow-text white-text center-align" style="top:45vh;position:relative">
Name cant be empty. Please try again. Redirecting to home page...
</div>
<script>setTimeout(function(){window.location.href="http://www.jaylohokare.com"},3000);</script>
</body>
</html>
<?php }?>