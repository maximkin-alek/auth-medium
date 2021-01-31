<template>
  <div>
    <my-header />
    <create-card-form />
  </div>
</template>

<script>
import Header from "@/components/Header";
import CreateCardForm from "@/components/CreateCardForm";

export default {
  components: {
    "my-header": Header,
    "create-card-form": CreateCardForm,
  },
};
</script>

<style scoped></style>
