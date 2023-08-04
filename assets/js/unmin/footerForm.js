const checker3 = document.querySelector("#checker3");
const checkError3 = document.querySelector(".check-error3");
const checkBtn3 = document.querySelector(".check-btn3");
const checkInput3 = document.querySelector(".check-input3");
const checkForm3 = document.querySelector(".check-form3");

checkInput3.addEventListener("input", () => {
    if(checkInput3.value.length < 17){
        checkError3.innerHTML = "Enter a valid phone number.";
        
        if(checkError3.classList.contains("hidden")){
            checkError3.classList.remove("hidden");
        }
    }
    else{
        if(!checkError3.classList.contains("hidden")){
            checkError3.classList.add("hidden");
        }
    }
});
checkBtn3.addEventListener("mouseover", (e) =>{
    if(checkInput3.value.length >= 17 && checker3.checked ){
        if(!checkBtn3.classList.contains("allow")){
            checkBtn3.classList.add("allow");
        }
    }
    else if(checkBtn3.classList.contains("allow")){
        checkBtn3.classList.remove("allow");
    }
});

checkBtn3.addEventListener("click", (e) =>{
    e.preventDefault();

    if(checkInput3.value.length >= 17 && checker3.checked){
        checkForm3.submit();
    }
});
