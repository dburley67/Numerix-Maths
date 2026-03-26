<template>
  <div class="lesson-page">

    <div class="lesson-hero">
      <div class="lesson-hero-label">
        <i class="fa-solid fa-dice"></i> Lesson 4
      </div>
      <h1 class="lesson-hero-title">Intro to Probability</h1>
      <p class="lesson-hero-sub">
        Master the math of chance. Learn how to calculate likelihood, use the probability scale, and predict outcomes.
      </p>
      <div class="lesson-hero-chips">
        <span class="hero-chip"><i class="fa-solid fa-circle-question"></i> 12 questions</span>
        <span class="hero-chip"><i class="fa-regular fa-clock"></i> ~15 min</span>
        <span class="hero-chip hero-chip-indigo"><i class="fa-solid fa-signal"></i> Core Skills</span>
      </div>
    </div>

    <div class="lesson-progress-wrap">
      <div class="lesson-progress-label">
        <span>Lesson Progress</span>
        <span class="lesson-progress-pct">{{ Math.round(progress) }}%</span>
      </div>
      <div class="lesson-progress-track">
        <div class="lesson-progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>

    <div class="lesson-section" ref="sec1" :class="{ visible: sec1Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">1</div>
        <h2 class="section-title">The Probability Scale</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Probability is a value between <strong>0</strong> and <strong>1</strong>. 
          It tells us how likely an event is to happen. 
        </p>

        <div class="sf-anatomy">
          <div class="sf-expression">
            <span class="sf-a">0</span>
            <span class="sf-op">≤</span>
            <span class="sf-base">P(E)</span>
            <span class="sf-op">≤</span>
            <span class="sf-a">1</span>
          </div>
          <div class="sf-labels">
            <div class="sf-label-item sf-label-a">
              <div class="sf-label-line"></div>
              <span><strong>0</strong> — Impossible (No chance)</span>
            </div>
            <div class="sf-label-item sf-label-n">
              <div class="sf-label-line"></div>
              <span><strong>1</strong> — Certain (100% chance)</span>
            </div>
          </div>
        </div>

        <div class="callout callout-indigo">
          <i class="fa-solid fa-lightbulb callout-icon"></i>
          <div>
            Pro-tip: Probability can be written as a <strong>fraction</strong>, a <strong>decimal</strong>, or a <strong>percentage</strong>. 
            0.5 is the same as 50% or 1/2.
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-section" ref="sec2" :class="{ visible: sec2Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">2</div>
        <h2 class="section-title">Worked Example: Rolling a 4</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          When you roll a standard 6-sided die, what is the probability of rolling a <strong>4</strong>?
        </p>

        <div class="diagram-wrap">
          <div class="whiteboard">
            <svg class="diagram-svg" viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg">
              <text x="60" y="55" class="svg-expr">P(4) = </text>
              <line x1="170" y1="45" x2="220" y2="45" stroke="#0f172a" stroke-width="3"/>
              
              <ellipse cx="195" cy="28" rx="16" ry="16" fill="none" stroke="#4f46e5" stroke-width="3" class="oval-draw-1"/>
              <text x="195" y="34" class="svg-exp-num" text-anchor="middle">1</text>
              <text x="195" y="70" class="svg-exp-num" text-anchor="middle">6</text>

              <text x="30" y="110" class="svg-expr-sm">Outcomes:</text>
              <ellipse cx="218" cy="105" rx="118" ry="24" fill="none" stroke="#4f46e5" stroke-width="3.5" class="oval-draw-2"/>
              <text x="110" y="115" class="svg-expr-sm">1, 2, 3, 4, 5, 6</text>

              <text x="170" y="185" class="svg-result" text-anchor="middle">~16.7%</text>
            </svg>
            <div class="diagram-legend">
              <span class="legend-item">
                <span class="legend-dot" style="background:#4f46e5"></span>
                Top number = how many ways to win
              </span>
            </div>
          </div>

          <div class="steps-panel">
            <div class="step-item">
              <div class="step-dot step-dot-1">1</div>
              <div class="step-text">
                <strong>Count the "Hits"</strong><br/>
                <span class="step-ex">There is only <span class="hl-indigo">one</span> side with a "4".</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-2">2</div>
              <div class="step-text">
                <strong>Count Total Possibilities</strong><br/>
                <span class="step-ex">A die has <span class="hl-indigo">6</span> total sides.</span>
              </div>
            </div>
            <div class="step-item">
              <div class="step-dot step-dot-3">3</div>
              <div class="step-text">
                <strong>Divide</strong><br/>
                <span class="step-ex">1 ÷ 6 = <span class="hl-indigo">0.166...</span></span>
              </div>
            </div>
            <div class="step-result step-result-indigo">
              <span class="step-result-label">Result</span>
              <span class="step-result-val">Probability = <strong>1/6</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-section" ref="sec3" :class="{ visible: sec3Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">3</div>
        <h2 class="section-title">Common Odds Reference</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Compare different scenarios and see where they land on the scale. 
          The higher the decimal, the more likely the event:
        </p>

        <div class="power-ladder">
          <div
            v-for="row in probabilityRows"
            :key="row.label"
            class="pl-row"
            :class="{ 'pl-row-active': activeProb === row.val }"
            @click="activeProb = row.val"
          >
            <div class="pl-expr">{{ row.label }}</div>
            <div class="pl-arrow"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="pl-number">
              <span class="pl-digit-five">{{ row.val }}</span>
            </div>
            <div class="pl-zeros">
              <span class="pl-zero-tag">{{ row.desc }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-section" ref="sec4" :class="{ visible: sec4Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">4</div>
        <h2 class="section-title">Outcome Explorer</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">
          Adjust the number of "Winning" items and the "Total" items in a bag to see the odds.
        </p>

        <div class="calc-wrap">
          <div class="calc-inputs">
            <div class="calc-input-group">
              <label class="calc-label">Winning Outcomes (Wins)</label>
              <div class="calc-slider-row">
                <input type="range" min="1" :max="totalItems" v-model.number="winItems" class="calc-slider" />
                <span class="calc-val">{{ winItems }}</span>
              </div>
            </div>
            <div class="calc-times">/</div>
            <div class="calc-input-group">
              <label class="calc-label">Total Outcomes</label>
              <div class="calc-slider-row">
                <input type="range" min="1" max="50" v-model.number="totalItems" class="calc-slider" />
                <span class="calc-val">{{ totalItems }}</span>
              </div>
            </div>
          </div>

          <div class="calc-display">
            <div class="calc-expression">
              {{ winItems }} / {{ totalItems }}
            </div>
            <div class="calc-expand">
              = {{ (winItems / totalItems).toFixed(3) }}
            </div>
            <div class="calc-result-banner">
              <span class="calc-result-label">Odds: </span>
              <span class="calc-result-num">{{ ((winItems / totalItems) * 100).toFixed(1) }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="lesson-section" ref="sec5" :class="{ visible: sec5Visible }">
      <div class="section-header">
        <div class="section-num s-indigo">5</div>
        <h2 class="section-title">Test Your Logic</h2>
      </div>
      <div class="section-body">
        <p class="lesson-text">Select the correct probability for each scenario:</p>

        <div class="quiz-grid">
          <div v-for="(q, i) in quizQuestions" :key="i" class="quiz-card" :class="{ answered: q.selected !== null }">
            <div class="quiz-q"><strong>{{ q.scenario }}</strong></div>
            <div class="quiz-opts">
              <button
                v-for="opt in q.options"
                :key="opt"
                class="quiz-opt"
                :class="{
                  'opt-correct': q.selected !== null && opt === q.answer,
                  'opt-wrong': q.selected === opt && opt !== q.answer,
                  'opt-neutral': q.selected !== null && opt !== q.answer && opt !== q.selected
                }"
                @click="selectAnswer(i, opt)"
                :disabled="q.selected !== null"
              >{{ opt }}</button>
            </div>
            <div v-if="q.selected !== null" class="quiz-feedback">
               <span :class="q.selected === q.answer ? 'feedback-correct' : 'feedback-wrong'">
                 {{ q.explanation }}
               </span>
            </div>
          </div>
        </div>

        <div v-if="allAnswered" class="score-panel">
          <div class="score-icon"><i class="fa-solid fa-star" v-for="n in 3" :key="n"></i></div>
          <div class="score-text">Score: {{ correctCount }} / {{ quizQuestions.length }}</div>
          <button class="score-retry" @click="resetQuiz">Retry</button>
        </div>
      </div>
    </div>

    <div class="lesson-summary" ref="sec6" :class="{ visible: sec6Visible }">
      <h3 class="summary-title"><i class="fa-solid fa-circle-check"></i> Lesson Summary</h3>
      <ul class="summary-list">
        <li><i class="fa-solid fa-check"></i> Probability = <strong>Wins / Total Outcomes</strong></li>
        <li><i class="fa-solid fa-check"></i> Values range from <strong>0 (Never)</strong> to <strong>1 (Certain)</strong></li>
        <li><i class="fa-solid fa-check"></i> 0.5 means there is a <strong>50/50</strong> even chance</li>
      </ul>
      <div class="summary-actions">
        <button class="btn-next">Finish Lesson <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

/* ── Scroll reveal Logic ── */
const secNames = ['sec1','sec2','sec3','sec4','sec5','sec6'];
const secRefs = Object.fromEntries(secNames.map(s => [s, ref(null)]));
const secVisible = Object.fromEntries(secNames.map(s => [s, ref(false)]));
const { sec1, sec2, sec3, sec4, sec5, sec6 } = secRefs;
const { sec1:sec1Visible, sec2:sec2Visible, sec3:sec3Visible, sec4:sec4Visible, sec5:sec5Visible, sec6:sec6Visible } = secVisible;

const observers = [];
onMounted(() => {
  secNames.forEach(s => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) secVisible[s].value = true; }, { threshold: 0.1 });
    if (secRefs[s].value) obs.observe(secRefs[s].value);
    observers.push(obs);
  });
  secVisible['sec1'].value = true;
});
onUnmounted(() => observers.forEach(o => o.disconnect()));

const progress = computed(() => (secNames.filter(s => secVisible[s].value).length / secNames.length) * 100);

/* ── Ladder State ── */
const probabilityRows = [
  { label: 'Coin Flip', val: '0.5', desc: 'Even Chance' },
  { label: 'Sun Rising', val: '1.0', desc: 'Certain' },
  { label: 'Winning Lotto', val: '0.000001', desc: 'Highly Unlikely' },
  { label: 'Rolling a 7 (Die)', val: '0', desc: 'Impossible' },
];
const activeProb = ref('0.5');

/* ── Calc State ── */
const winItems = ref(5);
const totalItems = ref(20);

/* ── Quiz State ── */
const quizQuestions = ref([
  { scenario: 'Odds of picking a red ball (3 red, 7 blue)?', answer: '0.3', options: ['0.3', '0.7', '3.0'], selected: null, explanation: '3 wins / 10 total = 0.3' },
  { scenario: 'A "Certain" event has a probability of:', answer: '1.0', options: ['0.0', '0.5', '1.0'], selected: null, explanation: '1.0 represents 100% certainty.' },
]);

function selectAnswer(i, opt) { quizQuestions.value[i].selected = opt; }
const correctCount = computed(() => quizQuestions.value.filter(q => q.selected === q.answer).length);
const allAnswered = computed(() => quizQuestions.value.every(q => q.selected !== null));
function resetQuiz() { quizQuestions.value.forEach(q => q.selected = null); }
</script>

<style scoped>
/* REUSING YOUR STYLES + INDIGO THEME */
.lesson-page { padding: 40px; max-width: 900px; font-family: "Poppins", sans-serif; margin: 0 auto; }

.lesson-hero {
  background: linear-gradient(135deg, #3730a3 0%, #4f46e5 55%, #6366f1 100%);
  border-radius: 20px; padding: 36px 40px; color: #fff; margin-bottom: 24px; position: relative;
}

.hero-chip-indigo { background: rgba(255,255,255,0.25); }
.s-indigo { background: #4f46e5; }
.hl-indigo { color: #4f46e5; font-weight: 800; }

/* SHARED COMPONENTS */
.lesson-progress-fill { height: 100%; background: linear-gradient(90deg, #4f46e5, #818cf8); transition: width 0.6s ease; }
.lesson-section { 
  background: #fff; border: 1.5px solid #e2e8f0; border-radius: 18px; 
  margin-bottom: 24px; opacity: 0; transform: translateY(24px); transition: all 0.5s ease;
}
.lesson-section.visible { opacity: 1; transform: translateY(0); }

/* SVG Whiteboard STYLES */
.whiteboard { background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 14px; padding: 12px; }
.svg-expr { font-size: 34px; font-weight: 900; fill: #0f172a; }
.svg-result { font-size: 38px; font-weight: 900; fill: #4f46e5; }
.oval-draw-1 { stroke-dasharray: 105; stroke-dashoffset: 105; animation: draw 0.5s forwards 0.3s; }
.oval-draw-2 { stroke-dasharray: 480; stroke-dashoffset: 480; animation: draw 0.8s forwards 0.8s; }
@keyframes draw { to { stroke-dashoffset: 0; } }

/* ALL OTHER STYLES INHERITED FROM YOUR SAMPLE... */
.section-header { display: flex; align-items: center; gap: 14px; padding: 20px 24px; border-bottom: 1.5px solid #e2e8f0; }
.section-num { width: 34px; height: 34px; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; }
.section-body { padding: 24px; }
.sf-anatomy { background: #f8fafc; border: 1px solid #e2e8f0; padding: 24px; border-radius: 14px; display: flex; flex-direction: column; align-items: center; }
.sf-a { font-size: 52px; font-weight: 900; color: #4f46e5; }
.sf-base { font-size: 42px; font-weight: 900; }
.sf-op { font-size: 32px; padding: 0 10px; color: #94a3b8; }
.sf-labels { display: flex; gap: 30px; margin-top: 15px; }

.callout-indigo { background: #eef2ff; border: 1.5px solid #c7d2fe; padding: 16px; border-radius: 12px; display: flex; gap: 12px; font-size: 14px; }
.callout-icon { color: #f59e0b; font-size: 20px; }

.quiz-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
.quiz-card { border: 1.5px solid #e2e8f0; padding: 16px; border-radius: 14px; }
.quiz-opt { width: 100%; padding: 10px; margin-top: 8px; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer; font-weight: 700; background: white; }
.opt-correct { background: #dcfce7; border-color: #22c55e; color: #166534; }
.opt-wrong { background: #fee2e2; border-color: #ef4444; color: #991b1b; }

.calc-wrap { background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 16px; }
.calc-display { text-align: center; margin-top: 20px; background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0; }
.calc-result-banner { font-size: 32px; font-weight: 900; color: #4f46e5; }
.calc-slider { width: 100%; accent-color: #4f46e5; }

.lesson-summary { background: #3730a3; color: white; padding: 30px; border-radius: 20px; margin-top: 40px; }
.btn-next { background: white; color: #3730a3; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 800; cursor: pointer; }
</style>
