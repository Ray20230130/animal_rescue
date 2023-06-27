<?php

if(isset($_POST["ntitle"]) && isset($_POST["ntitle"]) && isset($_POST["ntitle"]) && isset($_POST["ntitle"])){

  $ntitle   = $_POST["ntitle"];
  $nhref    = $_POST["nhref"];
  $nimg     = $_POST["nimg"];
  $ncontent = $_POST["ncontent"];

  // 001 建立MySQL的資料庫連接 
  include "open_db.php";
  // 002 下指令給資料庫

  $sql = "INSERT INTO ournews (Ntitle,Nhref,Nimg,Ncontent) VALUES ('$ntitle','$nhref','$nimg','$ncontent') ";

  if(mysqli_query($conn,$sql)){
    echo "資料填寫成功";
  }else{
    echo "資料填寫失敗";
  }


  // 003 關閉資料庫
  mysqli_close($conn);


}else{
  echo "資料格式錯誤";
}





?>