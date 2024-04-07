
document.body.addEventListener("click", (click) => {
    const target = click.target;
    // Check if the clicked element is an button
    if (target.classList.contains("Add")) {
        const container = target.closest(".Main-Container");
        AddLine(container);
    }
    if (target.classList.contains("DELETE")) {
        target.closest(".Main-Container").remove();
        
    }
    if(target.id === "AddDcBtn"){
        AddDCs();
    }
    if(target.classList.contains("DeleteBtn")){
        const Dcline = target.closest(".AddLine-Fabric")
        const container = target.closest(".Main-Container");
        RemoveDc(Dcline , container);
    }
});








function AddDCs (){
    MainBox.insertAdjacentHTML("beforeend", `
         <div class="Main-Container">
            <button class="DELETE">X</button>
            <div class="Bill-Details">
             <select name="Doctype" id="Type"><option value="BillNO">Bill NO</option><option value="DcNO">Dc NO</option></select>
             <input type="text" id="DocType">
             <input type="text" value="Doc Date">
             <input type="date" id="DocType">
            </div>
            <div class="Container-Heading">
             <input style="width: 50px;" value="SN" type="text" readonly="readonly">
             <select name="Doctype" id="Type" style="width:13.4%;"><option value="DcNO">Dc NO</option><option value="BillNO">Bill NO</option></select>
             <input value="Total Pcs" type="text" readonly="readonly">
             <input value="Consumption" type="text" readonly="readonly">
             <input value="Job Rate" type="text" readonly="readonly">
             <input value="Used MTR" type="text" readonly="readonly">
             <input value="Total MTR" type="text" readonly="readonly">
             <input value="Rest MTR" type="text" readonly="readonly">
             <input value="Fab Rate" type="text" readonly="readonly">
             <input value="Debits" type="text" readonly="readonly">
             <input value="Total" type="text" readonly="readonly">
           </div>
         <div class="AddLine-Iteam"></div>
         <div class="AddLine-Fabric">
             <input type="number" value="0" style="width: 50px;" readonly="readonly">
             <input type="number" id="DcNoI" placeholder="No">
             <input type="number" id="TotalPcsI" placeholder="total PCS">
             <input type="number" id="CNSPTNI" placeholder="Consumption">
             <input type="number" id="RateI" placeholder="Stitching Rate">
             <input type="number" id="TotalMTRI" placeholder="Total Meter">
             <input type="number" id="FabRateI" placeholder="Fabric Rate">
             <button id="Add" class="Add">+</button>
    
         </div>
    
         
         <div class="Container-Total">
             <div class="Total-Heading">
             <input value="Total Debit" type="text" readonly="readonly">
             <input value="Cgst 2.5%" type="text" readonly="readonly">
             <input value="Sgst 2.5%" type="text" readonly="readonly">
             <input value="Cash AMT" type="text" readonly="readonly">
             <input value="RTGS AMT" type="text" readonly="readonly">
             <input value="Total AMT" type="text" readonly="readonly">
             </div>
             <div class="Total-Value">
             <input type="number" id="DebitFab">
             <input type="number" id="cgst">
             <input type="number" id="sgst">
             <input type="number" id="CashAMT">
             <input type="number" id="RTGSAMT">
             <input type="number" id="TotalAMT">
         </div>
     </div>
     </div>
     <br>`);
}

// Function to add a new line within a specific container
function AddLine(container){

   const Debit = container.querySelector("#DebitFab");
   const Cgst = container.querySelector("#cgst");
   const Sgst = container.querySelector("#sgst");
   const CashAMT = container.querySelector("#CashAMT");
   const RTGSAMT = container.querySelector("#RTGSAMT");
   const TotalAMT = container.querySelector("#TotalAMT");
   const Debits = container.querySelector("#Debits");
   const Total = container.querySelector("#Total");

    const AddLineIteam = container.querySelector(".AddLine-Iteam");
    const DcNoInput = container.querySelector("#DcNoI");
    const TotalPcsInput = container.querySelector("#TotalPcsI");
    const RateInput = container.querySelector("#RateI");
    const CNSPTNInput = container.querySelector("#CNSPTNI");
    const TotalMTRInput = container.querySelector("#TotalMTRI");
    const FabRateInput = container.querySelector("#FabRateI");


    
    const FabRate = container.querySelector("#FabRatev");

    AddLineIteam.insertAdjacentHTML("beforeend", `
    <div class="AddLine-Fabric">
    <input type="number" value="0" style="width: 50px;" readonly="readonly">
    <input type="number" id="DcNo" value="${DcNoInput.value}">
    <input type="number" id="TotalPcs" value="${TotalPcsInput.value}">
    <input type="number" id="CNSPTN" value="${CNSPTNInput.value}">
    <input type="number" id="Rate" value="${RateInput.value}">
    <input type="number" id="Used Mtr" value="${CNSPTNInput.value*TotalPcsInput.value}">
    <input type="number" id="TotalMTR" value="${TotalMTRInput.value}">
    <input type="number" id="WasteMTRv" value="${TotalMTRInput.value - (CNSPTNInput.value * TotalPcsInput.value)}">
    <input type="number" id="FabRatev" value="${FabRateInput.value}">
    <input type="number" id="Debit" value="${(TotalMTRInput.value - (CNSPTNInput.value * TotalPcsInput.value))*FabRateInput.value}">
    <input type="number" id="Total" value="${(TotalPcsInput.value*RateInput.value)-((TotalMTRInput.value - (CNSPTNInput.value * TotalPcsInput.value))*FabRateInput.value)}">
    <button class="DeleteBtn">X</button>
    </div>`);
  TotalCalculator(container);

}

function RemoveDc(Dc , container){
    Dc.remove();
    TotalCalculator (container);

 
}
// You can keep the existing UpdateSN function if needed
// function UpdateSN (){
//     for (let i = 0; i < SN.length; i++) {
//         SN[i].value= i + 1 ;
//     }
// }
function TotalCalculator (container){
    // debit total
    let DebitNum = 0;
    container.querySelectorAll("#Debit").forEach(debit => {DebitNum +=  parseInt(debit.value);});
    container.querySelector("#DebitFab").value=DebitNum;
 
    // total amount cash
    let  CashNum = 0;
    container.querySelectorAll("#Total").forEach(Cash => {CashNum +=  parseInt(Cash.value);});
    container.querySelector("#CashAMT").value=CashNum;
}

