
let navBar = `
<nav class="navbar navbar-expand-md myNavbar">
<div class="container-fluid">
  <!-- 左上標籤 -->
  <a class="navbar-brand" href="#">XXX動物保護</a>
  <!-- RWD 隱藏的 展開按鈕 -->
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="./back_news.php">後臺資料管理</a>
      </li>

      <li class="nav-item">
      <a class="nav-link" aria-current="page" href="./b_addnews.php">新增資料</a>
    </li>
    </ul>

    <div class="logout-box">
      <a href="login.php?st=logout" class="logout-btn">登出</a>
    </div>

  </div>
</div>
</nav>

`;

document.write(navBar);


