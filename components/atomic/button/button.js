

const button = (title, href) => {

    return (`<div class="Widget__action">
                <a class="Button" href="${href}">
                    ${title}
                </a>
            </div>`);
};


export default button;
