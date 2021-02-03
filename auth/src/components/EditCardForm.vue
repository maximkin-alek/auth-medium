<template>
  <form @submit.prevent="editCard" class="editCardForm">
    <b-field label="Title">
      <b-input v-model="title" maxlength="100" required=""></b-input>
    </b-field>

    <b-field label="Text">
      <b-input
        class="editCardForm__text"
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
    this.getCardData();
  },
  data() {
    return {
      title: "",
      text: "",
    };
  },
  computed: {
    date() {
      return new Date();
    },
  },
  methods: {
    getCardData() {
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
    editCard() {
      axios
        .patch(`http://localhost:3000/posts/${this.$route.params.id}`, {
          title: this.title,
          description: this.text,
          updateAt: this.date,
        })
        .then(() => {
          alert("Данные сохранены");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.editCardForm {
  padding-top: 200px;
  margin: 0 auto;
  width: 80%;
}
</style>
