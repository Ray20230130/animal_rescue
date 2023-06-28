; (function () {

  let currentPage = 1;
  let itemsPerPage = 5;

  let update_id;
  let delete_id;

  let flag = {
    ntitle: false,
    nhref: false,
    nimg: false,
    ncontent: false,
  }

  let mynewsArr; // 資料庫資料傳遞給更新按鈕的空陣列


  function showdata(data) { // 讀資料庫的成功函數
    // console.log(data[0]);
    mynewsArr = data;
    $("#mytable tbody").empty();
    for (let index = 0; index < data.length; index++) {

      let changeContent = `${data[index].Ncontent.substring(0, 45)}...`;

      let strHTML = `
      <tr>
      <td data-th="圖片">
        <img src="${data[index].Nimg}" alt="">
      </td>
      <td data-th="標題">${data[index].Ntitle}</td>
      <td data-th="內容">
        ${changeContent}
      </td>
      <td data-th="連結">${data[index].Nhref}</td>
      <td data-th="功能">
        <button class="btn btn-update" value="${data[index].ID}" type="button" data-bs-toggle="modal"
        data-bs-target="#update_news">修改</button>
        <button class="btn btn-delete" value="${data[index].ID}">刪除</button>
      </td>
      </tr>
      `;
      $("#mytable tbody").append(strHTML);
    }
  }

  function showdata_T(data) { //資料庫總筆數成功的函數
    $("#total_page").text(Math.floor(data / itemsPerPage) + 1);
    $("#page_number").prop("max", Math.floor(data / itemsPerPage) + 1);
  }

  function showdata_U(data) { // 更新成功的函數
    // console.log(data);
    alert(data.msg);
    document.location.href = "back_news.html";
  }

  function showdata_D(data){ // 刪除成功的函數
    alert(data.msg);
    document.location.href = "back_news.html";

  }

  function getNews() {

    $.ajax({ //取資料用的 - php/news_R_items.php
      method: "GET",
      url: "php/news_R_items.php",
      data: {
        currentPage: currentPage,
        itemsPerPage: itemsPerPage,
      },
      dataType: "JSON",
      success: showdata,
      error: function (data) {
        console.log(data);
        alert("錯誤 - php/news_R_items.php")
      },
    })

  }

  function getNewsNum() {
    $.ajax({ //總筆數 - php/news_R_totalRows.php
      method: "GET",
      url: "php/news_R_totalRows.php",
      dataType: "JSON",
      success: showdata_T,
      error: function () {
        alert("錯誤! - php/news_R_totalRows.php ");
      }
    });
  }

  function updateNews(id) {  // 更新資料的連結

    $.ajax({ // 更新資料的連結
      method: "POST",
      url: "php/news_Update.php",
      data: {
        id: id,
        ntitle: $("#ntitle").val(),
        nhref: $("#nhref").val(),
        nimg: $("#nimg").val(),
        ncontent: $("#ncontent").val(),
      },
      dataType : "JSON",
      success: showdata_U,
      error: function (data) {
        console.log(data);
        alert("錯誤 - php/news_Update.php")
      },
    })

  }

  function deleteNews(id) {  // 刪除資料的連結

    $.ajax({ // 更新資料的連結
      method: "POST",
      url: "php/news_Delete.php",
      data: {
        id: id,
      },
      dataType : "JSON",
      success: showdata_D,
      error: function (data) {
        console.log(data);
        alert("錯誤 - php/news_Delete.php")
      },
    })

  }



  //~*-------------------------------------------------
  getNews(); //第一次讀取需要做一次
  getNewsNum();  //第一次讀取需要做一次

  // 監聽每頁行數的 input
  $("#items_per_page").on("change", function () {
    // console.log($("#items_per_page").val());
    itemsPerPage = $("#items_per_page").val();
    getNews();
    getNewsNum();
  })

  $("#btn_page_number").on("click", function () { //跳轉
    currentPage = $("#page_number").val();
    getNews();
    getNewsNum();
  })

  $("#first_page").on("click", function () { //第一頁
    currentPage = 1;
    getNews();
  })
  $("#prev_page").on("click", function () { //上一頁
    if (currentPage == 1) {
      return false;
    } else {
      currentPage--;
      getNews();
    }
  })
  $("#next_page").on("click", function () { //下一頁
    if (currentPage == $("#total_page").text()) {
      return false;
    } else {
      currentPage++;
      getNews();
    }
  })
  $("#last_page").on("click", function () { //最末頁
    currentPage = $("#total_page").text();
    getNews();
  })



  //~*監聽 修改的 input 格式 
  $("#ntitle").on("input", function () { //監聽標題
    // console.log($(this).val());
    if ($(this).val().length == 0) {
      $(this).removeClass("is-invalid is-valid");
      flag.ntitle = false;
    } else {
      if ($(this).val().length > 4 && $(this).val().length < 21) {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        flag.ntitle = true;

      } else {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        flag.ntitle = false;

      }
    }
  })
  $("#nhref").on("input", function () { //監聽連結
    // console.log($(this).val());
    if ($(this).val().length == 0) {
      $(this).removeClass("is-invalid is-valid");
      flag.nhref = false;
    } else {
      if ($(this).val().length > 10 && $(this).val().length < 51) {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        flag.nhref = true;
      } else {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        flag.nhref = false;
      }
    }
  })
  $("#nimg").on("input", function () { //監聽圖片
    // console.log($(this).val());
    if ($(this).val().length == 0) {
      $(this).removeClass("is-invalid is-valid");
      flag.nimg = false;
    } else {
      if ($(this).val().length > 10 && $(this).val().length < 51) {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        flag.nimg = true;
      } else {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        flag.nimg = false;
      }
    }
  })
  $("#ncontent").on("input", function () { //監聽內容
    // console.log($(this).val());
    if ($(this).val().length == 0) {
      $(this).removeClass("is-invalid is-valid");
      flag.ncontent = false;
    } else {
      if ($(this).val().length > 19) {
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
        flag.ncontent = true;
      } else {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
        flag.ncontent = false;
      }
    }
  })

  // 修改的点击事件
  //!讀取總資料的陣列 - 傳遞給裡面的 input
  $(document).on('click', '.btn-update', function () { // 修改的点击事件
    update_id = $(this).val();
    // console.log("按鈕的ID",update_id);
    let index 
    for(i=0;i<mynewsArr.length;i++){
      if(mynewsArr[i].ID == update_id){
        index = i;
      }
    }
    // console.log("Arr的順序",index);
    // console.log(mynewsArr[index].Ntitle);
    $("#ntitle").val(mynewsArr[index].Ntitle);
    $("#nhref").val(mynewsArr[index].Nhref);
    $("#nimg").val(mynewsArr[index].Nimg);
    $("#ncontent").val(mynewsArr[index].Ncontent);
  });

  $(document).on('click', '.btn-delete', function () { // 刪除的点击事件
    delete_id = $(this).val();
    let index 
    for(i=0;i<mynewsArr.length;i++){
      if(mynewsArr[i].ID == delete_id){
        index = i;
      }
    }
    
    if(confirm("確定要刪除資料嗎?")){
      let checkText = prompt(`請重複輸入 "${mynewsArr[index].Ntitle} "`);
      if(checkText == mynewsArr[index].Ntitle){
        deleteNews(delete_id);
      }else{
        alert("輸入錯誤喔! 請再重試一次");
      }
    }
  });



  $("#update_submit").on("click", function () {  //修改 Model 的送出按鈕
    updateNews(update_id);
  })





})()


