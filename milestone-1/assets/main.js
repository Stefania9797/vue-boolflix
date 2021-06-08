let root=new Vue({
    el:"#root",
    data:{
        apiKey:"b7dde1ec04c6c67918064ecac356278b",
        searchResults:null,
        searchInput:""
    },
    methods:{
        getResults: function () {
            if (this.searchInput != '') {
              axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.searchInput}`)
                .then((response) => {
                  this.searchResults= response.data.results;
                });
            }
          }
    },
    mounted(){}
})