const AddBtn = document.getElementById("Add");
const AddLineIteam = document.querySelector(".AddLine-Iteam");
const SN = document.getElementsByClassName("SN");
const DcNo = document.getElementById("DcNo")
const BillNO = document.getElementById("BillNO")
const TotalPcs = document.getElementById("TotalPcs")
const Rate = document.getElementById("Rate")
const CNSPTN = document.getElementById("CNSPTN")
const TotalMTR = document.getElementById("TotalMTR")
const WasteMTR = document.getElementById("WasteMTR")
const cgst = document.getElementById("cgst")
const sgst = document.getElementById("sgst")
const CashAMT = document.getElementById("CashAMT")
const RTGSAMT = document.getElementById("RTGSAMT")
const TotalAMT = document.getElementById("TotalAMT")


let TotalLine=[];

AddBtn.addEventListener("click",()=>{
     AddLine();
     UpdateSN();

});



function AddLine(){
    AddLineIteam.insertAdjacentHTML("beforeend",
    `<div class="AddLine-Fabric">
    <input type="number" value="0" style="width: 50px;" readonly="readonly">
    <input type="number" id="DcNo">
    <input type="number" id="TotalPcs">
    <input type="number" id="Rate">
    <input type="number" id="CNSPTN">
    <input type="number" id="TotalMTR">
    <input type="number" id="WasteMTR">
    <input type="number" id="FabRate">
    <button id="Add">+</button>
    <button class="DeleteBtn">X</button>
</div>`
);
TotalLine.push(AddLineIteam.lastChild);

const DeleteBtn = AddLineIteam.lastElementChild.querySelector(".DeleteBtn");

DeleteBtn.addEventListener("click",()=>{
    AddLineIteam.removeChild(DeleteBtn.parentElement);
})

};

function UpdateSN (){
    for (let i = 0; i < SN.length; i++) {
        SN[i].value= i + 1 ;
    }
};