const numberColumn = () => document.querySelector(".table-row").querySelectorAll(".cell").length;
const numberRow = () => document.querySelectorAll(".table-row").length;
const tableColumn = (arg) => document.getElementsByClassName(arg);
const tableRow = (arg) => document.getElementById(arg);
const btnRColumn = document.getElementsByClassName("btn-remove-column")[0];
const btnRemoveRow = document.getElementsByClassName("btn-remove-row")[0];
let x, y, movX, movY;


const myAddListener = (div) => {
    div.addEventListener('mouseover', (e) => {
        x = e.target;
        y = x.parentNode;
        movX = event.clientX;
        movY = event.clientY;
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
        tableRow("table").appendChild(row)
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
    }
};


const removeRow = (y) => y.parentNode.removeChild(y);

const removeColumn = (x) => {
    x = "#" + x.id;
    let arr = document.querySelectorAll(x);
    for(let i=0; i < arr.length; i++) {
        arr[i].parentNode.removeChild(arr[i])
    }

};


btnRColumn.addEventListener("mouseover", () => btnRemoveRow.classList.toggle("btn-remove-row-hover"));
btnRColumn.addEventListener("mouseout", () => btnRemoveRow.classList.toggle("btn-remove-row-hover"));
