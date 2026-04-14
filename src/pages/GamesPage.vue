<template>
  <section class="games-page">
    <!-- Hero -->
    <div class="games-hero">
      <div class="games-hero-badge">
        <i class="fa-solid fa-gamepad"></i> Games Hub
      </div>

      <h1 class="games-title">Games Coming Soon</h1>

      <p class="games-sub">
        We are building interactive maths games to make practice more engaging,
        competitive, and fun.
      </p>

      <div class="games-hero-meta">
        <span
          ><i class="fa-solid fa-screwdriver-wrench"></i> Under
          Construction</span
        >
        <span><i class="fa-solid fa-star"></i> Rewards Planned</span>
        <span
          ><i class="fa-solid fa-puzzle-piece"></i> Mini-games in
          development</span
        >
      </div>
    </div>

    <!-- Main card -->
    <div class="games-main-card">
      <div class="games-main-left">
        <div class="construction-visual">
          <div class="construction-circle cc-one"></div>
          <div class="construction-circle cc-two"></div>

          <div class="construction-icon-wrap">
            <i class="fa-solid fa-screwdriver-wrench construction-icon"></i>
          </div>
        </div>

        <div class="games-status">
          <div class="status-pill">
            <i class="fa-solid fa-hourglass-half"></i> In Progress
          </div>
          <h2 class="games-status-title">We’re still building this section</h2>
          <p class="games-status-text">
            The Games page is not available yet, but it will soon include fun
            maths challenges, timed tasks, and score-based activities.
          </p>
        </div>
      </div>

      <div class="games-main-right">
        <div class="preview-card preview-blue">
          <div class="preview-icon">
            <i class="fa-solid fa-stopwatch"></i>
          </div>
          <div>
            <h3>Speed Challenges</h3>
            <p>Quick rounds to test your accuracy under pressure.</p>
          </div>
        </div>

        <div class="preview-card preview-purple">
          <div class="preview-icon">
            <i class="fa-solid fa-trophy"></i>
          </div>
          <div>
            <h3>Leaderboard Goals</h3>
            <p>Track your scores and compete with yourself over time.</p>
          </div>
        </div>

        <div class="preview-card preview-green">
          <div class="preview-icon">
            <i class="fa-solid fa-brain"></i>
          </div>
          <div>
            <h3>Topic-Based Games</h3>
            <p>Mini-games linked to decimals, factors, BIDMAS, and more.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress strip -->
    <div class="games-progress-card">
      <div class="games-progress-header">
        <span>Development Progress</span>
        <span class="progress-pct">0%</span>
      </div>

      <div class="games-progress-bar">
        <div class="games-progress-fill"></div>
      </div>

      <p class="games-progress-text">
        This page is currently a placeholder while the game features are being
        planned.
      </p>
    </div>

    <!-- Bottom note -->
    <div class="games-note-card">
      <div class="games-note-icon">
        <i class="fa-solid fa-lightbulb"></i>
      </div>
      <div>
        <h3>What to do in the meantime</h3>
        <p>
          You can continue learning through lessons and practice exercises while
          the game features are under development.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Placeholder only
</script>

<style scoped>
/* =========================================================
   GAMES PAGE — COMING SOON
   ========================================================= */

.games-page {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
}

/* ── Hero ─────────────────────────────────────────────── */
.games-hero {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 55%, #8b5cf6 100%);
  border-radius: 24px;
  padding: 34px 36px;
  color: #fff;
  margin-bottom: 28px;
  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.16);
}

.games-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(255, 255, 255, 0.12) 0%,
      transparent 28%
    ),
    radial-gradient(
      circle at 15% 85%,
      rgba(255, 255, 255, 0.08) 0%,
      transparent 24%
    );
  pointer-events: none;
}

.games-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.games-title {
  margin: 0 0 10px;
  font-size: 40px;
  font-weight: 900;
  line-height: 1.1;
}

.games-sub {
  margin: 0 0 18px;
  max-width: 650px;
  font-size: 15px;
  line-height: 1.7;
  opacity: 0.95;
}

.games-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.games-hero-meta span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
}

/* ── Main card ────────────────────────────────────────── */
.games-main-card {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 22px;
  margin-bottom: 24px;
}

.games-main-left,
.games-main-right {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 22px;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
}

.games-main-left {
  padding: 28px;
  overflow: hidden;
  position: relative;
}

.games-main-right {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ── Construction visual ─────────────────────────────── */
.construction-visual {
  position: relative;
  min-height: 210px;
  border-radius: 20px;
  margin-bottom: 20px;
  background:
    radial-gradient(
      circle at 20% 25%,
      rgba(79, 70, 229, 0.1) 0%,
      transparent 22%
    ),
    radial-gradient(
      circle at 80% 30%,
      rgba(139, 92, 246, 0.1) 0%,
      transparent 24%
    ),
    linear-gradient(135deg, var(--bg-page) 0%, rgba(255, 255, 255, 0.75) 100%);
  border: 1.5px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.construction-circle {
  position: absolute;
  border-radius: 50%;
}

.cc-one {
  width: 110px;
  height: 110px;
  background: rgba(79, 70, 229, 0.1);
  top: 24px;
  left: 34px;
}

.cc-two {
  width: 84px;
  height: 84px;
  background: rgba(139, 92, 246, 0.12);
  right: 38px;
  bottom: 28px;
}

.construction-icon-wrap {
  width: 100px;
  height: 100px;
  border-radius: 26px;
  background: linear-gradient(135deg, #e0e7ff 0%, #ede9fe 100%);
  color: #5b21b6;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 24px rgba(91, 33, 182, 0.12);
  position: relative;
  z-index: 2;
}

.construction-icon {
  font-size: 44px;
}

/* ── Status text ─────────────────────────────────────── */
.games-status {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  background: #eef2ff;
  color: #4f46e5;
  border: 1px solid #c7d2fe;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
}

.games-status-title {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: var(--text-dark);
}

.games-status-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-primary);
  max-width: 620px;
}

/* ── Preview cards ───────────────────────────────────── */
.preview-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  border-radius: 18px;
  padding: 18px;
  border: 1.5px solid var(--border-color);
  background: var(--bg-page);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.preview-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.07);
}

.preview-card h3 {
  margin: 0 0 5px;
  font-size: 16px;
  font-weight: 800;
  color: var(--text-dark);
}

.preview-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-primary);
}

.preview-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.preview-blue .preview-icon {
  background: #dbeafe;
  color: #2563eb;
}

.preview-purple .preview-icon {
  background: #ede9fe;
  color: #7c3aed;
}

.preview-green .preview-icon {
  background: #dcfce7;
  color: #16a34a;
}

/* ── Progress card ───────────────────────────────────── */
.games-progress-card {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 20px;
  padding: 22px 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
}

.games-progress-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
  color: var(--text-dark);
}

.progress-pct {
  color: #7c3aed;
}

.games-progress-bar {
  height: 12px;
  background: var(--border-color);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 10px;
}

.games-progress-fill {
  width: 0%;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #4f46e5 0%, #8b5cf6 100%);
}

.games-progress-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-primary);
}

/* ── Bottom note ─────────────────────────────────────── */
.games-note-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 20px;
  padding: 22px 24px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
}

.games-note-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: #fef3c7;
  color: #d97706;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.games-note-card h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
}

.games-note-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-primary);
}

/* ── Dark mode ───────────────────────────────────────── */
body.dark .status-pill {
  background: #312e81;
  color: #c4b5fd;
  border-color: #6366f1;
}

body.dark .construction-visual {
  background:
    radial-gradient(
      circle at 20% 25%,
      rgba(79, 70, 229, 0.16) 0%,
      transparent 22%
    ),
    radial-gradient(
      circle at 80% 30%,
      rgba(139, 92, 246, 0.16) 0%,
      transparent 24%
    ),
    linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.6) 0%,
      rgba(30, 41, 59, 0.75) 100%
    );
}

body.dark .construction-icon-wrap {
  background: linear-gradient(135deg, #312e81 0%, #4c1d95 100%);
  color: #ddd6fe;
}

body.dark .preview-blue .preview-icon {
  background: #172554;
  color: #60a5fa;
}

body.dark .preview-purple .preview-icon {
  background: #2e1065;
  color: #c4b5fd;
}

body.dark .preview-green .preview-icon {
  background: #052e16;
  color: #4ade80;
}

body.dark .games-note-icon {
  background: #422006;
  color: #fbbf24;
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 1000px) {
  .games-main-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .games-page {
    padding: 20px 16px;
  }

  .games-hero {
    padding: 26px 20px;
    border-radius: 20px;
  }

  .games-title {
    font-size: 30px;
  }

  .games-main-left,
  .games-main-right,
  .games-progress-card,
  .games-note-card {
    border-radius: 18px;
  }

  .games-main-left {
    padding: 18px;
  }

  .games-progress-card,
  .games-note-card {
    padding: 18px;
  }

  .games-status-title {
    font-size: 22px;
  }

  .construction-visual {
    min-height: 180px;
  }

  .construction-icon-wrap {
    width: 84px;
    height: 84px;
    border-radius: 22px;
  }

  .construction-icon {
    font-size: 36px;
  }

  .games-note-card {
    flex-direction: column;
  }
}
</style>
