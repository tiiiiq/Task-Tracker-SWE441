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
document.getElementById("addTaskBtn").addEventListener("click", function() {
    let name = document.getElementById("taskName").value;
    let date = document.getElementById("taskDate").value;
    let time = document.getElementById("taskTime").value;
    let priority = document.getElementById("taskPriority").value; // سحب قيمة الأولوية

    if (name.trim() === "") {
        alert("خطأ: يجب إدخال اسم للمهمة!");
        return;
    }

    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let selectedDate = new Date(date);

    if (selectedDate < today) {
        alert("خطأ: لا يمكن اختيار تاريخ في الماضي!");
        return;
    }

  
// دالة مسح جميع المهام
function clearAll() {
    let taskList = document.getElementById("taskList");
    if (taskList.innerHTML === "") {
        alert("القائمة فارغة بالفعل!");
    } else {
        let confirmClear = confirm("هل أنت متأكد أنك تريد مسح جميع المهام؟");
        if (confirmClear) {
            taskList.innerHTML = "";
        }
    }
}
/* تأثيرات حركية للأزرار عند تمرير الماوس /
button {
    transition: transform 0.3s ease, background-color 0.3s ease;
}

button:hover {
    transform: scale(1.08); / تكبير الزر بنسبة 8% */
    cursor: pointer;
    opacity: 0.9;

    
}

  let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    // دمج الأولوية في شكل المهمة المضافة
    li.innerHTML = <strong>${name}</strong> <span style="font-size: 0.8em; background: #eee; padding: 2px 5px; border-radius: 4px;">الأولوية: ${priority}</span> <br> <span>📅 ${date} | 🕒 ${time}</span>;
    taskList.appendChild(li);

    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";
});