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

#app {
  width: 1140px;
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

.div .film {
  width: 25%;
  padding-right: 15px;
  text-align: center;
  margin-bottom: 15px;
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
</style>
