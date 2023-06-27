

<?php

// 建立MySQL的資料庫連接 

$servername = "localhost";
$username = "admin";
$passwd = "123456";
$dbname = "contact_us_db";

$conn = mysqli_connect($servername,$username,$passwd,$dbname) or die("連線失敗!! - contact_us_db");
mysqli_query($conn,"set names 'UTF8'");

// if($conn){
//   echo "YES";
// }

?>


