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
const TaxPercentage = document.getElementById("Tax5%")
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
    <input type="number" id="DcNo" >
    <input type="number" id="BillNO">
    <input type="number" id="TotalPcs">
    <input type="number" id="Rate">
    <input type="number" id="CNSPTN">
    <input type="number" id="TotalMTR">
    <input type="number" id="WasteMTR">
    <input type="number" id="Tax5%">
    <input type="number" id="CashAMT">
    <input type="number" id="RTGSAMT">
    <input type="number" id="TotalAMT">
    <Button id="Add">+</Button>
    <button>X</button>
</div>`
)
TotalLine.push(AddLineIteam.lastChild);
};

function UpdateSN (){
    for (let i = 0; i < SN.length; i++) {
        SN[i].value= i + 1 ;
    }
};