// Function to run the code
function runCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;

    const output = document.getElementById("output").contentWindow.document;
    output.open();
    output.write(
        `<style>${cssCode}</style>` + 
        htmlCode + 
        `<scrip>${jsCode}<\/script>`
    );
    output.close();
}

// Function to save the code in localStorage
function saveCode() {
    const htmlCode = document.getElementById("htmlCode").value;
    const cssCode = document.getElementById("cssCode").value;
    const jsCode = document.getElementById("jsCode").value;

    localStorage.setItem("htmlCode", htmlCode);
    localStorage.setItem("cssCode", cssCode);
    localStorage.setItem("jsCode", jsCode);

    alert("Code saved successfully!");
}

// Function to load the saved code from localStorage
function loadCode() {
    const savedHtml = localStorage.getItem("htmlCode");
    const savedCss = localStorage.getItem("cssCode");
    const savedJs = localStorage.getItem("jsCode");

    if (savedHtml || savedCss || savedJs) {
        document.getElementById("htmlCode").value = savedHtml || "";
        document.getElementById("cssCode").value = savedCss || "";
        document.getElementById("jsCode").value = savedJs || "";
        alert("Code loaded successfully!");
    } else {
        alert("No saved code found!");
    }
}