<template>
  <div class="create-page">
    <div>
      <my-header />
      <create-card-form />
    </div>

    <my-footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CreateCardForm from "@/components/CreateCardForm";

export default {
  components: {
    "my-header": Header,
    "create-card-form": CreateCardForm,
    "my-footer": Footer,
  },
};
</script>

<style scoped>
.create-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
