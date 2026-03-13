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
              <input id="firstName" type="text" v-model="firstName" placeholder="First Name" required />
              <span v-if="!firstName" class="error">First Name is required.</span>
            </div>
            <div class="form-group">
              <input id="lastName" type="text" v-model="lastName" placeholder="Last Name" required />
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
              <span v-if="!lesson && subject !== 'other'" class="error">Lesson is required.</span>
            </div>
          </div>

          <div class="form-group">
            <textarea id="message" v-model="message" placeholder="Type your message here..." required></textarea>
            <span v-if="!message" class="error">Message is required.</span>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="agree" v-model="agreed" required />
            <label for="agree">I agree to the terms</label>
            <span v-if="!agreed" class="error">You must agree before submitting.</span>
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
          <p class="info-label"><i class="fa-solid fa-clock info-icon"></i> Opening Hours</p>
          <ul class="hours-list">
            <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
            <li>Saturday: 10:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div class="info-item info-item--block">
          <p class="info-label"><i class="fa-solid fa-share-nodes info-icon"></i> Follow Us</p>
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
          src="/images/20180907_ABP_01_004-5_HR-850x567.jpg"
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
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      message: '',
      agreed: false,
      subject: '',
      lesson: ''
    }
  },
  watch: {
    subject(newValue) {
      if (newValue === 'other') {
        this.lesson = '';
      }
    }
  },
  methods: {
    submitForm() {
      if (!this.firstName || !this.lastName || !this.message || !this.agreed || !this.subject || (this.subject !== 'other' && !this.lesson)) {
        alert('Please fill in all required fields.');
        return;
      }
      console.log({ firstName: this.firstName, lastName: this.lastName, message: this.message, subject: this.subject, lesson: this.lesson });
      alert('Form submitted successfully!');
      this.firstName = '';
      this.lastName = '';
      this.message = '';
      this.agreed = false;
      this.subject = '';
      this.lesson = '';
    }
  }
}
</script>