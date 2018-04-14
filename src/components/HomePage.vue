<template>
  <div class="homepage">
        <div class="film-detay">
            <input type="text" @keyup.prevent="filmara()" v-model="filmsearch" placeholder="Film aramak için birşeyler yazın.">            
        </div>

       <div v-if="filmBulunamadi" class="hata-mesaji film-bulunamadi">
            <h1 class="fix">FİLM BULUNAMADI :)</h1>  
            <p>yada <a href="/" title="Anasayfaya Git">Ana sayfaya</a> giderek popüler filmleri inceleyebilirsin.</p>         
        </div>

        <h1 v-if="!filmsearch && goster">Popüler Filmler</h1>
        <h1 v-if="filmsearch">"{{ filmsearch }}" adlı filmleri arıyorsunuz.</h1>
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

        <div v-if="!filmsearch && !goster" class="hata-mesaji">
            <h1 class="fix">HADİ BİŞEYLER ARA :)</h1>
            <p>yada <a href="/" title="Anasayfaya Git">Ana sayfaya</a> giderek popüler filmleri inceleyebilirsin.</p>
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
      filmler: [],
      popfilmler: [],
      filmsearch: "",
      goster: true,
      filmBulunamadi: false
    };
  },
  created() {
    this.$http.get(api).then(response => {
      this.popfilmler = response.data.results;
    });
  },
  methods: {
    filmara() {
      this.$http
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=0f17bafeb7d9fda0c1560d29b6259066&language=en-US&query=" +
            this.filmsearch +
            "&page=1&include_adult=false"
        )
        .then(
          response => {
            this.popfilmler = response.data.results;
            if (response.data.total_results == 0) {
              this.filmBulunamadi = true;
            }
            else {
              this.filmBulunamadi = false;
            }
          },
          response => {
            (this.popfilmler = []), (this.goster = false);
          }
        );
      this.popfilmler = [];
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
