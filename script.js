// مصفوفة لتخزين المهام
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// عند تحميل الصفحة
window.onload = function() {
    setDateConstraints();
    renderTasks();
};

// 1. تقييد التاريخ (اليوم + 3 أيام فقط)
function setDateConstraints() {
    let dateInput = document.getElementById("taskDate");
    let today = new Date();
    let maxDate = new Date();
    maxDate.setDate(today.getDate() + 3); // إضافة 3 أيام

    // تنسيق التاريخ ليكون YYYY-MM-DD
    let formattedToday = today.toISOString().split("T")[0];
    let formattedMaxDate = maxDate.toISOString().split("T")[0];

    dateInput.min = formattedToday;
    dateInput.max = formattedMaxDate;
    dateInput.value = formattedToday; // تعيين اليوم كقيمة افتراضية
}

// 2. إضافة مهمة جديدة
function addTask() {
    let name = document.getElementById("taskName").value;
    let date = document.getElementById("taskDate").value;
    let start = document.getElementById("startTime").value;
    let end = document.getElementById("endTime").value;

    // التحقق من المدخلات
    if (name.trim() === "") {
        alert("يرجى إدخال اسم المهمة!");
        return;
    }
    if (start === "" || end === "") {
        alert("يرجى تحديد وقت البداية والنهاية!");
        return;
    }
    if (start >= end) {
        alert("وقت النهاية يجب أن يكون بعد وقت البداية!");
        return;
    }

    // إنشاء كائن المهمة
    let newTask = {
        id: Date.now(), // رقم تعريف فريد
        name: name,
        date: date,
        start: start,
        end: end,
        completed: false
    };

    tasks.push(newTask);
    saveData();
    renderTasks();

    // تفريغ الحقول
    document.getElementById("taskName").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
}

// 3. عرض المهام في القوائم
function renderTasks() {
    let activeList = document.getElementById("activeTasks");
    let completedList = document.getElementById("completedTasks");

    activeList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");
        
        if (!task.completed) {
            // تصميم المهمة الحالية
            li.className = "task-item";
            li.innerHTML = `
                <div class="task-info">
                    <h3>${task.name}</h3>
                    <div class="task-meta">
                        <span>📅 ${task.date}</span>
                        <span>🕒 ${task.start} - ${task.end}</span>
                    </div>
                </div>
                <button class="complete-btn" onclick="completeTask(${task.id})">إنجاز ✔</button>
            `;
            activeList.appendChild(li);
        } else {
            // تصميم المهمة المنجزة
            li.className = "task-item completed-task";
            li.innerHTML = `
                <div class="task-info">
                    <h3>${task.name}</h3>
                    <div class="task-meta">
                        <span>🎉 أُنجزت بنجاح</span>
                        <span>📅 ${task.date}</span>
                    </div>
                </div>
                <button class="delete-btn" onclick="deleteTask(${task.id})">حذف 🗑</button>
            `;
            completedList.appendChild(li);
        }
    });
}

// 4. تحويل المهمة إلى منجزة
function completeTask(id) {
    let task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        saveData();
        renderTasks();
    }
}

// 5. حذف المهمة من السجل
function deleteTask(id) {
    if (confirm("هل أنت متأكد من حذف هذه المهمة نهائياً؟")) {
        tasks = tasks.filter(t => t.id !== id);
        saveData();
        renderTasks();
    }
}

// 6. حفظ البيانات في المتصفح
function saveData() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}