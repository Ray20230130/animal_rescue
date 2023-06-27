
; (function () {

  let flag = {
    ntitle: false,
    nhref: false,
    nimg: false,
    ncontent: false,
  }

  function showdata(data){
    // console.log(data);
    alert("資料填寫成功");
    clearEmptyMsg();
  }

  function clearEmptyMsg(){
    $("#ntitle").val("");
    $("#ntitle").removeClass("is-invalid is-valid");
    $("#nhref").val("");
    $("#nhref").removeClass("is-invalid is-valid");
    $("#nimg").val("");
    $("#nimg").removeClass("is-invalid is-valid");
    $("#ncontent").val("");
    $("#ncontent").removeClass("is-invalid is-valid");
  }




  //監聽 input 格式
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


  //兩個按鈕監聽
  $("#btn_delete").on("click",function(){  //清除按鈕
    clearEmptyMsg();
  })

  $("#btn_submit").on("click",function(){
    if(flag.ntitle && flag.nhref && flag.nimg && flag.ncontent){
      $.ajax({
        method : "POST",
        url : "php/news_Create.php",
        data :{
          ntitle : $("#ntitle").val(),
          nhref : $("#nhref").val(),
          nimg : $("#nimg").val(),
          ncontent : $("#ncontent").val(),
        },
        // dataType: "JSON",
        success: showdata,
        error: function (data) {
          console.log(data);
          alert("連線錯誤!! - php/news_Create.php");
        },
      })  
    }else{
      alert("資料填寫不全");
    }

  })



})()




