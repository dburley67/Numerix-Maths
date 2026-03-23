<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const showPassword = ref(false);

function validateAndEnter() {
  router.push("/home");
}

function createAccount() {
  router.push("/home");
}
</script>

<template>
  <div class="welcome-shell">
    <main class="welcome-main">
      <div class="welcome-logo-wrap">
        <img
          src="/images/numerixMathsLogoTransparent.png"
          alt="Numerix Maths Logo"
          class="welcome-logo"
        />
      </div>

      <div class="welcome-card">
        <section class="left-panel">
          <h1>Welcome to <span>Numerix Maths</span></h1>
          <p class="subtitle">
            Learn Maths through Interactive Lessons, Practice Questions and
            Exams
          </p>

          <div class="pillars">
            <div class="pillar learn">
              <div class="pillar-icon">
                <i class="fa-solid fa-book-open"></i>
              </div>
              <div class="pillar-label">Learn</div>
              <div class="pillar-sub">• Structured Lessons</div>
            </div>

            <div class="pillar practice">
              <div class="pillar-icon">
                <i class="fa-solid fa-pen"></i>
              </div>
              <div class="pillar-label">Practice</div>
              <div class="pillar-sub">• Test your Knowledge</div>
            </div>

            <div class="pillar achieve">
              <div class="pillar-icon">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div class="pillar-label">Achieve</div>
              <div class="pillar-sub">• Earn Badges</div>
            </div>
          </div>

          <div class="section-title">Topics Covered</div>

          <div class="topics">
            <div class="topic-chip">
              <span class="chip-icon"><i class="fa-solid fa-divide"></i></span>
              Fractions
            </div>

            <div class="topic-chip">
              <span class="chip-icon">
                <i class="fa-solid fa-chart-simple"></i>
              </span>
              Probability
            </div>

            <div class="topic-chip center">
              <span class="chip-icon"><i class="fa-solid fa-hashtag"></i></span>
              Numbers
            </div>

            <div class="topic-chip">
              <span class="chip-icon"><i class="fa-solid fa-percent"></i></span>
              Percentages
            </div>

            <div class="topic-chip">
              <span class="chip-icon">
                <i class="fa-solid fa-square-root-variable"></i>
              </span>
              Operations
            </div>
          </div>
        </section>

        <section class="right-panel">
          <h2>Login to your account</h2>
          <p class="form-sub">Enter your details below</p>

          <form @submit.prevent="validateAndEnter">
            <div class="form-group">
              <span class="input-icon">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <input
                v-model="email"
                type="email"
                placeholder="Email Address"
                autocomplete="email"
              />
            </div>

            <div class="form-group">
              <span class="input-icon">
                <i class="fa-solid fa-lock"></i>
              </span>

              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                autocomplete="current-password"
              />

              <button
                type="button"
                class="toggle-pw"
                :title="showPassword ? 'Hide password' : 'Show password'"
                @click="showPassword = !showPassword"
              >
                <i
                  :class="
                    showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
                  "
                ></i>
              </button>
            </div>

            <button type="submit" class="btn-login">Login</button>
          </form>

          <div class="divider-text">Don't have an account?</div>

          <button class="btn-create" type="button" @click="createAccount">
            Create Account
          </button>
        </section>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            <strong>Numerix Maths</strong>
            <div class="footer-tagline">Learn • Practice • Succeed</div>
          </div>

          <div
            class="footer-actions footer-actions--static"
            aria-label="Footer links unavailable on welcome page"
          >
            <span>
              <i class="fa-solid fa-people-group footer-icon-white"></i>
              Team
            </span>
            <span>
              <i class="fa-solid fa-envelope footer-icon-white"></i>
              Contact
            </span>
          </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-grid">
          <div class="footer-col">
            <p>Developed by CoreWave Digital</p>
            <p>MOD008917 - Team Based Project</p>
          </div>

          <div class="footer-col footer-col-center">
            <p>Anglia Ruskin University</p>
          </div>

          <div class="footer-col footer-col-right">
            <a href="#">Accessibility Statement</a>
            <a href="#">Privacy Notice</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        © 2026 Numerix Maths - Educational Prototype Project
      </div>
    </footer>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
}

.welcome-shell {
  --navy: #1a2e5a;
  --blue: #2d63c8;
  --blue-light: #4a7ee0;
  --green: #3cb371;
  --gold: #e0a030;
  --teal: #3aabcc;
  --bg: #f0f2f5;
  --card: #ffffff;
  --text: #1a1a2e;
  --muted: #666666;
  --border: #d8dde8;
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.08);

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--text);
  font-family: "Poppins", sans-serif;
}

.welcome-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 32px 20px 20px;
}

.welcome-logo-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.welcome-logo {
  height: 150px;
  width: auto;
}

.welcome-card {
  background: var(--card);
  border-radius: 20px;
  box-shadow: var(--shadow);
  max-width: 1050px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}

.left-panel,
.right-panel {
  padding: 48px 44px;
  box-sizing: border-box;
}

.left-panel {
  border-right: 1px solid var(--border);
}

.left-panel h1 {
  font-family: "Nunito", sans-serif;
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 8px;
}

.left-panel h1 span {
  color: var(--blue);
}

.subtitle {
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 32px;
  line-height: 1.5;
}

.pillars {
  display: flex;
  gap: 12px;
  margin-bottom: 36px;
}

.pillar {
  flex: 1;
  border: 2px solid;
  border-radius: 12px;
  padding: 16px 12px;
  text-align: center;
  transition:
    transform 0.18s,
    box-shadow 0.18s;
}

.pillar:hover,
.topic-chip:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.learn {
  border-color: var(--teal);
}

.practice {
  border-color: var(--green);
}

.achieve {
  border-color: var(--gold);
}

.pillar-icon,
.chip-icon,
.input-icon,
.toggle-pw i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.pillar-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  font-size: 20px;
  margin: 0 auto 10px;
}

.pillar-icon i {
  color: inherit;
}

.learn .pillar-icon {
  background: #e8f6fb;
  color: var(--teal);
}

.practice .pillar-icon {
  background: #eafaf2;
  color: var(--green);
}

.achieve .pillar-icon {
  background: #fef6e4;
  color: var(--gold);
}

.pillar-label {
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.learn .pillar-label {
  color: var(--teal);
}

.practice .pillar-label {
  color: var(--green);
}

.achieve .pillar-label {
  color: var(--gold);
}

.pillar-sub {
  font-size: 0.74rem;
  color: var(--muted);
}

.section-title {
  text-align: center;
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-title::before,
.section-title::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border);
}

.topics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.topic-chip {
  border: 1.5px solid var(--border);
  border-radius: 10px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  transition:
    border-color 0.15s,
    background 0.15s,
    transform 0.15s;
}

.topic-chip:hover {
  border-color: var(--blue);
  background: #f0f5ff;
}

.chip-icon {
  font-size: 18px;
  width: 28px;
  text-align: center;
}

.topic-chip:nth-child(1) .chip-icon {
  color: var(--teal);
}

.topic-chip:nth-child(2) .chip-icon {
  color: var(--green);
}

.topic-chip:nth-child(3) .chip-icon {
  color: var(--blue);
}

.topic-chip:nth-child(4) .chip-icon {
  color: var(--gold);
}

.topic-chip:nth-child(5) .chip-icon {
  color: #7c4dff;
}

.topic-chip.center {
  grid-column: 1 / -1;
  justify-self: center;
  width: 50%;
}

.right-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-panel h2 {
  font-family: "Nunito", sans-serif;
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 6px;
}

.form-sub {
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 28px;
}

.form-group {
  position: relative;
  margin-bottom: 16px;
  width: 100%;
}

.form-group input {
  width: 100%;
  padding: 14px 44px 14px 42px;
  border-radius: 12px;
  border: 1.5px solid var(--border);
  font-size: 0.95rem;
  outline: none;
  box-sizing: border-box;
  display: block;
}

.form-group input:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 4px rgba(45, 99, 200, 0.08);
}

.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
}

.input-icon i {
  color: var(--blue);
}

.toggle-pw {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
}

.toggle-pw i {
  color: var(--blue);
}

.toggle-pw:hover i {
  color: var(--blue-light);
}

.btn-login,
.btn-create {
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
  box-sizing: border-box;
}

.btn-login {
  background: var(--blue);
  color: white;
  margin-top: 4px;
}

.btn-login:hover,
.btn-create:hover {
  transform: translateY(-1px);
}

.btn-login:hover {
  background: var(--blue-light);
}

.divider-text {
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
  margin: 18px 0 12px;
}

.btn-create {
  background: var(--green);
  color: white;
}

.btn-create:hover {
  background: #33a864;
}

.footer {
  margin-top: 20px;
}

.footer-actions--static span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
  cursor: default;
}

.footer-actions--static span:hover {
  background: none;
  color: inherit;
}

.footer-icon-white {
  color: #ffffff !important;
}

@media (max-width: 900px) {
  .welcome-card {
    grid-template-columns: 1fr;
  }

  .left-panel {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .welcome-logo {
    height: 95px;
  }

  .welcome-main {
    padding: 20px 12px;
  }

  .left-panel,
  .right-panel {
    padding: 28px 20px;
  }

  .pillars {
    flex-direction: column;
  }

  .topics {
    grid-template-columns: 1fr;
  }

  .topic-chip.center {
    grid-column: auto;
    width: 100%;
  }

  .footer-top,
  .footer-actions {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
