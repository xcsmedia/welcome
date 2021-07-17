const menu = document.querySelector('.menu');
const btnON = document.querySelector('.icon-menu');
const btnOFF = document.querySelector('.icon-menu i');

btnON.addEventListener('click' , () => {
	menu.classList.toggle('active');

if(menu.classList.contains('active')){
	btnOFF.setAttribute('class','fab fa-mixer');
}else{
	btnOFF.setAttribute('class','fas fa-chevron-circle-down')
}
});

menu.addEventListener('click' , () => {
	menu.classList.toggle('active');
});