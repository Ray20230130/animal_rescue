
<?php

// 🎨確認傳遞項目都對
if (isset($_POST["con02name"]) && isset($_POST["con02phone"]) && isset($_POST["con02email"]) && isset($_POST["con02time"]) && isset($_POST["con02work"]) && isset($_POST["con02remark"])) {

  // 🎨確認 input 都有輸入資料
  if ($_POST["con02name"] != "" && $_POST["con02phone"] != "" && $_POST["con02email"] != "" && $_POST["con02time"] != "" && $_POST["con02work"] != "") {

      // 001 建立MySQL的資料庫連接 
      include "open_db.php";

      // 002 下指令給資料庫

      $p_con02name   = $_POST["con02name"];
      $p_con02phone  = $_POST["con02phone"];
      $p_con02email  = $_POST["con02email"];
      $p_con02time   = $_POST["con02time"];
      $p_con02work   = $_POST["con02work"];
      $p_con02remark = $_POST["con02remark"];

      $sql = "INSERT INTO participate (Con02name,Con02phone,Con02email,Con02time,Con02work,Con02remark) VALUES ('$p_con02name','$p_con02phone','$p_con02email','$p_con02time','$p_con02work','$p_con02remark') ";

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
    echo  "請每個空格都填寫!";
  }
} else {
  $mydata = array(
    "type" => "objectError",
    "msg" => "輸入項目錯誤"
  );
  echo json_encode($mydata);
}


?>



