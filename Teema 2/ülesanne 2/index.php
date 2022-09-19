<h2>Project "massive" php code</h2>
<hr>
<?php

// $numbers = array(9,8,7,6,5,4,3,2,1);
// foreach ($numbers as $num){
//     echo $num.' ';
// }


?>
<?php

// echo "<h2>2. Cities</h2>";
// $countries = array("Russia","Norway","Eesti","China");
// $text="";
// foreach($countries as $country){
//     $text.='<li>'.$country.'</li>';
// }
// echo "<h3>Cities</h3>";
// echo '<ul>'.$text.'</ul>';
?>
<?php
// $newCountries = array(
//     array(0,'Eesti', 'Tallinn'),
//     array(1,'Russia', 'Moscow'),
//     array(2,'Germany', 'Berlin')
// );
// echo "<h2>3. Countries - capital</h2>";
// foreach($newCountries as $country){
//     echo ($country[0]+1).'. <b>'.$country[1].'</b> --- '.$country[2].'<br>';
// }
// echo'<p>all:'.count($newCountries).'</p>';
?>
<?php
    $myCountries = array(
        array(
        'id'=>0,
        'name'=> 'Eesti',
        'capital'=> 'Tallinn',
        'cities'=>array('Narva','Jõhvi')
        ),
        array(
            'id'=>1,
            'name'=> 'Russia',
            'capital'=> 'Moscow',
            'cities'=>array('Tomsk','Kaluga')
            ),
        array(
            'id'=>0,
            'name'=> 'Germany',
            'capital'=> 'Berlin',
            'cities'=>array('Rostok','Munich')
        ),
    );
    echo '<h2>4. Countries, cities</h2>';
    foreach($myCountries as $country){
        echo ($country['id']+1).'. <b>'.$country['name'].'</b> --- '.$country['capital'].'<br>';
        echo '<ul>';
        foreach($country['cities'] as $city){
            echo '<li>'.$city.'</li>';
        };
        echo '</ul>';
    }


?>