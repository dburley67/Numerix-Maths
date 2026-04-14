<template>
  <div class="lesson-layout">
    <!-- LEFT: Main lesson content -->
    <div class="lesson-page">
      <!-- ── Lesson Header ── -->
      <div class="lesson-hero lesson-hero-amber">
        <div class="lesson-hero-label">
          <i class="fa-solid fa-book-open"></i> Lesson 11
        </div>
        <h1 class="lesson-hero-title">Ratios &amp; Sharing</h1>
        <p class="lesson-hero-sub">
          Learn how to simplify ratios, compare quantities, and share amounts in
          a given ratio.
        </p>
        <div class="lesson-hero-chips">
          <span class="hero-chip">
            <i class="fa-solid fa-circle-question"></i> 12 questions
          </span>
          <span class="hero-chip">
            <i class="fa-regular fa-clock"></i> ~20 min
          </span>
          <span class="hero-chip hero-chip-amber">
            <i class="fa-solid fa-signal"></i> Foundation
          </span>
        </div>
      </div>

      <!-- ── Progress Bar ── -->
      <div class="lesson-progress-wrap">
        <div class="lesson-progress-label">
          <span>Lesson Progress</span>
          <span class="lesson-progress-pct lesson-progress-pct-amber"
            >{{ Math.round(progress) }}%</span
          >
        </div>
        <div class="lesson-progress-track">
          <div
            class="lesson-progress-fill lesson-progress-fill-amber"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>

      <!-- ── SECTION 1: What is a ratio? ── -->
      <div class="lesson-section" ref="sec1" :class="{ visible: sec1Visible }">
        <div class="section-header">
          <div class="section-num section-num-amber">1</div>
          <h2 class="section-title">What is a Ratio?</h2>
        </div>
        <div class="section-body">
          <p class="lesson-text">
            A <strong>ratio</strong> compares two or more quantities. It shows
            how much of one thing there is compared to another. Ratios are often
            written using a colon, such as <strong>2:3</strong>.
          </p>

          <div class="ratio-intro-card">
            <div class="ratio-visual">
              <div class="ratio-balls">
                <span class="ratio-ball ratio-ball-amber"></span>
                <span class="ratio-ball ratio-ball-amber"></span>
                <span class="ratio-colon">:</span>
                <span class="ratio-ball ratio-ball-blue"></span>
                <span class="ratio-ball ratio-ball-blue"></span>
                <span class="ratio-ball ratio-ball-blue"></span>
              </div>
              <div class="ratio-example-label">2 : 3</div>
            </div>

            <div class="ratio-parts">
              <div class="ratio-part">
                <div class="ratio-part-badge rpb-left">First</div>
                <div class="ratio-part-body">
                  <strong>2 parts</strong>
                  <p>This is the first quantity in the comparison.</p>
                </div>
              </div>

              <div class="ratio-part">
                <div class="ratio-part-badge rpb-right">Second</div>
                <div class="ratio-part-body">
                  <strong>3 parts</strong>
                  <p>This is the second quantity in the comparison.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="callout callout-amber">
            <i class="fa-solid fa-lightbulb callout-icon"></i>
            <div>
              <strong>Tip:</strong> Ratios compare quantities. They do not tell
              you the exact amount unless you also know the total or the size of
              one part.
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 2: Simplifying ratios ── -->
      <div class="lesson-section" ref="sec2" :class="{ visible: sec2Visible }">
        <div class="section-header">
          <div class="section-num section-num-amber">2</div>
          <h2 class="section-title">Worked Example: Simplifying Ratios</h2>
        </div>
        <div class="section-body">
          <p class="lesson-text">
            To simplify a ratio, divide both parts by the
            <strong>same number</strong>. This is similar to simplifying a
            fraction.
          </p>

          <div class="diagram-wrap">
            <div class="whiteboard">
              <svg
                class="diagram-svg"
                viewBox="0 0 420 260"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="70" y="120" class="svg-num-black">8</text>
                <text x="118" y="120" class="svg-colon-black">:</text>
                <text x="150" y="120" class="svg-num-black">12</text>

                <text
                  x="205"
                  y="102"
                  class="svg-arrow-text svg-fade"
                  style="animation-delay: 0.35s"
                >
                  ÷4
                </text>

                <line
                  x1="185"
                  y1="122"
                  x2="270"
                  y2="122"
                  stroke="#d97706"
                  stroke-width="4"
                  stroke-linecap="round"
                  class="svg-draw line-draw-amber"
                />

                <polygon
                  points="270,122 256,114 256,130"
                  fill="#d97706"
                  class="svg-fade"
                  style="animation-delay: 0.7s"
                />

                <text
                  x="305"
                  y="120"
                  class="svg-num-amber svg-fade"
                  style="animation-delay: 0.9s"
                >
                  2
                </text>
                <text
                  x="336"
                  y="120"
                  class="svg-colon-amber svg-fade"
                  style="animation-delay: 1s"
                >
                  :
                </text>
                <text
                  x="360"
                  y="120"
                  class="svg-num-amber svg-fade"
                  style="animation-delay: 1.1s"
                >
                  3
                </text>

                <text
                  x="286"
                  y="165"
                  class="svg-label-amber svg-fade"
                  style="animation-delay: 1.25s"
                >
                  simplest form
                </text>
              </svg>

              <div class="diagram-legend">
                <span class="legend-item legend-amber">
                  <span class="legend-dot"></span> Simplified ratio
                </span>
              </div>
            </div>

            <div class="steps-panel">
              <div class="step-item">
                <div class="step-dot step-dot-amber-1">1</div>
                <div class="step-text">
                  <strong>Find a common factor</strong> of both numbers.<br />
                  <span class="step-ex"
                    >8 and 12 can both be divided by <strong>4</strong></span
                  >
                </div>
              </div>

              <div class="step-item">
                <div class="step-dot step-dot-amber-2">2</div>
                <div class="step-text">
                  <strong>Divide both parts</strong> of the ratio by that
                  factor.<br />
                  <span class="step-ex">8 ÷ 4 = 2 and 12 ÷ 4 = 3</span>
                </div>
              </div>

              <div class="step-item">
                <div class="step-dot step-dot-amber-3">3</div>
                <div class="step-text">
                  <strong>Check whether it can be simplified again.</strong
                  ><br />
                  <span class="step-ex"
                    >2 and 3 share no factor greater than 1</span
                  >
                </div>
              </div>

              <div class="step-result step-result-amber">
                <span class="step-result-label">Answer:</span>
                <span class="step-result-val"
                  >8 : 12 = <strong>2 : 3</strong></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 3: Sharing in a ratio ── -->
      <div class="lesson-section" ref="sec3" :class="{ visible: sec3Visible }">
        <div class="section-header">
          <div class="section-num section-num-amber">3</div>
          <h2 class="section-title">Worked Example: Sharing in a Ratio</h2>
        </div>
        <div class="section-body">
          <p class="lesson-text">
            To share an amount in a ratio, first find the
            <strong>total number of parts</strong>. Then divide the total amount
            by that number to find the value of one part.
          </p>

          <div class="sharing-wrap">
            <div class="sharing-number">
              Share <span class="highlight-amber">20</span> in the ratio
              <span class="highlight-amber">1 : 3</span>
            </div>

            <div class="sharing-steps">
              <div class="sharing-step">
                <div class="sharing-step-badge">Step 1</div>
                <div class="sharing-step-body">
                  <div class="sharing-focus">Add the ratio parts together</div>
                  <div class="sharing-rule">
                    1 + 3 = <strong>4 parts</strong>
                  </div>
                </div>
              </div>

              <div class="sharing-connector">
                <i class="fa-solid fa-arrow-down"></i>
              </div>

              <div class="sharing-step">
                <div class="sharing-step-badge sharing-step-badge-b">
                  Step 2
                </div>
                <div class="sharing-step-body">
                  <div class="sharing-focus">Find the value of one part</div>
                  <div class="sharing-rule">20 ÷ 4 = <strong>5</strong></div>
                </div>
              </div>

              <div class="sharing-connector">
                <i class="fa-solid fa-arrow-down"></i>
              </div>

              <div class="sharing-step">
                <div class="sharing-step-badge sharing-step-badge-c">
                  Step 3
                </div>
                <div class="sharing-step-body">
                  <div class="sharing-focus">Multiply by each ratio part</div>
                  <div class="sharing-rule">
                    1 × 5 = <strong>5</strong> and 3 × 5 = <strong>15</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="sharing-final">
              <span class="sharing-final-label">Final Answer</span>
              <span class="sharing-final-eq"
                >20 shared in the ratio 1:3 is <strong>5 and 15</strong></span
              >
            </div>
          </div>

          <div class="callout callout-amber">
            <i class="fa-solid fa-circle-info callout-icon"></i>
            <div>
              <strong>Remember:</strong> Add the ratio numbers first. That tells
              you how many equal parts the total is split into.
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 4: Try It Yourself ── -->
      <div class="lesson-section" ref="sec4" :class="{ visible: sec4Visible }">
        <div class="section-header">
          <div class="section-num section-num-amber">4</div>
          <h2 class="section-title">Try It Yourself</h2>
        </div>
        <div class="section-body">
          <p class="lesson-text">
            Answer the questions below about ratios and sharing:
          </p>

          <div class="quiz-grid">
            <div
              v-for="(q, i) in quizQuestions"
              :key="i"
              class="quiz-card"
              :class="{ answered: q.selected !== null }"
            >
              <div class="quiz-q">{{ q.question }}</div>
              <div class="quiz-opts">
                <button
                  v-for="opt in q.options"
                  :key="opt"
                  class="quiz-opt"
                  :class="{
                    'opt-correct': q.selected !== null && opt === q.answer,
                    'opt-wrong': q.selected === opt && opt !== q.answer,
                    'opt-neutral':
                      q.selected !== null &&
                      opt !== q.answer &&
                      opt !== q.selected,
                  }"
                  @click="selectAnswer(i, opt)"
                  :disabled="q.selected !== null"
                >
                  {{ opt }}
                </button>
              </div>

              <div v-if="q.selected !== null" class="quiz-feedback">
                <template v-if="q.selected === q.answer">
                  <i
                    class="fa-solid fa-circle-check"
                    style="color: #16a34a"
                  ></i>
                  <span class="feedback-correct"
                    >Correct! {{ q.explanation }}</span
                  >
                </template>
                <template v-else>
                  <i
                    class="fa-solid fa-circle-xmark"
                    style="color: #dc2626"
                  ></i>
                  <span class="feedback-wrong"
                    >Not quite. {{ q.explanation }}</span
                  >
                </template>
              </div>
            </div>
          </div>

          <div v-if="allAnswered" class="score-panel">
            <div class="score-icon">
              <i class="fa-solid fa-star" v-for="n in scoreStars" :key="n"></i>
            </div>
            <div class="score-text">
              You got
              <strong>{{ correctCount }} / {{ quizQuestions.length }}</strong>
              correct!
            </div>
            <button class="score-retry score-retry-amber" @click="resetQuiz">
              <i class="fa-solid fa-rotate-left"></i> Try Again
            </button>
          </div>
        </div>
      </div>

      <!-- ── Summary ── -->
      <div
        class="lesson-summary lesson-summary-amber"
        ref="sec5"
        :class="{ visible: sec5Visible }"
      >
        <h3 class="summary-title">
          <i class="fa-solid fa-circle-check"></i> Lesson Summary
        </h3>
        <ul class="summary-list">
          <li><i class="fa-solid fa-check"></i> Ratios compare quantities</li>
          <li>
            <i class="fa-solid fa-check"></i> Simplify ratios by dividing both
            parts by the same number
          </li>
          <li>
            <i class="fa-solid fa-check"></i> To share in a ratio, add the parts
            to find the total number of parts
          </li>
          <li>
            <i class="fa-solid fa-check"></i> Divide the total amount by the
            total number of parts, then multiply
          </li>
        </ul>
        <div class="summary-actions">
          <button class="btn-next btn-next-amber">
            Next Lesson: Direct &amp; Inverse Proportion
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- RIGHT: Video sidebar -->
    <aside class="lesson-video-sidebar">
      <div class="video-sidebar-card">
        <div class="video-sidebar-header">
          <i class="fa-solid fa-circle-play"></i>
          <h3>Helpful Videos</h3>
        </div>
        <p class="video-sidebar-sub">
          Watch these alongside the lesson for extra support.
        </p>

        <div class="lesson-video-card">
          <div class="lesson-video-top">
            <span class="video-tag video-tag-amber">Video 1</span>
            <span class="video-topic">What is a Ratio?</span>
          </div>
          <div class="lesson-video-frame-wrap">
            <iframe
              class="lesson-video-frame"
              src="https://www.youtube.com/embed/gmY5M4LrT1E"
              title="What is a Ratio"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
              "
              allowfullscreen
            ></iframe>
          </div>
          <p class="lesson-video-desc">
            A simple introduction to what ratios mean and how to compare
            quantities.
          </p>
        </div>

        <div class="lesson-video-card">
          <div class="lesson-video-top">
            <span class="video-tag video-tag-amber">Video 2</span>
            <span class="video-topic">Simplifying Ratios</span>
          </div>
          <div class="lesson-video-frame-wrap">
            <iframe
              class="lesson-video-frame"
              src="https://www.youtube.com/embed/9TQJZlA7Q4Q"
              title="Simplifying Ratios"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
              "
              allowfullscreen
            ></iframe>
          </div>
          <p class="lesson-video-desc">
            Useful for learning how to divide both parts of a ratio by the same
            value.
          </p>
        </div>

        <div class="lesson-video-card">
          <div class="lesson-video-top">
            <span class="video-tag video-tag-amber">Video 3</span>
            <span class="video-topic">Sharing in a Ratio</span>
          </div>
          <div class="lesson-video-frame-wrap">
            <iframe
              class="lesson-video-frame"
              src="https://www.youtube.com/embed/3P7b8t8A0mA"
              title="Sharing in a Ratio"
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
              "
              allowfullscreen
            ></iframe>
          </div>
          <p class="lesson-video-desc">
            Walks through how to split an amount into given ratio parts step by
            step.
          </p>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

/* ── Scroll visibility ── */
const sec1 = ref(null);
const sec1Visible = ref(false);
const sec2 = ref(null);
const sec2Visible = ref(false);
const sec3 = ref(null);
const sec3Visible = ref(false);
const sec4 = ref(null);
const sec4Visible = ref(false);
const sec5 = ref(null);
const sec5Visible = ref(false);

const observers = [];

function observe(el, flag) {
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) flag.value = true;
    },
    { threshold: 0.12 },
  );
  if (el.value) obs.observe(el.value);
  observers.push(obs);
}

onMounted(() => {
  observe(sec1, sec1Visible);
  observe(sec2, sec2Visible);
  observe(sec3, sec3Visible);
  observe(sec4, sec4Visible);
  observe(sec5, sec5Visible);
  sec1Visible.value = true;
});

onUnmounted(() => observers.forEach((o) => o.disconnect()));

/* ── Progress ── */
const progress = computed(() => {
  const flags = [
    sec1Visible.value,
    sec2Visible.value,
    sec3Visible.value,
    sec4Visible.value,
    sec5Visible.value,
  ];
  return (flags.filter(Boolean).length / flags.length) * 100;
});

/* ── Quiz ── */
const quizQuestions = ref([
  {
    question: "Simplify the ratio 6 : 9",
    options: ["2 : 3", "3 : 2", "6 : 3"],
    answer: "2 : 3",
    selected: null,
    explanation: "Divide both parts by 3: 6 : 9 = 2 : 3.",
  },
  {
    question: "Share 20 in the ratio 1 : 3. What is the larger share?",
    options: ["5", "10", "15"],
    answer: "15",
    selected: null,
    explanation:
      "There are 4 parts in total, so each part is 5. The larger share is 3 × 5 = 15.",
  },
  {
    question: "Which ratio is equivalent to 4 : 6?",
    options: ["2 : 3", "3 : 2", "1 : 3"],
    answer: "2 : 3",
    selected: null,
    explanation: "Divide both parts by 2: 4 : 6 = 2 : 3.",
  },
  {
    question: "If red : blue = 2 : 5, how many total parts are there?",
    options: ["7", "10", "3"],
    answer: "7",
    selected: null,
    explanation: "Add the parts together: 2 + 5 = 7.",
  },
]);

function selectAnswer(i, opt) {
  if (quizQuestions.value[i].selected !== null) return;
  quizQuestions.value[i].selected = opt;
}

const correctCount = computed(
  () => quizQuestions.value.filter((q) => q.selected === q.answer).length,
);

const allAnswered = computed(() =>
  quizQuestions.value.every((q) => q.selected !== null),
);

const scoreStars = computed(() => {
  const pct = correctCount.value / quizQuestions.value.length;
  if (pct === 1) return 3;
  if (pct >= 0.5) return 2;
  return 1;
});

function resetQuiz() {
  quizQuestions.value.forEach((q) => (q.selected = null));
}
</script>

<style scoped>
/* =========================================================
   LESSON PAGE — Ratios & Sharing
   ========================================================= */

.lesson-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 40px;
  align-items: start;
  max-width: 1320px;
  margin: 0 auto;
}

.lesson-page {
  padding: 40px;
  max-width: 900px;
  font-family: "Poppins", sans-serif;
  width: 100%;
}

/* ── Video sidebar ─────────────────────────────────────────────────── */
.lesson-video-sidebar {
  position: sticky;
  top: 24px;
  align-self: start;
  padding-top: 40px;
  margin-left: 8px;
}

.video-sidebar-card {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}

.video-sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.video-sidebar-header i {
  color: #d97706;
  font-size: 18px;
}

.video-sidebar-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
}

.video-sidebar-sub {
  margin: 0 0 16px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-primary);
  opacity: 0.85;
}

.lesson-video-card {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 20px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.lesson-video-card:last-child {
  margin-bottom: 0;
}

.lesson-video-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.08);
  border-color: #fcd34d;
}

.lesson-video-top {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

.video-tag {
  display: inline-flex;
  align-self: flex-start;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
}

.video-tag-amber {
  background: #fef3c7;
  color: #b45309;
  border: 1px solid #fde68a;
}

.video-topic {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-dark);
}

.lesson-video-frame-wrap {
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  aspect-ratio: 16 / 9;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  margin-bottom: 10px;
}

.lesson-video-frame {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.lesson-video-desc {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: var(--text-primary);
  opacity: 0.85;
}

/* ── Hero ─────────────────────────────────────────────── */
.lesson-hero {
  border-radius: 20px;
  padding: 36px 40px;
  color: #fff;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.lesson-hero-amber {
  background: linear-gradient(135deg, #b45309 0%, #d97706 60%, #f59e0b 100%);
}

.lesson-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 80% 20%,
    rgba(255, 255, 255, 0.08) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.lesson-hero-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.lesson-hero-title {
  font-size: 36px;
  font-weight: 800;
  margin: 0 0 8px;
  line-height: 1.2;
}

.lesson-hero-sub {
  font-size: 15px;
  opacity: 0.88;
  margin: 0 0 18px;
  max-width: 560px;
}

.lesson-hero-chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.hero-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.hero-chip-amber {
  background: rgba(255, 255, 255, 0.25);
}

/* ── Progress ─────────────────────────────────────────── */
.lesson-progress-wrap {
  margin-bottom: 32px;
}

.lesson-progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.lesson-progress-pct-amber {
  color: #d97706;
}

.lesson-progress-track {
  height: 8px;
  background: var(--border-color);
  border-radius: 999px;
  overflow: hidden;
}

.lesson-progress-fill {
  height: 100%;
  border-radius: 999px;
  transition: width 0.6s ease;
}

.lesson-progress-fill-amber {
  background: linear-gradient(90deg, #d97706, #f59e0b);
}

/* ── Sections ─────────────────────────────────────────── */
.lesson-section {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 18px;
  margin-bottom: 24px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.lesson-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  border-bottom: 1.5px solid var(--border-color);
  background: var(--bg-page);
}

.section-num {
  width: 34px;
  height: 34px;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 15px;
  flex-shrink: 0;
}

.section-num-amber {
  background: #d97706;
}

.section-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0;
}

.section-body {
  padding: 24px;
}

/* ── Text ─────────────────────────────────────────────── */
.lesson-text {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.7;
  margin: 0 0 20px;
}

/* ── Ratio intro ──────────────────────────────────────── */
.ratio-intro-card {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 22px;
  align-items: center;
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 22px;
  margin-bottom: 20px;
}

.ratio-visual {
  text-align: center;
}

.ratio-balls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
}

.ratio-ball {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-block;
}

.ratio-ball-amber {
  background: #d97706;
}

.ratio-ball-blue {
  background: #3b82f6;
}

.ratio-colon {
  font-size: 24px;
  font-weight: 900;
  color: var(--text-dark);
  margin: 0 4px;
}

.ratio-example-label {
  font-size: 26px;
  font-weight: 900;
  color: #d97706;
}

.ratio-parts {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ratio-part {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.ratio-part-badge {
  min-width: 62px;
  text-align: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
}

.rpb-left {
  background: #d97706;
}

.rpb-right {
  background: #f59e0b;
}

.ratio-part-body strong {
  display: block;
  font-size: 14px;
  color: var(--text-dark);
  margin-bottom: 2px;
}

.ratio-part-body p {
  margin: 0;
  font-size: 13px;
  color: var(--text-primary);
  line-height: 1.5;
}

/* ── Whiteboard Diagram ───────────────────────────────── */
.diagram-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

.whiteboard {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 16px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
}

body.dark .whiteboard {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.diagram-svg {
  width: 100%;
  height: auto;
  display: block;
}

.svg-num-black {
  font-family: "Poppins", sans-serif;
  font-size: 46px;
  font-weight: 900;
  fill: #0f172a;
}

.svg-num-amber {
  font-family: "Poppins", sans-serif;
  font-size: 46px;
  font-weight: 900;
  fill: #d97706;
}

.svg-colon-black {
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  font-weight: 900;
  fill: #0f172a;
}

.svg-colon-amber {
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  font-weight: 900;
  fill: #d97706;
}

.svg-arrow-text {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 800;
  fill: #d97706;
}

.svg-label-amber {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  fill: #d97706;
}

.line-draw-amber {
  stroke-dasharray: 90;
  stroke-dashoffset: 90;
  animation: draw-stroke 0.45s ease forwards 0.45s;
}

.svg-fade {
  opacity: 0;
  animation: fade-in 0.3s ease forwards;
}

@keyframes draw-stroke {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

.diagram-legend {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.legend-amber .legend-dot {
  background: #d97706;
}

/* ── Steps Panel ──────────────────────────────────────── */
.steps-panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.step-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.step-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 13px;
  color: #fff;
  flex-shrink: 0;
  margin-top: 2px;
}

.step-dot-amber-1 {
  background: #b45309;
}
.step-dot-amber-2 {
  background: #d97706;
}
.step-dot-amber-3 {
  background: #f59e0b;
}

.step-text {
  font-size: 14px;
  color: var(--text-primary);
  line-height: 1.6;
}

.step-ex {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 5px 10px;
  font-weight: 600;
}

.step-result {
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}

.step-result-amber {
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  border: 2px solid #fde68a;
}

body.dark .step-result-amber {
  background: linear-gradient(135deg, #451a03, #78350f);
  border-color: #d97706;
}

.step-result-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #b45309;
}

.step-result-val {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-dark);
}

/* ── Sharing section ──────────────────────────────────── */
.sharing-wrap {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 20px;
}

.sharing-number {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.2;
  color: var(--text-dark);
}

.highlight-amber {
  color: #d97706;
}

.sharing-steps {
  display: flex;
  flex-direction: column;
}

.sharing-step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.sharing-step-badge {
  background: #b45309;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
  margin-top: 2px;
  flex-shrink: 0;
}

.sharing-step-badge-b {
  background: #d97706;
}

.sharing-step-badge-c {
  background: #f59e0b;
}

.sharing-step-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 600;
}

.sharing-focus {
  color: var(--text-dark);
  font-weight: 700;
}

.sharing-rule {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px 12px;
  color: var(--text-dark);
}

.sharing-connector {
  text-align: center;
  color: #94a3b8;
  padding: 8px 0;
  font-size: 18px;
  padding-left: 56px;
}

.sharing-final {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  background: linear-gradient(135deg, #fffbeb, #fef3c7);
  border: 2px solid #fde68a;
  border-radius: 10px;
  padding: 14px 18px;
}

body.dark .sharing-final {
  background: linear-gradient(135deg, #451a03, #78350f);
  border-color: #d97706;
}

.sharing-final-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #b45309;
}

.sharing-final-eq {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-dark);
}

/* ── Callout ──────────────────────────────────────────── */
.callout {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  border-radius: 12px;
  padding: 16px 18px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-primary);
}

.callout-amber {
  background: #fffbeb;
  border: 1.5px solid #fde68a;
}

body.dark .callout-amber {
  background: #451a03;
  border-color: #d97706;
}

.callout-icon {
  font-size: 20px;
  color: #f59e0b;
  margin-top: 1px;
  flex-shrink: 0;
}

/* ── Quiz ─────────────────────────────────────────────── */
.quiz-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.quiz-card {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 18px;
  transition: border-color 0.2s;
}

.quiz-card.answered {
  border-color: #cbd5e1;
}

.quiz-q {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  line-height: 1.5;
}

.quiz-opts {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.quiz-opt {
  padding: 8px 18px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-card);
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  cursor: pointer;
  transition: all 0.15s;
  flex: 1;
}

.quiz-opt:not(:disabled):hover {
  border-color: #d97706;
  background: #fffbeb;
  color: #b45309;
}

.quiz-opt:disabled {
  cursor: default;
}

.opt-correct {
  background: #dcfce7 !important;
  border-color: #16a34a !important;
  color: #15803d !important;
}
.opt-wrong {
  background: #fee2e2 !important;
  border-color: #dc2626 !important;
  color: #dc2626 !important;
}
.opt-neutral {
  opacity: 0.45;
}

body.dark .opt-correct {
  background: #14532d !important;
  color: #4ade80 !important;
}
body.dark .opt-wrong {
  background: #450a0a !important;
  color: #f87171 !important;
}

.quiz-feedback {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  padding-top: 4px;
}

.feedback-correct {
  color: #15803d;
}
.feedback-wrong {
  color: #dc2626;
}

body.dark .feedback-correct {
  color: #4ade80;
}
body.dark .feedback-wrong {
  color: #f87171;
}

/* ── Score Panel ──────────────────────────────────────── */
.score-panel {
  background: linear-gradient(135deg, #fefce8, #fef9c3);
  border: 2px solid #fde047;
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

body.dark .score-panel {
  background: linear-gradient(135deg, #422006, #3b1800);
  border-color: #ca8a04;
}

.score-icon {
  font-size: 22px;
  color: #f59e0b;
  display: flex;
  gap: 2px;
}

.score-text {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-dark);
  flex: 1;
}

.score-retry {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.15s,
    transform 0.15s;
}

.score-retry-amber {
  background: #d97706;
}

.score-retry-amber:hover {
  background: #b45309;
  transform: translateY(-1px);
}

/* ── Summary ──────────────────────────────────────────── */
.lesson-summary {
  border-radius: 18px;
  padding: 28px 32px;
  color: #fff;
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.lesson-summary-amber {
  background: linear-gradient(135deg, #b45309 0%, #d97706 100%);
}

.lesson-summary.visible {
  opacity: 1;
  transform: translateY(0);
}

.summary-title {
  font-size: 18px;
  font-weight: 800;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.summary-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.summary-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.95;
}

.summary-list i {
  color: #fde68a;
  font-size: 14px;
  flex-shrink: 0;
}

.summary-actions {
  display: flex;
  justify-content: flex-end;
}

.btn-next {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 22px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.15s,
    box-shadow 0.15s;
}

.btn-next-amber {
  color: #b45309;
}

.btn-next:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* ── Dark mode video tweaks ──────────────────────────── */
body.dark .video-tag-amber {
  background: #78350f;
  color: #fcd34d;
  border-color: #d97706;
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 1100px) {
  .lesson-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .lesson-video-sidebar {
    position: static;
    padding: 0 40px 40px;
    margin-left: 0;
  }
}

@media (max-width: 750px) {
  .lesson-page {
    padding: 16px;
  }

  .lesson-hero {
    padding: 24px 20px;
  }

  .lesson-hero-title {
    font-size: 26px;
  }

  .ratio-intro-card,
  .diagram-wrap,
  .quiz-grid {
    grid-template-columns: 1fr;
  }

  .sharing-final {
    flex-direction: column;
    gap: 6px;
  }

  .lesson-video-sidebar {
    padding: 0 16px 16px;
  }
}
</style>
