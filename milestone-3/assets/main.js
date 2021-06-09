let root=new Vue({
    el:"#root",
    data:{
        apiKey:"b7dde1ec04c6c67918064ecac356278b",
        searchResults:null,
        searchInput:"",
        flags:["en","it","fr","de","fi","ja","es"]
    },
    methods:{
        getResults() {
            if (this.searchInput != '') {
              axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&query=${this.searchInput}`)
                .then((response) => {
                  this.searchResults= response.data.results;
                });
            }
          },
          getFlag(language){
            return "./assets/flags/"+language+".png"
          },
          getPoster(img){
            return "https://image.tmdb.org/t/p/w92"+img
          }
    },
    mounted(){
    }
})