<template>
  <div class="homepage">
        <div class="film-detay">
            <input type="text" @keyup.prevent="filmara()" v-model="filmsearch" placeholder="Film aramak için birşeyler yazın.">            
        </div>

        <Movies :popfilmler=popfilmler
                :filmsearch=filmsearch
                :goster=goster
                :hataGoster=hataGoster>          
        </Movies>

        <ErrorMessage :hataGoster=hataGoster
                      :hataMesaji=hataMesaji>          
        </ErrorMessage>
        
  </div>
</template>

<script>
import ErrorMessage from './ErrorMessage'
import Movies from './Movies'

let api =
  "https://api.themoviedb.org/3/movie/popular?api_key=0f17bafeb7d9fda0c1560d29b6259066";
export default {
  name: "HomePage",
  data() {
    return {
      popfilmler: [],
      filmsearch: "",
      goster: true,
      filmBulunamadi: false,
      hataMesaji: '',
      hataGoster: false
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
        .get(`https://api.themoviedb.org/3/search/movie?api_key=0f17bafeb7d9fda0c1560d29b6259066&language=en-US&query=${this.filmsearch}&page=1&include_adult=false`)
        .then(
          response => {
            this.popfilmler = response.data.results;
            if (response.data.total_results == 0) {
              this.filmBulunamadi = true,
              this.hataMesaji = 'FİLM BULUNAMADI :)',
              this.hataGoster = true;
            } else {
              this.filmBulunamadi = false;
              this.hataGoster = false;
            }
          },
          response => {
            (this.popfilmler = []),
            (this.goster = false),
            (this.hataMesaji = 'HADİ BİŞEYLER ARA :)'),
            (this.hataGoster = true);
          }
        );
      this.popfilmler = [];
    }
  },
  filters: {
    capitalize (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  components: {ErrorMessage, Movies}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
