<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
[v-cloak] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  color: rgb(20, 20, 20);
}

#app {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

#app h1 {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 28px;
}

.div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.div .film img {
  width: 100%;
}

.loading {
  background: #333;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 9999;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  justify-content: center;
  align-items: center;
}

.film-detay {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.film-detay input {
  width: 50%;
}

.film-detay input,
button {
  padding: 10px 20px;
  margin-bottom: 10px;
}

.hata-mesaji {
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
}

h1.fix {
  margin-bottom: 5px !important;
}
</style>
