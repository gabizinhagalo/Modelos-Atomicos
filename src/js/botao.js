document.addEventListener('DOMContentLoaded', () => {
    let botao = document.querySelector('.logo');
    if (botao) {
        botao.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
