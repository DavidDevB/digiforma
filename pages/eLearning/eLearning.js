import { Stats } from "../../components/molecular/sequenceCard/stats.js";
import { SequenceCard } from "../../components/molecular/sequenceCard/sequenceCard.js";


const loadSequences = async () => {
  const res = await fetch("../../data/sequence.json");
  console.log('res', res)
  if (!res.ok) {
    throw new Error("Failed to load sequences.json")
  };
  return res.json();
};

export const renderELearningCards = async () => {
  const root = document.getElementById("elearning-root");
  const data = await loadSequences();

  const totalProgress = data.sequences.reduce(
    (sum, sequence) => sum + sequence.progress,
    0
  );

  const globalProgress = Math.round(
    totalProgress / data.sequences.length
  );


  root.innerHTML = `
    ${Stats({ globalProgress: globalProgress, totalSequences: data.sequences.length })}
    <ul class="ModulesPageLayout__modules-scroller">
      ${data.sequences.map(SequenceCard).join("")}
    </ul>
  `;
};



