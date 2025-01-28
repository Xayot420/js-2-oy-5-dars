const elForm = document.querySelector("#inputBox");
const elInput = document.querySelector("#input");
const box = document.querySelector(".wrapper");

// console.log(elForm,elInput,box);

elForm.addEventListener("submit" , (e)=> {
    e.preventDefault();
    const inputQiymati = elInput.value;

    if(inputQiymati){
        const newItem = document.createElement("li");
        const todoText = document.createElement("h2");
        const checkInput = document.createElement("input");
        const todoDelet = document.createElement("button");
        const todoEdit = document.createElement("button");
        const karbka = document.createElement("div");
        const btns = document.createElement("div");
        
        checkInput.type = "checkbox";
        
        newItem.className = "item"
        
        todoDelet.textContent = "Delete";
        todoEdit.textContent = "Edit";
        
        btns.append(todoDelet,todoEdit)
        todoDelet.className = "delete";
        todoEdit.className = "edit";
        
    btns.append(todoDelet,todoEdit);
    btns.className = "bot"
    
        karbka.style.display = "flex"
        karbka.style.alignItems = "center"
        karbka.append(checkInput,todoText)
        newItem.append(karbka,btns)
        todoText.style.color = "white"
        
        todoText.textContent = inputQiymati;
        box.append(newItem)
        
        elInput.value = "";
    }
   else{
    alert("Please select")
   }
})

