'use strict';
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#navigation');
function closeMenu(){ menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
toggle.addEventListener('click',()=>{ const open=menu.classList.toggle('open'); toggle.setAttribute('aria-expanded',String(open)); });
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){closeMenu();toggle.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>760)closeMenu();});
const slides=[...document.querySelectorAll('.hero-slide')];
const controls=[...document.querySelectorAll('.slide-button')];
controls.forEach((button,index)=>button.addEventListener('click',()=>{
 slides.forEach((slide,i)=>{const active=i===index;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));slide.inert=!active;});
 controls.forEach((control,i)=>{control.classList.toggle('active',i===index);control.setAttribute('aria-pressed',String(i===index));});
}));
const form=document.querySelector('#contact-form');
function createEmail(formElement){
 const data=new FormData(formElement);
 const body='Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\n'+data.get('message');
 return 'mailto:erroyalpartners@gmail.com?subject='+encodeURIComponent(data.get('subject'))+'&body='+encodeURIComponent(body);
}
form.addEventListener('submit',event=>{event.preventDefault();window.location.href=createEmail(form);document.getElementById('form-status').textContent='Please send your message from the email window that opens.';});
document.getElementById('year').textContent=new Date().getFullYear();
