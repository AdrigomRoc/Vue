new Vue({
    el: '#app',
    data: {
      nuevaTarea:'',
      llista: [
        { text: 'Comprar pan' },
        { text: 'Estudiaar' },
        { text: 'Jugar y no hacer nada de lo anterior' }
        ],
        mostrarEditar:false,
        guarda:'',
        mostrarMain:true,
        mostrarEditFinal:false,
        componentTemp: {text: null}
    },
    methods:{
        guardarTarea: function(tarea){
            if(tarea.length>0){
                this.llista.push({text:tarea});
            }else{
                alert("Error: Escribe algo antes de añadir la tarea");
            }
        },
        eliminarTarea: function(index){
            this.llista.splice(index,1);
        },
        editarTarea: function(index){
            this.mostrarEditar=true;
            this.mostrarMain=false;
            this.guarda=this.llista.text;           
        },
        editarContenido: function(){
            this.mostrarEditFinal=true;
        },
        salirEditar: function(){
            this.mostrarEditar=false;
            this.mostrarMain=true;
        }
    }
    
  })