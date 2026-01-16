import IconCircle from '../icon/iconCircle.js';

console.log('Test iconCircle:', IconCircle('home'));
console.log('path', window.location.pathname
);
import { renderSessionAccess } from '../sessions/session.js';
const icons = {
    home: "home",
    dots: "three--dots--vertical",
    follow: "users",
    program: "notepad",
    check: "pen--fountain-writing",
    evaluation: "star",
    document: "folder",
    info: "info--circle"
}

const homeMenu = () => {

    return (
        `<div class="V2_LeftMenuLayout__nav">
            <nav class="SidebarNavigationContent">
                <ul class="SidebarNavigationContent__navigation-container">
                    <li class="SidebarNavigationContent__navigation"
                    style="color:${window.location.pathname.includes("home") ? " rgb(166, 77, 144) " : "black"}" ><a class="SidebarNavigationContent__navigation_a" href="/pages/home/home.html">
                    ${IconCircle(icons.home, { bgColor: "transparent", color: window.location.pathname.includes("home") ? "rgb(166, 77, 144)" : "black" })} Accueil</a></li>
                    <li class="SidebarNavigationContent__navigation"  style="color:${window.location.pathname.includes("eLearning") ? " rgb(166, 77, 144) " : "black"}" > <a class="SidebarNavigationContent__navigation_a" href="/pages/eLearning/eLearning.html">${IconCircle(icons.dots, { bgColor: "transparent", color: window.location.pathname.includes("eLearning") ? "rgb(166, 77, 144)" : "black" })} Séquences e-learning</a></li>
                    <li class="SidebarNavigationContent__navigation"> <a class="SidebarNavigationContent__navigation_a"  href="/pages/wip/wip.html">${IconCircle(icons.follow, { bgColor: "transparent", color: window.location.pathname.includes("follow") ? "rgb(166, 77, 144)" : "black" })} Suivi pédagogique</a></li>
                    <li class="SidebarNavigationContent__navigation"> <a class="SidebarNavigationContent__navigation_a"  href="/pages/Programme/Programme.html" style="color:${window.location.pathname.includes("Programme") ? " rgb(166, 77, 144) " : "black"}">${IconCircle(icons.program, { bgColor: "transparent", color: window.location.pathname.includes("Programme") ? "rgb(166, 77, 144)" : "black" })} Programme</a></li>
                    <li class="SidebarNavigationContent__navigation"> <a class="SidebarNavigationContent__navigation_a"  href="/pages/signature/signatureIndex.html" style="color:${window.location.pathname.includes("signature") ? " rgb(166, 77, 144) " : "black"}">${IconCircle(icons.check, { bgColor: "transparent", color: window.location.pathname.includes("signature") ? "rgb(166, 77, 144)" : "black" })} Emargements</li>
                    <li class="SidebarNavigationContent__navigation"> <a class="SidebarNavigationContent__navigation_a"  href="/pages/wip/wip.html">${IconCircle(icons.evaluation, { bgColor: "transparent", color: window.location.pathname.includes("evaluation") ? "rgb(166, 77, 144)" : "black" })}Evaluations</a></li>
                    <li class="SidebarNavigationContent__navigation"> <a class="SidebarNavigationContent__navigation_a"  href="/pages/wip/wip.html">${IconCircle(icons.document, { bgColor: "transparent", color: window.location.pathname.includes("document") ? "rgb(166, 77, 144)" : "black" })} Documents</a></li>
                    <li class="SidebarNavigationContent__navigation"> <a class="SidebarNavigationContent__navigation_a"  href="/pages/about/about.html">${IconCircle(icons.info, { bgColor: "transparent", color: window.location.pathname.includes("info") ? "rgb(166, 77, 144)" : "black" })} A propos</a></li>
               ${renderSessionAccess({
            id: "sessions-access",
            sessions: [
                { value: "prepa-cda", label: "PREPA-CONCEPTEUR DEVELOPPEUR D'..." },
                { value: "cda-python-java", label: "CDA PYTHON-JAVA (Session 2)" },
            ],
            value: "prepa-cda",
        })}
                    </ul>

            </nav>

        </div>`
    )
}
import { initSessionAccess } from "/components/molecular/sessions/session.js";

initSessionAccess({
    id: "sessions-access",
    onChange: (val) => {
        console.log("Session sélectionnée :", val);
        // navigation / reload / fetch
    },
});


export default homeMenu