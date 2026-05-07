<template>
  <section class="section contact-section" id="contact">
    <div class="shell contact-grid reveal">
      <div>
        <p class="section-kicker">Contact</p>
        <h2>Available for remote roles worldwide, Bangladesh local/hybrid roles, and visa-supported on-site opportunities abroad.</h2>
        <p class="contact-note">Fastest path: email with the role, location model, and product context.</p>
      </div>

      <div class="contact-panel">
        <a href="mailto:mahidul5130@gmail.com">
          <Mail :size="18" />
          mahidul5130@gmail.com
        </a>
        <a href="tel:+8801705568901">
          <Phone :size="18" />
          +8801705568901
        </a>
        <a href="https://wa.me/8801705568901" target="_blank" rel="noopener">
          <MessageCircle :size="18" />
          WhatsApp
        </a>
        <a href="https://www.linkedin.com/in/md-mahidul-haque" target="_blank" rel="noopener">
          <Linkedin :size="18" />
          LinkedIn
        </a>
        <a href="https://www.facebook.com/mahidulhaque.shezan/" target="_blank" rel="noopener">
          <Facebook :size="18" />
          Facebook
        </a>
        <a href="https://github.com/mahidul5130" target="_blank" rel="noopener">
          <Github :size="18" />
          GitHub
        </a>
        <a href="/Md_Mahidul_Haque_Laravel_Vue_CV.pdf">
          <Download :size="18" />
          Download CV
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Download, Facebook, Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-vue-next";
</script>
