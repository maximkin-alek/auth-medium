<template>
  <div class="edit-page">
    <div>
      <my-header />
      <edit-card-form />
    </div>

    <my-footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import EditCardForm from "@/components/EditCardForm";
import Footer from "@/components/Footer";

export default {
  beforeCreate() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchUsers");
  },

  components: {
    "my-header": Header,
    "edit-card-form": EditCardForm,
    "my-footer": Footer,
  },
};
</script>

<style scoped>
.edit-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
