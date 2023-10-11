//Cabeçalho
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <header class="cabecalho">
          <a class="texto" href="">CARDÁPIO</a>
          <img src="imagens/Logo.png" alt="Logo" class="logo">
          <a class="texto" href="">CONTATO</a>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
//Fim Cabeçalho