<template>
    <div class="card">
        <h2 class="card__tatle">{{title}}</h2>
        <p class="card__text">{{text}}</p>
        <p class="card__created">{{created}}</p>
        <button class="card__claps">{{claps}}</button>
        <button class="card__delete">Удалить</button>
        <button class="card__edit">Редактировать</button>
    </div>
</template>

<script>
    export default {
        props: ['title', 'text', 'created', 'claps', ],
        
    }
</script>

<style  scoped>
.card {
    width: 300px;
    min-height: 400px;
background-color: rgb(245, 243, 141);
padding: 10px;
}
</style>