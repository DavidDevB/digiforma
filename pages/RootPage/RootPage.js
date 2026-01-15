import { IconCircle } from "../../components/molecular/icon/iconCircle.js";
import { RootPage_item } from "../../components/molecular/RootPage_item/RootPage_item.js";

const loadSessions = async () => {
    const res = await fetch("../../data/rootItem.json");
    return res.json();
};



export async function RootPage() {
    const data = await loadSessions();

    console.log(data)


    return `
        <main class="CommonPagesLayout__content">
            <h1 class="heading--level-1">Toutes mes sessions</h1>

            <div class="RootPage__ts-list-header">
                <div>${IconCircle("student--hat")}</div>
                <h2 class="Heading Heading--level-2">Mes sessions en cours</h2>
            </div>

            <section class="RootPage__training-sessions-list">
                ${data.current
            .map(item =>
                RootPage_item(
                    item.title,
                    item.startDate,
                    item.endDate,
                    item.coverUrl
                )
            )
            .join("")
        }
            </section>

            <div class="RootPage__ts-list-header">
                <div>${IconCircle("student--hat")}</div>
                <h2 class="Heading Heading--level-2">Mes sessions terminées</h2>
            </div>

            <section class="RootPage__training-sessions-list">
                ${data.completed
            .map(item =>
                RootPage_item(
                    item.title,
                    item.startDate,
                    item.endDate,
                    item.coverUrl
                )
            )
            .join("")
        }
            </section>
        </main>
    `;
}
