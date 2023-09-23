//template_a5t95it
//service_y4kx7mx
//jucvs8Jch6k_4hjBi

const contact = (event) => {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_y4kx7mx',
            'template_a5t95it',
            event.target, //targetting all the events in the form , the email, name and message
            'jucvs8Jch6k_4hjBi'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("Sorry the email service is temporarily unavailable. Please email me at jinping4038@gmail.com to contact with me directly!")
        })
    
}

let isModal = false
const modalToggle = () => {
    if (!isModal){
        isModal = true
        document.body.classList += " modal--open"
    }
    else{
        isModal = false
        document.body.classList.remove("modal--open")

    }
}

let isContrast = false
const toggleContrast = () => {
    isContrast = !isContrast
    if (isContrast){
        document.body.classList.add("dark-theme")
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length;i++){
        const isOdd = i % 2 !== 0;
        const boolInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`
    }
}
