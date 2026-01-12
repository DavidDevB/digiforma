

const homeMenu = () => {

    const style = `<style>

    .V2_LeftMenuLayout__nav {
    display: block;
    width: var(--sidebar-width);
}

    .SidebarNavigationContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.SidebarNavigationContent__navigation-container {
    border-bottom: 1px solid var(--colors-grey-300);
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    list-style-type: none;
    margin: 0;
    margin-bottom: var(--space-4);
    padding: 0;
    padding-bottom: var(--space-4);
}

    </style>`

    return (
        style + 
        `<div class="V2_LeftMenuLayout__nav">
            <nav class="SidebarNavigationContent">
                <ul class="SidebarNavigationContent__navigation-container">
                    <li class="SidebarNavigationContent__navigation">Accueil</li>
                    <li class="SidebarNavigationContent__navigation">Séquences e-learning</li>
                    <li class="SidebarNavigationContent__navigation">Suivi pédagogique</li>
                    <li class="SidebarNavigationContent__navigation">Programme</li>
                    <li class="SidebarNavigationContent__navigation">Emargements</li>
                    <li class="SidebarNavigationContent__navigation">Evaluations</li>
                    <li class="SidebarNavigationContent__navigation">Documents</li>
                    <li class="SidebarNavigationContent__navigation">A propos</li>
               </ul>
            </nav>
        </div>`
    )
}

export default homeMenu