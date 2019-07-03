const numberColumn = () => document.querySelector(".table-row").querySelectorAll(".cell").length;
const numberRow = () => document.querySelectorAll(".table-row").length;
const tableColumn = (arg) => document.getElementsByClassName(arg);
const tableRow = (arg) => document.getElementById(arg);
let x, y;



const createTable = (col=4, row=4) => {

    for (let i = 0; i < col; i++){
        let cell = document.createElement('td');
        cell.className = "cell";
        cell.id = "column" + (numberColumn() + 1);
        cell.addEventListener('mouseover', function(e) {
            x = e.target;
            y = x.parentNode;
        });
        tableColumn("table-row")[0].appendChild(cell)
    }




    for (let j = 1; j < row; j++){
        let row = document.getElementsByClassName("table-row")[0].cloneNode(true);
        row.addEventListener('mouseover', function(e) {
            x = e.target;
            y = x.parentNode;
        });
        row.id = "row" + (numberRow() + 1);
        tableRow("table").appendChild(row)
    }
};

createTable();




const addRow = () => {
    createTable(0, 2)
};



const addColumn = () => {
    const arr = document.querySelectorAll(".table-row");
    for (let i = 0; i < arr.length; i++) {
        let cell = document.createElement('td');
        cell.className = "cell";
        cell.id = numberColumn() + 1;
        arr[i].appendChild(cell)
    }
};


const removeRow = (y) => y.parentNode.removeChild(y);
const removeColumn = (x) => {
    x = "#" + x
    let arr = document.querySelectorAll(x);
    console.log(arr)
    for(let i in arr) {
        arr[i].parentNode.removeChild(arr[i])
    }
}
