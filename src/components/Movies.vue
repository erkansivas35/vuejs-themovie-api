<template>
  <div class="movies">
        <h1 v-if="!filmsearch && goster">Popüler Filmler</h1>
        <h1 v-if="filmsearch && !hataGoster">"{{ filmsearch }}" adlı filmleri arıyorsunuz.</h1>
        
        <div class="div film-listesi">
            <div class="film" v-for="popfilm in popfilmler" v-if="!popfilm.poster_path == ''" :key="popfilm.id">
                <a :href="`https://www.themoviedb.org/movie/` + popfilm.id" target="_blank">
                    <img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popfilm.poster_path" :alt="popfilm.title">
                </a>
                <p>
                    <b>Film Adı:</b> {{ popfilm.original_title }}</p>
                <p>
                    <b>Film Dili:</b> {{ popfilm.original_language | capitalize }}</p>
                <p>
                    <b>Puan:</b> {{ popfilm.vote_average }}</p>
            </div>
        </div>      
  </div>
</template>

<script>
export default {
  props: {
    popfilmler: { type: Array, required: true },
    filmsearch: { type: String, required: true },
    goster: { type: Boolean, required: true },
    hataGoster: { type: Boolean, required: true }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style>

</style>
