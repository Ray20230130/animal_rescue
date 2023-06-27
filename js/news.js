
; (function () {
  let currentPage = 1;
  let itemsPerPage = 5;

  let newsContents = document.querySelectorAll(".contentText p");

  function showdata_I(data) { //取資料成功的函數
    $('#news_box').empty(); //第一筆清空
    for (let i = 0; i < data.length; i++) {
      let strHTML = `
      <li class="list-group-item content">
        <div class="row">
          <div class="displayNone">${data[i].ID}</div>
          <div class="col-md-4 contentImg">
            <img src="${data[i].Nimg}" alt="">
          </div>
          <div class="col-md-8 contentText">
            <h2>${data[i].Ntitle}</h2>
            <div class="time-box">
              <span>${data[i].Created_at}</span>
            </div>
            <p>
            ${data[i].Ncontent}
            </p>
            <div class="href-box">
              <a href="${data[i].Nhref}" class="btn btn-outline-dark">了解更多</a>
            </div>
          </div>
        </div>
      </li>
      `;
      $('#news_box').append(strHTML);
    }//!迴圈結束
    showText(50) //~* 讓文章內容只顯示一部分 
  }

  function showdata_T(data) { //資料庫總筆數的函數
    let totalPage ;
    if((data % itemsPerPage) == 0){
      totalPage = Math.floor(data / itemsPerPage);
    }else{
      totalPage = Math.floor(data / itemsPerPage) + 1;
    }
    $("#total_page").text(totalPage);
    $("#page_number").prop("max", totalPage);
  }

  function getNews() { // 更換頁數時，重新要資料

    $.ajax({ //取資料用的 - php/news_R_items.php
      method: "GET",
      data: {
        currentPage: currentPage,
        itemsPerPage: itemsPerPage,
      },
      url: "php/news_R_items.php",
      dataType: "JSON",
      success: showdata_I,
      error: function () {
        alert("錯誤! - php/news_R_items.php ");
      }
    });

    window.scrollTo({
      top: 0,
    });

    $("#current_page").text(currentPage);

    $("#page_number").val(currentPage);

  }

  function showText(num) {  //~* 讓文章內容只顯示一部分 
    let newsContents = document.querySelectorAll(".contentText p");
    newsContents.forEach(function (newsContent) {
      // newsContent.style.color = "red";
      let changeContent = newsContent.innerText.substring(0, num);
      newsContent.innerText = `${changeContent}...`;
    })
  }

  //todo 好像暫時用不到，需要問問怎麼傳遞GET 資料比較好
  // function sendGET(url,data) {
  //   // 建立要添加的 GET 參數字串
  //   let getParams = `currentPage=${data}`;
  //   // 組合新的網址
  //   let newUrl = `${url}?${getParams}`;
  //   // 重新導向到新的網址
  //   window.location.href = newUrl;
  // }


  //~? 好像暫時用不到，我用資料庫的語法去取五比五筆。
  // function dataPerPage(mydata,currentPage,itemsPerPage){
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   const displayedData = mydata.slice(startIndex, endIndex);

  //   for (let index = 0; index < itemsPerPage; index++) {
  //     $('#news_box').append(displayedData[index]);
  //   }

  // }

  //~* 取得PHP的連結 
  $.ajax({ //取資料用的 - php/news_R_items.php
    method: "GET",
    data: {
      currentPage: currentPage,
      itemsPerPage: itemsPerPage,
    },
    url: "php/news_R_items.php",
    dataType: "JSON",
    success: showdata_I,
    error: function () {
      alert("錯誤! - php/news_R_items.php ");
    }
  });

  $.ajax({ //總筆數 - php/news_R_totalRows.php
    method: "GET",
    url: "php/news_R_totalRows.php",
    dataType: "JSON",
    success: showdata_T,
    error: function () {
      alert("錯誤! - php/news_R_totalRows.php ");
    }
  });

  //~* 頁數按鈕觸發 

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
  $("#btn_page_number").on("click", function () { //跳轉
    currentPage = $("#page_number").val();
    getNews();
  })





  //~!原本寫法 - 保護用 
  // function showdata(data) {
  //   $('#news_box').empty(); //第一筆清空
  //   for (let i = 0; i < data.length; i++) {
  //     let strHTML = `
  //     <li class="list-group-item content">
  //       <div class="row">
  //         <div class="displayNone">${data[i].ID}</div>
  //         <div class="col-md-4 contentImg">
  //           <img src="${data[i].Nimg}" alt="">
  //         </div>
  //         <div class="col-md-8 contentText">
  //           <h2>${data[i].Ntitle}</h2>
  //           <div class="time-box">
  //             <span>${data[i].Created_at}</span>
  //           </div>
  //           <p>
  //           ${data[i].Ncontent}
  //           </p>
  //           <div class="href-box">
  //             <a href="${data[i].Nhref}" class="btn btn-outline-dark">了解更多</a>
  //           </div>
  //         </div>
  //       </div>
  //     </li>
  //     `;
  //     $('#news_box').append(strHTML);
  //   }
  // }






})()








