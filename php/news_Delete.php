<?php

if(isset($_POST["id"])){

  $id = $_POST["id"];

  include "open_db.php";
  
  $sql = " DELETE FROM ournews WHERE id = $id ";
  
  if(mysqli_query($conn,$sql)){
    $mydata = array(
      "type" => "success",
      "msg" => "刪除成功"
    );
    echo json_encode($mydata);
  } else {
    $mydata = array(
      "type" => "error",
      "msg" => "刪除失敗"
    );
    echo json_encode($mydata);
  }
  
  // 003 關閉資料庫
  mysqli_close($conn);
  
}else{
  $mydata = array(
    "type" => "objectError",
    "msg" => "格式錯誤"
  );
  echo json_encode($mydata);

}

