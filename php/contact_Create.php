
<?php

// 🎨確認傳遞項目都對
if (isset($_POST["con01name"]) && isset($_POST["con01phone"]) && isset($_POST["con01email"]) && isset($_POST["con01remark"])) {
  // 001 建立MySQL的資料庫連接 
  include "open_db.php";
  // 002 下指令給資料庫
  $p_con01name   = $_POST["con01name"];
  $p_con01phone  = $_POST["con01phone"];
  $p_con01email  = $_POST["con01email"];
  $p_con01remark = $_POST["con01remark"];
  $sql = "INSERT INTO contact (Con01name,Con01phone,Con01email,Con01remark) VALUES ('$p_con01name','$p_con01phone','$p_con01email','$p_con01remark') ";
  if (mysqli_query($conn, $sql)) {
    $mydata = array(
      "type" => "success",
      "msg" => "輸入成功"
    );
    echo json_encode($mydata);
  } else {
    $mydata = array(
      "type" => "error",
      "msg" => "輸入失敗"
    );
    echo json_encode($mydata);
  }
  // 003 關閉資料庫
  mysqli_close($conn);
} else {
  $mydata = array(
    "type" => "objectError",
    "msg" => "輸入項目錯誤"
  );
  echo json_encode($mydata);
}


?>



