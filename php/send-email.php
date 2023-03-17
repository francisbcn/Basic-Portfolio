<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "francis.pama@hotmail.com";
    $subject = "Contact form submission";
    $headers = "From: " . $email . "\r\n" .
    "Reply-To: " . $email . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
    if(mail($to, $subject, $message, $headers)){
    echo "Thank you for your message, a representative will contact you soon.";
    } else {
    echo "An error occurred while trying to send your message. Please try again later.";
    }
    ?>