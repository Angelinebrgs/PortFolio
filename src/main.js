import '../style/modern-normalise.css';
import '../style/style.css';
import '../style/utils.css'

//Pour que des élément apparaisse au fur a mesure avec animation
const observer = new IntersectionObserver(() => {
    entries.forEach(() => {
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