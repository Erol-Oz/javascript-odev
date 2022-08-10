let username=prompt("kullanıcı adınızı girin:")
let başlık=document.getElementById("başlık")
let ilkbaşlık=document.getElementById("ilkbaşlık")
let saat=document.getElementById("saat")
let son=document.getElementById("son")
let body=document.body.style.backgroundColor="black"
let dt=new Date().getDay()
const days=["pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar"]
başlık.classList.add("text-danger")
ilkbaşlık.classList.add("text-danger")
saat.classList.add("text-danger")
son.classList.add("text-danger")


function tarihsaat(){
if (username.length>0){

    başlık.innerHTML=`Merhaba, ${username}  Hoşgeldin...
    `
    saat.innerHTML=`${new Date().toLocaleString()} ${days[dt-1]}`

    son.innerHTML=`tarihinde kodluyoruz frontend Web development patikasının javascript bölümü birinci ödevindesiniz `
}
}
setInterval(tarihsaat,1000);