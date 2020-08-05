
    function closeModal(ModalSelector) {
        const modal = document.querySelector(ModalSelector);
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal(ModalSelector, modalTimerId) {
        const modal = document.querySelector(ModalSelector);
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';


        console.log(modalTimerId);
        if(modalTimerId)
         {
             clearInterval(modalTimerId);
        }
        
    }
    

function modalFrames(triggerSelector, ModalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(ModalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(ModalSelector, modalTimerId)); // !!!!!!!
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(ModalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(ModalSelector);
        }
    });

    // Изменил значение, чтобы не отвлекало

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(ModalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);

}

export default modalFrames;

export {closeModal};
export {openModal};