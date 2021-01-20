<?php 
if($_POST) 
{ 
$to = "mail@mail.ru"; 
$subject = "Заказ обратного звонка"; 
$message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>Заказ обратного звонка!</i> </span><br><br> 
Имя: <span style="font-weight:bold;color:#000;">'.$_POST['call-me-name'].'</span><br> 
Телефон: <span style="font-weight:bold;color:#339900;">'.$_POST['call-me-phone-2'];; 
$headers = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: mail@mail.ru\r\n"; //from
$result = mail($to, $subject, $message, $headers); 

if ($result){ 
echo "<p id='message' style='text-transform: uppercase; 
text-transform: uppercase;
font-size: 1em;
background-color: #ffffff;
font-weight: 700;
padding: .4em;
box-shadow: 0 19px 49px 0px rgba(81,74,48,0.3);
text-align: center;
margin-top: 10px;
'>Сообщение успешно отправлено.</br> 
Скоро Вам перезвонят</p>"; 
} 
} 
?>