<template>
  <div class="lesson-layout">
    <!-- LEFT: Main lesson content -->
    <div class="lesson-page">
      <!-- ── Lesson Header ── -->
      <div class="lesson-hero lesson-hero-teal">
        <div class="lesson-hero-label">
          <i class="fa-solid fa-book-open"></i> Lesson 10
        </div>
        <h1 class="lesson-hero-title">Fractions &amp; Operations</h1>
        <p class="lesson-hero-sub">
          Learn how to simplify fractions and carry out the four main operations
          with confidence.
        </p>
        <div class="lesson-hero-chips">
          <span class="hero-chip">
            <i class="fa-solid fa-circle-question"></i> 14 questions
          </span>
          <span class="hero-chip">
            <i class="fa-regular fa-clock"></i> ~22 min
          </span>
          <span class="hero-chip hero-chip-teal">
            <i class="fa-solid fa-signal"></i> Foundation
          </span>
        </div>
      </div>

      <!-- ── Progress Bar ── -->
      <div class="lesson-progress-wrap">
        <div class="lesson-progress-label">
          <span>Lesson Progress</span>
          <span class="lesson-progress-pct lesson-progress-pct-teal"
            >{{ Math.round(progress) }}%</span
          >
        </div>
        <div class="lesson-progress-track">
          <div
            class="lesson-progress-fill lesson-progress-fill-teal"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>

      <!-- ── SECTION 1: What are fractions? ── -->
      <div class="lesson-section" ref="sec1" :class="{ visible: sec1Visible }">
        <div class="section-header">
          <div class="section-num section-num-teal">1</div>
          <h2 class="section-title">What is a Fraction?</h2>
        </div>
        <div class="section-body">
          <p class="lesson-text">
            A <strong>fraction</strong> shows part of a whole. The
            <strong>top number</strong> is called the
            <strong>numerator</strong>, and the
            <strong>bottom number</strong> is called the
            <strong>denominator</strong>. The denominator tells us how many
            equal parts the whole is split into, and the numerator tells us how
            many of those parts we have.
          </p>

          <div class="fraction-intro-card">
            <div class="fraction-visual">
              <div class="fraction-display">
                <span class="fd-top">3</span>
                <span class="fd-line"></span>
                <span class="fd-bottom">4</span>
              </div>
            </div>

            <div class="fraction-parts">
              <div class="fraction-part">
                <div class="fraction-part-badge fpb-top">Top</div>
                <div class="fraction-part-body">
                  <strong>Numerator</strong>
                  <p>Shows how many parts are being used.</p>
                </div>
              </div>

              <div class="fraction-part">
                <div class="fraction-part-badge fpb-bottom">Bottom</div>
                <div class="fraction-part-body">
                  <strong>Denominator</strong>
                  <p>Shows how many equal parts the whole is split into.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="callout callout-teal">
            <i class="fa-solid fa-lightbulb callout-icon"></i>
            <div>
              <strong>Tip:</strong> Fractions only make sense when the whole has
              been split into <em>equal parts</em>.
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 2: Simplifying fractions ── -->
      <div class="lesson-section" ref="sec2" :class="{ visible: sec2Visible }">
        <div class="section-header">
          <div class="section-num section-num-teal">2</div>
          <h2 class="section-title">Worked Example: Simplifying Fractions</h2>
        </div>
        <div class="section-body">
          <p class="lesson-text">
            To simplify a fraction, divide the numerator and denominator by the
            <strong>same number</strong>. Keep going until the fraction cannot
            be reduced any further.
          </p>

          <div class="diagram-wrap">
            <div class="whiteboard">
              <svg
                class="diagram-svg"
                viewBox="0 0 420 260"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text x="65" y="92" class="svg-num-black">8</text>
                <line
                  x1="52"
                  y1="108"
                  x2="102"
                  y2="108"
                  stroke="#0f172a"
                  stroke-width="4"
                  class="svg-draw line-draw-black"
                />
                <text x="65" y="160" class="svg-num-black">12</text>

                <text
                  x="140"
                  y="125"
                  class="svg-arrow-text svg-fade"
                  style="animation-delay: 0.35s"
                >
                  ÷4
                </text>

                <line
                  x1="118"
                  y1="120"
                  x2="190"
                  y2="120"
                  stroke="#0f766e"
                  stroke-width="4"
                  stroke-linecap="round"
                  class="svg-draw line-draw-teal"
                />
                <polygon
                  points="190,120 176,112 176,128"
                  fill="#0f766e"
                  class="svg-fade"
                  style="animation-delay: 0.7s"
                />

                <text
                  x="250"
                  y="92"
                  class="svg-num-teal svg-fade"
                  style="animation-delay: 0.9s"
                >
                  2
                </text>
                <line
                  x1="236"
                  y1="108"
                  x2="286"
                  y2="108"
                  stroke="#0f766e"
                  stroke-width="4"
                  class="svg-fade"
                  style="animation-delay: 1s"
                />
                <text
                  x="245"
                  y="160"
                  class="svg-num-teal svg-fade"
                  style="animation-delay: 1.1s"
                >
                  3
                </text>

                <text
                  x="309"
                  y="126"
                  class="svg-label-teal svg-fade"
                  style="animation-delay: 1.25s"
                >
                  simplest form
                </text>
              </svg>

              <div class="diagram-legend">
                <span class="legend-item legend-teal">
                  <span class="legend-dot"></span> Simplified result
                </span>
              </div>
            </div>

            <div class="steps-panel">
              <div class="step-item">
                <div class="step-dot step-dot-teal-1">1</div>
                <div class="step-text">
                  <strong>Find a common factor</strong> of both numbers.<br />
                  <span class="step-ex"
                    >8 and 12 can both be divided by <strong>4</strong></span
                  >
                </div>
              </div>

              <div class="step-item">
                <div class="step-dot step-dot-teal-2">2</div>
                <div class="step-text">
                  <strong>Divide the numerator and denominator</strong> by that
                  factor.<br />
                  <span class="step-ex">8 ÷ 4 = 2 and 12 ÷ 4 = 3</span>
                </div>
              </div>

              <div class="step-item">
                <div class="step-dot step-dot-teal-3">3</div>
                <div class="step-text">
                  <strong>Check if it can be simplified again.</strong><br />
                  <span class="step-ex"
                    >2 and 3 have no common factor greater than 1</span
                  >
                </div>
              </div>

              <div class="step-result step-result-teal">
                <span class="step-result-label">Answer:</span>
                <span class="step-result-val">8/12 = <strong>2/3</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 3: Adding & multiplying fractions ── -->
      <div class="lesson-section" ref="sec3" :class="{ visible: sec3Visible }">
        <div class="section-header">
          <div class="section-num section-num-teal">3</div>
          <h2 class="section-title">Operations with Fractions</h2>
        </div>
        <div class="section-body">
          <p class="lesson-text">
            Different fraction operations follow different rules. For
            <strong>addition and subtraction</strong>, the denominator must be
            the same. For <strong>multiplication</strong>, multiply the
            numerators together and the denominators together.
          </p>

          <div class="operations-grid">
            <div class="operation-card">
              <div class="operation-card-top">
                <span class="operation-tag">Addition</span>
                <h3>1/4 + 2/4</h3>
              </div>
              <div class="operation-work">
                <div class="operation-line">
                  Same denominator, so add the top numbers
                </div>
                <div class="operation-equation">1/4 + 2/4 = 3/4</div>
              </div>
            </div>

            <div class="operation-card">
              <div class="operation-card-top">
                <span class="operation-tag">Multiplication</span>
                <h3>2/3 × 3/5</h3>
              </div>
              <div class="operation-work">
                <div class="operation-line">
                  Multiply top by top and bottom by bottom
                </div>
                <div class="operation-equation">2/3 × 3/5 = 6/15 = 2/5</div>
              </div>
            </div>
          </div>

          <div class="callout callout-teal">
            <i class="fa-solid fa-circle-info callout-icon"></i>
            <div>
              <strong>Remember:</strong> You can only add or subtract fractions
              directly when the denominators match.
            </div>
          </div>
        </div>
      </div>

      <!-- ── SECTION 4: Try It Yourself ── -->
      <div class="lesson-section" ref="sec4" :class="{ visible: sec4Visible }">
        <div class="section-header">
          <div class="section-num section-num-teal">4</div>
          <h2 class="section-title">Try It Yourself</h2>
        </div>
        <div class="section-body">
          <p class="lesson-text">
            Answer the questions below about fractions and operations:
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
            <button class="score-retry score-retry-teal" @click="resetQuiz">
              <i class="fa-solid fa-rotate-left"></i> Try Again
            </button>
          </div>
        </div>
      </div>

      <!-- ── Summary ── -->
      <div
        class="lesson-summary lesson-summary-teal"
        ref="sec5"
        :class="{ visible: sec5Visible }"
      >
        <h3 class="summary-title">
          <i class="fa-solid fa-circle-check"></i> Lesson Summary
        </h3>
        <ul class="summary-list">
          <li>
            <i class="fa-solid fa-check"></i> The numerator is the top number
            and the denominator is the bottom number
          </li>
          <li>
            <i class="fa-solid fa-check"></i> Simplify fractions by dividing top
            and bottom by the same number
          </li>
          <li>
            <i class="fa-solid fa-check"></i> Add and subtract fractions with
            the same denominator
          </li>
          <li>
            <i class="fa-solid fa-check"></i> Multiply fractions by multiplying
            numerators and denominators
          </li>
        </ul>
        <div class="summary-actions">
          <button class="btn-next btn-next-teal">
            Next Lesson: Ratios &amp; Sharing
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
            <span class="video-tag video-tag-teal">Video 1</span>
            <span class="video-topic">What are Fractions?</span>
          </div>
          <div class="lesson-video-frame-wrap">
            <iframe
              class="lesson-video-frame"
              src="https://www.youtube.com/embed/c8T0aeIP-W4"
              title="What are Fractions"
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
            A simple introduction to numerators, denominators, and parts of a
            whole.
          </p>
        </div>

        <div class="lesson-video-card">
          <div class="lesson-video-top">
            <span class="video-tag video-tag-teal">Video 2</span>
            <span class="video-topic">Adding and Subtracting Fractions</span>
          </div>
          <div class="lesson-video-frame-wrap">
            <iframe
              class="lesson-video-frame"
              src="https://www.youtube.com/embed/3fY1AqnrUhQ"
              title="Adding Fractions"
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
            Useful for learning when denominators need to match.
          </p>
        </div>

        <div class="lesson-video-card">
          <div class="lesson-video-top">
            <span class="video-tag video-tag-teal">Video 3</span>
            <span class="video-topic">Multiplying and Dividing Fractions</span>
          </div>
          <div class="lesson-video-frame-wrap">
            <iframe
              class="lesson-video-frame"
              src="https://www.youtube.com/embed/GvLIEiqxS6s"
              title="Multiplying Fractions"
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
            Walks through fraction multiplication and division step by step.
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
    question: "Simplify 6/9",
    options: ["2/3", "3/2", "6/3"],
    answer: "2/3",
    selected: null,
    explanation: "Divide the numerator and denominator by 3: 6/9 = 2/3.",
  },
  {
    question: "What is 1/4 + 2/4?",
    options: ["3/4", "3/8", "1/2"],
    answer: "3/4",
    selected: null,
    explanation: "The denominators match, so add the numerators: 1 + 2 = 3.",
  },
  {
    question: "What is 2/3 × 3/5?",
    options: ["6/15", "5/6", "1/2"],
    answer: "6/15",
    selected: null,
    explanation:
      "Multiply the numerators and denominators: 2×3 = 6 and 3×5 = 15.",
  },
  {
    question: "Which number is the denominator in 3/7?",
    options: ["3", "7", "10"],
    answer: "7",
    selected: null,
    explanation: "The denominator is the bottom number, so it is 7.",
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
   LESSON PAGE — Fractions & Operations
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
  color: #0f766e;
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
  border-color: #99f6e4;
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

.video-tag-teal {
  background: #ccfbf1;
  color: #0f766e;
  border: 1px solid #99f6e4;
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

.lesson-hero-teal {
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 60%, #14b8a6 100%);
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

.hero-chip-teal {
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

.lesson-progress-pct-teal {
  color: #0f766e;
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

.lesson-progress-fill-teal {
  background: linear-gradient(90deg, #0f766e, #14b8a6);
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

.section-num-teal {
  background: #0f766e;
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

/* ── Fraction intro ───────────────────────────────────── */
.fraction-intro-card {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 22px;
  align-items: center;
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 22px;
  margin-bottom: 20px;
}

.fraction-display {
  width: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fd-top,
.fd-bottom {
  font-size: 42px;
  font-weight: 900;
  color: var(--text-dark);
  line-height: 1;
}

.fd-line {
  width: 70px;
  height: 4px;
  background: #0f766e;
  border-radius: 999px;
  margin: 8px 0;
}

.fraction-parts {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fraction-part {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.fraction-part-badge {
  min-width: 56px;
  text-align: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
}

.fpb-top {
  background: #0f766e;
}

.fpb-bottom {
  background: #14b8a6;
}

.fraction-part-body strong {
  display: block;
  font-size: 14px;
  color: var(--text-dark);
  margin-bottom: 2px;
}

.fraction-part-body p {
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
  font-size: 50px;
  font-weight: 900;
  fill: #0f172a;
}

.svg-num-teal {
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  font-weight: 900;
  fill: #0f766e;
}

.svg-arrow-text {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 800;
  fill: #0f766e;
}

.svg-label-teal {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 700;
  fill: #0f766e;
}

.line-draw-black {
  stroke-dasharray: 70;
  stroke-dashoffset: 70;
  animation: draw-stroke 0.45s ease forwards 0.15s;
}

.line-draw-teal {
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

.legend-teal .legend-dot {
  background: #0f766e;
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

.step-dot-teal-1 {
  background: #0f766e;
}
.step-dot-teal-2 {
  background: #14b8a6;
}
.step-dot-teal-3 {
  background: #0ea5a4;
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

.step-result-teal {
  background: linear-gradient(135deg, #ecfeff, #ccfbf1);
  border: 2px solid #99f6e4;
}

body.dark .step-result-teal {
  background: linear-gradient(135deg, #042f2e, #134e4a);
  border-color: #0f766e;
}

.step-result-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #0f766e;
}

.step-result-val {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-dark);
}

/* ── Operations ───────────────────────────────────────── */
.operations-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.operation-card {
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  border-radius: 14px;
  padding: 18px;
}

.operation-card-top {
  margin-bottom: 12px;
}

.operation-tag {
  display: inline-flex;
  background: #ccfbf1;
  color: #0f766e;
  border: 1px solid #99f6e4;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  margin-bottom: 8px;
}

.operation-card h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 800;
  color: var(--text-dark);
}

.operation-work {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.operation-line {
  font-size: 13px;
  color: var(--text-primary);
  line-height: 1.5;
}

.operation-equation {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 16px;
  font-weight: 800;
  color: #0f766e;
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

.callout-teal {
  background: #ecfeff;
  border: 1.5px solid #99f6e4;
}

body.dark .callout-teal {
  background: #042f2e;
  border-color: #0f766e;
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
  border-color: #0f766e;
  background: #ecfeff;
  color: #0f766e;
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

.score-retry-teal {
  background: #0f766e;
}

.score-retry-teal:hover {
  background: #115e59;
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

.lesson-summary-teal {
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%);
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
  color: #99f6e4;
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

.btn-next-teal {
  color: #0f766e;
}

.btn-next:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* ── Dark mode video tweaks ──────────────────────────── */
body.dark .video-tag-teal {
  background: #134e4a;
  color: #99f6e4;
  border-color: #0f766e;
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

  .fraction-intro-card,
  .diagram-wrap,
  .operations-grid,
  .quiz-grid {
    grid-template-columns: 1fr;
  }

  .lesson-video-sidebar {
    padding: 0 16px 16px;
  }
}
</style>
