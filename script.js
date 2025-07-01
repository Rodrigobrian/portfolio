// Função que mostra o conteúdo baseado no botão clicado
function mostrarConteudo(secao) {
    const conteudo = document.getElementById('conteudo');

    // Se clicou em "Sobre Mim"
    if (secao === 'sobre') {
        conteudo.innerHTML = `
            <h2>Sobre Mim</h2>
            <img src="imagens/sua-foto.jpg" alt="Minha Foto" class="foto">
            <p>Olá! Meu nome é Rodrigo Brian, desenvolvedor em formação com forte paixão por tecnologia, lógica de programação e soluções criativas. 
            Atualmente trabalho na <strong>Offertech</strong>, a maior plataforma de combate a ilegalidades online da América Latina, onde tenho a oportunidade de crescer e aplicar minhas habilidades todos os dias.</p>

            <p>Sou uma pessoa proativa, comunicativa e com forte espírito de equipe. Tenho conhecimento em <strong>Python</strong>, <strong>design gráfico com Photoshop</strong>, <strong>lógica de programação</strong> 
            e estou aprofundando meus estudos em <strong>segurança da informação</strong> e <strong>design patterns</strong>. Estou sempre buscando novas formas de aprender e evoluir como profissional.</p>

            <img src="imagens/offertech.jpg" alt="Offertech" style="width: 200px; margin-top: 15px; border-radius: 10px;">
        `;

    // Se clicou em "Formação"
    } else if (secao === 'formacao') {
        conteudo.innerHTML = `
            <h2>Formação e Competências</h2>
            <p><strong>Ensino Médio:</strong> Noel Hugnen de Oliveira Paiva (Conclusão 2014)</p>
            <p><strong>Curso Superior:</strong> CST em Análise e Desenvolvimento de Sistemas (em andamento)</p>
            <p><strong>Idiomas:</strong> Português (nativo), Inglês Intermediário / Alto (B2)</p>

            <h3>Hard Skills</h3>
            <ul>
                <li>Desenvolvimento de scripts em Python</li>
                <li>Design gráfico com Adobe Photoshop</li>
                <li>Boa lógica de programação</li>
            </ul>

            <h3>Soft Skills</h3>
            <ul>
                <li>Pensamento crítico</li>
                <li>Adaptabilidade</li>
                <li>Comunicação</li>
                <li>Trabalho em equipe</li>
                <li>Proatividade</li>
                <li>Liderança</li>
            </ul>
        `;
} else if (secao === 'portfolio') {
        conteudo.innerHTML = `
            <h2>Portfólio</h2>
            <ul>
                <li>
                    <a href="https://github.com/RodrigoBrianDEV/Projeto-Cofrinho0" target="_blank">
                        Projeto Cofrinho
                    </a><br>
                    <img src="imagens/cofrinho.png" alt="Projeto Cofrinho" style="width: 100px; margin-top: 10px;">
                </li>
            </ul>
        `;
} else if (secao === 'contato') {
        conteudo.innerHTML = `
            <h2>Contato</h2>
            <p>Para entrar em contato, envie um email diretamente para: <strong>rodrigobrian60@gmail.com</strong></p>
            <form>
                <input type="text" name="nome" placeholder="Seu nome" required><br><br>
                <input type="email" name="email" placeholder="Seu email" required><br><br>
                <textarea name="mensagem" placeholder="Digite sua mensagem..." rows="4" required></textarea><br><br>
                <button type="button" onclick="alert('O envio automático ainda não está disponível. Envie manualmente para rodrigobrian60@gmail.com')">Enviar</button>
            </form>
        `;
    }
}
