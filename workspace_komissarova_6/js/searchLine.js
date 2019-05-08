Vue.component('search-line', {
   data(){
       return {
           searchLine: '',
       }
   },
    template: `<form action="#" class="search-form" @submit.prevent='$parent.$refs.products.filter(searchLine)'>
                <input type="text" class="search-field" v-model="searchLine">
                <button class="search-btn" type="submit">Искать<i class="fas fa-search"></i>     
                </button><br>
                <p>Вы искали: {{ searchLine }}</p>
            </form>`          
});