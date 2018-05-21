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
import ErrorMessage from "./ErrorMessage";
import Movies from "./Movies";

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
      hataMesaji: "",
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
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=0f17bafeb7d9fda0c1560d29b6259066&language=en-US&query=${
            this.filmsearch
          }&page=1&include_adult=false`
        )
        .then(
          response => {
            this.popfilmler = response.data.results;
            if (response.data.total_results == 0) {
              (this.filmBulunamadi = true),
                (this.hataMesaji = "FİLM BULUNAMADI :)"),
                (this.hataGoster = true);
            } else {
              this.filmBulunamadi = false;
              this.hataGoster = false;
            }
          },
          response => {
            (this.popfilmler = []),
              (this.goster = false),
              (this.hataMesaji = "HADİ BİŞEYLER ARA :)"),
              (this.hataGoster = true);
          }
        );
      this.popfilmler = [];
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  components: { ErrorMessage, Movies }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.film-detay input {
  box-shadow: none;
  box-sizing: border-box;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  font-weight: 600;
  font-size: 15px;
}

.film-detay input:hover {
  box-shadow: 2px 3px 20px rgba(0, 0, 0, 0.3);
}

.div .film {
  width: 25%;
  padding-bottom: 15px;
  text-align: center;
  margin-bottom: 15px;
  border: 1px solid #5a5a5a;
  margin-right: 15px;
  border-radius: 0px 0px 5px 5px;
  transition: 0.4s;
}

.div .film:hover {
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.6);
  transition: 0.2s;
}

.div .film p {
  margin-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
