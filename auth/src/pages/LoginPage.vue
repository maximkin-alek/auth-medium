<template>
    <div>
        <my-header />
        <login-form />
    </div>
</template>

<script>
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export default {
  components: {
   'my-header': Header,
   'login-form': LoginForm,
   
  },
        
    }
</script>

<style  scoped>

</style>