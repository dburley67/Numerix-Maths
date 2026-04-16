<template>
  <div>
    <ExerciseRunner
      v-if="generatedTest"
      :set="generatedTest"
      @back="generatedTest = null"
    />

    <div v-else class="endpoint-page">
      <div class="endpoint-hero">
        <div class="endpoint-badge">
          <i class="fa-solid fa-graduation-cap"></i>
          End Point Assessment
        </div>

        <h1 class="endpoint-title">Final Mixed Exam</h1>

        <p class="endpoint-sub">
          A 40-question assessment generated from all your practice topics.
          Questions are shuffled each time to give a fresh test.
        </p>

        <div class="endpoint-meta">
          <div class="endpoint-meta-card">
            <i class="fa-solid fa-circle-question"></i>
            <span>40 Questions</span>
          </div>
          <div class="endpoint-meta-card">
            <i class="fa-regular fa-clock"></i>
            <span>~45 min</span>
          </div>
          <div class="endpoint-meta-card">
            <i class="fa-solid fa-layer-group"></i>
            <span>All Topics</span>
          </div>
          <div class="endpoint-meta-card">
            <i class="fa-solid fa-star"></i>
            <span>+200 XP max</span>
          </div>
        </div>

        <div class="endpoint-actions">
          <button class="endpoint-start-btn" @click="startExam">
            <i class="fa-solid fa-play"></i>
            Start Exam
          </button>

          <button class="endpoint-regenerate-btn" @click="previewExam">
            <i class="fa-solid fa-shuffle"></i>
            Regenerate Paper
          </button>
        </div>
      </div>

      <div v-if="previewSet" class="endpoint-preview">
        <h2 class="endpoint-preview-title">Exam Preview</h2>

        <div class="endpoint-topic-breakdown">
          <div
            v-for="item in topicBreakdown"
            :key="item.topic"
            class="endpoint-topic-card"
          >
            <div class="endpoint-topic-name">{{ item.label }}</div>
            <div class="endpoint-topic-count">{{ item.count }} questions</div>
          </div>
        </div>

        <div class="endpoint-sample-list">
          <div
            v-for="(q, i) in previewSet.questions.slice(0, 8)"
            :key="q.id + '-' + i"
            class="endpoint-sample-row"
          >
            <span class="endpoint-sample-num">{{ i + 1 }}</span>
            <span class="endpoint-sample-text">{{ q.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ExerciseRunner from "./ExerciseRunner.vue";
import { exerciseSets } from "../../exerciseData.js";

const generatedTest = ref(null);
const previewSet = ref(null);

const topicMeta = {
  decimals: {
    label: "Decimals & Rounding",
    icon: "fa-solid fa-percentage",
    accent: "#2563eb",
  },
  factors: {
    label: "Factors & HCF",
    icon: "fa-solid fa-cubes",
    accent: "#7c3aed",
  },
  standard: {
    label: "Standard Form",
    icon: "fa-solid fa-superscript",
    accent: "#0d9488",
  },
  percentages: {
    label: "Percentages",
    icon: "fa-solid fa-percent",
    accent: "#dc2626",
  },
  ratios: {
    label: "Ratios & Sharing",
    icon: "fa-solid fa-scale-balanced",
    accent: "#d97706",
  },
  proportion: {
    label: "Direct & Inverse Proportion",
    icon: "fa-solid fa-up-down-left-right",
    accent: "#8b5cf6",
  },
};

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildQuestionPool() {
  return Object.values(exerciseSets).flatMap((set) =>
    set.questions.map((q, index) => ({
      ...q,
      sourceSetId: set.id,
      topic: set.topic,
      difficulty: set.difficulty,
      accent: set.accent,
      icon: set.icon,
      uniqueKey: `${set.id}-${q.id}-${index}`,
    }))
  );
}

function generateBalancedExam() {
  const allQuestions = buildQuestionPool();

  const groupedByTopic = Object.keys(topicMeta).reduce((acc, topic) => {
    acc[topic] = shuffle(allQuestions.filter((q) => q.topic === topic));
    return acc;
  }, {});

  // 40 total:
  // 6 topics -> give each 6 first = 36, then add 4 extra randomly
  const selected = [];
  const topics = Object.keys(topicMeta);

  topics.forEach((topic) => {
    selected.push(...groupedByTopic[topic].slice(0, 6));
  });

  const leftovers = topics.flatMap((topic) => groupedByTopic[topic].slice(6));
  selected.push(...shuffle(leftovers).slice(0, 4));

  const finalQuestions = shuffle(selected).map((q, index) => ({
    id: index + 1,
    text: q.text,
    answer: q.answer,
    options: q.options,
    hint: q.hint,
    topic: q.topic,
    sourceSetId: q.sourceSetId,
  }));

  return {
    id: "endpoint_exam",
    topic: "mixed",
    title: "End Point Assessment",
    difficulty: "challenge",
    difficultyLabel: "Final Exam",
    icon: "fa-solid fa-graduation-cap",
    accent: "#f97316",
    xpPerQ: 5,
    questions: finalQuestions,
  };
}

function previewExam() {
  previewSet.value = generateBalancedExam();
}

function startExam() {
  generatedTest.value = generateBalancedExam();
}

const topicBreakdown = computed(() => {
  if (!previewSet.value) return [];

  const counts = {};
  for (const q of previewSet.value.questions) {
    counts[q.topic] = (counts[q.topic] || 0) + 1;
  }

  return Object.keys(topicMeta).map((topic) => ({
    topic,
    label: topicMeta[topic].label,
    count: counts[topic] || 0,
  }));
});

// generate first preview on page load
previewExam();
</script>

<style scoped>
.endpoint-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px;
  font-family: "Poppins", sans-serif;
}

.endpoint-hero {
  background: linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%);
  color: white;
  border-radius: 24px;
  padding: 36px;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.12);
  margin-bottom: 28px;
}

.endpoint-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.28);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-bottom: 14px;
}

.endpoint-title {
  font-size: 38px;
  font-weight: 900;
  margin: 0 0 10px;
}

.endpoint-sub {
  font-size: 15px;
  line-height: 1.6;
  max-width: 720px;
  margin: 0 0 22px;
  opacity: 0.95;
}

.endpoint-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.endpoint-meta-card {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 13px;
  font-weight: 700;
}

.endpoint-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.endpoint-start-btn,
.endpoint-regenerate-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 14px;
  padding: 13px 22px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.18s ease;
}

.endpoint-start-btn {
  background: white;
  color: #ea580c;
}

.endpoint-regenerate-btn {
  background: rgba(255, 255, 255, 0.16);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.22);
}

.endpoint-start-btn:hover,
.endpoint-regenerate-btn:hover {
  transform: translateY(-2px);
}

.endpoint-preview {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
}

.endpoint-preview-title {
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 18px;
  color: var(--text-dark);
}

.endpoint-topic-breakdown {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 22px;
}

.endpoint-topic-card {
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 16px;
}

.endpoint-topic-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 6px;
}

.endpoint-topic-count {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  opacity: 0.75;
}

.endpoint-sample-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.endpoint-sample-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 12px 14px;
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.endpoint-sample-num {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: #fff7ed;
  color: #ea580c;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.endpoint-sample-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1.45;
}

@media (max-width: 800px) {
  .endpoint-topic-breakdown {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 680px) {
  .endpoint-page {
    padding: 16px;
  }

  .endpoint-hero {
    padding: 24px 20px;
  }

  .endpoint-title {
    font-size: 28px;
  }

  .endpoint-topic-breakdown {
    grid-template-columns: 1fr;
  }

  .endpoint-actions {
    flex-direction: column;
  }

  .endpoint-start-btn,
  .endpoint-regenerate-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>