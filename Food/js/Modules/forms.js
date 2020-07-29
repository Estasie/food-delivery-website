function forms() {
    const forms= document.querySelectorAll('form');

    const message = {
        loading: 'img/form/original.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

forms.forEach(item => {
    bindPostData(item);
});



function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        // form.appendChild(statusMessage);
        form.insertAdjacentElement('afterend', statusMessage);
      
        const formData= new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries())); // В ДАННОЙ ЧАСТИ КОДА МЫ ПРЕОБРАЗУЕМ ВХОДЯЩИЕ ДАННЫЕ В JSON ФОРМАТ, а затем возвращаем преобразованный объект к классическому объекту


        // formData.forEach(function(value,key) {
        //     object[key] =value;
        // });


        postData('http://localhost:3000/requests', json)
        .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally(() => {
            form.reset();
        });
        request.send(json);
        // request.addEventListener('load', () => {
        //     if (request.status === 200) {
        //         console.log(request.response);
        //         showThanksModal(message.success);
        //         form.reset();
        //         statusMessage.remove();
        //     } else {
        //         showThanksModal(message.failure);
        //     }
        // });
    });
}



function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
   
    prevModalDialog.classList.add('hide');

    openModal();


    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialoge');
    thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>
            <div class="modal__title">${message}</div>
        </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 4000);

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
}

}

module.exports = forms;