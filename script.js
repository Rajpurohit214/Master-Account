document.body.addEventListener("click", (click) => {
    const target = click.target;
    // Check if the clicked element is an button
    if (target.classList.contains("Add")) {
        const container = target.closest(".Main-Container");
        const AddLineIteam = container.querySelector(".AddLine-Iteam");
        
        AddLine(container,AddLineIteam);
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

    const MainBox = document.querySelector("#MainBox")
   
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
             <input type="number" id="DcNoI" placeholder="No" oninput="validity.valid||(value='');" min="0"  >
             <input type="number" id="TotalPcsI" placeholder="total PCS"  oninput="validity.valid||(value='');" min="0" >
             <input type="number" id="CNSPTNI" placeholder="Consumption" oninput="validity.valid||(value='');" min="0.01" step="0.01" >
             <input type="number" id="RateI" placeholder="Stitching Rate" oninput="validity.valid||(value='');" min="0.01" step="0.01" >
             <input type="number" id="TotalMTRI" placeholder="Total Meter" oninput="validity.valid||(value='');" min="0.01" step="0.01" >
             <input type="number" id="FabRateI" placeholder="Fabric Rate" oninput="validity.valid||(value='');" min="0.01" step="0.01" >
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
             <input type="number" id="DebitFab" readonly>
             <input type="number" id="cgst" value="0">
             <input type="number" id="sgst" value="0">
             <input type="number" id="CashAMT" value="0" readonly>
             <input type="number" id="RTGSAMT" value="0">
             <input type="number" id="TotalAMT" value="0" readonly>
         </div>
     </div>
     </div>
     <br>`);
    


 

     
}

// Function to add a new line within a specific container
function AddLine(container){

     SumTotal(container);

  

    
    
    const AddLineIteam = container.querySelector(".AddLine-Iteam");
    const DcNoInput = container.querySelector("#DcNoI");
    const TotalPcsInput = container.querySelector("#TotalPcsI");
    const RateInput = container.querySelector("#RateI");
    const CNSPTNInput = container.querySelector("#CNSPTNI");
    const TotalMTRInput = container.querySelector("#TotalMTRI");
    const FabRateInput = container.querySelector("#FabRateI");



    AddLineIteam.insertAdjacentHTML("beforeend", `
    <div class="AddLine-Fabric">
    <input type="number" value="0" style="width: 50px;" readonly="readonly">
    <input type="number" id="DcNo" value="${DcNoInput.value}" oninput="validity.valid||(value='');" min="0">
    <input type="number" id="TotalPcs" value="${TotalPcsInput.value}" oninput="validity.valid||(value='');" min="0">
    <input type="number" id="CNSPTN" value="${CNSPTNInput.value}" oninput="validity.valid||(value='');" min="0.01" step="0.01">
    <input type="number" id="Rate" value="${RateInput.value}" oninput="validity.valid||(value='');" min="0.01" step="0.01">
    <input type="number" id="UsedMtr" value="${CNSPTNInput.value*TotalPcsInput.value}" step="any" oninput="validity.valid||(value='');" min="0.01" step="0.01">
    <input type="number" id="TotalMTR" value="${TotalMTRInput.value}" oninput="validity.valid||(value='');" min="0.01" step="0.01">
    <input type="number" id="WasteMTRv" readonly value="${TotalMTRInput.value - (CNSPTNInput.value * TotalPcsInput.value)}" step="any" >
    <input type="number" id="FabRatev" value="${FabRateInput.value}" oninput="validity.valid||(value='');" min="0.01" step="0.01">
    <input type="number" id="Debit" readonly value="${(TotalMTRInput.value - (CNSPTNInput.value * TotalPcsInput.value))*FabRateInput.value}" oninput="validity.valid||(value='');" min="0.01" step="0.01">
    <input type="number" id="Total" readonly value="${(TotalPcsInput.value*RateInput.value)}" oninput="validity.valid||(value='');" min="0.01" step="0.01">
    <button class="DeleteBtn">X</button>
    </div>`);

     
    const TotalPcs = AddLineIteam.lastElementChild.querySelector("#TotalPcs");
    const CNSPTN = AddLineIteam.lastElementChild.querySelector("#CNSPTN");
    const Rate = AddLineIteam.lastElementChild.querySelector("#Rate");
    const UsedMTR = AddLineIteam.lastElementChild.querySelector("#UsedMtr");
    const TotalMTR = AddLineIteam.lastElementChild.querySelector("#TotalMTR");
    const RestMTR = AddLineIteam.lastElementChild.querySelector("#WasteMTRv");
    const Debit = AddLineIteam.lastElementChild.querySelector("#Debit");
    const Total = AddLineIteam.lastElementChild.querySelector("#Total");
    const FabRate = AddLineIteam.lastElementChild.querySelector("#FabRatev");

    TotalPcs.addEventListener("input",()=>{
        UsedMTR.value = CNSPTN.value * TotalPcs.value;
        RestMTR.value = TotalMTR.value - UsedMTR.value;
        Debit.value = RestMTR.value*FabRate.value;
        Total.value = TotalPcs.value*Rate.value;
        TotalCalculator(container);
        //validateInput(TotalPcs);
        
    });
    CNSPTN.addEventListener("input",()=>{
      UsedMTR.value = CNSPTN.value * TotalPcs.value;
      RestMTR.value = TotalMTR.value - UsedMTR.value;
      Debit.value = RestMTR.value*FabRate.value;
      TotalCalculator(container);
    });
    Rate.addEventListener("input",()=>{
        Total.value = TotalPcs.value*Rate.value;
        TotalCalculator(container);
    });
    
    TotalMTR.addEventListener("input",()=>{
        RestMTR.value = TotalMTR.value - UsedMTR.value;
        Debit.value = RestMTR.value*FabRate.value;
        TotalCalculator(container);

    });

    FabRate.addEventListener("input",()=>{
        Debit.value = RestMTR.value*FabRate.value;
        TotalCalculator(container);
    });
    UsedMTR.addEventListener("input",()=>{
        CNSPTN.value = UsedMTR.value/TotalPcs.value;
        RestMTR.value = TotalMTR.value - UsedMTR.value;
        Debit.value = RestMTR.value*FabRate.value;
        TotalCalculator(container);
    });



  TotalCalculator(container);
       AddLineIteam.value = "";
       DcNoInput.value = "";
       TotalPcsInput.value = "";
       RateInput.value = "";
       CNSPTNInput.value = "";
       TotalMTRInput.value = "";
       FabRateInput.value = "";

  
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

    //Final Ammount
    SumTotal (container);
    CashTotal (container)
    container.querySelector("#TotalAMT").value = parseInt(container.querySelector("#RTGSAMT").value) + parseInt(container.querySelector("#CashAMT").value);
    
}
function CashTotal (container){
        // total amount cash
        const RTGSAMT = container.querySelector("#RTGSAMT");
        let  CashNum = 0;
        container.querySelectorAll("#Total").forEach(Cash => {CashNum +=  parseInt(Cash.value);});
        container.querySelector("#CashAMT").value= ( CashNum - RTGSAMT.value);
        
}
function SumTotal (container){
         // cheque total
         const CGST = container.querySelector("#cgst");
         const SGST = container.querySelector("#sgst");
         const RTGSAMT = container.querySelector("#RTGSAMT");
         const CashAmt = container.querySelector("#CashAMT");
         const debit = container.querySelector("#DebitFab");
     
         CGST.addEventListener("input",()=>{
            SGST.value = CGST.value;
            RTGSAMT.value = (CGST.value * 2) / 0.05;
            container.querySelector("#TotalAMT").value= parseInt(RTGSAMT.value) + parseInt(CashAmt.value);
  
            
         })
         SGST.addEventListener("input",()=>{
            CGST.value = SGST.value;
            RTGSAMT.value = (SGST.value * 2) / 0.05;
            container.querySelector("#TotalAMT").value= parseInt(RTGSAMT.value) + parseInt(CashAmt.value);


         })
         RTGSAMT.addEventListener("input",()=>{
            CGST.value = ((RTGSAMT.value /100) *5)/2;
            SGST.value = ((RTGSAMT.value /100) *5)/2;
            RTGSAMT.value = (SGST.value * 2) / 0.05;
            container.querySelector("#TotalAMT").value= parseInt(RTGSAMT.value) + parseInt(CashAmt.value);

         })


}


document.body.addEventListener("keydown", (event) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
        const target = event.target;
        if (target.id == "DcNoI") {
                
                target.parentElement.querySelector("#TotalPcsI").focus()
            }else if (target.id == "TotalPcsI" ) {
                
                target.parentElement.querySelector("#CNSPTNI").focus()
            }else if (target.id == "CNSPTNI" ) {
                
                target.parentElement.querySelector("#RateI").focus()
            }else if (target.id == "RateI" ) {
                
                target.parentElement.querySelector("#TotalMTRI").focus()
            }else if (target.id == "TotalMTRI" ) {
                
                target.parentElement.querySelector("#FabRateI").focus()
            }else if (target.id == "FabRateI" ) {
                
                const container = target.parentElement.parentElement;
                const AddLineIteam = container.querySelector(".AddLine-Iteam");
                AddLine(container,AddLineIteam);
                target.parentElement.querySelector("#DcNoI").focus()
            }
    }
});



//onkeydown ="keydown(this)"