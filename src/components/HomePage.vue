<template>
  <div class="homepage">
        <div class="loading" v-if="loading">
            <p>Yükleniyor...</p>
        </div>    

        <div class="film-detay">
            <input @keyup="filmara()" type="text" v-model="filmsearch" placeholder="Film aramak için birşeyler yazın.">
            <button type="submit" @click="filmara()">ara</button>
        </div>
        
        <h1 v-if="filmsearch">"{{ filmsearch }}" adlı filmi arıyorsunuz</h1>
        <div class="div film-listesi">
            <div class="film" v-for="film in filmler" v-if="!film.poster_path == ''" :key="film.id">
                <a :href="`https://www.themoviedb.org/movie/` + film.id" target="_blank">
                    <img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + film.poster_path" :alt="film.title">
                </a>
                <p>
                    <b>Film Adı:</b> {{ film.original_title }}</p>
                <p>
                    <b>Dili:</b> {{ film.original_language }}</p>
                <p>
                    <b>Puan:</b> {{ film.vote_average }}</p>
            </div>
        </div>


        <h1 v-if="!filmsearch">Popüler Filmler</h1>
        <div class="div film-listesi">
            <div class="film" v-for="popfilm in popfilmler" v-if="!popfilm.poster_path == ''" :key="popfilm.id">
                <a :href="`https://www.themoviedb.org/movie/` + popfilm.id" target="_blank">
                    <img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + popfilm.poster_path" :alt="popfilm.title">
                </a>
                <p>
                    <b>Film Adı:</b> {{ popfilm.original_title }}</p>
                <p>
                    <b>Dili:</b> {{ popfilm.original_language }}</p>
                <p>
                    <b>Puan:</b> {{ popfilm.vote_average }}</p>
            </div>
        </div>
        
  </div>
</template>

<script>
let api =
  "https://api.themoviedb.org/3/movie/popular?api_key=0f17bafeb7d9fda0c1560d29b6259066";
export default {
  name: "HomePage",
  data() {
    return {
      loading: false,
      filmler: [],
      popfilmler: [],
      filmsearch: ""
    };
  },
  created() {
    this.$http.get(api).then(response => {
      (this.popfilmler = response.data.results), this.loading.false;
    });
  },
  computed: {
    filmara() {
      this.$http
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=0f17bafeb7d9fda0c1560d29b6259066&language=en-US&query=" +
            this.filmsearch +
            "&page=1&include_adult=false"
        )
        .then(response => {
          this.filmler = response.data.results;
        });
      this.popfilmler = [];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
