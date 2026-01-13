import { RootPage_item } from "../RootPage_item/RootPage_item.js"

export function RootPage() {
    return `
        <body>
            <main class="CommonPagesLayout__content">
                <h1 class="heading--level-1">Toutes mes sessions</h1>
                <div class="RootPage__ts-list-header">
                    <div>icone</div>
                    <h2 class="Heading Heading--level-2">Mes sessions en cours</h2>
                </div>
                <section class="RootPage__training-sessions-list">
                    <div>
                        ${RootPage_item(
                            "PREPA-CONCEPTEUR DEVELOPPEUR D'APPLICATION PYTHON-JAVA", 
                            '22/09/2025', 
                            '10/04/2026', 
                            "https://tse4.mm.bing.net/th/id/OIP.1qij5cctDEYgjNkZTECQygHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3")}
                    </div>
                    <div>
                        ${RootPage_item(
                            "PREPA-CONCEPTEUR DEVELOPPEUR D'APPLICATION PYTHON-JAVA", 
                            '22/09/2025', 
                            '10/04/2026', 
                            "https://tse4.mm.bing.net/th/id/OIP.1qij5cctDEYgjNkZTECQygHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3")}
                    </div>
                </section>
                <div class="RootPage__ts-list-header">
                    <div>icone</div>
                    <h2 class="Heading Heading--level-2">Mes sessions terminées</h2>
                </div>
                <section class="RootPage__training-sessions-list">
                    <div>
                        ${RootPage_item(
                            "PREPA-CONCEPTEUR DEVELOPPEUR D'APPLICATION PYTHON-JAVA", 
                            '22/09/2025', 
                            '10/04/2026', 
                            "https://tse4.mm.bing.net/th/id/OIP.1qij5cctDEYgjNkZTECQygHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3")}
                    </div>
                    <div>
                        ${RootPage_item(
                            "PREPA-CONCEPTEUR DEVELOPPEUR D'APPLICATION PYTHON-JAVA", 
                            '22/09/2025', 
                            '10/04/2026', 
                            "https://tse4.mm.bing.net/th/id/OIP.1qij5cctDEYgjNkZTECQygHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3")}
                    </div>
                </section>
                
            </main>
        </body>
    `
}