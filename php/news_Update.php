
<?php

if (isset($_POST["ntitle"]) && isset($_POST["nhref"]) && isset($_POST["nimg"]) && isset($_POST["ncontent"]) && isset($_POST["id"])) {

  $id       = $_POST["id"];
  $ntitle   = $_POST["ntitle"];
  $nhref    = $_POST["nhref"];
  $nimg     = $_POST["nimg"];
  $ncontent = $_POST["ncontent"];


  // 001 串聯資料庫
  include "open_db.php";

  // 002 下 SQL 語法
  $sql = "UPDATE ournews SET Ntitle = '$ntitle' , Nhref = '$nhref' , Nimg = '$nimg' , Ncontent = '$ncontent' WHERE ID = '$id' ";

  if (mysqli_query($conn, $sql)) {
    $mydata = array(
      "type" => "success",
      "msg" => "更新成功"
    );
    echo json_encode($mydata);
  } else {
    $mydata = array(
      "type" => "error",
      "msg" => "更新失敗"
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





