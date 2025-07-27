<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  companyName: '',
  email: '',
  telephone: '',
  message: '',
  marketingConsent: false
})

const handleSubmit = () => {
  // Form submission logic would go here
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <div class="contact-form-container">
    <form @submit.prevent="handleSubmit" class="contact-form">
      <h1 class="form-title">Get In Touch</h1>

      <div class="form-group">
        <label for="name" class="form-label">Your Name <span class="required">*</span></label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="form-input"
          required
        />
      </div>

      <div class="form-group">
        <label for="company" class="form-label">Company Name <span class="required">*</span></label>
        <input
          type="text"
          id="company"
          v-model="form.companyName"
          class="form-input"
          required
        />
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Your Email <span class="required">*</span></label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="form-input"
          required
        />
      </div>

      <div class="form-group">
        <label for="telephone" class="form-label">Your Telephone Number <span class="required">*</span></label>
        <input
          type="tel"
          id="telephone"
          v-model="form.telephone"
          class="form-input"
          required
        />
      </div>

      <div class="form-group full-width">
        <label for="message" class="form-label">Message <span class="required">*</span></label>
        <textarea
          id="message"
          v-model="form.message"
          class="form-textarea"
          rows="6"
          required
        ></textarea>
      </div>

      <div class="checkbox-group">
        <input
          type="checkbox"
          id="marketing"
          v-model="form.marketingConsent"
          class="form-checkbox"
        />
        <label for="marketing" class="checkbox-label">
          Please tick this box if you wish to receive marketing information from us. Please see our
          <a href="#" class="privacy-link">Privacy Policy</a> for more information on how we keep your data safe.
        </label>
      </div>

      <div class="form-footer">
        <p class="recaptcha-text">
          This site is protected by reCAPTCHA and the Google
          <a href="#" class="privacy-link">Privacy Policy</a> and
          <a href="#" class="privacy-link">Terms of Service</a> apply.
        </p>

        <div class="submit-section">
          <button type="submit" class="submit-button">SUBMIT</button>
          <p class="required-text"><span class="required">*</span> Fields Required</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.contact-form-container {
  background-color: #2a2a2a;
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-form {
  max-width: 400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 15px;
  }
}

.form-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: white;
  grid-column: 1 / -1;
  margin-bottom: 5px;
}

.form-group {
  display: flex;
  flex-direction: column;

  &.full-width {
    grid-column: 1 / -1;
  }
}

.checkbox-group {
  grid-column: 1 / -1;
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.form-footer {
  grid-column: 1 / -1;
  margin-top: 10px;
}

.form-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: white;
}

.required {
  color: #ff6b6b;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 8px;
  background-color: transparent;
  border: 1px solid #555;
  border-radius: 0;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #888;
  }

  &::placeholder {
    color: #888;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 60px;
}

.checkbox-group {
  grid-column: 1 / -1;
  margin-bottom: 0;
  display: flex;
  align-items: flex-start;
  gap: 6px;
}

.form-checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 1.5px;
  background-color: transparent;
  margin-top: 2px;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;

  &:checked {
    background-color: white;
    border-color: white;

    &::after {
      content: '✓';
      position: absolute;
      top: -1px;
      left: 3.5px;
      color: black;
      font-size: 12px;
      font-weight: bold;
    }
  }

  &:focus {
    outline: 1px solid #888;
    outline-offset: 1px;
  }
}

.checkbox-label {
  font-size: 0.7rem;
  line-height: 1.3;
  color: white;
  flex: 1;
}

.privacy-link {
  color: white;
  text-decoration: underline;

  &:hover {
    color: #ccc;
  }
}

.form-footer {
  grid-column: 1 / -1;
  margin-top: 5px;
}

.recaptcha-text {
  font-size: 0.7rem;
  color: white;
  margin-bottom: 15px;
  line-height: 1.3;
}

.submit-section {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
}

.submit-button {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 6px 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #2a2a2a;
  }
}

.required-text {
  font-size: 0.7rem;
  color: white;
  margin: 0;
}
</style>