(function () {
  let errorMsgs = document.querySelectorAll(".error-msg");

  let con01 = {// 表格1 的定義集
    name: {
      flag: false,
      errorMsg: errorMsgs[0],
    },
    phone: {
      flag: false,
      errorMsg: errorMsgs[1],
    },
    email: {
      flag: false,
      errorMsg: errorMsgs[2],
    },
    remark: {
      flag: false,
      errorMsg: errorMsgs[3],
    },
    flag: false,
  };

  let con02 = {  // 表格2 的定義集
    flag: false,

    name: {
      flag: false,
      errorMsg: errorMsgs[4],
    },
    phone: {
      flag: false,
      errorMsg: errorMsgs[5],
    },
    email: {
      flag: false,
      errorMsg: errorMsgs[6],
    },
    participateTime: {
      arr: [],
      flag: false,
      errorMsg: errorMsgs[7],
    },
    workHelp: {
      arr: [],
      flag: false,
      errorMsg: errorMsgs[8],
    },
    remark: {
      flag: true, //* 預設不寫也可以過
      errorMsg: errorMsgs[9],
    },
  }


  // Function 區域 👇

  function showdata(data) { // 表格1 的 $.ajax 成功函數
    if (data.type == "success") {
      alert("感謝您的填寫。");
      $("#con01name").val("");
      $("#con01phone").val("");
      $("#con01email").val("");
      $("#con01remark").val("");
      // con01.name.errorMsg.innerText = "";
      // con01.phone.errorMsg.innerText = "";
      // con01.email.errorMsg.innerText = "";
      // con01.remark.errorMsg.innerText = "";

    } else if (data.type == "error") {
      alert("填寫資料有誤。");
    } else if (data.type == "objectError") {
      alert("輸入項目錯誤，請依照正常方式填寫表單。");
    } else {
      alert("不知名的錯誤。");
    }
  }

  function showdata_P(data) { // 表格2 的 $.ajax 成功函數
    if (data.type == "success") {
      alert("感謝您的填寫。");
      $("#con02name").val("");
      $("#con02phone").val("");
      $("#con02email").val("");
      $("#con02remark").val("");

      $("#help-box input").each(function () {
        $(this).prop("checked",false);
      })
      $("#participate-box input").each(function () {
        $(this).prop("checked",false);
      })

    } else if (data.type == "error") {
      alert("填寫資料有誤。");
    } else if (data.type == "objectError") {
      alert("輸入項目錯誤，請依照正常方式填寫表單。");
    } else {
      alert("不知名的錯誤。");
    }
  }


  function isset(variable) {  // 拿來判斷 con01 有沒有屬性(participateTime,workHelp)
    return variable !== undefined && variable !== null;
  }

  function wholeFlagCheck(object) { // 由小旗判斷大旗
    // console.log(object.name.flag);
    // console.log(object.phone.flag);
    // console.log(object.email.flag);
    // console.log(object.remark.flag);

    if (!isset(object.participateTime) || !isset(object.helpWork)) {
      if (
        !object.name.flag ||
        !object.phone.flag ||
        !object.email.flag ||
        !object.remark.flag
      ) {
        object.flag = false;
      } else {
        object.flag = true;
      }
    } else {
      if (
        !object.name.flag ||
        !object.phone.flag ||
        !object.email.flag ||
        !object.participateTime.flag ||
        !object.helpWork.flag ||
        !object.remark.flag  //!我有預設不寫也過
      ) {
        object.flag = false;
      } else {
        object.flag = true;
      }
    }
  }

  function emptyMsg(object) {  //沒寫的跳提醒
    object.name.flag == false &&
      (object.name.errorMsg.innerText = "記得填寫喔!");
    object.phone.flag == false &&
      (object.phone.errorMsg.innerText = "記得填寫喔!");
    object.email.flag == false &&
      (object.email.errorMsg.innerText = "記得填寫喔!");

    if (isset(object.participateTime)) {
      object.participateTime.flag == false &&
        (object.participateTime.errorMsg.innerText = "記得勾選喔!");
    }
    if (isset(object.workHelp)) {
      object.workHelp.flag == false &&
        (object.workHelp.errorMsg.innerText = "記得勾選喔!");
    }

    object.remark.flag == false &&
      (object.remark.errorMsg.innerText = "記得填寫喔!");
  }

  function clearEmptyMsg(object) {  // 清除emptyMsg
    object.name.errorMsg.innerText = "";
    object.phone.errorMsg.innerText = "";
    object.email.errorMsg.innerText = "";
    if (isset(object.participateTime)) {
      object.participateTime.errorMsg.innerText = "";
    }
    if (isset(object.workHelp)) {
      object.workHelp.errorMsg.innerText = "";
    }
    object.remark.errorMsg.innerText = "";
  }



  // Function 區域 👆
  //------------------------------------//
  // 監聽 區域 👇

  // ~* - 表格1 👇
  $("#con01_OKbtn").click(function () {  //表格1按鈕
    clearEmptyMsg(con01);
    wholeFlagCheck(con01); // 由小旗判斷大旗

    if (con01.flag) { //大旗決定要不要傳遞資料
      $.ajax({
        method: "POST",
        url: "php/contact_Create.php",
        data: {
          con01name: $("#con01name").val(),
          con01phone: $("#con01phone").val(),
          con01email: $("#con01email").val(),
          con01remark: $("#con01remark").val(),
        },
        dataType: "JSON",
        success: showdata,
        error: function () {
          alert("連線錯誤!! - contact_us_Create.php");
        },
      });
    } else {
      emptyMsg(con01); //沒寫的跳提醒
    }
  });

  // ~* ----- con01 的 input 監聽 👇

  $("#con01name").bind("input property", function () {
    $(this).val().length > 0
      ? (con01.name.flag = true)
      : (con01.name.flag = false);
  });
  $("#con01phone").bind("input property", function () {
    $(this).val().length > 0
      ? (con01.phone.flag = true)
      : (con01.phone.flag = false);
  });
  $("#con01email").bind("input property", function () {
    $(this).val().length > 0
      ? (con01.email.flag = true)
      : (con01.email.flag = false);
  });
  $("#con01remark").bind("input property", function () {
    $(this).val().length > 0
      ? (con01.remark.flag = true)
      : (con01.remark.flag = false);
  });

  // ~*----- con01 的 input 監聽 👆
  // ~* 表格1👆

  // ~* --- 表格2 👇
  $("#con02_OKbtn").click(() => {  //表格2按鈕

    // console.log("測試", $("#con02name").val());
    // console.log("測試", $("#con02phone").val());
    // console.log("測試", $("#con02email").val());
    // console.log("測試", con02.participateTime.arr);
    // console.log("測試", con02.workHelp.arr);
    // console.log("測試", $("#con02remark").val());

    clearEmptyMsg(con02);
    wholeFlagCheck(con02);

    if (con02.flag) {
      // console.log("T", con02.flag);
      // console.log("con02.flag = true");
      let participateTimeStr = JSON.stringify(con02.participateTime.arr);
      let workHelpStr = JSON.stringify(con02.workHelp.arr);
      $.ajax({
        method: "POST",
        url: "php/participate_Create.php",
        data: {
          con02name: $("#con02name").val(),
          con02phone: $("#con02phone").val(),
          con02email: $("#con02email").val(),
          con02time: participateTimeStr,
          con02work: workHelpStr,
          con02remark: $("#con02remark").val(),
        },
        dataType: "JSON",
        success: showdata_P,
        error: function (data) {
          console.log(data);
          alert("連線錯誤!! - participate_Create.php");
        },
      });
    } else {
      emptyMsg(con02);
    }

  })



  // ----- con02 的 input 監聽 👇
  $("#con02name").bind("input property", function () {
    $(this).val().length > 0
      ? (con02.name.flag = true)
      : (con02.name.flag = false);
  });
  $("#con02phone").bind("input property", function () {
    $(this).val().length > 0
      ? (con02.phone.flag = true)
      : (con02.phone.flag = false);
  });
  $("#con02email").bind("input property", function () {
    $(this).val().length > 0
      ? (con02.email.flag = true)
      : (con02.email.flag = false);
  });
  $("#con02remark").bind("input property", function () {
    $(this).val().length > 0
      ? (con02.remark.flag = true)
      : (con02.remark.flag = false);
  });

  $("#participate-box input").each(function () { //"參與時間" 的 input
    $(this).on("change", () => {
      con02.participateTime.arr = []
      $("#participate-box input").each(function () {
        if ($(this).is(":checked")) {
          con02.participateTime.arr.push($(this).val());
        }
      })
      con02.participateTime.arr.length > 0 ?
        con02.participateTime.flag = true :
        con02.participateTime.flag = false;
    })
  });


  $("#help-box input").each(function () { //"協助內容" 的 input
    // 在這裡處理每個 input 元素的邏輯
    // console.log($(this).attr("name"));
    $(this).on("change", () => {
      con02.workHelp.arr = []
      $("#help-box input").each(function () {
        if ($(this).is(":checked")) {
          con02.workHelp.arr.push($(this).val());
        }
      })
      con02.workHelp.arr.length > 0 ?
        con02.workHelp.flag = true :
        con02.workHelp.flag = false;
    })
  });


  // ----- con02 的 input 監聽 👆



  // **** 表格2 👆



})();
