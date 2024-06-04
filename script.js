let userInp=document.getElementById("inp-1");
let qrBox =document.getElementById("img-box");
let qrImg= document.getElementById("qr-img");
function generate(){
  if(userInp.value.length > 0){
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInp.value;
    qrBox.classList.add("img-size");
  }else{
    userInp.classList.add("error");
    setTimeout(()=>{
      userInp.classList.remove("error")
    },1000);
  }  
}