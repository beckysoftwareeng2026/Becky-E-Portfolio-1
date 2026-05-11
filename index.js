let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += "modal--open";
}

function contact() {
    event.preventDefault();
    const loading = document.querySelector('modal__overlay--success')
    const success = document.querySelector('modal__overlay--loading')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_g0yjped',
            'template_8njakj3',
            event.target,
            'f6i8YNXr8vT28SPdI'
        ).then(() => {
            loading.classList.remove(" modal__overlay--visible")
            success.classList += loading.classList += " modal__overlay--visible"
        }).catch(() => { }
            loading.classList.remove("modal__overlay--visible")
            alert(
            "The email service is temporarily unavailable. Please contact me directly @ jennifercobb829@gmail.com"
        )
        })


setTimeout(() => {

    console.log('it worked 1')
}, 1000);
}

