

const button = (title, href) => {

    return (`<div class="Widget__action">
        ${href.includes(".pdf") ? `<a class="Button" href="${href}" download>
                    ${title}
                </a>`: `    <a class="Button" href="${href}">
                    ${title}
                </a>`}

            </div>`);
};


export default button;
