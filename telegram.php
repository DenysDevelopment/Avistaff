<?php

$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];

// $url = "https://www.google.com/recaptcha/api/siteverify";
// $key = "6Leq6ngiAAAAAJiZuTCNr7dUcZpX0iiP2yGhagEh";
// $query = $url.'?secret='.$key.'&response='.$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR'];

// if(!$_POST['g-recaptcha-response']) {
//   header("Location: /#form");
//   $_SESSION['recaptcha'] = 'captcha nie przeszedł';
//   exit();
// }

// $data = json_decode(file_get_contents($query));
// if($data->success == false) {
//   header("Location: /#form");
//   $_SESSION['recaptcha'] = 'captcha nie przeszedł';
//   exit();
// }

// $_SESSION['recaptcha'] = "";
$token = "6792498583:AAEzowTFZS9a5C2tXxrMndM4JfvH6Tq8KFY";
$chat_id = "-4026639687";
$arr = array(
  '<b>Imię:</b> ' => $name,
  '<b>Tel:</b> ' => $tel,
  '<b>Email:</b> ' => $email,
  '<b>Created by:</b> <a href="t.me/denys_maksymuck">Denys</a>',
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
