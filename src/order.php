<?php 
if($_POST) 
{ 
$to = "cactus8@yandex.ru"; //куда отправлять письмо 
$subject = "Заказ!"; //тема 
$message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>ЗАЯВКА!</i> </span><br><br> 
Имя: <span style="font-weight:bold;color:#000;">'.$_POST['name'].'</span><br> 
E-mail: <span style="font-weight:bold;color:#000;">'.$_POST['email'].'</span><br> 
Телефон: <span style="font-weight:bold;color:#339900;">'.$_POST['phone'].'</span><br> 
Имя товара: <span style="font-weight:bold;color:#339900;">'.$_POST['name-order'].'</span><br> 
Цена товара: <span style="font-weight:bold;color:#339900;">'.$_POST['price-order'].'</span><br>  
Количество товара: <span style="font-weight:bold;color:#339900;">'.$_POST['count-order'].'</span><br>  
Сумма заказа: <span style="font-weight:bold;color:#339900;">'.$_POST['sum-order'].'</span><br>  
Комментарий: <span style="font-weight:bold;color:#339900;font-size:24px;"> '.$_POST['comment'].'</span>'; 
$headers = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: info@my-site.ru\r\n"; // от кого, придумайте ящик или укажите почту своего сайта. 
$result = mail($to, $subject, $message, $headers); 

if ($result){ 
echo "<span id='message' style='
text-transform: uppercase;
font-size: 1em;
background-color: #ffffff;
font-weight: 700;
padding: .4em;
box-shadow: 0 19px 49px 0px rgba(81,74,48,0.3);
text-align: center;
margin-top: 10px;
'>Заказ оформлен.</br> 
Скоро Вам перезвонят</span>"; 
} 
} 
?>