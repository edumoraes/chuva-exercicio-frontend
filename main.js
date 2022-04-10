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
  

	
})()

