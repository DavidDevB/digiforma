import IconCircle from '../icon/iconCircle.js';

console.log('Test iconCircle:', IconCircle('home'));

const icons = {
    home: "home",
    dots: "three--dots--vertical",
    follow: "users",
    program: "clipboard--list",
    check: "sign",
    evaluation: "star",
    document: "folder",
    info: "info--circle"
}

const homeMenu = () => {

    return (
        `<div class="V2_LeftMenuLayout__nav">
            <nav class="SidebarNavigationContent">
                <ul class="SidebarNavigationContent__navigation-container">
                    <li class="SidebarNavigationContent__navigation">${IconCircle(icons.home)} Accueil</li>
                    <li class="SidebarNavigationContent__navigation">${IconCircle(icons.dots)} Séquences e-learning</li>
                    <li class="SidebarNavigationContent__navigation">${IconCircle(icons.follow)} Suivi pédagogique</li>
                    <li class="SidebarNavigationContent__navigation">${IconCircle(icons.program)} Programme</li>
                    <li class="SidebarNavigationContent__navigation">${IconCircle(icons.check)} Emargements</li>
                    <li class="SidebarNavigationContent__navigation">${IconCircle(icons.evaluation)}Evaluations</li>
                    <li class="SidebarNavigationContent__navigation">${IconCircle(icons.document)} Documents</li>
                    <li class="SidebarNavigationContent__navigation">${IconCircle(icons.info)} A propos</li>
               </ul>
            </nav>
        </div>`
    )
}

export default homeMenu