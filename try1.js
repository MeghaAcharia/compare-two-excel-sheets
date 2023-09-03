//selecting all required elements
const dropArea = document.querySelector(".up-container"),
dragText = dropArea.querySelector("h3"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["/.xls,/.xls"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      //dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Excel File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}

//selecting all required elements
const dropArea2 = document.querySelector(".up-container2"),
dragText2 = dropArea2.querySelector("h3"),
button2 = dropArea2.querySelector("button"),
input2 = dropArea2.querySelector("input");
let file2; //this is a global variable and we'll use it inside multiple functions

button2.onclick = ()=>{
  input2.click(); //if user click on the button then the input also clicked
}

input2.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file2 = this.files[0];
  dropArea2.classList.add("active");
  showFile2(); //calling function
});


//If user Drag File Over DropArea
dropArea2.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea2.classList.add("active");
  dragText2.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea2.addEventListener("dragleave", ()=>{
  dropArea2.classList.remove("active");
  dragText2.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea2.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file2 = event.dataTransfer.files[0];
  showFile2(); //calling function
});

function showFile2(){
  let fileType2 = file2.type; //getting selected file type
  let validExtensions = ["/.xls,/.xls"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType2)){ //if user selected file is an image file
    let fileReader2 = new FileReader(); //creating new FileReader object
    fileReader2.onload = ()=>{
      let fileURL2 = fileReader2.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      //dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader2.readAsDataURL(file2);
  }else{
    alert("This is not an Excel File!");
    dropArea2.classList.remove("active");
    dragText2.textContent = "Drag & Drop to Upload File";
  }
}
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const excelFileInput1 = document.getElementById("excelFileInput1");
    const excelFileInput2 = document.getElementById("excelFileInput2");
    const compareButton = document.getElementById("compare");
    const comparisonResult = document.getElementById("comparisonResult");

    compareButton.addEventListener("click", compareExcelSheets);

    function compareExcelSheets() {
        const file1 = excelFileInput1.files[0];
        const file2 = excelFileInput2.files[0];

        if (file1 && file2) {
            // Check if both selected files are Excel files (xlsx or xls)
            if (file1.name.endsWith(".xlsx") && file2.name.endsWith(".xlsx")) {
                const reader1 = new FileReader();
                const reader2 = new FileReader();

                reader1.onload = function (event) {
                    const data1 = event.target.result;
                    const workbook1 = XLSX.read(data1, { type: "binary" });

                    reader2.onload = function (event) {
                        const data2 = event.target.result;
                        const workbook2 = XLSX.read(data2, { type: "binary" });

                        // Compare the two Excel sheets (you can implement your comparison logic here)
                        const comparisonResultData = compareWorkbooks(workbook1, workbook2);

                        // Display the comparison result
                        comparisonResult.innerHTML = comparisonResultData;
                    };

                    reader2.readAsBinaryString(file2);
                };

                reader1.readAsBinaryString(file1);
            } else {
                alert("Please select two valid Excel files (xlsx) for comparison.");
            }
        } else {
            alert("Please select two Excel files for comparison.");
        }
    }

    // Implement your comparison logic here
    function compareWorkbooks(workbook1, workbook2) {
        // Your comparison logic goes here
        // You can use SheetJS functions to access and compare sheet data
        // Return the comparison result as a string or HTML table
        // Example: return "Comparison Result: Sheets are compared!";
    }
});
