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

const date =document.getElementById("DateValue");




function AddPayment(){
    const DateInput =document.getElementById("PaymentDateInput");
    const TypeInput =document.getElementById("TypeInput");
    const AmountInput =document.getElementById("AmountInput");
    const RemarksInput =document.getElementById("RemarksInput");
if (AmountInput.value !== "" && parseFloat(AmountInput.value) > 0) {
        
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
                <input type="number" name="SN" id="SNp" class="SNp" style="width: 40px;" value="0" readonly disabled>
                <input type="date" name="PaymentDateInput" id="PaymentDateValue"  value="${DateInput.value}">
                <input type="number" name="AmountInput" class="AmountValue" id="AmountValue"  value="${AmountInput.value}" placeholder="Enter Amount">
                <select name="TypeI" class="TypeValue" id="TypeValue">${innerhtml}</select >
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
GrandTotalUpdate ()

UpdateSerialPayment();
const amountInputFields = PaymentBox.querySelectorAll(".AmountValue");
amountInputFields.forEach(inputField => {
    inputField.addEventListener("input",()=>{ 
        if (inputField.value == "") {
            inputField.value = 0;
        };
        TotalPayment();
        
    });
});
} else {
    alert("Please Enter Amount");
    AmountInput.focus();
    
}


};

function AddMaterial(){
    
    const SlipNoValue =document.getElementById("SlipNoValue");
    const FlatCoverValue =document.getElementById("FlatCoverValue");
    const PattiCoverValue =document.getElementById("PattiCoverValue");
    const RollCoverValue=document.getElementById("RollCoverValue");
    const MetalIDValue =document.getElementById("MetalIDValue");
    const ButtonGrossValue=document.getElementById("ButtonGrossValue");
    const ExtraValue=document.getElementById("ExtraValue");
    const DateValue = document.getElementById("DateValue");

    if (
        SlipNoValue.value !== "" ||
        FlatCoverValue.value != "" ||
        PattiCoverValue.value !== "" ||
        RollCoverValue.value !== "" ||
        MetalIDValue.value !== "" ||
        ButtonGrossValue.value !== "" ||
        ExtraValue.value !== ""
    ) {
        // At least one input value is empty
        if (SlipNoValue.value == "") SlipNoValue.value = 0;
        if (FlatCoverValue.value == "") FlatCoverValue.value = 0;
        if (PattiCoverValue.value == "") PattiCoverValue.value = 0;
        if (RollCoverValue.value == "") RollCoverValue.value = 0;
        if (MetalIDValue.value == "") MetalIDValue.value = 0;
        if (ButtonGrossValue.value == "") ButtonGrossValue.value = 0;
        if (ExtraValue.value == "") ExtraValue.value = 0;
        
        
  
    
    
    
    
    
        const MaterialBox = document.querySelector(".addlinematerial")
    MaterialBox.insertAdjacentHTML("beforeend",`
      <div class="Material-Names" id="Material" >
      <input type="number" name="SlipNoRate" id="SlipNoRate" value="${SlipNoValue.value}"  style="width: 90px; " placeholder="NO">
      <input type="date" name="DateRate" id="DateRate" value="${DateValue.value}"  >
      <input type="number" name="FlatCoverRate" id="FlatCoverRate" class="FlatCoverRate" value="${FlatCoverValue.value}" placeholder="Flat-Cover" >
      <input type="number" name="PattiCoverRate" id="PattiCoverRate" class="PattiCoverRate" value="${PattiCoverValue.value}"  placeholder="Patti-Cover">
      <input type="number" name="RollCoverRate" id="RollCoverRate"  class="RollCoverRate" value="${RollCoverValue.value}" placeholder="RollCover">
      <input type="number" name="MetalIDRate" id="MetalIDRate"  class="MetalIDRate" value="${MetalIDValue.value}" placeholder="Metal-ID">
      <input type="number" name="ButtonGrossNRate" id="ButtonGrossRate" class="ButtonGrossRate"value="${ButtonGrossValue.value}" placeholder="Button-Gross">
      <input type="number" name="ExtraRate" id="ExtraRate" class ="ExtraRate"value="${ExtraValue.value}" placeholder="Extra">
      <div id="btndivm">
          <button class="BtnMX" id="AddDcBtnM" >
              <svg class="svgMX" viewbox="0 0 24 24" width="50px" height="50px" >
                  <path d="M12 2v20M2 12h20" stroke="#ffffff" stroke-width="3"/>
              </svg>
          </button>
        </div>
      </div>`)
    TotalMaterial ()
    let VALUE = 0;
    AllClear(VALUE)
    SlipNoValue.focus();
} else {
   
   alert("Enter At least One Value");
   SlipNoValue.focus();
};
GrandTotalUpdate ()
};


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
             <input type="number" id="FabRateI" placeholder="Fabric Rate" min="0" step="0.01" oninput="validity.valid||(value='');"  >
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
             <input type="number" id="DebitFab" class="DebitFab" readonly value="0">
             <input type="number" id="cgst" class="cgst" value="0">
             <input type="number" id="sgst" class="sgst" value="0">
             <input type="number" id="CashAMT" Class="CashAMT" value="0" readonly>
             <input type="number" id="RTGSAMT" Class="RTGSAMT" value="0">
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


    

    if (
        DcNoInput.value !== "" &&
        TotalPcsInput.value !== "" &&
        RateInput.value !== "" &&
        CNSPTNInput.value !== "" &&
        TotalMTRInput.value !== "" 
    ) {
        
    
    
    
    AddLineIteam.insertAdjacentHTML("beforeend", `
    <div class="AddLine-Fabric">
    <input type="number" value="0" class="sndc" style="width: 50px;" readonly="readonly" disabled>
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

    if(FabRate.value == ""){
            FabRate.value=0;
    }


    TotalPcs.addEventListener("input",()=>{
        UsedMTR.value = CNSPTN.value * TotalPcs.value;
        RestMTR.value = TotalMTR.value - UsedMTR.value;
        Debit.value = RestMTR.value*FabRate.value;
        Total.value = TotalPcs.value*Rate.value;
        TotalCalculator(container);
        GrandTotalUpdate ();
        
    });
    CNSPTN.addEventListener("input",()=>{
      UsedMTR.value = CNSPTN.value * TotalPcs.value;
      RestMTR.value = TotalMTR.value - UsedMTR.value;
      Debit.value = RestMTR.value*FabRate.value;
      TotalCalculator(container);
      GrandTotalUpdate ();
    });
    Rate.addEventListener("input",()=>{
        Total.value = TotalPcs.value*Rate.value;
        TotalCalculator(container);
        GrandTotalUpdate ();
    });
    
    TotalMTR.addEventListener("input",()=>{
        RestMTR.value = TotalMTR.value - UsedMTR.value;
        Debit.value = RestMTR.value*FabRate.value;
        TotalCalculator(container);
        GrandTotalUpdate ();

    });

    FabRate.addEventListener("input",()=>{
        Debit.value = RestMTR.value*FabRate.value;
        TotalCalculator(container);
        GrandTotalUpdate ();
    });
    UsedMTR.addEventListener("input",()=>{
        CNSPTN.value = UsedMTR.value/TotalPcs.value;
        RestMTR.value = TotalMTR.value - UsedMTR.value;
        Debit.value = RestMTR.value*FabRate.value;
        TotalCalculator(container);
        GrandTotalUpdate ();
    });



  TotalCalculator(container);
       AddLineIteam.value = "";
       DcNoInput.value = "";
       TotalPcsInput.value = "";
       RateInput.value = "";
       CNSPTNInput.value = "";
       TotalMTRInput.value = "";
       FabRateInput.value = "";
       DcNoInput.focus();
       UpdateSerialDC (container)
       DcNoInput.classList.remove("Empty");

       TotalPcsInput.classList.remove("Empty");

       CNSPTNInput.classList.remove("Empty");

       RateInput.classList.remove("Empty");

       TotalMTRInput.classList.remove("Empty");

       FabRateInput.classList.remove("Empty");

    } else if (DcNoInput.value === ""){ 
        DcNoInput.focus();
        DcNoInput.classList.add("Empty");
    }
       else if (TotalPcsInput.value === "") {
        TotalPcsInput.focus();
        TotalPcsInput.classList.add("Empty");
    }
      else if (CNSPTNInput.value === ""){ 
        CNSPTNInput.focus();
        CNSPTNInput.classList.add("Empty");
    }
       else if (RateInput.value === ""){ 
        RateInput.focus();
        RateInput.classList.add("Empty");
    }
       else if (TotalMTRInput.value === "") {
        TotalMTRInput.focus();
        TotalMTRInput.classList.add("Empty");
    }
    //   else  if (FabRateInput.value === "") {
    //     FabRateInput.focus();
    //     FabRateInput.classList.add("Empty");
    // }  
    GrandTotalUpdate ();
};

function GrandTotalUpdate (){
    const GrandTotal = document.getElementById("GrandTotal");
    const RTGSTotal = document.getElementById("RTGSTotal");
    const CashTotal = document.getElementById("CashTotal");

    const CashAmtS = document.querySelectorAll(".CashAMT");
     let CASHAMTDC = 0;
    CashAmtS.forEach(Amt => {
        CASHAMTDC =+ parseInt(Amt.value);
    });
    const RTGSAmtS = document.querySelectorAll(".RTGSAMT");
     let RTGSAMTDC = 0;
    RTGSAmtS.forEach(rAmt => {
        RTGSAMTDC =+ parseInt(rAmt.value);
    });
    const DebitAmtS = document.querySelectorAll(".DebitFab");
     let DebitAMTDC = 0;
    DebitAmtS.forEach(dAmt => {
        DebitAMTDC =+ parseInt(dAmt.value);
    });
    const cgstAmtS = document.querySelectorAll(".cgst");
     let cgstAMTDC = 0;
       cgstAmtS.forEach(cgst => {
        cgstAMTDC =+ parseInt(cgst.value);
    });
    const sgstAmtS = document.querySelectorAll(".sgst");
     let sgstAMTDC = 0;
    sgstAmtS.forEach(sgst => {
        sgstAMTDC =+ parseInt(sgst.value);
    });

    CashTotal.value = CASHAMTDC - (parseInt(document.getElementById("SubtotalM").value)+parseInt(document.getElementById("CashTotalPayment").value) + DebitAMTDC);
    RTGSTotal.value = RTGSAMTDC - parseInt(document.getElementById("RtgsTotalPayment").value) ;


    GrandTotal.value = sgstAMTDC + cgstAMTDC + parseInt(CashTotal.value);
}
function RemovePayment (PaymentLine){
    PaymentLine.remove();
    TotalPayment ();
    UpdateSerialPayment()
    GrandTotalUpdate ()
}
function RemoveMaterial (MaterialLine){
    MaterialLine.remove()
    TotalMaterial ()
    GrandTotalUpdate ()
}
function RemoveDc(Dc , container){
    Dc.remove();
    TotalCalculator (container);
    UpdateSerialDC (container);
    GrandTotalUpdate ()

 
}

function TotalPayment (){
    const TaxAmt = document.getElementById("RtgsTotalPayment");
    const CashAmt = document.getElementById("CashTotalPayment");

    let CashCount = 0;
    let TaxCount = 0;

    const TypesInput = document.querySelectorAll("#TypeValue");

    TypesInput.forEach(TypeInput =>{ 

    if (TypeInput.value === "0" || TypeInput.value === "2" ||TypeInput.value === "3" ||TypeInput.value === "6" ||TypeInput.value === "7") {
        TaxCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        GrandTotalUpdate ();
        
    } else if (TypeInput.value === "1" || TypeInput.value === "4" || TypeInput.value === "5") {
        CashCount += parseInt(TypeInput.previousSibling.previousSibling.value)
        GrandTotalUpdate ();
        
    }});

    TaxAmt.value = TaxCount;
    CashAmt.value = CashCount;
    document.getElementById("FinalTotalPayment").value = parseInt(TaxAmt.value) + parseInt(CashAmt.value);
    
    GrandTotalUpdate ();
};

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


  // document.querySelectorAll(".Stotal").forEach(Number =>{SubCount += parseInt(Number.value)})
   let Flat = (parseFloat(document.getElementById("FlatCoverRs").value) *  parseInt(FlatCoverSubTotal.value));
   let patti = (parseFloat(document.getElementById("PattiCoverRs").value) *  parseInt(PattiCoverSubTotal.value));
   let roll = (parseFloat(document.getElementById("RollCoverRs").value) *  parseInt(RollCoverSubTotal.value));
   let btn = (parseFloat(document.getElementById("ButtonGrossRs").value) *  parseInt(ButtonGrossSubTotal.value));
   let id = (parseFloat(document.getElementById("MetalIDRs").value) *  parseInt(MetalIDSubTotal.value));
   let other = (parseFloat(document.getElementById("ExtraRs").value) *  parseInt(ExtraSubTotal.value));
   SubTotal.value = Flat + patti + roll + btn + id + other;
    
    
   GrandTotalUpdate ();
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
    GrandTotalUpdate ();
}
function CashTotal (container){
        // total amount cash
        const RTGSAMT = container.querySelector("#RTGSAMT");
        let  CashNum = 0;
        container.querySelectorAll("#Total").forEach(Cash => {CashNum +=  parseInt(Cash.value);});
        container.querySelector("#CashAMT").value= ( CashNum - RTGSAMT.value);
        GrandTotalUpdate ();
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
            container.querySelector("#TotalAMT").value=  parseInt(CashAmt.value) + (parseInt(SGST.value) + parseInt(CGST.value));
            GrandTotalUpdate ();
         })
         SGST.addEventListener("input",()=>{
            CGST.value = SGST.value;
            RTGSAMT.value = (SGST.value * 2) / 0.05;
            container.querySelector("#TotalAMT").value=  parseInt(CashAmt.value) + (parseInt(SGST.value) + parseInt(CGST.value));
            GrandTotalUpdate ();

         })
         RTGSAMT.addEventListener("input",()=>{
            CGST.value = ((RTGSAMT.value /100) *5)/2;
            SGST.value = ((RTGSAMT.value /100) *5)/2;
            RTGSAMT.value = (SGST.value * 2) / 0.05;
            container.querySelector("#TotalAMT").value=  parseInt(CashAmt.value) + (parseInt(SGST.value) + parseInt(CGST.value));
            GrandTotalUpdate ();
         })


}

// value changes  
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
                //target.parentElement.querySelector("#DcNoI").focus()
                // yaha se material ka shuru
            }else if (target.id == "SlipNoValue" ) {
                
                if(target.parentElement.querySelector("#SlipNoValue").value == ""){
                    target.parentElement.querySelector("#SlipNoValue").value = 0;
                }
                target.parentElement.querySelector("#DateValue").focus();
            }else if (target.id == "DateValue" ) {
                if(target.parentElement.querySelector("#DateValue").value == ""){
                    target.parentElement.querySelector("#DateValue").value = 0;
                }
                target.parentElement.querySelector("#FlatCoverValue").focus();
            }else if (target.id == "FlatCoverValue" ) {
                if(target.parentElement.querySelector("#FlatCoverValue").value == ""){
                    target.parentElement.querySelector("#FlatCoverValue").value = 0;
                }
                target.parentElement.querySelector("#PattiCoverValue").focus();
            }else if (target.id == "PattiCoverValue" ) {
                if(target.parentElement.querySelector("#PattiCoverValue").value == ""){
                    target.parentElement.querySelector("#PattiCoverValue").value = 0;
                }
                target.parentElement.querySelector("#RollCoverValue").focus();
            }else if (target.id == "RollCoverValue" ) {
                if(target.parentElement.querySelector("#RollCoverValue").value == ""){
                    target.parentElement.querySelector("#RollCoverValue").value = 0;
                }
                target.parentElement.querySelector("#MetalIDValue").focus();
            }else if (target.id == "MetalIDValue" ) {
                if(target.parentElement.querySelector("#MetalIDValue").value == ""){
                    target.parentElement.querySelector("#MetalIDValue").value = 0;
                }
                target.parentElement.querySelector("#ButtonGrossValue").focus();
            }else if (target.id == "ButtonGrossValue" ) {
                if(target.parentElement.querySelector("#ButtonGrossValue").value == ""){
                    target.parentElement.querySelector("#ButtonGrossValue").value = 0;
                }
                target.parentElement.querySelector("#ExtraValue").focus();
            }else if (target.id == "ExtraValue" ) {
                if(target.parentElement.querySelector("#ExtraValue").value == ""){
                    target.parentElement.querySelector("#ExtraValue").value = 0;
                }
                target.parentElement.querySelector("#SlipNoValue").focus();
              AddMaterial();
              let VALUE = 0;
              AllClear(VALUE)
              // payment start
            }else if (target.id == "PaymentDateInput"){
                if(target.parentElement.querySelector("#PaymentDateInput").value == ""){
                    target.parentElement.querySelector("#PaymentDateInput").value = "";
                }
                target.parentElement.querySelector("#AmountInput").focus();
            }else if (target.id == "AmountInput"){
                if(target.parentElement.querySelector("#AmountInput").value == ""){
                    target.parentElement.querySelector("#AmountInput").value = 0;
                }
                target.parentElement.querySelector("#TypeInput").focus();
            }else if (target.id == "TypeInput"){
                target.parentElement.querySelector("#RemarksInput").focus();
            }else if (target.id == "RemarksInput"){
                target.parentElement.querySelector("#PaymentDateInput").focus();
                AddPayment();
                let VALUE = 1;
                AllClear(VALUE)
            }
    }
});
document.body.addEventListener("change", (event) => {
    
        let innerhtml="" ;

    if (event.target.value === "0") {
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
    } else if (event.target.value === "1") {
    
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
    } else if (event.target.value === "2") {
    
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
    } else if (event.target.value === "3") {
    
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
    } else if (event.target.value === "4") {
    
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
    } else if (event.target.value === "5") {
    
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
    } else if (event.target.value === "6") {
    
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
    } else if (event.target.value === "7") {
    
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
    // For example, you can check the selected value and update the total accordingly
    event.target.innerHTML = innerhtml;

   TotalPayment();
   GrandTotalUpdate ()
});
document.body.addEventListener("input",(event)=>{
    const I = event.target;
    if (I.classList.contains("FlatCoverRate") ||I.classList.contains("PattiCoverRate") ||I.classList.contains("RollCoverRate") ||I.classList.contains("MetalIDRate") ||I.classList.contains("ButtonGrossRate") ||I.classList.contains("FlatCoverRs") ||I.classList.contains("PattiCoverRs") ||I.classList.contains("RollCoverRs") ||I.classList.contains("MetalIDRs") ||I.classList.contains("ButtonGrossRs")||I.classList.contains("ExtraRs")) {
        if (I.value == "") {
            I.value = 0;
            GrandTotalUpdate ();
        };
        TotalMaterial();
        GrandTotalUpdate ();
    }
    
 });


function AllClear(VALUE){
    // clearing materials
    if(VALUE == 0){
    document.getElementById("SlipNoValue").value=""  
    document.getElementById("DateValue").value=""  
    document.getElementById("FlatCoverValue").value="" 
    document.getElementById("PattiCoverValue").value="" 
    document.getElementById("RollCoverValue").value="" 
    document.getElementById("MetalIDValue").value="" 
    document.getElementById("ButtonGrossValue").value="" 
    document.getElementById("ExtraValue").value="" 
    }else if(VALUE == 1){
        document.getElementById("PaymentDateInput").value=""  
        document.getElementById("AmountInput").value=""  
        document.getElementById("TypeInput").innerHTML= `
        <option value="0">RTGS</option>
        <option value="1">G.Pay</option >
        <option value="2">Cheque</option>
        <option value="3">Cash A/C</option>
        <option value="4">Cash W/O</option>
        <option value="5">Bank W/O</option>
        <option value="6">NEFT</option>
        <option value="7">IMPS</option>` 
        document.getElementById("RemarksInput").value="" 

    }
}

function UpdateSerialDC (container){
    const sndcs =container.querySelectorAll(".sndc");
    for (let i = 0; i < sndcs.length; i++) {
        sndcs[i].value = i+1;
    }
}
function UpdateSerialPayment(){
    const snps = document.querySelectorAll(".SNp");
    for (let i = 0; i < snps.length; i++) {
        snps[i].value = i+1;
    }
}