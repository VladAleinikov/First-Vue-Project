<template>
      <header class="header">
            <router-link to="/">Главная</router-link>
            <router-link to="/about">О приложении</router-link>
            <router-link to="/posts">Посты</router-link>
      </header>
</template>

<script>
      export default {
            name:"my-header"
      }
</script>

<style  scoped>
.header{
      padding: 0 20px;
      height: 80px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: end;
      align-items: center;
      gap: 20px;
      background: teal;
}
.header a{
      position: relative;
      font-size: 1.2rem;
      font-weight: 700;
      outline: none;
      border: none;
      text-decoration: none;
      color: white;
}
.header a:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: white;
      transition: .5s;
}
.header a:hover::after{
      width: 100%;
}
</style>