<template>
  <div class="lessons-page">

    <!-- Page Header -->
    <div class="lessons-header">
      <div class="lessons-header-text">
        <h1 class="lessons-title">
          <i class="fa-solid fa-book-open-reader"></i> Lessons
        </h1>
        <p class="lessons-sub">
          <i class="fa-solid fa-circle-info"></i>
          Choose a topic below to begin learning
          <span class="dash-sep">|</span>
          <i class="fa-solid fa-signal"></i>
          3 topics available
        </p>
      </div>
    </div>

    <!-- Progress Banner -->
    <div class="lessons-progress-banner">
      <div class="lpb-inner">
        <div class="lpb-stat">
          <i class="fa-solid fa-fire" style="color:#f97316;"></i>
          <span><strong>0</strong> lessons completed</span>
        </div>
        <div class="lpb-divider"></div>
        <div class="lpb-stat">
          <i class="fa-solid fa-star" style="color:#f59e0b;"></i>
          <span><strong>0</strong> XP earned</span>
        </div>
        <div class="lpb-divider"></div>
        <div class="lpb-stat">
          <i class="fa-solid fa-circle-check" style="color:#22c55e;"></i>
          <span><strong>0 / 3</strong> topics mastered</span>
        </div>
      </div>
    </div>

    <!-- Section Label -->
    <div class="lessons-section-label">
      <span class="section-pill">
        <i class="fa-solid fa-layer-group"></i> Number &amp; Arithmetic
      </span>
    </div>

    <!-- Lesson Cards Grid -->
    <div class="lessons-grid">

      <!-- Lesson 1: Decimals & Rounding -->
      <div class="lesson-card" @click="goToLesson(1)">
        <div class="lc-badge">Lesson 1</div>
        <div class="lc-icon-wrap lc-blue">
          <i class="fa-solid fa-percentage"></i>
        </div>
        <div class="lc-body">
          <h2 class="lc-title">Decimals &amp; Rounding</h2>
          <p class="lc-desc">
            Understand place value in decimals, round to decimal places and significant
            figures, and work with estimation techniques.
          </p>

          <div class="lc-topics">
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Place Value</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Rounding Rules</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Sig. Figures</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Estimation</span>
          </div>

          <div class="lc-footer">
            <div class="lc-meta">
              <span><i class="fa-solid fa-circle-question"></i> 12 questions</span>
              <span><i class="fa-regular fa-clock"></i> ~20 min</span>
            </div>
            <button class="lc-btn lc-btn-blue" @click.stop="goToLesson(1)">
              Start <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div class="lc-status-bar">
          <div class="lc-status-fill" style="width: 0%"></div>
        </div>
      </div>

      <!-- Lesson 2: Factors, Multiples, Primes, HCF/LCM -->
      <div class="lesson-card" @click="goToLesson(2)">
        <div class="lc-badge">Lesson 2</div>
        <div class="lc-icon-wrap lc-green">
          <i class="fa-solid fa-cubes"></i>
        </div>
        <div class="lc-body">
          <h2 class="lc-title">Factors, Multiples &amp; Primes</h2>
          <p class="lc-desc">
            Explore factors, multiples, prime numbers, and learn to calculate the
            Highest Common Factor (HCF) and Lowest Common Multiple (LCM).
          </p>

          <div class="lc-topics">
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Factors</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Multiples</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Prime Numbers</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> HCF &amp; LCM</span>
          </div>

          <div class="lc-footer">
            <div class="lc-meta">
              <span><i class="fa-solid fa-circle-question"></i> 15 questions</span>
              <span><i class="fa-regular fa-clock"></i> ~25 min</span>
            </div>
            <button class="lc-btn lc-btn-green" @click.stop="goToLesson(2)">
              Start <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div class="lc-status-bar">
          <div class="lc-status-fill lc-status-green" style="width: 0%"></div>
        </div>
      </div>

      <!-- Lesson 3: Standard Form -->
      <div class="lesson-card" @click="goToLesson(3)">
        <div class="lc-badge">Lesson 3</div>
        <div class="lc-icon-wrap lc-orange">
          <i class="fa-solid fa-superscript"></i>
        </div>
        <div class="lc-body">
          <h2 class="lc-title">Standard Form</h2>
          <p class="lc-desc">
            Write very large and very small numbers using standard form notation,
            and perform calculations with numbers expressed in this format.
          </p>

          <div class="lc-topics">
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Standard Form</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Powers of 10</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Converting</span>
            <span class="lc-chip"><i class="fa-solid fa-circle-dot"></i> Calculations</span>
          </div>

          <div class="lc-footer">
            <div class="lc-meta">
              <span><i class="fa-solid fa-circle-question"></i> 10 questions</span>
              <span><i class="fa-regular fa-clock"></i> ~18 min</span>
            </div>
            <button class="lc-btn lc-btn-orange" @click.stop="goToLesson(3)">
              Start <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div class="lc-status-bar">
          <div class="lc-status-fill lc-status-orange" style="width: 0%"></div>
        </div>
      </div>

    </div>

    <!-- Coming Soon Strip -->
    <div class="lessons-coming-soon">
      <i class="fa-solid fa-lock"></i>
      More lessons coming soon — Algebra, Geometry, Statistics &amp; more
    </div>

  </div>
</template>

<script setup>
// import { useRouter } from "vue-router";



// const router = useRouter();

// function goToLesson(id) {
//   router.push(`/Lesson${id}`);
//   window.open(route.href, "_blank");

import { useRouter } from "vue-router";

const router = useRouter();

function goToLesson(id) {
  const route = router.resolve(`/lesson${id}`);
  window.open(route.href, "_blank");

  
}
</script>

<style scoped>
/* =========================================================
   LESSONS PAGE
   ========================================================= */

.lessons-page {
  padding: 40px;
  max-width: 1200px;
}

/* ── Header ─────────────────────────────────────────── */
.lessons-header {
  margin-bottom: 22px;
}

.lessons-title {
  font-size: 40px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.lessons-title i {
  color: #2563eb;
}

.lessons-sub {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 15px;
  margin: 0;
}

.lessons-sub i {
  opacity: 0.7;
}

.dash-sep {
  opacity: 0.4;
}

/* ── Progress Banner ────────────────────────────────── */
.lessons-progress-banner {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 16px 24px;
  margin-bottom: 28px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
}

.lpb-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.lpb-stat {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  padding: 0 24px;
  flex: 1;
  min-width: 140px;
  justify-content: center;
}

.lpb-stat:first-child {
  padding-left: 0;
  justify-content: flex-start;
}

.lpb-stat:last-child {
  padding-right: 0;
  justify-content: flex-end;
}

.lpb-stat strong {
  color: var(--text-dark);
  font-size: 17px;
}

.lpb-divider {
  width: 1px;
  height: 28px;
  background: var(--border-color);
  flex-shrink: 0;
}

/* ── Section Label ──────────────────────────────────── */
.lessons-section-label {
  margin-bottom: 18px;
}

.section-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #eff6ff;
  color: #1d4ed8;
  font-weight: 700;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1.5px solid #bfdbfe;
}

/* ── Lessons Grid ───────────────────────────────────── */
.lessons-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}

/* ── Individual Lesson Card ─────────────────────────── */
.lesson-card {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.lesson-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.12);
}

.lesson-card:hover .lc-btn {
  transform: translateX(3px);
}

/* Badge */
.lc-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: var(--bg-page);
  border: 1.5px solid var(--border-color);
  color: var(--text-primary);
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Icon area */
.lc-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  font-size: 38px;
  flex-shrink: 0;
}

.lc-blue   { background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%); color: #2563eb; }
.lc-green  { background: linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%); color: #16a34a; }
.lc-orange { background: linear-gradient(135deg, #ffedd5 0%, #fff7ed 100%); color: #ea580c; }

/* Card body */
.lc-body {
  padding: 18px 20px 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.lc-title {
  font-size: 17px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 8px;
  line-height: 1.3;
}

.lc-desc {
  font-size: 13px;
  color: var(--text-primary);
  line-height: 1.6;
  margin: 0 0 14px;
  opacity: 0.85;
}

/* Topic chips */
.lc-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.lc-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-primary);
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  padding: 3px 9px;
  border-radius: 20px;
}

.lc-chip i {
  font-size: 7px;
  opacity: 0.5;
}

/* Footer row */
.lc-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.lc-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  opacity: 0.8;
}

.lc-meta span {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Buttons */
.lc-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border: none;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.lc-btn-blue   { background: #2563eb; color: #fff; }
.lc-btn-green  { background: #16a34a; color: #fff; }
.lc-btn-orange { background: #ea580c; color: #fff; }

.lc-btn-blue:hover   { box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35); }
.lc-btn-green:hover  { box-shadow: 0 6px 18px rgba(22, 163, 74, 0.35); }
.lc-btn-orange:hover { box-shadow: 0 6px 18px rgba(234, 88, 12, 0.35); }

/* Progress bar at bottom of each card */
.lc-status-bar {
  height: 4px;
  background: var(--border-color);
}

.lc-status-fill {
  height: 100%;
  background: #2563eb;
  transition: width 0.4s ease;
}

.lc-status-green  { background: #16a34a; }
.lc-status-orange { background: #ea580c; }

/* ── Coming Soon Strip ──────────────────────────────── */
.lessons-coming-soon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--bg-card);
  border: 1.5px dashed var(--border-color);
  border-radius: 12px;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  opacity: 0.7;
}

.lessons-coming-soon i {
  color: #f59e0b;
}

/* ── Dark mode ──────────────────────────────────────── */
body.dark .section-pill {
  background: #1e3a5f;
  color: #93c5fd;
  border-color: #2563eb;
}

body.dark .lc-blue   { background: linear-gradient(135deg, #1e3a5f 0%, #172554 100%); color: #60a5fa; }
body.dark .lc-green  { background: linear-gradient(135deg, #14532d 0%, #052e16 100%); color: #4ade80; }
body.dark .lc-orange { background: linear-gradient(135deg, #431407 0%, #1c0a00 100%); color: #fb923c; }

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 1050px) {
  .lessons-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .lessons-page {
    padding: 20px 16px;
  }

  .lessons-title {
    font-size: 28px;
  }

  .lessons-grid {
    grid-template-columns: 1fr;
  }

  .lpb-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .lpb-divider {
    display: none;
  }

  .lpb-stat {
    padding: 0;
    justify-content: flex-start;
  }

  .lpb-stat:last-child {
    justify-content: flex-start;
  }
}
</style>
