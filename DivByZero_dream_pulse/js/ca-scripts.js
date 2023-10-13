var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->

function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
     let header=document.getElementById("tm-header")
     header.textContent=customerName
    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->

};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let changeClasses=document.querySelectorAll(".d-inline-block tm-white-rect")
    changeClasses.className="tm-blue-rect"

};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
 let hideSocial= document.querySelector(".nav flex-row tm-social-links")
 hideSocial.setAttribute("hidden",true)
 
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    let addText1= document.getElementById('intropara1')
    addText1.textContent="Alliance was founded in 1931 by Albert Daniels."


    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
let addText2=document.getElementById("intropara2")
addText2.textContent ="The company is a leader in P.C. Manufacturing'"


     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
let addText3=document.getElementById("aboutpara1")
addText3.textContent="We deliver the best service this side of creation"


    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
let addText4 =document.getElementById("aboutpara2")
addText4.textContent='Our motto is satisfaction guaranteed'

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
let addText5=document.getElementById("addresspara")
addText5.innerHTML='1-800-565-5656'
}; 



