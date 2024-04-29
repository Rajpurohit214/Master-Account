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
    if (target.classList.contains("svg")) {
        AddDCs();
    }
    if(target.id === "AddDcBtn"){
        
        AddDCs();
    }
    if(target.classList.contains("DeleteBtn")){
        const Dcline = target.closest(".AddLine-Fabric")
        const container = target.closest(".Main-Container");
        RemoveDc(Dcline , container);
    }
    if(target.classList.contains("BtnM")){
        AddMaterial();
    }
    if (target.classList.contains("svgM")) {
        AddMaterial();
    }
    if (target.classList.contains("svgMX")) {
        MaterialLine = target.parentElement.parentElement.parentElement

       RemoveMaterial(MaterialLine);
    }
    if (target.classList.contains("BtnMX")) {
        MaterialLine = target.parentElement.parentElement

        RemoveMaterial(MaterialLine);
    }
    if(target.classList.contains("BtnP")){
        AddPayment();
    }
    if (target.classList.contains("svgP")) {
        AddPayment();
    }
    if (target.classList.contains("svgPX")) {
        PaymentLine = target.parentElement.parentElement.parentElement
    
       RemovePayment(PaymentLine);
    }
    if (target.classList.contains("BtnPX")) {
        PaymentLine = target.parentElement.parentElement
        RemovePayment(PaymentLine);
    }
});





function AddPayment(){
    const DateInput =document.getElementById("PaymentDateInput");
    const TypeInput =document.getElementById("TypeInput");
    const AmountInput =document.getElementById("AmountInput");
    const RemarksInput =document.getElementById("RemarksInput");

    let innerhtml="" ;


    if (TypeInput.value === "0") {
        innerhtml  = `
        <option value="0">RTGS</option>
        <option value="1">G.Pay</option>
        <option value="2">Cheque</option>
        <option value="3">Cash A/C</option>
        <option value="4">Cash W/O</option>
        <option value="5">Bank W/O</option>
        <option value="6">NEFT</option>
        <option value="7">IMPS</option> 
        `;
    } else if (TypeInput.value === "1") {
    
        innerhtml  = `
        <option value="1">G.Pay</option>
        <option value="0">RTGS</option>
        <option value="2">Cheque</option>
        <option value="3">Cash A/C</option>
        <option value="4">Cash W/O</option>
        <option value="5">Bank W/O</option>
        <option value="6">NEFT</option>
        <option value="7">IMPS</option> 
        `;
    } else if (TypeInput.value === "2") {
    
        innerhtml  = `
        <option value="2">Cheque</option>
        <option value="0">RTGS</option>
        <option value="1">G.Pay</option>
        <option value="3">Cash A/C</option>
        <option value="4">Cash W/O</option>
        <option value="5">Bank W/O</option>
        <option value="6">NEFT</option>
        <option value="7">IMPS</option> 
        `;
    } else if (TypeInput.value === "3") {
    
        innerhtml  = `
        <option value="3">Cash A/C</option>
        <option value="0">RTGS</option>
        <option value="1">G.Pay</option>
        <option value="2">Cheque</option>
        <option value="4">Cash W/O</option>
        <option value="5">Bank W/O</option>
        <option value="6">NEFT</option>
        <option value="7">IMPS</option> 
        `;
    } else if (TypeInput.value === "4") {
    
        innerhtml  = `
        <option value="4">Cash W/O</option>
        <option value="0">RTGS</option>
        <option value="1">G.Pay</option>
        <option value="2">Cheque</option>
        <option value="3">Cash A/C</option>
        <option value="5">Bank W/O</option>
        <option value="6">NEFT</option>
        <option value="7">IMPS</option> 
        `;
    } else if (TypeInput.value === "5") {
    
        innerhtml  = `
        <option value="5">Bank W/O</option>
        <option value="0">RTGS</option>
        <option value="1">G.Pay</option>
        <option value="2">Cheque</option>
        <option value="3">Cash A/C</option>
        <option value="4">Cash W/O</option>
        <option value="6">NEFT</option>
        <option value="7">IMPS</option> 
        `;
    } else if (TypeInput.value === "6") {
    
        innerhtml  = `
        <option value="6">NEFT</option>
        <option value="0">RTGS</option>
        <option value="1">G.Pay</option>
        <option value="2">Cheque</option>
        <option value="3">Cash A/C</option>
        <option value="4">Cash W/O</option>
        <option value="5">Bank W/O</option>
        <option value="7">IMPS</option> 
        `;
    } else if (TypeInput.value === "7") {
    
        innerhtml  = `
        <option value="7">IMPS</option> 
        <option value="0">RTGS</option>
        <option value="1">G.Pay</option>
        <option value="2">Cheque</option>
        <option value="3">Cash A/C</option>
        <option value="4">Cash W/O</option>
        <option value="5">Bank W/O</option>
        <option value="6">NEFT</option>
        `;
    };


    const PaymentBox = document.querySelector(".addlinepayment")
    PaymentBox.insertAdjacentHTML("beforeend",`
    <div class="Material-Names">
                <input type="number" name="SN" id="SNp"  style="width: 40px;" value="0">
                <input type="date" name="PaymentDateInput" id="PaymentDateValue"  value="${DateInput.value}">
                <input type="number" name="AmountInput" id="AmountValue"  value="${AmountInput.value}">
                <select name="TypeI" id="TypeValue">${innerhtml}</select >
                <input type="text" name="RemarksInput" id="RemarksValue"  placeholder="Remarks"  value="${RemarksInput.value}" >
                <div id="btndivp">
                    <button class="BtnPX" id="AddDcBtnP" >
                        <svg class="svgPX" viewbox="0 0 24 24" width="50px" height="50px" >
                            <path d="M12 2v20M2 12h20" stroke="#ffffff" stroke-width="3"/>
                        </svg>
                     </button>
                </div>
            </div>`)
TotalPayment();

 


           
}

function AddMaterial(){
    const SlipNoValue =document.getElementById("SlipNoValue");
    const FlatCoverValue =document.getElementById("FlatCoverValue");
    const PattiCoverValue =document.getElementById("PattiCoverValue");
    const RollCoverValue=document.getElementById("RollCoverValue");
    const MetalIDValue =document.getElementById("MetalIDValue");
    const ButtonGrossValue=document.getElementById("ButtonGrossValue");
    const ExtraValue=document.getElementById("ExtraValue");
    const DateValue = document.getElementById("DateValue");
    
    const MaterialBox = document.querySelector(".addlinematerial")
    MaterialBox.insertAdjacentHTML("beforeend",`
    <div class="Material-Names">
    <input type="number" name="SlipNoRate" id="SlipNoRate" value="${SlipNoValue.value}"  style="width: 90px; ">
    <input type="text" name="DateRate" id="DateRate" value="${DateValue.value}"  >
    <input type="number" name="FlatCoverRate" id="FlatCoverRate" value="${FlatCoverValue.value}" >
    <input type="number" name="PattiCoverRate" id="PattiCoverRate" value="${PattiCoverValue.value}" >
    <input type="number" name="RollCoverRate" id="RollCoverRate" value="${RollCoverValue.value}" >
    <input type="number" name="MetalIDRate" id="MetalIDRate" value="${MetalIDValue.value}" >
    <input type="number" name="ButtonGrossNRate" id="ButtonGrossRate" value="${ButtonGrossValue.value}" >
    <input type="number" name="ExtraRate" id="ExtraRate" value="${ExtraValue.value}" >
    <div id="btndivm">
        <button class="BtnMX" id="AddDcBtnM" >
            <svg class="svgMX" viewbox="0 0 24 24" width="50px" height="50px" >
                <path d="M12 2v20M2 12h20" stroke="#ffffff" stroke-width="3"/>
            </svg>
        </button>
    </div>
</div>`)
TotalMaterial ()
}


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
     `);
    


 

     
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
    <button class="DeleteBtn ">
    X
    </button>

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
function RemovePayment (PaymentLine){
    PaymentLine.remove();
    TotalPayment ();
}
function RemoveMaterial (MaterialLine){
    MaterialLine.remove()
    TotalMaterial ()
}
function RemoveDc(Dc , container){
    Dc.remove();
    TotalCalculator (container);

 
}

function TotalPayment (){
    const TaxAmt = document.getElementById("RtgsTotalPayment");
    const CashAmt = document.getElementById("CashTotalPayment");

    let CashCount = 0;
    let TaxCount = 0;


    document.querySelectorAll("#TypeValue").forEach(TypeInput =>{ 

    if (TypeInput.value === "0") {
        TaxCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        TaxAmt.value = TaxCount;
      

    } else if (TypeInput.value === "1") {
        CashCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        CashAmt.value = CashCount;

    } else if (TypeInput.value === "2") {
        TaxCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        TaxAmt.value = TaxCount;

    } else if (TypeInput.value === "3") {
        TaxCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        TaxAmt.value = TaxCount;

    } else if (TypeInput.value === "4") {
        CashCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        CashAmt.value = CashCount;


    } else if (TypeInput.value === "5") {
        CashCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        CashAmt.value = CashCount;
  

    } else if (TypeInput.value === "6") {
        TaxCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        TaxAmt.value = TaxCount;

    } else if (TypeInput.value === "7") {
        TaxCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        TaxAmt.value = TaxCount;

    }else {
        CashAmt.value = CashCount;
        TaxAmt.value = TaxCount;
    }
    
    document.getElementById("FinalTotalPayment").value = parseInt(TaxAmt.value) + parseInt(CashAmt.value)
});
}
function TotalMaterial (){
    const FlatCoverSubTotal  =document.getElementById("FlatCoverSubTotal");
    const PattiCoverSubTotal  =document.getElementById("PattiCoverSubTotal");
    const RollCoverSubTotal =document.getElementById("RollCoverSubTotal");
    const MetalIDSubTotal  =document.getElementById("MetalIDSubTotal");
    const ButtonGrossSubTotal =document.getElementById("ButtonGrossSubTotal");
    const ExtraSubTotal =document.getElementById("ExtraSubTotal");
    const SubTotal =document.getElementById("SubtotalM");

    let FlatCount = 0;
   document.querySelectorAll("#FlatCoverRate").forEach(Number =>{FlatCount += parseInt(Number.value)})
    FlatCoverSubTotal.value = FlatCount;
    

    let PattiCount = 0;
   document.querySelectorAll("#PattiCoverRate").forEach(Number =>{PattiCount += parseInt(Number.value)})
   PattiCoverSubTotal.value = PattiCount;

    let RollCount = 0;
   document.querySelectorAll("#RollCoverRate").forEach(Number =>{RollCount += parseInt(Number.value)})
   RollCoverSubTotal.value = RollCount;

    let MetalIDCount = 0;
   document.querySelectorAll("#MetalIDRate").forEach(Number =>{ MetalIDCount += parseInt(Number.value)})
   MetalIDSubTotal.value = MetalIDCount;

    let ButtonGrossCount = 0;
   document.querySelectorAll("#ButtonGrossRate").forEach(Number =>{ ButtonGrossCount += parseInt(Number.value)})
   ButtonGrossSubTotal.value = ButtonGrossCount;

    let ExtraCount = 0;
   document.querySelectorAll("#ExtraRate").forEach(Number =>{ExtraCount += parseInt(Number.value)})
   ExtraSubTotal.value = ExtraCount;

    let SubCount = 0;
   document.querySelectorAll(".Stotal").forEach(Number =>{SubCount += parseInt(Number.value)})
   SubTotal.value = SubCount;
    
    
    
}
function TotalCalculator (container){
    // debit total
    let DebitNum = 0;
    container.querySelectorAll("#Debit").forEach(debit => {DebitNum +=  parseInt(debit.value);});
    container.querySelector("#DebitFab").value=DebitNum;

    //Final Amount
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






