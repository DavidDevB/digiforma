import Button from "../../atomic/button/button.js";


export function RootPage_item(title, startDate, endDate, url) {

    return `
        <section class="rootpage_item">
            <div
                class="rootpage_item_img"
                style="
                    background-image: url('${url}');
                    box-shadow: inset 0 0 0 5px rgba(255,255,255,0.35);
                "
            ></div>

            <div class="rootpage_item_body">
                <p class="rootpage_item_title">${title}</p>
                <p class="rootpage_item_date">
                    Du ${startDate} au ${endDate}
                </p>

                <div style="display:flex; align-items:center; justify-content:center;">
                    ${Button("Continuer", "../../../pages/home/home.html")}
                </div>
            </div>
        </section>
    `;
}
