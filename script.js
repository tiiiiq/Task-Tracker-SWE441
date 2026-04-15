function addTask() {
    let name = document.getElementById("taskName").value;
    let date = document.getElementById("taskDate").value;
    let time = document.getElementById("taskTime").value;

    // 1. حل مشكلة إضافة مهمة بدون اسم
    if (name.trim() === "") {
        alert("خطأ: يجب إدخال اسم للمهمة!");
        return; // يوقف الكود هنا وما يضيف شيء
    }

    // 2. حل مشكلة اختيار تاريخ قديم
    let today = new Date();
    today.setHours(0, 0, 0, 0); // تصفير الوقت عشان نقارن التاريخ بس
    let selectedDate = new Date(date);

    if (selectedDate < today) {
        alert("خطأ: لا يمكن اختيار تاريخ في الماضي!");
        return; // يوقف الكود هنا
    }

    // الكود الطبيعي لإضافة المهمة إذا كل الشروط سليمة
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> <br> <span>📅 ${date} | 🕒 ${time}</span>`;
    taskList.appendChild(li);

    // تفريغ الخانات بعد الإضافة
    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";
}