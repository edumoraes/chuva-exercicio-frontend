(() => {
  
  const reticencias = document.querySelector('[data-text="reticencias"]');
  const verMais = document.querySelector('[data-text="ver-mais"]');
  const verMenos = document.querySelector('[data-text="ver-menos"]');
  const resumoOculto = document.querySelector('[data-text="resumo-oculto"]');
  
  verMais.addEventListener('click', (evento) => {
    reticencias.classList.add('d-none');
    resumoOculto.classList.remove('d-none');
    verMais.classList.add('d-none');
    verMenos.classList.remove('d-none');
    evento.preventDefault();
  });

  verMenos.addEventListener('click', (evento) => {
    reticencias.classList.remove('d-none');
    resumoOculto.classList.add('d-none');
    verMais.classList.remove('d-none');
    verMenos.classList.add('d-none');
    evento.preventDefault();
  });



  const btnCriarTopico = document.querySelector('[data-btn="criar-topico"]');
  const divCriarTopico = document.querySelector('[data-div="criar-topico"]');
  const divConteudoCriarTopico = document.querySelector('[data-div="conteudo-criar-topico"]');

  btnCriarTopico.addEventListener('click', (evento) => {
    divConteudoCriarTopico.classList.add('d-none');
    divCriarTopico.innerHTML = `
    <span>Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</span>
    <form class="w-100">
      <div class="mb-3">
        <label for="" class="form-label">Assunto</label>
        <input type="text" name="" id="" class="form-control" placeholder="Defina um tópico sucinto para notificar os autores..." aria-describedby="helpId">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Conteúdo</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="mb-3 text-end">
        <button type="submit" class="btn btn-primary mb-3">Enviar</button>
      </div>
    </form>`
  });
  
  

  

	
})()

