import '../style/modern-normalise.css';
import '../style/style.css';
import '../style/utils.css';
import '../style/class.css'

//Pour que des élément apparaisse au fur a mesure avec animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el => observer.observe(el)));

//Light/darkmode
function lightMode() {
    var checkbox = document.getElementById("checkbox");
    var label = document.getElementById("labellm");
    if (checkbox.checked) {
        document.body.classList.add("light-mode");
        document.getElementById("labellm").innerHTML="DarkMode";
    } else {
        document.body.classList.remove("light-mode");
        document.getElementById("labellm").innerHTML="LightMode";
    }
}

// Ajoutez un gestionnaire
var checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", lightMode);
lightMode();