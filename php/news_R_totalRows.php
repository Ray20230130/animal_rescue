<?php

//* 001 建立MySQL的資料庫連接 
include "open_db.php";

//* 002 下指令給資料庫

// 002-1 計算總行數

$sql = "SELECT COUNT(*) AS total FROM ournews";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$totalRows = $row['total'];

echo json_encode($totalRows); 


//* 003 關閉資料庫
mysqli_close($conn);
