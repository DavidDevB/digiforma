import Button from "../../atomic/button/button.js";


export function RootPage_item(title, startDate, endDate, url) {
    return `
        <section class="rootpage_item">
            <div class="rootpage_item_img" style="background-image: url('${url}')"></div>
            <div class="rootpage_item_body">
                    <p class="rootpage_item_title">${title}</p>
                    <p class="rootpage_item_date">Du ${startDate} au ${endDate}</p>
                    <div> ${Button ("Continuer")} </div>
            </div>
        </section>
    `;
}