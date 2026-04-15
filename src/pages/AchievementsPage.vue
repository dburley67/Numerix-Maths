<template>
  <section class="achievements-page">
    <!-- Page Header -->
    <div class="achievements-header">
      <div class="achievements-header-text">
        <h1 class="achievements-title">
          <i class="fa-solid fa-award"></i> Achievements
        </h1>
        <p class="achievements-sub">
          <i class="fa-solid fa-circle-info"></i>
          Track your lesson milestones and unlock maths achievement badges
          <span class="dash-sep">|</span>
          <i class="fa-solid fa-trophy"></i>
          {{ achievements.length }} achievements available
        </p>
      </div>
    </div>

    <!-- Progress Banner -->
    <div class="achievements-progress-banner">
      <div class="apb-inner">
        <div class="apb-stat">
          <i class="fa-solid fa-trophy" style="color: #f59e0b"></i>
          <span><strong>{{ unlockedCount }}</strong> achievements unlocked</span>
        </div>
        <div class="apb-divider"></div>
        <div class="apb-stat">
          <i class="fa-solid fa-lock" style="color: #64748b"></i>
          <span><strong>{{ lockedCount }}</strong> achievements locked</span>
        </div>
        <div class="apb-divider"></div>
        <div class="apb-stat">
          <i class="fa-solid fa-circle-check" style="color: #22c55e"></i>
          <span><strong>{{ completionPercent }}%</strong> completion</span>
        </div>
      </div>
    </div>

    <!-- Section Label -->
    <div class="achievements-section-label">
      <span class="section-pill">
        <i class="fa-solid fa-layer-group"></i> Lesson Achievement Badges
      </span>
    </div>

    <!-- Achievement Cards -->
    <div class="achievements-grid">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="achievement-card"
        :class="{ locked: !achievement.unlocked }"
      >
        <div class="achievement-top-band" :class="achievement.bannerClass">
          <div class="achievement-icon-wrap">
            <i
              v-if="achievement.unlocked"
              :class="achievement.icon"
              class="achievement-icon"
            ></i>
            <i
              v-else
              class="fa-solid fa-lock achievement-icon achievement-icon-locked"
            ></i>
          </div>

          <div class="achievement-badge">
            {{ achievement.lessonBadge }}
          </div>
        </div>

        <div class="achievement-body">
          <div class="achievement-status-row">
            <span
              class="achievement-status"
              :class="achievement.unlocked ? 'status-done' : 'status-pending'"
            >
              <i
                :class="
                  achievement.unlocked
                    ? 'fa-solid fa-circle-check'
                    : 'fa-solid fa-lock'
                "
              ></i>
              {{ achievement.unlocked ? "Unlocked" : "Locked" }}
            </span>
          </div>

          <h3 class="achievement-card-title">{{ achievement.title }}</h3>
          <p class="achievement-card-desc">{{ achievement.description }}</p>

          <div class="achievement-tags">
            <span
              v-for="tag in achievement.tags"
              :key="tag"
              class="achievement-tag"
            >
              {{ tag }}
            </span>
          </div>

          <div class="achievement-footer">
            <div class="achievement-meta">
              <span>
                <i class="fa-solid fa-book-open"></i> {{ achievement.topic }}
              </span>
            </div>

            <RouterLink
              v-if="achievement.unlocked"
              :to="achievement.lessonLink"
              class="achievement-btn"
              :class="achievement.buttonClass"
            >
              Open <i class="fa-solid fa-arrow-right"></i>
            </RouterLink>

            <div v-else class="achievement-btn achievement-btn-locked">
              Locked <i class="fa-solid fa-lock"></i>
            </div>
          </div>
        </div>

        <div class="achievement-progress-bar">
          <div
            class="achievement-progress-fill"
            :class="achievement.fillClass"
            :style="{ width: achievement.unlocked ? '100%' : '0%' }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const achievements = [
  {
    id: 1,
    title: "Rounding Rookie",
    description:
      "Complete Decimals & Rounding and build confidence with place value, estimation, and significant figures.",
    topic: "Decimals & Rounding",
    lessonLink: "/lesson1",
    lessonBadge: "LESSON 1",
    icon: "fa-solid fa-percent",
    bannerClass: "banner-blue",
    buttonClass: "btn-blue",
    fillClass: "fill-blue",
    tags: ["Place Value", "Rounding", "Sig. Figures"],
    unlocked: true,
  },
  {
    id: 2,
    title: "Prime Hunter",
    description:
      "Finish Factors, Multiples & Primes and master factor pairs, multiples, primes, HCF and LCM.",
    topic: "Factors, Multiples & Primes",
    lessonLink: "/lesson2",
    lessonBadge: "LESSON 2",
    icon: "fa-solid fa-cubes",
    bannerClass: "banner-green",
    buttonClass: "btn-green",
    fillClass: "fill-green",
    tags: ["Factors", "Multiples", "Prime Numbers"],
    unlocked: true,
  },
  {
    id: 3,
    title: "Standard Form Starter",
    description:
      "Unlock this badge by completing Standard Form and learning how to work with powers of 10.",
    topic: "Standard Form",
    lessonLink: "/lesson3",
    lessonBadge: "LESSON 3",
    icon: "fa-solid fa-superscript",
    bannerClass: "banner-orange",
    buttonClass: "btn-orange",
    fillClass: "fill-orange",
    tags: ["Standard Form", "Powers of 10", "Calculations"],
    unlocked: false,
  },
  {
    id: 4,
    title: "Finance Foundations",
    description:
      "Complete Percentages & Finance and apply percentage skills to discounts, interest and money problems.",
    topic: "Percentages & Finance",
    lessonLink: "/lesson4",
    lessonBadge: "LESSON 4 & 5",
    icon: "fa-solid fa-percent",
    bannerClass: "banner-blue",
    buttonClass: "btn-blue",
    fillClass: "fill-blue",
    tags: ["Percentages", "Discounts", "Interest"],
    unlocked: false,
  },
  {
    id: 5,
    title: "Operations Operator",
    description:
      "Finish Basic Operations and strengthen your confidence with addition, subtraction, multiplication and division.",
    topic: "Basic Operations",
    lessonLink: "/lesson6",
    lessonBadge: "LESSON 6",
    icon: "fa-solid fa-calculator",
    bannerClass: "banner-red",
    buttonClass: "btn-red",
    fillClass: "fill-red",
    tags: ["Addition", "Subtraction", "Multiplication"],
    unlocked: false,
  },
  {
    id: 6,
    title: "BIDMAS Boss",
    description:
      "Complete BIDMAS and learn to solve expressions in the correct order with confidence.",
    topic: "BIDMAS",
    lessonLink: "/lesson7",
    lessonBadge: "LESSON 7",
    icon: "fa-solid fa-square-root-variable",
    bannerClass: "banner-red",
    buttonClass: "btn-red",
    fillClass: "fill-red",
    tags: ["Brackets", "Indices", "Order of Operations"],
    unlocked: false,
  },
  {
    id: 7,
    title: "Below Zero Explorer",
    description:
      "Unlock this by completing Negative Numbers and understanding values below zero.",
    topic: "Negative Numbers",
    lessonLink: "/lesson8",
    lessonBadge: "LESSON 8",
    icon: "fa-solid fa-minus",
    bannerClass: "banner-red-soft",
    buttonClass: "btn-red",
    fillClass: "fill-red",
    tags: ["Negative Concepts", "Subtraction", "Below Zero"],
    unlocked: false,
  },
  {
    id: 8,
    title: "Chance Chaser",
    description:
      "Complete Intro to Probability and learn how to measure likelihood and predict outcomes.",
    topic: "Intro to Probability",
    lessonLink: "/lesson9",
    lessonBadge: "LESSON 9",
    icon: "fa-solid fa-dice",
    bannerClass: "banner-indigo",
    buttonClass: "btn-indigo",
    fillClass: "fill-indigo",
    tags: ["Probability Scale", "Outcomes", "Predictions"],
    unlocked: false,
  },
  {
    id: 9,
    title: "Fraction Finisher",
    description:
      "Finish Fractions & Operations and master simplifying plus the four main fraction operations.",
    topic: "Fractions & Operations",
    lessonLink: "/lesson10",
    lessonBadge: "LESSON 10",
    icon: "fa-solid fa-divide",
    bannerClass: "banner-teal",
    buttonClass: "btn-teal",
    fillClass: "fill-teal",
    tags: ["Simplifying", "Add & Subtract", "Multiply"],
    unlocked: false,
  },
  {
    id: 10,
    title: "Ratio Resolver",
    description:
      "Complete Ratios & Sharing and strengthen your understanding of ratio notation, simplifying, and comparison.",
    topic: "Ratios & Sharing",
    lessonLink: "/lesson11",
    lessonBadge: "LESSON 11",
    icon: "fa-solid fa-scale-balanced",
    bannerClass: "banner-gold",
    buttonClass: "btn-gold",
    fillClass: "fill-gold",
    tags: ["Ratio Notation", "Simplifying", "Sharing"],
    unlocked: false,
  },
  {
    id: 11,
    title: "Proportion Pro",
    description:
      "Unlock this badge by completing Direct & Inverse Proportion and solving real-life proportion problems.",
    topic: "Direct & Inverse Proportion",
    lessonLink: "/lesson12",
    lessonBadge: "LESSON 12",
    icon: "fa-solid fa-up-down-left-right",
    bannerClass: "banner-purple",
    buttonClass: "btn-purple",
    fillClass: "fill-purple",
    tags: ["Direct Proportion", "Inverse Proportion", "Tables"],
    unlocked: false,
  },
  {
    id: 12,
    title: "Lesson Master",
    description:
      "Complete all lesson pages to unlock the final mastery badge and prove your full course progress.",
    topic: "Overall Progress",
    lessonLink: "/lessons",
    lessonBadge: "MASTER",
    icon: "fa-solid fa-medal",
    bannerClass: "banner-yellow",
    buttonClass: "btn-yellow",
    fillClass: "fill-yellow",
    tags: ["All Lessons", "Course Progress", "Mastery"],
    unlocked: false,
  },
];

const unlockedCount = computed(
  () => achievements.filter((a) => a.unlocked).length,
);

const lockedCount = computed(
  () => achievements.filter((a) => !a.unlocked).length,
);

const completionPercent = computed(() =>
  Math.round((unlockedCount.value / achievements.length) * 100),
);
</script>

<style scoped>
/* =========================================================
   ACHIEVEMENTS PAGE
   ========================================================= */

.achievements-page {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* ── Header ─────────────────────────────────────────── */
.achievements-header {
  margin-bottom: 22px;
}

.achievements-title {
  font-size: 40px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.achievements-title i {
  color: #2563eb;
}

.achievements-sub {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 15px;
  margin: 0;
  flex-wrap: wrap;
}

.achievements-sub i {
  opacity: 0.7;
}

.dash-sep {
  opacity: 0.4;
}

/* ── Progress Banner ────────────────────────────────── */
.achievements-progress-banner {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 16px 24px;
  margin-bottom: 28px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
}

.apb-inner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.apb-stat {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  padding: 0 24px;
  flex: 1;
  min-width: 180px;
  justify-content: center;
}

.apb-stat:first-child {
  padding-left: 0;
  justify-content: flex-start;
}

.apb-stat:last-child {
  padding-right: 0;
  justify-content: flex-end;
}

.apb-stat strong {
  color: var(--text-dark);
  font-size: 17px;
}

.apb-divider {
  width: 1px;
  height: 28px;
  background: var(--border-color);
  flex-shrink: 0;
}

/* ── Section Label ──────────────────────────────────── */
.achievements-section-label {
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

/* ── Achievement Grid ───────────────────────────────── */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* ── Card ───────────────────────────────────────────── */
.achievement-card {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
  display: flex;
  flex-direction: column;
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.12);
}

.achievement-card.locked {
  opacity: 0.92;
}

/* ── Top band ───────────────────────────────────────── */
.achievement-top-band {
  min-height: 88px;
  padding: 16px 16px 14px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.banner-blue {
  background: #dbeafe;
}
.banner-green {
  background: #dcfce7;
}
.banner-orange {
  background: #ffedd5;
}
.banner-red {
  background: #fee2e2;
}
.banner-red-soft {
  background: #fce7e7;
}
.banner-indigo {
  background: #e0e7ff;
}
.banner-teal {
  background: #d1fae5;
}
.banner-gold {
  background: #fef3c7;
}
.banner-purple {
  background: #ede9fe;
}
.banner-yellow {
  background: #fef9c3;
}

.achievement-icon-wrap {
  width: 58px;
  height: 58px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.achievement-icon {
  font-size: 28px;
}

.banner-blue .achievement-icon {
  color: #2563eb;
}
.banner-green .achievement-icon {
  color: #16a34a;
}
.banner-orange .achievement-icon {
  color: #ea580c;
}
.banner-red .achievement-icon,
.banner-red-soft .achievement-icon {
  color: #dc2626;
}
.banner-indigo .achievement-icon {
  color: #4f46e5;
}
.banner-teal .achievement-icon {
  color: #0f766e;
}
.banner-gold .achievement-icon {
  color: #d97706;
}
.banner-purple .achievement-icon {
  color: #9333ea;
}
.banner-yellow .achievement-icon {
  color: #ca8a04;
}

.achievement-icon-locked {
  color: #94a3b8 !important;
}

.achievement-badge {
  background: #f8fafc;
  color: #1e3a5f;
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* ── Body ───────────────────────────────────────────── */
.achievement-body {
  padding: 18px 20px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.achievement-status-row {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.achievement-status {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 800;
  padding: 5px 10px;
  border-radius: 999px;
}

.status-done {
  background: #dcfce7;
  color: #15803d;
}

.status-pending {
  background: #e2e8f0;
  color: #64748b;
}

.achievement-card-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
  margin: 0 0 8px;
  line-height: 1.3;
}

.achievement-card-desc {
  font-size: 13px;
  color: var(--text-primary);
  line-height: 1.6;
  margin: 0 0 14px;
  opacity: 0.85;
  min-height: 64px;
}

.achievement-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.achievement-tag {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-primary);
  background: var(--bg-page);
  border: 1px solid var(--border-color);
  padding: 4px 9px;
  border-radius: 20px;
}

.achievement-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.achievement-meta {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  opacity: 0.8;
}

.achievement-meta span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.achievement-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: fit-content;
  min-width: 110px;
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    filter 0.15s ease;
}

.achievement-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.btn-blue {
  background: #2563eb;
}
.btn-green {
  background: #16a34a;
}
.btn-orange {
  background: #ea580c;
}
.btn-red {
  background: #dc2626;
}
.btn-indigo {
  background: #4f46e5;
}
.btn-teal {
  background: #0f766e;
}
.btn-gold {
  background: #d97706;
}
.btn-purple {
  background: #9333ea;
}
.btn-yellow {
  background: #ca8a04;
}

.achievement-btn-locked {
  background: #cbd5e1;
  color: #475569;
  cursor: not-allowed;
  box-shadow: none;
}

/* ── Progress bar ───────────────────────────────────── */
.achievement-progress-bar {
  height: 4px;
  background: var(--border-color);
}

.achievement-progress-fill {
  height: 100%;
  transition: width 0.4s ease;
}

.fill-blue {
  background: #2563eb;
}
.fill-green {
  background: #16a34a;
}
.fill-orange {
  background: #ea580c;
}
.fill-red {
  background: #dc2626;
}
.fill-indigo {
  background: #4f46e5;
}
.fill-teal {
  background: #0f766e;
}
.fill-gold {
  background: #d97706;
}
.fill-purple {
  background: #9333ea;
}
.fill-yellow {
  background: #ca8a04;
}

/* ── Dark mode ──────────────────────────────────────── */
body.dark .section-pill {
  background: #1e3a5f;
  color: #93c5fd;
  border-color: #2563eb;
}

body.dark .achievement-badge {
  background: #1e293b;
  color: #e2e8f0;
  border-color: #334155;
}

body.dark .banner-blue {
  background: linear-gradient(135deg, #1e3a5f 0%, #172554 100%);
}
body.dark .banner-green {
  background: linear-gradient(135deg, #14532d 0%, #052e16 100%);
}
body.dark .banner-orange {
  background: linear-gradient(135deg, #431407 0%, #1c0a00 100%);
}
body.dark .banner-red,
body.dark .banner-red-soft {
  background: linear-gradient(135deg, #431415 0%, #3f0a10 100%);
}
body.dark .banner-indigo {
  background: linear-gradient(135deg, #312e81 0%, #1e1b4b 100%);
}
body.dark .banner-teal {
  background: linear-gradient(135deg, #134e4a 0%, #042f2e 100%);
}
body.dark .banner-gold,
body.dark .banner-yellow {
  background: linear-gradient(135deg, #422006 0%, #3b1800 100%);
}
body.dark .banner-purple {
  background: linear-gradient(135deg, #4c1d95 0%, #2e1065 100%);
}

body.dark .status-done {
  background: #14532d;
  color: #4ade80;
}

body.dark .status-pending {
  background: #334155;
  color: #cbd5e1;
}

body.dark .achievement-btn-locked {
  background: #334155;
  color: #cbd5e1;
}

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 1050px) {
  .achievements-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .achievements-page {
    padding: 20px 16px;
  }

  .achievements-title {
    font-size: 28px;
  }

  .achievements-grid {
    grid-template-columns: 1fr;
  }

  .apb-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .apb-divider {
    display: none;
  }

  .apb-stat {
    padding: 0;
    justify-content: flex-start;
  }

  .apb-stat:last-child {
    justify-content: flex-start;
  }
}
</style>