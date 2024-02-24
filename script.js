
    const inputTask = document.getElementById("task");
    const addBtn = document.querySelector(".add-btn");
    const myList = document.getElementById("my-list");
    
    window.onload = function () {
      displayPage.style.display = "none";
    };
    function addTask() {
      let inputValue = inputTask.value;

      if (inputValue.trim() !== "") {
        const taskItem = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.backgroundColor = "gray";
        deleteBtn.style.color = "black";
        deleteBtn.style.padding = ".2rem auto";
          deleteBtn.style.margin = "0  .8rem .8rem .4rem";
          deleteBtn.style.height = "fit-content";
          deleteBtn.style.fontFamily = "sans serif"

        deleteBtn.addEventListener("click", function () {
          deleteTask(taskItem);
        });

        taskItem.textContent = `${inputValue} `;
        taskItem.style.listStyle = 'decimal outside';
        taskItem.appendChild(deleteBtn);

        myList.appendChild(taskItem);
        
        inputTask.value = "";
      } 
    }
addBtn.addEventListener("click", addTask);
    
    function deleteTask(taskItem) {
    myList.removeChild(taskItem);
    const taskItems = myList.getElementByTagName("li");
    }



