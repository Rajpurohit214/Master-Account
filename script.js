let TotalLine=[];
const SN = document.getElementsByClassName("SN");

document.body.addEventListener("click", (click) => {
    const target = click.target;
    // Check if the clicked element is an "Add" button
    if (target.classList.contains("Add")) {
        const container = target.closest(".Main-Container");
        AddLine(container);
    }
    if(target.id === "AddDcBtn"){
        AddDCs();
    }
});

function AddDCs (){
    MainBox.insertAdjacentHTML("beforeend", `<br></br>
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
             <input value="Job Rate" type="text" readonly="readonly">
             <input value="Consaption" type="text" readonly="readonly">
             <input value="Total MTR" type="text" readonly="readonly">
             <input value="Rest MTR" type="text" readonly="readonly">
             <input value="Fab Rate" type="text" readonly="readonly">
           </div>
         <div class="AddLine-Iteam"></div>
         <div class="AddLine-Fabric">
             <input type="number" value="0" style="width: 50px;" readonly="readonly">
             <input type="number" id="DcNo">
             <input type="number" id="TotalPcs">
             <input type="number" id="Rate">
             <input type="number" id="CNSPTN">
             <input type="number" id="TotalMTR">
             <input type="number" id="WasteMTR">
             <input type="number" id="FabRate">
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
    const AddLineIteam = container.querySelector(".AddLine-Iteam");
    AddLineIteam.insertAdjacentHTML("beforeend", `
    <div class="AddLine-Fabric">
    <input type="number" value="0" style="width: 50px;" readonly="readonly">
    <input type="number" id="DcNo">
    <input type="number" id="TotalPcs">
    <input type="number" id="Rate">
    <input type="number" id="CNSPTN">
    <input type="number" id="TotalMTR">
    <input type="number" id="WasteMTR">
    <input type="number" id="FabRate">
    <button class="DeleteBtn">X</button>
    </div>`);
}
// You can keep the existing UpdateSN function if needed
// function UpdateSN (){
//     for (let i = 0; i < SN.length; i++) {
//         SN[i].value= i + 1 ;
//     }
// }
