<?php
session_start();

if(isset($_GET["st"])){
  if($_GET["st"] == "logout"){
    unset($_SESSION["username"]);
    unset($_SESSION["passwd"]);
  }
}

require "./php/open_db.php";

if(isset($_POST["username"]) && isset($_POST["passwd"])){
  $userName = $_POST["username"];
  $passWd = $_POST["passwd"];

  $sql = "SELECT * FROM user WHERE Uname = '$userName' AND Upasswd = '$passWd' ";
  $result = mysqli_query($conn,$sql);
  if(mysqli_num_rows($result) == 0){
    echo "<script> alert('帳號密碼輸入錯誤') </script>";
  }else{
    $row = mysqli_fetch_assoc($result);
    $_SESSION["username"] = $userName;
    $_SESSION["passwd"] = $passWd;
    $_SESSION["lastlogintime"] = date("Y-m-d H:i:s");

    $sql = "UPDATE user SET LastloginTime = '" . $_SESSION["lastlogintime"] . "' WHERE Uname = '$userName'";
    $result = mysqli_query($conn,$sql);
    if($result){
      echo "<script>alert('its OK')</script>";
    }else{
      echo "<script>alert('not work')</script>";

    }
    mysqli_close($conn);
    header("Location: back_news.php");
  }
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="./images/ddoogg.ico" type="image/x-icon">
  <title>後台管理系統 - 登入</title>

  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/back_style.css">
  <script src="https://kit.fontawesome.com/709b8293ad.js" crossorigin="anonymous"></script>


</head>

<body>
  <!-- 全體外皮 -->
  <div class="mainWrap">

    <!-- 001 - 搜尋列 NavBar (Bootstrap) -->
    <script src="./js/NavBar_content.js"></script>

    <!-- 002 - 登入表格 -->
    <section class="section_login02">

      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="content">

              <h1>員工帳號登入</h1>

              <form method="POST" action="login.php">

                <div class="item">
                  <label for="username">帳號</label>
                  <input type="text" id="username" class="form-control" name="username">
                </div>
                <div class="item">
                  <label for="passwd">密碼</label>
                  <input type="text" id="passwd" class="form-control" name="passwd">
                </div>
                <div class="btn-item">
                  <button type="submit" class="btn btn-outline-dark btn-submit">登入</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>

    </section>


    <!-- 005 - footer -->
    <script src="./js/footer_content.js"></script>

  </div>




  <script src="./js/bootstrap.bundle.min.js"></script>
  <script src="./js/jquery-3.6.4.min.js"></script>
  <script src="./js/B_addnews.js"></script>



</body>

</html>