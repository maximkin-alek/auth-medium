<template>
  <form @submit.prevent="editCard" class="editCardForm">
    <b-field label="Title">
      <b-input v-model="title" maxlength="100" required=""></b-input>
    </b-field>

    <b-field label="Text">
      <b-input
        required
        maxlength="1000"
        v-model="text"
        type="textarea"
      ></b-input>
    </b-field>
    <b-button tag="input" native-type="submit" value="Сохранить изменения" />
  </form>
</template>

<script>
import axios from "axios";
export default {
  created() {
    this.getCardEdit();
  },
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    getCardEdit() {
      axios
        .get(`http://localhost:3000/posts/${this.$route.params.id}`)
        .then((card) => {
         this.title = card.data.title;
         this.text = card.data.description;

        })
        .catch((err) => {
          alert(err);
        });
    },
  },

  mounted() {},
};
</script>

<style scoped></style>
