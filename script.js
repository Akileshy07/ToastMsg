
const toastMsg = document.getElementById("toastMsg");

let SuccessMsg = '<i class="fas fa-check-circle"></i> Successfully Submitted';
let errorMSg = '<i class="fas fa-times-circle"></i> Error !!! Please Fix it...';
let invalidMsg = '<i class="fas fa-exclamation-circle"></i> Invalid input , Correct it ';

function addToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("msg");
    toast.innerHTML = msg;
    toastMsg .appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },5000);
}