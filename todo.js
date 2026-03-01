// parse dom for signigicant elements
let todoCont = document.querySelector(".todo-container");
let todoInput = document.querySelector(".todo-input");
let inputBtn = document.querySelector(".input-btn");
let todoArea = document.querySelector(".todo-area");
let todoInArea = document.querySelector(".todo-inner-area");
let btnGrp = document.querySelector(".btn-grp");
let compBtn = document.querySelector(".complete");
let delBtn = document.querySelector(".delete");

inputBtn.addEventListener("click", () => {
	//define elements
	let inputVal = todoInput.value;
	todoInput.value = "";
	let li = document.createElement("li");
	let span = document.createElement("span");
	let spanText = document.createTextNode("");
	let btnGrpComp = document.createElement("div");
	let comp = document.createElement("button");
	let del = document.createElement("button");

	// console.log(inputVal);

	//logic
	// comp
	comp.style.backgroundColor = "rgb(212, 212, 3)";
	comp.style.color = "white";
	comp.style.border = "none";
	comp.textContent = "Complete";
	comp.style.borderRadius = ".6rem";
	comp.style.fontFamily = "Arial";
	comp.style.padding = ".65em";
	comp.style.minWidth = "10px + .65em";
	comp.style.paddingLeft = ".8rem";
	comp.style.fontSize = ".8rem";
	comp.style.paddingRight = ".8rem";
	comp.style.marginRight = ".4rem";
	comp.className = "dom-insert";

	//del
	del.style.backgroundColor = "rgb(236, 22, 22)";
	del.style.color = "white";
	del.style.border = "none";
	del.textContent = "Delete";
	del.style.borderRadius = ".6rem";
	del.style.fontFamily = "Arial";
	del.style.padding = ".65em";
	del.style.textDecoration = "none";
	del.style.minWidth = "10px + .65em";
	del.style.paddingLeft = ".8rem";
	del.style.fontSize = ".8rem";
	del.style.paddingRight = ".8rem";
	del.className = "dom-insert";

	//span
	span.style.Width = "4rem";
	span.style.maxWidth = "5rem";
	span.style.overflow = "auto";
	span.style.overflowWrap = "normal";
	span.innerText = inputVal;
	span.appendChild(spanText);

	//event: hover

	// btnGrpCmp
	btnGrpComp.append(comp);
	btnGrpComp.append(del);

	//li
	li.style.display = "flex";
	li.style.justifyContent = "space-between";
	li.style.alignItems = "space-between";
	li.style.width = "78%";
	li.style.marginBottom = ".7rem";
	// li.style.marginTop = '.7rem';
	li.append(span);
	li.append(btnGrpComp);

	let clicked = false;
	comp.onclick = function () {
		comp.style.backgroundColor = "Green";
		comp.innerHTML = "Completed";
		clicked = true;
	};
	comp.addEventListener("mouseover", () => {
		comp.style.backgroundColor = "black";
	});

	comp.addEventListener("mouseout", () => {
		if (clicked) {
			comp.style.backgroundColor = "Green";
		} else {
			comp.style.backgroundColor = "rgb(212, 212, 3)";
		}
	});

	del.addEventListener("click", () => {
		let parent = del.parentNode.parentNode;
		parent.remove();
	});
	del.addEventListener("mouseover", () => {
		del.style.backgroundColor = "black";
	});
	del.addEventListener("mouseout", () => {
		del.style.backgroundColor = "rgb(236, 22, 22)";
	});

	// todo prepend
	// let firstArray = todoInArea.children;
	// console.log(firstArray);
	// firstArray[0] = li;
	todoInArea.appendChild(li);
});

let compBtnList = document.getElementsByClassName("complete");
let delBtnList = document.getElementsByClassName("delete");
// console.log(compBtnList);
for (let i = 0; i < compBtnList.length; i++) {
	compBtnList[i].addEventListener("click", () => {
		compBtnList[i].style.backgroundColor = "Green";
		compBtnList[i].innerText = "Completed";
	});
}

for (let i = 0; i < delBtnList.length; i++) {
	delBtnList[i].addEventListener("click", () => {
		// let parentPar = delBtnList[i].parentNode;
		let parent = delBtnList[i].parentNode.parentNode;
		parent.remove();
	});
}
