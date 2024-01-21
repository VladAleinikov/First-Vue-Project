<template>
      <div class="app">
            <my-header/>
            <main>
                  <router-view></router-view>
            </main>
      </div>
</template>

<script>
export default {

}
</script>

<style>
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
}
main{
      padding: 20px;
}
</style>