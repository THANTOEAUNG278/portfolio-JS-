const typed = new Typed('.type', {
  strings: [ "Student", 'Frontend Developer',"Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop:true,
});

const showPage= document.getElementById('showPage');
const home = document.getElementById('home');
const about = document.getElementById('about');
const services = document.getElementById('services');
const skill = document.getElementById('skill');
const project = document.getElementById('project');
const contact = document.getElementById('contact');

const homeContent =document.getElementById('homeContent');
const aboutContent =document.getElementById('aboutContent');
const serviceContent =document.getElementById('serviceContent');
const skillContent =document.getElementById('skillContent');
const projectContent =document.getElementById('projectContent');
const contactskill =document.getElementById('contactskill');


showPage.style.display = 'block'
home.addEventListener('click', () => {
  home.classList.add('active-now')
  about.classList.remove('active-now')
  services.classList.remove('active-now')
  skill.classList.remove('active-now')
  project.classList.remove('active-now')
  contact.classList.remove('active-now')
  homeContent.style.display = 'block'
  aboutContent.style.display = 'block'
  serviceContent.style.display = 'block'
  skillContent.style.display = 'block'
  projectContent.style.display = 'block'
  contactskill.style.display = 'block'
})
about.addEventListener('click', () => {
  about.classList.add('active-now')
  home.classList.remove('active-now')
  services.classList.remove('active-now')
  skill.classList.remove('active-now')
  project.classList.remove('active-now')
  contact.classList.remove('active-now')
  homeContent.style.display = 'none'
  aboutContent.style.display = 'block'
  serviceContent.style.display = 'none'
  skillContent.style.display = 'none'
  projectContent.style.display = 'none'
  contactskill.style.display = 'none'

})
services.addEventListener('click', () => {
  services.classList.add('active-now')
  home.classList.remove('active-now')
  about.classList.remove('active-now')
  skill.classList.remove('active-now')
  project.classList.remove('active-now')
  contact.classList.remove('active-now')
  serviceContent.style.display = 'block'
  homeContent.style.display = 'none'
  aboutContent.style.display = 'none'
  skillContent.style.display = 'none'
  projectContent.style.display = 'none'
  contactskill.style.display = 'none'
})
skill.addEventListener('click', () => {
  skill.classList.add('active-now')
  home.classList.remove('active-now')
  about.classList.remove('active-now')
  services.classList.remove('active-now')
  project.classList.remove('active-now')
  contact.classList.remove('active-now')
  skillContent.style.display = 'block'
  homeContent.style.display = 'none'
  aboutContent.style.display = 'none'
  serviceContent.style.display = 'none'
  projectContent.style.display = 'none'
  contactskill.style.display = 'none'
})
project.addEventListener('click', () => {
  project.classList.add('active-now')
  home.classList.remove('active-now')
  about.classList.remove('active-now')
  services.classList.remove('active-now')
  skill.classList.remove('active-now')
  contact.classList.remove('active-now')
  projectContent.style.display = 'block'
  homeContent.style.display = 'none'
  aboutContent.style.display = 'none'
  serviceContent.style.display = 'none'
  skillContent.style.display = 'none'
  contactskill.style.display = 'none'
})
contact.addEventListener('click', () => {
  contact.classList.add('active-now')
  home.classList.remove('active-now')
  about.classList.remove('active-now')
  services.classList.remove('active-now')
  skill.classList.remove('active-now')
  project.classList.remove('active-now')
  contactskill.style.display = 'block'
  homeContent.style.display = 'none'
  aboutContent.style.display = 'none'
  serviceContent.style.display = 'none'
  skillContent.style.display = 'none'
  projectContent.style.display = 'none'
})