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
    `<div class="AddLine-Fabric InputLine">
    <input type="number"  style="width: 50px;" class="SN" readonly>
    <input type="number" id="DcNo" value="${DcNo.value}">
    <input type="number" id="BillNO" value="${BillNO.value}">
    <input type="number" id="TotalPcs" value="${TotalPcs.value}">
    <input type="number" id="Rate" value="${Rate.value}">
    <input type="number" id="CNSPTN" value="${CNSPTN.value}">
    <input type="number" id="TotalMTR" value="${TotalMTR.value}">
    <input type="number" id="cgst" value="${cgst.value}">
    <input type="number" id="sgst" value="${sgst.value}">
    <span></span>
    <input type="number" id="CashAMT" value="${CashAMT.value}">
    <input type="number" id="RTGSAMT" value="${RTGSAMT.value}">
    <input type="number" id="TotalAMT" value="${TotalAMT.value}">
    <input type="number" id="WasteMTR" value="${WasteMTR.value}">
    <Button id="Add" >+</Button>
    <button class="DeleteBtn" id="DeleteBtn">X</button>
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