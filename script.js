
document.addEventListener("DOMContentLoaded", function() {
  const employeeitem = document.querySelectorAll(".employee-item");

  // 添加点击事件（onclick）
  employeeitem.forEach(function(item) {
    item.onclick = function() {
      alert("你点击了： " + this.textContent);
    };
  });

 
  const specialemployee = document.getElementById("special-book");
  if (specialemployee) {
    specialemployee.addEventListener("change", function() {
      console.log("特殊职位已更改");
    });
  }

  // 添加鼠标按下事件（onmousedown）
  employeeitem.forEach(function(item) {
    item.onmousedown = function() {
      this.style.backgroundColor = "#d1c4e9"; // 按下时改变背景色
    };
  });

  // 添加鼠标移出事件（onmouseout）
  employeeitem.forEach(function(item) {
    item.onmouseout = function() {
      this.style.backgroundColor = ""; // 鼠标移出时恢复原样
    };
  });

  // 添加鼠标悬停事件（onmouseover）
  employeeitem.forEach(function(item) {
    item.onmouseover = function() {
      this.style.backgroundColor = "#b2ebf2"; // 鼠标悬停时改变背景色
    };
  });

  // 添加鼠标松开事件（onmouseup）
  employeeitem.forEach(function(item) {
    item.onmouseup = function() {
      this.style.backgroundColor = "#ffe0b2"; // 松开鼠标时改变背景色
    };
  });
});
