<?php
session_start();
if (!isset($_SESSION['username']))
  header('Location: login.php');
  // echo $_SESSION["lastlogintime"];
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="./images/ddoogg.ico" type="image/x-icon">
  <title>後台管理系統 - 新增消息</title>

  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/back_style.css">
  <script src="https://kit.fontawesome.com/709b8293ad.js" crossorigin="anonymous"></script>


</head>

<body>
  <!-- 全體外皮 -->
  <div class="mainWrap">

    <!-- 001 - 搜尋列 NavBar (Bootstrap) -->
    <script src="./js/B_NavBar_content.js"></script>

    <!-- 002 - 新增表格 -->
    <section class="section-addnews02">
      <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2 content">
            <a href="./back_news.php" class="content-nav">
              <i class="fa-solid fa-right-to-bracket"></i> 回後台
            </a>
            <h1>新增消息</h1>
            <div class="item">
              <label for="ntitle" class="form-label">新聞標題：</label>
              <input type="text" class="form-control" name="ntitle" id="ntitle" placeholder="5~20個字">
              <div class="valid-feedback">
                符合條件
              </div>
              <div class="invalid-feedback">
                格式不符合條件
              </div>
            </div>
            <div class="item">
              <label for="nhref" class="form-label">連結：</label>
              <input type="text" class="form-control" name="nhref" id="nhref" placeholder="10~50個字">
              <div class="valid-feedback">
                符合條件
              </div>
              <div class="invalid-feedback">
                格式不符合條件
              </div>

            </div>
            <div class="item">
              <label for="nimg" class="form-label">新聞圖片地址：</label>
              <input type="text" class="form-control" name="nimg" id="nimg" placeholder="10~50個字">
              <div class="valid-feedback">
                符合條件
              </div>
              <div class="invalid-feedback">
                格式不符合條件
              </div>

            </div>
            <div class="item">
              <label for="ncontent" class="form-label">新聞內容：</label>
              <textarea class="form-control" name="ncontent" id="ncontent" cols="30" rows="5" placeholder="20個字以上"></textarea>
              <div class="valid-feedback">
                符合條件
              </div>
              <div class="invalid-feedback">
                格式不符合條件
              </div>
            </div>
            <div class="btn-item">
              <button id="btn_delete" class="btn btn-outline-secondary">清除</button>
              <button id="btn_submit" class="btn btn-outline-primary">送出</button>
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