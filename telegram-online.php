<?php

$typ = $_POST['typ'];
$osob = $_POST['osob'];
$location = $_POST['location'];
$email = $_POST['email'];
$number = $_POST['number'];
$more = $_POST['more'];

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
$chat_id = "-1002001444533";
$arr = array(
  '<b>Typ zlecenia:</b> ' => $typ,
  '<b>Osob:</b> ' => $osob,
  '<b>Localizacja:</b> ' => $location,
  '<b>Email:</b> ' => $email,
  '<b>Tel:</b> ' => $number,
  '<b>Szczegóły zlecenia:</b> ' => $more,
  '<b>------------------</b>',
  '<b>Created by:<a href="t.me/denys_maksymuck">Denys</a></b>',
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


header("Location: ./index.html");
?>
