const inputs = document.querySelectorAll('input');
let button = document.querySelector('button');

const errorIcon = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
        <circle fill="#FF7979" cx="12" cy="12" r="12"/>
        <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/>
        <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/>
    </g>
</svg>`;

function buttonClick(event) {
    event.preventDefault(); // Previne o envio do formulário

    let formValid = true; // Variável para checar a validade geral do formulário

    inputs.forEach(input => {
        // Limpa mensagens de erro existentes
        const errorMsg = input.parentNode.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();

        // Verifica se o campo está vazio
        if (input.value.trim() === '') {
            // Aplica a borda vermelha ao input
            input.style.border = '1px solid #FF7979'; // Define a borda vermelha

            // Insere a mensagem de erro
            input.insertAdjacentHTML('afterend', `
                <div class="error-message">
                    ${errorIcon}
                    <span>Este campo é obrigatório</span>
                </div>
            `);
            formValid = false; // Se houver um campo inválido, marca o formulário como inválido
        } else {
            // Reseta a borda se o campo estiver preenchido
            input.style.border = '1px solid hsl(246, 25%, 77%)'; // Borda padrão
        }
    });

    // Se o formulário estiver válido, pode prosseguir com o envio ou lógica adicional
    if (formValid) {
        // Lógica para enviar o formulário ou executar uma ação
        alert('Formulário enviado com sucesso!');
    }
}

// Adiciona o evento de clique no botão
button.addEventListener('click', buttonClick);
