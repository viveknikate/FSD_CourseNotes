
document.querySelector('#navbarSupportedContent > button:nth-child(4)').style.display='none'

function darkFunc(){
     document.querySelector('html').setAttribute("data-bs-theme","dark");
     document.querySelector('#navbarSupportedContent > button').style.display='none';
     document.querySelector('#navbarSupportedContent > button:nth-child(4)').style.display='';
}

function lightFunc(){
     document.querySelector('html').setAttribute("data-bs-theme","");
     document.querySelector('#navbarSupportedContent > button').style.display='';
     document.querySelector('#navbarSupportedContent > button:nth-child(4)').style.display='none';
}