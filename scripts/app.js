const numberColumn = () => document.querySelector(".table-row").querySelectorAll(".cell").length;
const numberRow = () => document.querySelectorAll(".table-row").length;
const tableColumn = (arg) => document.getElementsByClassName(arg);
const tableRow = (arg) => document.getElementById(arg);
const btnRColumn = document.getElementsByClassName("btn-remove-column")[0];
const btnRemoveRow = document.getElementsByClassName("btn-remove-row")[0];
let x, y; 
let cursorX, cursorY;
const findElement = (x=cursorX, y=cursorY) => document.elementFromPoint(x, y);


const myAddListener = (div) => {
    div.addEventListener('mouseover', (e) => {
        x = e.target;
        y = x.parentNode;
        btnRColumn.style.left = (x.offsetLeft).toString() + "px";
        btnRemoveRow.style.top = (y.offsetTop).toString() + "px";
    });
};

const createTable = (col=4, row=4) => {
    for (let i = 0; i < col; i++){
        let cell = document.createElement('td');
        cell.className = "cell";
        cell.id = "column" + (numberColumn() + 1);
        myAddListener(cell);
        tableColumn("table-row")[0].appendChild(cell)
    }


    for (let j = 1; j < row; j++){
        let row = document.getElementsByClassName("table-row")[0].cloneNode(true);
        myAddListener(row);
        row.id = "row" + (numberRow() + 1);
        tableRow("table-body").appendChild(row)
    }
};

createTable()

const addRow = () => {
    createTable(0, 2)
};

const addColumn = () => {
    let numberColumnCurrent = numberColumn()+1;
    const arr = document.querySelectorAll(".table-row");
    for (let i = 0; i < arr.length; i++) {
        let cell = document.createElement('td');
        cell.className = "cell";
        cell.id ="column" + numberColumnCurrent.toString();
        arr[i].appendChild(cell)
        myAddListener(cell)
    }
};


//const removeRow = (y) => y.parentNode.removeChild(y);

const removeRow = () => {
    let elem = findElement(x=cursorX + 70).parentNode
    elem.parentNode.removeChild(elem)};

const removeColumn = () => {
    x = "#" + findElement(undefined, y=cursorY + 70).id;
    let arr = document.querySelectorAll(x);
    for(let i=0; i < arr.length; i++) {
        arr[i].parentNode.removeChild(arr[i])
    }

};


btnRColumn.addEventListener("mouseover", () => btnRemoveRow.classList.toggle("btn-remove-row-hover"));
btnRColumn.addEventListener("mouseout", () => btnRemoveRow.classList.toggle("btn-remove-row-hover"));

btnRColumn.addEventListener("mouseover", (event) => {cursorX = event.clientX; cursorY = event.clientY});
btnRemoveRow.addEventListener("mouseover", (event) => {cursorX = event.clientX; cursorY = event.clientY});

