let numRow = 0;
let numColumn = 0;
let x, y;
let cursorX, cursorY;
const getCell = () => document.querySelector(".table-row").querySelectorAll(".cell");
const getNumber = () => getCell().length;
const getNumberRow = () => document.querySelectorAll(".table-row").length;
const tableColumn = (arg) => document.getElementsByClassName(arg);
const tableRow = (arg) => document.getElementById(arg);
const btnRColumn = document.getElementsByClassName("btn-remove-column")[0];
const btnRemoveRow = document.getElementsByClassName("btn-remove-row")[0];
const findElement = (x=cursorX, y=cursorY) => document.elementFromPoint(x, y);

const numberColumn = () => {
    let x = getNumber();
    if (numRow > x) {
        numRow++;
    } else {
        numRow = x +1;
    } return numRow;
} ;

const numberRow = () => {
    let x = getNumberRow();
    if (numColumn > x) {
        numColumn++;
    } else {
        numColumn = x + 1;
    } return numColumn;
}

const myAddListener = (div) => {
    div.addEventListener("mouseover", (e) => {
        x = e.target;
        y = x.parentNode;
        btnRColumn.style.left = (x.offsetLeft).toString() + "px";
        btnRemoveRow.style.top = (y.offsetTop).toString() + "px";
    });
};

const createTable = (col=4, row=4) => {
    for (let i = 0; i < col; i++){
        let cell = document.createElement("td");
        cell.classList.add("cell", "column" + numberColumn());
        myAddListener(cell);
        tableColumn("table-row")[0].appendChild(cell)
    }

    for (let j = 1; j < row; j++){
        let row = document.getElementsByClassName("table-row")[0].cloneNode(true);
        myAddListener(row);
        row.id = "row" + (numberRow());
        tableRow("table-body").appendChild(row)
    }
};

createTable();

const cellWidth = +window.getComputedStyle(getCell()[0]).width.slice(0,-2);
const cellHeight = +window.getComputedStyle(getCell()[0]).height.slice(0,-2);

const addRow = () => {
    createTable(0, 2);
    notOneRowColBtn(btnRemoveRow,null)
};

const addColumn = () => {
    let numberColumnCurrent = numberColumn();
    const arr = document.querySelectorAll(".table-row");
    for (let i = 0; i < arr.length; i++) {
        let cell = document.createElement("td");
        cell.className = "cell";
        cell.classList.add("cell", "column" + numberColumnCurrent.toString());
        arr[i].appendChild(cell);
        myAddListener(cell);
    }
    notOneRowColBtn(null, btnRColumn)
};


const removeRow = () => {
    let elem = () => findElement(x=cursorX + cellWidth).parentNode;
    let elem1 = elem();
    if (elem1.className === "table-row") {
        elem1.parentNode.removeChild(elem1);
        if (document.querySelectorAll(`.${elem1.className}`).length === 1) {
            rmBtnOneRowCol(btnRemoveRow, null)
        }
        if (elem().className !== "table-row") {
            btnRemoveRow.style.top = +btnRemoveRow.style.top.slice(0,-2) - cellHeight - 4 + "px"
        }
    }

};

const removeColumn = () => {
    x = () => "." + findElement(undefined, y=cursorY + cellHeight).classList[1];
    let arr = document.querySelectorAll(x());
    if (arr[0].classList[0] === "cell") {
        for(let i=0; i < arr.length; i++) {
            arr[i].parentNode.removeChild(arr[i])    }
        let arr1 = document.querySelectorAll(x());
        try {if (arr1[0].classList[0] !== "cell") {
            btnRColumn.style.left = +btnRColumn.style.left.slice(0,-2) - cellWidth - 4 + "px"
        }} catch (err){
            btnRColumn.style.left = +btnRColumn.style.left.slice(0,-2) - cellWidth - 4 + "px"
        }
    }
    if (getNumber() === 1) {
        rmBtnOneRowCol(null, btnRColumn)
    }

};

const rmBtnOneRowCol = (row, col) => {
    if (row) {
        row.classList.add("btn-remove-row-one");

    } else {
        col.classList.add("btn-remove-column-one");
    }
};

const notOneRowColBtn = (row, col) => {
    if (row) {
        row.classList.remove("btn-remove-row-one");
    } else {
        col.classList.remove("btn-remove-column-one")
    }
};


btnRColumn.addEventListener("mouseover", () => {
    if (!btnRemoveRow.classList.contains("btn-remove-row-one")){
        btnRemoveRow.classList.toggle("btn-remove-row-hover")
    }
});

btnRColumn.addEventListener("mouseout", () => {
    if (!btnRemoveRow.classList.contains("btn-remove-row-one")) {
        btnRemoveRow.classList.toggle("btn-remove-row-hover")
    }
});

btnRColumn.addEventListener("mouseover", (e) => {cursorX = e.clientX; cursorY = e.clientY});
btnRemoveRow.addEventListener("mouseover", (e) => {cursorX = e.clientX; cursorY = e.clientY});


