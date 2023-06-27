
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
        <a class="nav-link" aria-current="page" href="./index_bak.html">關於我們</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./news.html">最新消息</a>
      </li>
      <!-- 下拉式選單 -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          相關計畫
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">救助計畫</a></li>
          <li><a class="dropdown-item" href="#">助養計畫</a></li>
          <li><a class="dropdown-item" href="#">生命教育</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="./donate.html">支持我們</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./welfare_partner.html">公益小夥伴</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./contact_us.html">聯絡方式</a>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li> -->
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>

`;

document.write(navBar);


