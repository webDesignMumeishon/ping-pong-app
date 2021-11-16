var app = {
	//initial variables
	canvas  : null,
	context : null,

	//resizing
	width   : 1300,
	height  : 500,

	//id for stopping the animation
	id : undefined,

	//nodes
	nodes   : [],

	//timing
	timestamp  : 0,
	now        : 0,
	lastUpdate : 0,

	init : function(){
		this.canvas  = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		this.render();
		this.onInit();

	},
	render : function(){
		this.clear();
		this.update();
		this.id = window.requestAnimationFrame(this.render.bind(this));
	},
	clear  : function(){
		this.context.clearRect(0, 0, this.width, this.height);
	},
	update : function(){
	    var dt = Date.now() - this.lastUpdate;
		this.onUpdate(dt);

		for(var index in this.nodes){
			var node = this.nodes[index];

			if(node.text >= 0){
				this.drawText(node)
			}
			else if(node.id === "red-box"){
				this.drawCircle(node)
			}
			else{
				this.context.fillStyle = node.color;
				this.context.fillRect(node.x, node.y, node.width, node.height);
			}
		}
		this.lastUpdate = Date.now();
		this.timestamp+=dt;
	},

	drawText: function(node){
		this.context.fillStyle = node.color;
		this.context.fillText(node.text, node.x, node.y)
		this.context.font = "75px Arial"
	},

	drawCircle: function(node){
		this.context.fillStyle = node.color;
		this.context.beginPath()
		this.context.arc(node.x, node.y,node.r, 0, Math.PI*2, false)
		this.context.closePath()
		this.context.fill()
	},



	getNode : function(id){
		for(var index in this.nodes){
			var node = this.nodes[index];

			if(node.id == id){
				return node;
			}
		}
		return { x : null, y : null, width : null, height : null };
	},

	//events
	onInit   : function(){},
	onUpdate : function(){}
};

window.onload = function(){
	app.init();
};