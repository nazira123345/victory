const wrapper = document.querySelector('.wrapper');
const ВойтиLink= document.querySelector('.login-link');
const ЗарегистрироватьсяLink= document.querySelector('.register-link');

ЗарегистрироватьсяLink.addEventListener('click', ()=>{
	wrapper.classList.add('active');
})

ВойтиLink.addEventListener('click', ()=>{
	wrapper.classList.remove('active');
})
