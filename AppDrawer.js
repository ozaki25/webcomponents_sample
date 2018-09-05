class AppDrawer extends HTMLElement {
  get open() {
    console.log('get open');
    return this.hasAttribute('open');
  }

  set open(val) {
    console.log('set open');
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
    this.toggleDrawer();
  }

  get disabled() {
    console.log('get disabled');
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    console.log('set disabled');
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  constructor() {
    super();
    console.log('constructor');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        p {
          color: blue;
          cursor: pointer;
        }
      </style>
      <p><slot></slot></p>
    `;
    this.addEventListener('click', this.onClick);
  }

  onClick(e) {
    if (this.disabled) return;
    this.toggleDrawer();
  }

  toggleDrawer() {
    console.log('toggle!');
  }
}

customElements.define('app-drawer', AppDrawer);
