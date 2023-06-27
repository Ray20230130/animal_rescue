<?php

$currentPage = $_GET["currentPage"];
$itemsPerPage = $_GET["itemsPerPage"];

//* 001 建立MySQL的資料庫連接 
include "open_db.php";

//* 002 下指令給資料庫
// 擷取需要的行數回傳資料。

$startIndex = ($currentPage - 1) * $itemsPerPage ;

$sql = " SELECT * FROM ournews LIMIT $itemsPerPage OFFSET $startIndex"; //*從0開始，所以偏移2的話是第3筆資料
$result = mysqli_query($conn, $sql);

$mydata = array(); //創一個陣列

while ($row = mysqli_fetch_assoc($result)) {
  $mydata[] = $row; //用成二維陣列的方式填充資料
}

// echo $mydata;
echo json_encode($mydata); //轉成 JSON 檔資料


//* 003 關閉資料庫
mysqli_close($conn);
