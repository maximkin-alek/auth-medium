<template>
  <section class="footer">
    <p class="footer__copyright">Александр Максимкин, {{ date }}</p>
    <div class="footer__links">
      <div class="footer__social-group">
        <a
          class="footer__social"
          href="https://github.com/maximkin-alek"
          target="_blank"
          ><img
            class="footer__social-icon"
            src="../assets/github.svg"
            alt="github"
        /></a>
        <a class="footer__social" href="https://vk.com/id810787" target="_blank"
          ><img
            class="footer__social-icon"
            src="../assets/VK_BlackWhite_Logo_transparent.png"
            alt="VK"
        /></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    date() {
      const date = new Date();

      return date.getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: rgb(151, 150, 196);
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 104px;
  box-sizing: border-box;
  
}
.footer__copyright {
  font-size: 20px;
}
.footer__social-icon {
  width: 24px;
  height: 24px;
  margin-left: 15px;
}
</style>
