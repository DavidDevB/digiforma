

const button = (title, href) => {

    return (`<div class="Widget__action">
                <a class="Button Button--size-sm Button--variant-solid Button--color-primary Button--text-only" href="${href}">
                    ${title}
                </a>
            </div>`); 
};

export default button;
