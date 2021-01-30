<template>
    <header class="header">
        <button class="user-name">Имя пользователя</button>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
* {
    box-sizing: border-box;
}
    .header {
        min-height: 80px;
        width: 100%;
        padding: 0 10%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: rgb(196, 243, 215);
    }
    .user-name {
        width: fit-content;
        height: 30px;
        border-radius: 10px;
        
    }
</style>