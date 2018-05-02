<template>
       <div v-if="hataGoster" class="hata-mesaji">
            <h1 class="fix">{{ hataMesaji }}</h1>  
            <p>yada <a href="/" title="Ana sayfaya">Ana sayfaya</a> giderek popüler filmleri inceleyebilirsin.</p>                                
        </div>    
</template>

<script>
export default {
    props: ['hataGoster', 'hataMesaji']
};
</script>
