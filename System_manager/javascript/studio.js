'use strict'

//添加演出厅
function addStudio() {
    let studioAdd = document.getElementById('studio');

    let name = document.getElementById('studioName').value;
    let row = document.getElementById('sateRow').value;
    let col = document.getElementById('sateCol').value;
    let state = document.getElementById('studioState').value;
    let introduction = document.getElementById('studioIntroduction').value;

    let newRow = studioAdd.insertRow();

    let studioName = newRow.insertCell();
    let seatRow = newRow.insertCell();
    let seatCell = newRow.insertCell();
    let studioState = newRow.insertCell();
    let studioInroduction = newRow.insertCell();

    studioName.innerText = name;
    seatRow.innerText = row;
    seatCell.innerText = col;
    studioState.innerText = state;
    studioInroduction.innerText = introduction;

}

//选择需要删除的行,删除该行信息
function studioRow(obj) {
    let studio = document.getElementById('studio');

    if (event.srcElement.tagName =='TD') {
        let curRow = event.srcElement.parentElement;
        curRow.style.background = '#888';

        let deleteRow = curRow.rowIndex;
        let deleteStudio = document.getElementById('deleteStudio');
        deleteStudio.onclick = function () {
            let deleteTable = document.getElementById('studio');
            deleteTable.deleteRow(deleteRow);
        }
    }
}


