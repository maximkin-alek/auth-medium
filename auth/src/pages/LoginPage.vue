<template>
  <div class="login-page">

    <div>
      <my-header />
      <login-form />
    </div>

    <my-footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

export default {
  components: {
    "my-header": Header,
    "login-form": LoginForm,
    "my-footer": Footer,
  },
};
</script>

<style scoped>
.login-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  min-height: 100vh;
}
</style>
