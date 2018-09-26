new Vue({
    el: '#app',
    data:{
        list: [
            { username:'Juan', games:5, points:50, team:null, temp_points: 0},
            { username:'Pedro', games:2, points:20, team:null, temp_points: 0},
            { username:'David', games:6, points:50, team:null, temp_points: 0},
            { username:'Adria', games:9, points:90, team:null, temp_points: 0},
            { username:'Sandra', games:3, points:70, team:null, temp_points: 0},
            { username:'Andres', games:3, points:50, team:null, temp_points: 0},
            { username:'Jofre', games:7, points:30, team:null, temp_points: 0},
            { username:'Gustavo', games:5, points:80, team:null, temp_points: 0},
            { username:'Luis', games:0, points:0, team:null, temp_points: 0},
            { username:'Alfredo', games:6, points:30, team:null, temp_points: 0},
            ],
            showMain:true,
            showRegister:false,
            showGame:false,
            finish:false,
            regulators:true,
            hide:true,
            allPlayers:true,
            Score:false,
            newUsername:""
    },
    methods:{
        saveUsername: function(user){
            var found=false;
            if(user.length<0){
                alert("Error: Write something before adding the username");
            }else{
                for(var i=0;i<this.list.length;i++){
                    if(user==this.list[i].username){
                        found=true;
                    }
                }
                if(found){
                    alert("Error: Existing Username");
                }else{
                    this.list.push({username:user,games:0,points:0});
                }
            }
        },
        addTempPoints: function(){
            for(var i = 0; i < this.list.length; i++){
                var player = this.list[i];
                player.points = parseInt(player.points) + parseInt(player.temp_points);
                player.temp_points = 0;
            }
        },
        restartTeams: function(){
            for(var i=0;i<this.list.length;i++){
                this.list[i].team=null;
            }
        }
    },
    computed:{
        orderArray: function(){
           var ordenado=this.list.sort(function(a,b){
                if(a.points!=b.points){   
                    return b.points > a.points;
                }else{
                    return a.games > b.games;
                }
            });
           return ordenado;
        },
        Top: function(){
            return this.orderArray.slice(0,5);
        },
        redteam: function(){
            var team = [];
            for(var i = 0 ; i < this.list.length; i++){
                var player = this.list[i];
                if(player.team === "red"){
                    team.push(player);
                }
            }
            return team;
        },
        blueteam: function(){
            var team = [];
            for(var i = 0 ; i < this.list.length; i++){
                var player = this.list[i];
                if(player.team === "blue"){
                    team.push(player);
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