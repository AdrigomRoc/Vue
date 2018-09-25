new Vue({
    el: '#app',
    data:{
        llista: [
            { usuario:'Juan', partidas:5, punts:50, equipo:null},
            { usuario:'Pedro', partidas:2, punts:20, equipo:null},
            { usuario:'David', partidas:6, punts:50, equipo:null},
            { usuario:'Adria', partidas:9, punts:90, equipo:null},
            { usuario:'Sandra', partidas:3, punts:70, equipo:null},
            { usuario:'Andres', partidas:3, punts:50, equipo:null},
            { usuario:'Jofre', partidas:7, punts:30, equipo:null},
            { usuario:'Gustavo', partidas:5, punts:80, equipo:null},
            { usuario:'Luis', partidas:0, punts:0, equipo:null},
            { usuario:'Alfredo', partidas:6, punts:30, equipo:null},
            ],
            MostrarMain:true,
            MostrarRegistrar:false,
            MostrarPartida:false,
            empezar:false,
            acabar:false,
            teamblue:[],
            teamred:[],
            num:1
    },
    methods:{
        EmpezarPartida: function(){
           
        },
        guardarUsuario: function(user){
            if(user.length>0){
                this.llista.push({usuario:user,partidas:0,punts:0});
            }else{
                alert("Error: Escribe algo antes de añadir el usuario");
            }
        },

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
        },
        Millors: function(){
            return this.ordenarArray.slice(0,5);
        },
        redteam: function(){
            var team = [];
            for(var i = 0 ; i < this.llista.length; i++){
                var jugador = this.llista[i];
                if(jugador.equipo === "red"){
                    team.push(jugador);
                }
            }
            return team;
        },
        blueteam: function(){
            var team = [];
            for(var i = 0 ; i < this.llista.length; i++){
                var jugador = this.llista[i];
                if(jugador.equipo === "blue"){
                    team.push(jugador);
                }
            }
            return team;
        }
        
    },
    mounted: function(){
        console.log(this);
        console.log("Xd");
    }
    
})