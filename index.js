isToggle = true;
function toggleCSS() {

    var num1 = document.querySelector("#num1");
    var num2 = document.querySelector("#num2");
    var mulbutton = document.querySelector("#mul");
    var divbutton = document.querySelector("#div");
    var subbutton = document.querySelector("#sub");
    var addbutton = document.querySelector("#add");
    var container = document.querySelector(".border");
    var body = document.querySelector("#body");

    if (isToggle) {


        /* the body styling */
        body.style.margin = "0";
        body.style.padding = "0";
        body.style.display = "flex";
        body.style.alignItems ="center";
        body.style.justifyContent = "center";
        body.style.height = "100vh";
        body.style.backgroundColor = "#f4f4f4";


        /* Multiply Button Style */
        mulbutton.style.backgroundColor = "rgb(8, 215, 8)";
        mulbutton.style.color = "#fff";
        mulbutton.style.padding = "10px 20px";
        mulbutton.style.borderRadius = "4px";
        mulbutton.style.cursor = "pointer";


        /* Divide Button Style */
        divbutton.style.backgroundColor = "rgb(8, 215, 8)";
        divbutton.style.color = "#fff";
        divbutton.style.padding = "10px 20px";
        divbutton.style.borderRadius = "4px";
        divbutton.style.cursor = "pointer";

        /* Substract Button Style */
        subbutton.style.backgroundColor = "rgb(8, 215, 8)";
        subbutton.style.color = "#fff";
        subbutton.style.padding = "10px 20px";
        subbutton.style.borderRadius = "4px";
        subbutton.style.cursor = "pointer";

        /* Addition Button Style */
        addbutton.style.backgroundColor = "rgb(8, 215, 8)";
        addbutton.style.color = "#fff";
        addbutton.style.padding = "10px 20px";
        addbutton.style.borderRadius = "4px";
        addbutton.style.cursor = "pointer";

        /* the div Container Button Style */
        container.style.padding = "20px";
        container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        container.style.backgroundColor = "#fff";
        container.style.borderRadius = "8px";
        container.style.textAlign = "center"


        /* num1 styling*/
        num1.style.padding = "8px";
        num1.style.textAlign = "Center";

        /* num2 styling*/
        num2.style.padding = "8px";
        num2.style.textAlign = "Center";
        num2.style.marginBottom = "15px";

    } else {

        /* Removing the styling after the button is clicked */
        num1.removeAttribute("style");
        num2.removeAttribute("style");
        mulbutton.removeAttribute("style");
        divbutton.removeAttribute("style");
        addbutton.removeAttribute("style");
        subbutton.removeAttribute("style");
        container.removeAttribute("style");
        body.removeAttribute("style")
    }

    isToggle = !isToggle;
}


function multiply() {

    var num1 = parseFloat(document.querySelector("#num1").value);
    var num2 = parseFloat(document.querySelector("#num2").value);
    var calculate;

    calculate = num1 * num2;

    document.querySelector("#results").innerHTML = calculate.toFixed(2)

    if (isNaN(num1) || isNaN(num2)) {

        alert("Enter a number")
    } 
}


function Divide() {


    var num1 = parseFloat(document.querySelector("#num1").value);
    var num2 = parseFloat(document.querySelector("#num2").value);
    var calculate;

    if (num2 != 0) {
        calculate = num1 / num2;
        document.querySelector("#results").innerHTML = calculate.toFixed(2)
    } else {

        document.querySelector("#results").innerHTML = "Cannot Divide This Number";
    }

    if (isNaN(num1) || isNaN(num2)) {

        alert("Enter a number")
    }

}

function Add() {


    var num1 = parseFloat(document.querySelector("#num1").value);
    var num2 = parseFloat(document.querySelector("#num2").value);
    var calculate;

    calculate = num1 + num2;

    document.querySelector("#results").innerHTML = calculate.toFixed(2)

    if (isNaN(num1) || isNaN(num2)) {

        alert("Enter a number")
    }


}

function Substract() {

    var num1 = parseFloat(document.querySelector("#num1").value);
    var num2 = parseFloat(document.querySelector("#num2").value);
    var calculate;

    calculate = num1 - num2;

    document.querySelector("#results").innerHTML = calculate.toFixed(2)

    if (isNaN(num1) || isNaN(num2)) {

        alert("Enter a number")
    }

    
}
