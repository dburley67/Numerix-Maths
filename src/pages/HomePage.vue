<template>
  <section class="home-page">
    <div class="page-header">
      <div class="page-title">
        <i class="fa-solid fa-house"></i>
        <h1>Welcome back, [Users Name]</h1>
      </div>
      <p>
        Track your progress, build your streak, and continue your maths journey.
      </p>
    </div>

    <div class="home-summary">
      <div class="summary-card">
        <i class="fa-solid fa-fire"></i>
        <div>
          <h2>3</h2>
          <p>Day Streak</p>
        </div>
      </div>

      <div class="summary-card">
        <i class="fa-solid fa-star"></i>
        <div>
          <h2>Level 4</h2>
          <p>Current Level</p>
        </div>
      </div>

      <div class="summary-card">
        <i class="fa-solid fa-award"></i>
        <div>
          <h2>5</h2>
          <p>Badges Earned</p>
        </div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="main-column">
        <article class="dashboard-card">
          <div class="card-header">
            <div class="card-icon icon-blue">
              <i class="fa-solid fa-book-open"></i>
            </div>
            <div>
              <h3>Total Lessons</h3>
              <p>Completed lessons so far</p>
            </div>
          </div>

          <div class="big-stat">5</div>

          <div class="progress-row">
            <span>Progress</span>
            <span>52%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill green" style="width: 52%"></div>
          </div>
        </article>

        <article class="dashboard-card">
          <div class="card-header">
            <div class="card-icon icon-green">
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div>
              <h3>Practice Questions</h3>
              <p>Completed practice questions</p>
            </div>
          </div>

          <div class="big-stat">5</div>

          <div class="progress-row">
            <span>Progress</span>
            <span>18%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill green" style="width: 18%"></div>
          </div>
        </article>

        <article class="dashboard-card">
          <div class="card-header">
            <div class="card-icon icon-orange">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div>
              <h3>Achievements Unlocked</h3>
              <p>Total rewards collected</p>
            </div>
          </div>

          <div class="big-stat">2</div>

          <div class="progress-row">
            <span>Progress</span>
            <span>14%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill green" style="width: 14%"></div>
          </div>
        </article>

        <article class="dashboard-card">
          <div class="card-header">
            <div class="card-icon icon-purple">
              <i class="fa-solid fa-chart-column"></i>
            </div>
            <div>
              <h3>Average Score</h3>
              <p>Your current performance</p>
            </div>
          </div>

          <div class="big-stat">25%</div>

          <div class="progress-row">
            <span>Performance</span>
            <span>25%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill blue" style="width: 25%"></div>
          </div>
        </article>
      </div>

      <aside class="side-column">
        <article class="side-card">
          <div class="side-title">
            <i class="fa-solid fa-chart-line"></i>
            <h3>Stats</h3>
          </div>

          <div class="level-block">
            <div class="level-head">
              <span>Level 4</span>
              <span>68%</span>
            </div>
            <div class="progress-bar small">
              <div class="progress-fill blue" style="width: 68%"></div>
            </div>
          </div>

          <div class="mini-stat">
            <i class="fa-solid fa-fire"></i>
            <span>Streak: 3 days</span>
          </div>

          <div class="mini-stat">
            <i class="fa-solid fa-award"></i>
            <span>Badges: 5</span>
          </div>
        </article>

        <article class="side-card">
          <div class="side-title">
            <i class="fa-solid fa-trophy"></i>
            <h3>Leaderboard</h3>
          </div>

          <div class="leaderboard-list">
            <div class="leaderboard-item">
              <span class="rank">1</span>
              <span class="player">[User]</span>
              <span class="score">1258</span>
            </div>
            <div class="leaderboard-item">
              <span class="rank">2</span>
              <span class="player">Alex</span>
              <span class="score">1159</span>
            </div>
            <div class="leaderboard-item">
              <span class="rank">3</span>
              <span class="player">Kai</span>
              <span class="score">1072</span>
            </div>
          </div>
        </article>
      </aside>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.home-page {
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

.home-summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 28px;
}

.summary-card {
  background: #ffffff;
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
  font-size: 1.7rem;
  color: #14213d;
}

.summary-card p {
  margin: 4px 0 0;
  color: #5f718c;
  font-weight: 600;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.main-column {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.dashboard-card,
.side-card {
  background: #ffffff;
  border: 1px solid #d8e0ea;
  border-radius: 26px;
  padding: 24px;
  box-shadow: 0 3px 12px rgba(31, 47, 70, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}

.card-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.45rem;
  flex-shrink: 0;
}

.icon-blue {
  background: #e8f0ff;
  color: #2f66e8;
}

.icon-green {
  background: #e4f5e8;
  color: #22a447;
}

.icon-orange {
  background: #f8ebdc;
  color: #f06a11;
}

.icon-purple {
  background: #efe8fb;
  color: #7c4dff;
}

.card-header h3 {
  margin: 0 0 4px;
  color: #14213d;
  font-size: 1.18rem;
}

.card-header p {
  margin: 0;
  color: #5b6e88;
}

.big-stat {
  font-size: 2.5rem;
  font-weight: 800;
  color: #14213d;
  margin-bottom: 18px;
}

.progress-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #5f718c;
  font-weight: 700;
  font-size: 0.95rem;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #dde4ee;
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar.small {
  height: 10px;
}

.progress-fill {
  height: 100%;
  border-radius: 999px;
}

.progress-fill.green {
  background: #22c55e;
}

.progress-fill.blue {
  background: #2f66e8;
}

.side-column {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.side-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.side-title i {
  color: #2f66e8;
}

.side-title h3 {
  margin: 0;
  color: #14213d;
  font-size: 1.2rem;
}

.level-block {
  margin-bottom: 22px;
}

.level-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #1d3560;
  font-weight: 700;
}

.mini-stat {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  background: #f8fafc;
  border: 1px solid #d8e0ea;
  border-radius: 14px;
  padding: 12px 14px;
  color: #1d3560;
  font-weight: 700;
}

.mini-stat .fa-fire {
  color: #f97316;
}

.mini-stat .fa-award {
  color: #c6922b;
}

.leaderboard-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.leaderboard-item {
  display: grid;
  grid-template-columns: 28px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: #f8fafc;
  border: 1px solid #d8e0ea;
  border-radius: 16px;
}

.rank {
  font-weight: 800;
  color: #1d3560;
}

.player {
  color: #1d3560;
  font-weight: 700;
}

.score {
  color: #5f718c;
  font-weight: 700;
}

@media (max-width: 1000px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .home-summary {
    grid-template-columns: 1fr;
  }

  .main-column {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .home-page {
    padding: 20px;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
