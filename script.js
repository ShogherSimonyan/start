



const menuIcom= document.querySelector("mainContainer>.kanach>main>.parent1>div>p.menu")
const aside=document.querySelector("mainContainer>.kanach>main>.parent1>.home>ul.aside")
const button=aside.querySelector('mainContainer>.kanach>main>.parent1>.home>ul>button.pakel')

menuIcom.onclick =function () {
    aside.classList.toggle('active')
}
button.onclick=function () {
    aside.classList.toggle('active')
}
