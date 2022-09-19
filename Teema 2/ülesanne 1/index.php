<h2>Project "Hello" php code</h2>
<hr>
<?php

echo 'Project example<br>';
echo 'Hello, world<br>';

?>
<?php

echo '<h2>переменные - пример</h2>';
$num1 = 10;
$num2 = 15;
$sum = $num1 + $num2;
echo $num1.'+'.$num2.'='.$sum

?>
<?php

echo '<h2>Пример условия Если - Иначе</h2>';
$name='Ivan';
$age=13;
if($age>12 && $age <= 19)
    $comment = "teenager";
elseif($age>=0 && $age<=12)
$comment = "kid";
else
    $comment = "error";

echo 'Name:'.$name.' Age:'.$age.' Type:'.$comment;
?>