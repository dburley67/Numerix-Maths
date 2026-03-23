<template>
  <section class="achievements-page">
    <div class="page-header">
      <div class="page-title">
        <i class="fa-solid fa-trophy"></i>
        <h1>Achievements</h1>
      </div>
      <p>Unlock rewards as you complete maths lessons.</p>
    </div>

    <div class="progress-summary">
      <div class="summary-card">
        <i class="fa-solid fa-trophy"></i>
        <div>
          <h2>{{ unlockedCount }}</h2>
          <p>Unlocked</p>
        </div>
      </div>
      <div class="summary-card">
        <i class="fa-solid fa-lock"></i>
        <div>
          <h2>{{ lockedCount }}</h2>
          <p>Locked</p>
        </div>
      </div>
      <div class="summary-card">
        <i class="fa-solid fa-chart-line"></i>
        <div>
          <h2>{{ completionPercent }}%</h2>
          <p>Completion</p>
        </div>
      </div>
    </div>

    <div class="section-pill">
      <i class="fa-solid fa-award"></i><span>Maths Achievement Badges</span>
    </div>

    <div class="achievements-grid">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="achievement-card"
        :class="{ locked: !achievement.unlocked }"
      >
        <div class="achievement-banner" :class="achievement.bannerClass">
          <div class="badge-icon">
            <i v-if="achievement.unlocked" :class="achievement.icon"></i
            ><i v-else class="fa-solid fa-lock"></i>
          </div>
          <span class="lesson-badge">{{ achievement.lessonBadge }}</span>
        </div>

        <div class="achievement-content">
          <div class="achievement-top">
            <span
              class="achievement-status"
              :class="achievement.unlocked ? 'done' : 'pending'"
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

          <h3>{{ achievement.title }}</h3>
          <p class="achievement-description">{{ achievement.description }}</p>

          <div class="achievement-bottom">
            <span class="topic-label">{{ achievement.topic }}</span>
            <RouterLink
              v-if="achievement.unlocked"
              :to="achievement.lessonLink"
              class="lesson-link"
              ><i class="fa-solid fa-arrow-right"></i>Go to lesson</RouterLink
            >
            <div v-else class="lesson-link disabled-link">
              <i class="fa-solid fa-lock"></i>Complete to unlock
            </div>
          </div>
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
      "Complete the Decimal Rounding lesson and master rounding rules.",
    topic: "Decimal Rounding",
    lessonLink: "/lesson1",
    lessonBadge: "LESSON 1",
    icon: "fa-solid fa-calculator",
    bannerClass: "banner-blue",
    unlocked: true,
  },
  {
    id: 2,
    title: "Prime Hunter",
    description: "Finish the Factors, Multiples and Primes lesson.",
    topic: "Factors, Multiples and Primes",
    lessonLink: "/lesson2",
    lessonBadge: "LESSON 2",
    icon: "fa-solid fa-cubes",
    bannerClass: "banner-green",
    unlocked: true,
  },
  {
    id: 3,
    title: "Standard Form Starter",
    description: "Unlock this by completing the Standard Form lesson.",
    topic: "Standard Form",
    lessonLink: "/lesson3",
    lessonBadge: "LESSON 3",
    icon: "fa-solid fa-square-root-variable",
    bannerClass: "banner-orange",
    unlocked: false,
  },
  {
    id: 4,
    title: "Practice Champion",
    description: "Complete 5 maths practice activities.",
    topic: "Practice Skills",
    lessonLink: "/practice",
    lessonBadge: "PRACTICE",
    icon: "fa-solid fa-pen",
    bannerClass: "banner-purple",
    unlocked: false,
  },
  {
    id: 5,
    title: "Lesson Explorer",
    description: "Visit all core maths lesson pages.",
    topic: "Lesson Progress",
    lessonLink: "/lessons",
    lessonBadge: "ALL LESSONS",
    icon: "fa-solid fa-book-open",
    bannerClass: "banner-green",
    unlocked: true,
  },
  {
    id: 6,
    title: "Maths Master in Training",
    description: "Unlock all starter maths achievements.",
    topic: "Overall Progress",
    lessonLink: "/home",
    lessonBadge: "MASTER",
    icon: "fa-solid fa-medal",
    bannerClass: "banner-yellow",
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
.achievements-page {
  min-height: 100%;
  padding: 32px;
  background: transparent;
}
.page-header {
  margin-bottom: 28px;
}
.page-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}
.page-title i {
  font-size: 2rem;
  color: #2f66e8;
}
.page-header h1 {
  margin: 0;
  font-size: 2.4rem;
  line-height: 1;
  color: #14213d;
}
.page-header p {
  margin: 0;
  color: #4f6481;
  font-size: 1.02rem;
  font-weight: 500;
}
.progress-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 28px;
}
.summary-card {
  background: #fff;
  border: 1px solid #d8e0ea;
  border-radius: 24px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(31, 47, 70, 0.04);
}
.summary-card i {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #edf4ff;
  color: #2f66e8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
.summary-card h2 {
  margin: 0;
  font-size: 1.8rem;
  color: #14213d;
}
.summary-card p {
  margin: 4px 0 0;
  color: #5f718c;
  font-weight: 600;
}
.section-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 26px;
  padding: 12px 20px;
  border: 2px solid #bcd3ff;
  border-radius: 999px;
  color: #2f66e8;
  background: #f4f8ff;
  font-weight: 700;
}
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 28px;
}
.achievement-card {
  background: #fff;
  border: 1px solid #d8e0ea;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(31, 47, 70, 0.05);
}
.achievement-banner {
  height: 132px;
  padding: 22px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.banner-blue {
  background: #dfeaf9;
}
.banner-green {
  background: #deefe2;
}
.banner-orange {
  background: #f3e5cf;
}
.banner-purple {
  background: #ece4f6;
}
.banner-yellow {
  background: #f9f1d6;
}
.badge-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2f66e8;
  font-size: 2rem;
}
.banner-green .badge-icon {
  color: #21a64b;
}
.banner-orange .badge-icon {
  color: #f06a11;
}
.banner-purple .badge-icon {
  color: #7c4dff;
}
.banner-yellow .badge-icon {
  color: #c6922b;
}
.locked .badge-icon {
  color: #8a97ab;
}
.lesson-badge {
  background: #f4f5f7;
  color: #23395d;
  border: 1px solid #cfd8e6;
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 0.92rem;
  font-weight: 800;
}
.achievement-content {
  padding: 24px;
}
.achievement-top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 14px;
}
.achievement-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 800;
}
.achievement-status.done {
  background: #dff3e4;
  color: #16773a;
}
.achievement-status.pending {
  background: #e6ebf2;
  color: #6a778d;
}
.achievement-content h3 {
  margin: 0 0 12px;
  color: #14213d;
  font-size: 1.15rem;
  line-height: 1.3;
}
.achievement-description {
  margin: 0 0 18px;
  color: #5b6e88;
  font-size: 1rem;
  line-height: 1.6;
  min-height: 78px;
}
.achievement-bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}
.topic-label {
  display: inline-block;
  background: #eef3fb;
  color: #2f66e8;
  padding: 9px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 800;
}
.lesson-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #2f66e8;
  color: #fff;
  padding: 12px 18px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  box-shadow: 0 4px 10px rgba(47, 102, 232, 0.18);
}
.lesson-link:hover {
  background: #2558cf;
}
.disabled-link {
  background: #cfd8e3;
  color: #53657e;
  box-shadow: none;
  cursor: not-allowed;
}
@media (max-width: 900px) {
  .progress-summary {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .achievements-page {
    padding: 20px;
  }
  .page-header h1 {
    font-size: 2rem;
  }
  .achievement-banner {
    height: auto;
    min-height: 120px;
  }
}
</style>
