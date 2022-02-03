/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const initPage = () => {
  const pressed = window.localStorage.getItem('dyslexic') === 'true';

  if (pressed){
    document.body.classList.add("dyslexia-mode")
  }
  if (pressed){
    document.getElementById("dyslexia-toggle").setAttribute('aria-pressed', 'true')
  }

  document.getElementById("dyslexia-toggle").addEventListener('click', toggleDyslexiaMode)

 

}
const toggleDyslexiaMode = ev =>{
  console.log('here');
  let pressed = ev.currentTarget.getAttribute('aria-pressed') === 'true';
  ev.currentTarget.setAttribute('aria-pressed', String(!pressed));
  document.body.classList.toggle('dyslexia-mode');
  window.localStorage.setItem('dyslexic', String(!pressed));


}

initPage();
