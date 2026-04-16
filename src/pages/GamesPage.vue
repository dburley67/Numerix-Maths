<template>
  <div class="match-game-page">
    <!-- Header -->
    <div class="game-header">
      <div class="game-header-badge">
        <i class="fa-solid fa-gamepad"></i> Mixed Maths Game
      </div>
      <h1 class="game-title">Timed Match Challenge</h1>
      <p class="game-sub">
        Drag each answer card onto the correct question before the timer runs
        out.
      </p>

      <div class="game-top-meta">
        <div class="game-stat">
          <span class="game-stat-label">Score</span>
          <span class="game-stat-value"
            >{{ score }} / {{ totalQuestions }}</span
          >
        </div>
        <div
          class="game-stat game-stat-timer"
          :class="{ danger: timeLeft <= 15 }"
        >
          <span class="game-stat-label">Time Left</span>
          <span class="game-stat-value">{{ timeLeft }}s</span>
        </div>
        <div class="game-stat">
          <span class="game-stat-label">Matches Left</span>
          <span class="game-stat-value">{{ remainingMatches }}</span>
        </div>
      </div>
    </div>

    <!-- Status banner -->
    <div class="game-status-banner" :class="bannerClass">
      <i :class="bannerIcon"></i>
      <span>{{ bannerText }}</span>
    </div>

    <!-- Main grid -->
    <div class="game-grid">
      <!-- Questions -->
      <div class="game-column">
        <div class="column-title">
          <i class="fa-solid fa-circle-question"></i> Questions
        </div>

        <div
          v-for="item in questions"
          :key="item.id"
          class="drop-card"
          :class="{
            matched: item.matched,
            'drop-hover': hoverTarget === item.id && !item.matched,
          }"
          @dragover.prevent="onDragOver(item.id)"
          @dragleave="onDragLeave"
          @drop="onDrop(item)"
        >
          <div class="drop-card-top">
            <span class="topic-pill" :class="'topic-' + item.topic">{{
              item.topicLabel
            }}</span>
            <span class="drop-status" v-if="item.matched">
              <i class="fa-solid fa-circle-check"></i> Matched
            </span>
          </div>

          <div class="drop-question">
            {{ item.question }}
          </div>

          <div class="drop-answer-slot" :class="{ filled: item.matched }">
            <template v-if="item.matched">
              <i class="fa-solid fa-check"></i>
              {{ item.answer }}
            </template>
            <template v-else>
              <i class="fa-solid fa-arrow-down"></i>
              Drop answer here
            </template>
          </div>
        </div>
      </div>

      <!-- Answers -->
      <div class="game-column">
        <div class="column-title">
          <i class="fa-solid fa-puzzle-piece"></i> Answers
        </div>

        <div class="answers-pool">
          <div
            v-for="answer in availableAnswers"
            :key="answer.id"
            class="drag-card"
            draggable="true"
            @dragstart="onDragStart(answer)"
            @dragend="onDragEnd"
          >
            <i class="fa-solid fa-grip-lines"></i>
            <span>{{ answer.answer }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- End panel -->
    <div v-if="gameFinished" class="end-panel">
      <div class="end-icon">
        <i
          :class="gameWon ? 'fa-solid fa-trophy' : 'fa-solid fa-hourglass-end'"
        ></i>
      </div>
      <h2>{{ gameWon ? "Challenge Complete!" : "Time's Up!" }}</h2>
      <p>
        You matched <strong>{{ score }}</strong> out of
        <strong>{{ totalQuestions }}</strong
        >.
      </p>
      <button class="restart-btn" @click="resetGame">
        <i class="fa-solid fa-rotate-left"></i> Play Again
      </button>
    </div>

    <!-- Controls -->
    <div v-else class="game-actions">
      <button class="restart-btn" @click="resetGame">
        <i class="fa-solid fa-rotate-left"></i> Restart
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const initialQuestions = [
  {
    id: 1,
    topic: "bidmas",
    topicLabel: "BIDMAS",
    question: "2 + 3 × 4",
    answer: "14",
    matched: false,
  },
  {
    id: 2,
    topic: "fractions",
    topicLabel: "Fractions",
    question: "1/2 + 1/4",
    answer: "3/4",
    matched: false,
  },
  {
    id: 3,
    topic: "probability",
    topicLabel: "Probability",
    question: "Probability of rolling a 6 on a fair die",
    answer: "1/6",
    matched: false,
  },
  {
    id: 4,
    topic: "percentages",
    topicLabel: "Percentages",
    question: "25% of 80",
    answer: "20",
    matched: false,
  },
  {
    id: 5,
    topic: "standard",
    topicLabel: "Standard Form",
    question: "5 × 10³",
    answer: "5000",
    matched: false,
  },
  {
    id: 6,
    topic: "ratios",
    topicLabel: "Ratio",
    question: "Simplify 8:12",
    answer: "2:3",
    matched: false,
  },
];

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const questions = ref([]);
const draggedAnswer = ref(null);
const hoverTarget = ref(null);
const timeLeft = ref(60);
const timer = ref(null);
const feedbackState = ref("neutral");

const totalQuestions = computed(() => questions.value.length);
const score = computed(() => questions.value.filter((q) => q.matched).length);
const remainingMatches = computed(() => totalQuestions.value - score.value);

const availableAnswers = computed(() =>
  questions.value
    .filter((q) => !q.matched)
    .map((q) => ({ id: q.id, answer: q.answer }))
    .sort(() => Math.random() - 0.5),
);

const gameWon = computed(() => score.value === totalQuestions.value);
const gameFinished = computed(() => gameWon.value || timeLeft.value <= 0);

const bannerText = computed(() => {
  if (gameWon.value) return "Amazing work — you matched everything correctly.";
  if (timeLeft.value <= 0)
    return "The timer has ended. See how many you matched.";
  if (feedbackState.value === "correct") return "Correct match!";
  if (feedbackState.value === "wrong") return "Not quite — try another match.";
  return "Drag an answer card into the matching question box.";
});

const bannerClass = computed(() => {
  if (gameWon.value) return "success";
  if (timeLeft.value <= 0) return "danger";
  if (feedbackState.value === "correct") return "success";
  if (feedbackState.value === "wrong") return "danger";
  return "neutral";
});

const bannerIcon = computed(() => {
  if (gameWon.value) return "fa-solid fa-trophy";
  if (timeLeft.value <= 0) return "fa-solid fa-hourglass-end";
  if (feedbackState.value === "correct") return "fa-solid fa-circle-check";
  if (feedbackState.value === "wrong") return "fa-solid fa-circle-xmark";
  return "fa-solid fa-hand-pointer";
});

function startTimer() {
  clearInterval(timer.value);
  timer.value = setInterval(() => {
    if (timeLeft.value > 0 && !gameWon.value) {
      timeLeft.value--;
    } else {
      clearInterval(timer.value);
    }
  }, 1000);
}

function onDragStart(answer) {
  if (gameFinished.value) return;
  draggedAnswer.value = answer;
}

function onDragEnd() {
  hoverTarget.value = null;
}

function onDragOver(questionId) {
  if (gameFinished.value) return;
  hoverTarget.value = questionId;
}

function onDragLeave() {
  hoverTarget.value = null;
}

function onDrop(question) {
  if (gameFinished.value || !draggedAnswer.value || question.matched) return;

  if (draggedAnswer.value.id === question.id) {
    question.matched = true;
    feedbackState.value = "correct";
  } else {
    feedbackState.value = "wrong";
  }

  draggedAnswer.value = null;
  hoverTarget.value = null;

  setTimeout(() => {
    if (!gameWon.value && timeLeft.value > 0) {
      feedbackState.value = "neutral";
    }
  }, 900);
}

function resetGame() {
  questions.value = shuffle(
    initialQuestions.map((q) => ({
      ...q,
      matched: false,
    })),
  );
  draggedAnswer.value = null;
  hoverTarget.value = null;
  timeLeft.value = 60;
  feedbackState.value = "neutral";
  startTimer();
}

onMounted(() => {
  resetGame();
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<style scoped>
.match-game-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;
  width: 100%;
  font-family: "Poppins", sans-serif;
}

.game-header {
  margin-bottom: 24px;
}

.game-header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #eef2ff;
  color: #4f46e5;
  border: 1.5px solid #c7d2fe;
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 14px;
}

.game-title {
  font-size: 40px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 8px;
}

.game-sub {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 20px;
}

.game-top-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.game-stat {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.game-stat-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: var(--text-primary);
  opacity: 0.7;
}

.game-stat-value {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-dark);
}

.game-stat-timer.danger .game-stat-value {
  color: #dc2626;
}

.game-status-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  padding: 14px 18px;
  font-size: 14px;
  font-weight: 700;
  margin: 24px 0;
}

.game-status-banner.neutral {
  background: #eff6ff;
  border: 1.5px solid #bfdbfe;
  color: #1d4ed8;
}

.game-status-banner.success {
  background: #ecfdf5;
  border: 1.5px solid #86efac;
  color: #15803d;
}

.game-status-banner.danger {
  background: #fef2f2;
  border: 1.5px solid #fca5a5;
  color: #dc2626;
}

.game-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.9fr;
  gap: 24px;
  align-items: start;
}

.game-column {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
}

.column-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
}

.column-title i {
  color: #2563eb;
}

.drop-card {
  background: var(--bg-page);
  border: 2px dashed var(--border-color);
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 14px;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.drop-card:last-child {
  margin-bottom: 0;
}

.drop-card.drop-hover {
  border-color: #2563eb;
  background: #eff6ff;
  transform: translateY(-2px);
}

.drop-card.matched {
  border-style: solid;
  border-color: #16a34a;
  background: #f0fdf4;
}

.drop-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.topic-pill {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.3px;
}

.topic-bidmas {
  background: #fee2e2;
  color: #b91c1c;
}
.topic-fractions {
  background: #ccfbf1;
  color: #0f766e;
}
.topic-probability {
  background: #e0e7ff;
  color: #4338ca;
}
.topic-percentages {
  background: #dbeafe;
  color: #1d4ed8;
}
.topic-standard {
  background: #ffedd5;
  color: #c2410c;
}
.topic-ratios {
  background: #fef3c7;
  color: #b45309;
}

.drop-status {
  font-size: 12px;
  font-weight: 700;
  color: #15803d;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.drop-question {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 14px;
  line-height: 1.5;
}

.drop-answer-slot {
  min-height: 48px;
  border-radius: 12px;
  border: 1.5px dashed #cbd5e1;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 700;
  text-align: center;
}

.drop-answer-slot.filled {
  border-style: solid;
  border-color: #16a34a;
  background: #dcfce7;
  color: #166534;
}

.answers-pool {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.drag-card {
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: #fff;
  border-radius: 16px;
  padding: 16px 18px;
  font-size: 15px;
  font-weight: 700;
  cursor: grab;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.18);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    filter 0.18s ease;
}

.drag-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(37, 99, 235, 0.24);
  filter: brightness(1.03);
}

.drag-card:active {
  cursor: grabbing;
}

.end-panel {
  margin-top: 28px;
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 22px;
  padding: 30px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  text-align: center;
}

.end-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 14px;
  border-radius: 50%;
  background: #eef2ff;
  color: #4f46e5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}

.end-panel h2 {
  margin: 0 0 10px;
  font-size: 28px;
  color: var(--text-dark);
}

.end-panel p {
  margin: 0 0 20px;
  color: var(--text-primary);
  font-size: 15px;
  font-weight: 600;
}

.game-actions {
  margin-top: 22px;
  display: flex;
  justify-content: center;
}

.restart-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease;
}

.restart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.2);
  background: #1d4ed8;
}

body.dark .drop-card.matched {
  background: #14532d;
  border-color: #16a34a;
}

body.dark .drop-answer-slot.filled {
  background: #14532d;
  color: #bbf7d0;
}

body.dark .game-status-banner.neutral {
  background: #172554;
  border-color: #2563eb;
  color: #93c5fd;
}

body.dark .game-status-banner.success {
  background: #052e16;
  border-color: #16a34a;
  color: #86efac;
}

body.dark .game-status-banner.danger {
  background: #450a0a;
  border-color: #dc2626;
  color: #fca5a5;
}

@media (max-width: 1100px) {
  .game-grid {
    grid-template-columns: 1fr;
  }

  .game-top-meta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .match-game-page {
    padding: 20px 16px;
  }

  .game-title {
    font-size: 30px;
  }

  .game-column {
    padding: 18px;
  }

  .drop-card,
  .drag-card {
    border-radius: 14px;
  }
}
</style>
