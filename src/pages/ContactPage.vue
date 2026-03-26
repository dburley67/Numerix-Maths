<template>
  <div class="contact-page">
    <!-- Top Row: Form + Info -->
    <div class="contact-grid-top">
      <!-- Contact Form -->
      <div class="contact-card">
        <h2 class="contact-card-title">
          <i class="fa-solid fa-paper-plane"></i> Send a Message
        </h2>

        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <input
                id="firstName"
                type="text"
                v-model="firstName"
                placeholder="First Name"
                required
              />
              <span v-if="!firstName" class="error"
                >First Name is required.</span
              >
            </div>
            <div class="form-group">
              <input
                id="lastName"
                type="text"
                v-model="lastName"
                placeholder="Last Name"
                required
              />
              <span v-if="!lastName" class="error">Last Name is required.</span>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <select id="firstSelect" v-model="subject" required>
                <option value="">Subject</option>
                <option value="fraction">Fraction</option>
                <option value="percentage">Percentage</option>
                <option value="numbers">Numbers</option>
                <option value="probability">Probability</option>
                <option value="operations">Operations</option>
                <option value="finalExam">Final Exam</option>
                <option value="other">Other</option>
              </select>
              <span v-if="!subject" class="error">Subject is required.</span>
            </div>
            <div class="form-group" v-show="subject !== 'other'">
              <select id="secondSelect" v-model="lesson" required>
                <option value="">Lesson</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <span v-if="!lesson && subject !== 'other'" class="error"
                >Lesson is required.</span
              >
            </div>
          </div>

          <div class="form-group">
            <textarea
              id="message"
              v-model="message"
              placeholder="Type your message here..."
              required
            ></textarea>
            <span v-if="!message" class="error">Message is required.</span>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="agree" v-model="agreed" required />
            <label for="agree">I agree to the terms</label>
            <span v-if="!agreed" class="error"
              >You must agree before submitting.</span
            >
          </div>

          <button type="submit" class="submit-btn">
            <i class="fa-solid fa-paper-plane"></i> Submit
          </button>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="contact-card contact-info-card">
        <h2 class="contact-card-title">
          <i class="fa-solid fa-address-card"></i> Contact Info
        </h2>

        <div class="info-item">
          <i class="fa-solid fa-location-dot info-icon"></i>
          <address>
            University House, Bishop's Rd,<br />
            Peterborough PE1 5BW
          </address>
        </div>

        <div class="info-item">
          <i class="fa-solid fa-phone info-icon"></i>
          <a href="tel:+447859882986">+44 7859 882 986</a>
        </div>

        <div class="info-item">
          <i class="fa-solid fa-envelope info-icon"></i>
          <a href="mailto:info@numerix.com">info@numerix.com</a>
        </div>

        <div class="info-item info-item--block">
          <p class="info-label">
            <i class="fa-solid fa-clock info-icon"></i> Opening Hours
          </p>
          <ul class="hours-list">
            <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 10:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div class="info-item info-item--block">
          <p class="info-label">
            <i class="fa-solid fa-share-nodes info-icon"></i> Follow Us
          </p>
          <div class="social-links">
            <a href="https://www.facebook.com/numerix" target="_blank">
              <i class="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://www.twitter.com/numerix" target="_blank">
              <i class="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/company/numerix" target="_blank">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Row: Image + Map -->
    <div class="contact-grid-bottom">
      <div class="contact-card contact-image-card">
        <img
          src="/images/locationImage.jpg"
          alt="Numerix campus"
          class="contact-img"
        />
      </div>

      <div class="contact-card">
        <h2 class="contact-card-title">
          <i class="fa-solid fa-map-location-dot"></i> Find Us
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.910892385992!2d-0.23781742331574937!3d52.571222672074654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f23d79c807d3%3A0xadf5a3c02aef1b1b!2sARU%20Peterborough!5e0!3m2!1sen!2suk!4v1772201786392!5m2!1sen!2suk"
          class="contact-map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      message: "",
      agreed: false,
      subject: "",
      lesson: "",
    };
  },
  watch: {
    subject(newValue) {
      if (newValue === "other") {
        this.lesson = "";
      }
    },
  },
  methods: {
    submitForm() {
      if (
        !this.firstName ||
        !this.lastName ||
        !this.message ||
        !this.agreed ||
        !this.subject ||
        (this.subject !== "other" && !this.lesson)
      ) {
        alert("Please fill in all required fields.");
        return;
      }
      console.log({
        firstName: this.firstName,
        lastName: this.lastName,
        message: this.message,
        subject: this.subject,
        lesson: this.lesson,
      });
      alert("Form submitted successfully!");
      this.firstName = "";
      this.lastName = "";
      this.message = "";
      this.agreed = false;
      this.subject = "";
      this.lesson = "";
    },
  },
};
</script>

<style scoped>
/* =========================================================
   CONTACT PAGE
   ========================================================= */

.contact-page {
  padding: 40px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  font-family: "Poppins", sans-serif;
}

/* ── Top and Bottom Layout ────────────────────────────── */
.contact-grid-top,
.contact-grid-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px; /* more space so cards do not touch */
  align-items: stretch;
}

.contact-grid-top {
  margin-bottom: 28px;
}

/* ── Cards ────────────────────────────────────────────── */
.contact-card {
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 22px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.contact-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #4f46e5, #06b6d4);
}

.contact-card-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 22px;
  font-size: 18px;
  font-weight: 800;
  color: var(--text-dark);
}

.contact-card-title i {
  color: #2563eb;
}

/* ── Form Layout ─────────────────────────────────────── */
.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  margin-bottom: 6px;
}

.form-group {
  width: 100%;
  min-width: 0;
}

/* Inputs */
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 13px 15px;
  border-radius: 14px;
  border: 1.5px solid var(--border-color);
  background: linear-gradient(
    180deg,
    var(--bg-page) 0%,
    rgba(255, 255, 255, 0.55) 100%
  );
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: var(--text-dark);
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-primary);
  opacity: 0.75;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
  background: var(--bg-card);
}

.form-group textarea {
  min-height: 130px;
  resize: vertical;
  line-height: 1.6;
}

/* Errors */
.error {
  display: block;
  margin-top: 7px;
  font-size: 12px;
  font-weight: 700;
  color: #ef4444;
}

/* Checkbox */
.checkbox-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 16px 0 18px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.checkbox-group input[type="checkbox"] {
  width: 17px;
  height: 17px;
  accent-color: #2563eb;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-group label {
  cursor: pointer;
  color: var(--text-dark);
}

/* Submit Button */
.submit-btn {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 18px;
  border-radius: 14px;
  border: none;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 55%, #4f46e5 100%);
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    filter 0.18s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.22);
  filter: brightness(1.03);
}

/* ── Contact Info ────────────────────────────────────── */
.contact-info-card {
  background:
    radial-gradient(
      circle at top right,
      rgba(37, 99, 235, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(79, 70, 229, 0.08),
      transparent 28%
    ),
    var(--bg-card);
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-primary);
}

.info-item a,
.info-item address {
  color: var(--text-primary);
  text-decoration: none;
  font-style: normal;
}

.info-item a {
  font-weight: 700;
  color: #2563eb;
}

.info-item a:hover {
  text-decoration: underline;
}

.info-icon {
  color: #2563eb;
  margin-top: 3px;
  flex-shrink: 0;
}

.info-item--block {
  display: block;
  margin-top: 6px;
}

.info-label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 8px;
  font-size: 15px;
  font-weight: 800;
  color: var(--text-dark);
}

.hours-list {
  margin: 0;
  padding-left: 34px;
  color: var(--text-primary);
  line-height: 1.8;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 34px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2563eb;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition:
    transform 0.18s ease,
    color 0.18s ease;
}

.social-links a:hover {
  transform: translateX(3px);
  color: #1d4ed8;
}

/* ── Image Card ──────────────────────────────────────── */
.contact-image-card {
  padding: 0;
  overflow: hidden;
}

.contact-image-card::before {
  height: 0;
}

.contact-img {
  display: block;
  width: 100%;
  height: 440px;
  object-fit: cover;
}

/* ── Map Card ────────────────────────────────────────── */
.contact-map {
  width: 100%;
  height: 360px;
  border: none;
  border-radius: 16px;
  display: block;
  overflow: hidden;
}

/* ── Extra polish for bottom row cards ──────────────── */
.contact-grid-bottom .contact-card {
  min-height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* ── Dark Mode ───────────────────────────────────────── */
body.dark .contact-card::before {
  background: linear-gradient(90deg, #3b82f6, #6366f1, #06b6d4);
}

body.dark .form-group input,
body.dark .form-group select,
body.dark .form-group textarea {
  background: var(--bg-page);
  color: var(--text-dark);
}

body.dark .form-group input:focus,
body.dark .form-group select:focus,
body.dark .form-group textarea:focus {
  background: var(--bg-card);
}

body.dark .contact-info-card {
  background:
    radial-gradient(
      circle at top right,
      rgba(59, 130, 246, 0.1),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(99, 102, 241, 0.1),
      transparent 28%
    ),
    var(--bg-card);
}

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 1000px) {
  .contact-grid-top,
  .contact-grid-bottom {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .contact-grid-bottom .contact-card {
    min-height: auto;
  }

  .contact-img {
    height: 320px;
  }

  .contact-map {
    height: 320px;
  }
}

@media (max-width: 700px) {
  .contact-page {
    padding: 20px 16px;
  }

  .contact-card {
    padding: 18px;
    border-radius: 18px;
  }

  .contact-card-title {
    font-size: 17px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .contact-img {
    height: 240px;
  }

  .contact-map {
    height: 250px;
  }

  .hours-list,
  .social-links {
    padding-left: 0;
  }
}
</style>
