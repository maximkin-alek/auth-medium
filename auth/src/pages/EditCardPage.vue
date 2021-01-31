<template>
  <div>
    <my-header />
    <edit-card-form />
    
  </div>
</template>

<script>
import Header from "@/components/Header";
import EditCardForm from "@/components/EditCardForm";

export default {
    beforeCreate() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("fetchUsers");
  },
  
  components: {
    "my-header": Header,
    "edit-card-form": EditCardForm,
  },
};
</script>

<style scoped></style>
