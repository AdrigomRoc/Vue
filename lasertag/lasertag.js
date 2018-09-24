new Vue({
    el: '#app',
    data:{
        llista: [
            { usuario:'Juan', partidas:5, punts:50},
            { usuario:'Pedro', partidas:2, punts:20},
            { usuario:'David', partidas:6, punts:50},
            { usuario:'Adria', partidas:9, punts:90},
            { usuario:'Sandra', partidas:3, punts:70},
            { usuario:'Andres', partidas:3, punts:50},
            ],
            MostrarMain:true,
            MostrarRegitrar:false,
            MostrarPartida:false,
            empezar:false,
            acabar:false,
            equipoAzul:false,
            equipoRojo:false
    },
    methods:{
        EmpezarPartida: function(){
            if(equipoAzul && equipoRojo){
                acabar=true;
            }
        }
    },
    computed:{
        ordenarArray: function(){
           var ordenado=this.llista.sort(function(a,b){
                if(a.punts!=b.punts){   
                    return b.punts > a.punts;
                }else{
                    return a.partidas > b.partidas;
                }
            });
           return ordenado;
        }
        
    }
    
})