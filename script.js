function addTask() {
    let name = document.getElementById("taskName").value;
    let date = document.getElementById("taskDate").value;
    let time = document.getElementById("taskTime").value;

    // الحصول على تاريخ اليوم بدون وقت للمقارنة
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let selectedDate = new Date(date);

    // التحقق من اسم المهمة
    if (name.trim() === "") {
        alert(" لا يمكن إضافة مهمة بدون اسم!");
        return;
    }

    // التحقق من التاريخ (إصلاح الثغرة)
    if (selectedDate < today) {
        alert(" لا يمكن اختيار تاريخ في الماضي!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> <br> <span>📅 ${date} | 🕒 ${time}</span>`;
    taskList.appendChild(li);

    // تفريغ الحقول بعد الإضافة
    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";
}