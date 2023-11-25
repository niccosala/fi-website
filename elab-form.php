<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style/desktop/structure.css">
    <link rel="stylesheet" href="style/desktop/common.css">
    <link rel="stylesheet" href="style/desktop/elab-form.css">
</head>
<body>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

require 'config.php';


function fetchAttachments($mailObject, $fieldName) {
	if(isset($_FILES[$fieldName]["name"])) {
        $numFile = count($_FILES[$fieldName]["name"]);

        for($i=0; $i<$numFile; $i++) {
            $tempFile = $_FILES[$fieldName]["tmp_name"][$i];
            $fileName = $_FILES[$fieldName]["name"][$i];

            if($tempFile != "") 
                $mailObject -> addAttachment($tempFile, $fileName);
        }
        return $numFile;
    }
    return 0;
}

session_start();
$_SESSION['fi'] = 'form';
$source = "index.html";


if(!isset($_POST["ap-confirm"]) and !isset($_POST["e-confirm"]) and !isset($_POST["pm-confirm"]) and !isset($_POST["cnt-confirm"]) and !isset($_POST["wwm-confirm"])) {
	session_destroy();
    header("Location: index.html");
}

$mail = new PHPMailer(true);
$mail -> SMTPAuth = true;    
$mail -> Host = "smtp.gmail.com";
$mail -> SMTPSecure = "ssl";
$mail -> Port = 465;
$mail -> Username = $USERNAME;
$mail -> Password = $PASSWORD;
$mail -> setFrom($USERNAME);
$mail -> addAddress($USERNAME);
$mail -> addReplyTo($USERNAME);
$mail -> isHTML(true);
$mail -> Subject = "";
$mail -> Body = "";

// SERVIZI =================================================================
// Analisi posizioni
if(isset($_POST["ap-confirm"])) {
	$mail -> Subject = "Richiesta Analisi delle posizioni assicurative e finanziarie in essere";
    $mail -> Body = $_POST["ap-gender"] . " " .
    		   "<b>" . addslashes($_POST["ap-name"]) . "</b>" .
               "<br>Professione<b>: " . addslashes($_POST["ap-job"]) . 
               "</b><br><br>Telefono<b>: " . $_POST["ap-tel"] .
               "</b><br>Email<b>: " . $_POST["ap-email"] .
               "</b><br>Data di nascita<b>: " . $_POST["ap-birth"] .
               "</b><br>Residenza<b>: " . addslashes($_POST["ap-address"]) .
               "</b><br>Messaggio<b>: " . addslashes($_POST["ap-message"]) . "</b><br><br>";     

	$fileFetched = fetchAttachments($mail, "ap-file");
    $source = "servizi.html";
}

// Evento
else if(isset($_POST["e-confirm"])) {
	$mail -> Subject = "Evento";
    $mail -> Body = "<b>" . addslashes($_POST["e-name"]) . "</b>" .
               "<br><br>Telefono<b>: " . $_POST["e-tel"] .
               "</b><br>Email<b>: " . addslashes($_POST["e-email"]) . 
               "</b><br>Contesto<b>: " . $_POST["e-context"] .
               "</b><br>Messaggio<b>: " . addslashes($_POST["e-message"]) . "</b><br><br>";
               
	$fileFetched = fetchAttachments($mail, "e-file");
    $source = "servizi.html";
}

// Pianificazione assicurativa
else if(isset($_POST["pm-confirm"])) {
	$mail -> Subject = "Richiesta Pianificazione assicurativa e patrimoniale completa";
    $mail -> Body = $_POST["pm-gender"] . " " .
    		   "<b>" . addslashes($_POST["pm-name"]) . "</b>" .
               "<br>Professione<b>: " . addslashes($_POST["pm-job"]) . 
               "</b><br><br>Telefono<b>: " . $_POST["pm-tel"] .
               "</b><br>Email<b>: " . $_POST["pm-email"] .
               "</b><br>Data di nascita<b>: " . $_POST["pm-birth"] .
               "</b><br>Residenza<b>: " . addslashes($_POST["pm-address"]) .
               "</b><br><br>Messaggio<b>: " . addslashes($_POST["pm-message"]) . "</b><br><br>";
               
	$fileFetched = fetchAttachments($mail, "pm-file");
    $source = "servizi.html";
}

// CONTATTI ===============================================================
// Contattami
else if(isset($_POST["cnt-confirm"])) {
    $mail -> Subject = "Richiesta di contatto";
    $mail -> Body = "<b>" . addslashes($_POST["cnt-name"]) . "</b> " .
    		   "<br>Email:<b> " . $_POST["cnt-mail"] . "</b>" .
               "<br>Telefono<b>: " . $_POST["cnt-tel"] . "</b>" .
               "<br><br>Messaggio<b>: " . addslashes($_POST["cnt-message"]) . "</b><br><br>";

    $source = "contattami.html";
}

// Lavora con me
else if(isset($_POST["wwm-confirm"])) {
    $mail -> Subject = "Richiesta di contatto";
    $mail -> Body = "<b>" . addslashes($_POST["wwm-name"]) . "</b> " .
    		   "<br>Email:<b> " . $_POST["wwm-mail"] . "</b>" .
               "<br>Telefono<b>: " . $_POST["wwm-tel"] . "</b>" .
               "<br><br>Messaggio<b>: " . addslashes($_POST["wwm-message"]) . "</b><br><br>";

    $fileFetched = fetchAttachments($mail, "wwm-file");
    $source = "contattami.html";
}

// LAYOUT =================================================================

echo '<img class="elab-img" src="resources/images/logo/horizontal/FI_logo_affiancato.png">';

if(!$mail -> send()) 
    echo '<h3 class="elab-desc">Errore nell\'invio della richiesta: ' . $mail -> ErrorInfo . '. Riprova più tardi.</h3>';
else 
    echo '<h3 class="elab-desc">La richiesta è stata inviata con successo.</h3>';
    
session_destroy();
header("Refresh: 4; url=" . $source);
?>

</body>
</html>