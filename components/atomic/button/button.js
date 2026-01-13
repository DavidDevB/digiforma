

const button = (title) => {

    const style = `<style>

    .Button {font-size: 16px;
    color: white;
  background: #b2539a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 8px;
}
  </style>`;

    return (`<div class="Widget__action" >
                <a class="Button Button--size-sm Button--variant-solid Button--color-primary Button--text-only" href="">
                    ${title}
                </a>
            </div>`); // QUOI METTRE DANS HREF ?

};

export default button;
