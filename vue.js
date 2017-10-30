var list = [ 
      { id:0, text:'Язык - RU'},
      { id:1, text:'Language - EN' }
    ];
var array = ["символ","символа","символов"];

new Vue({
    el:'#vue',
      data: {
      	placeholder: "Введите или вставьте текст",
    	counter: 0,
    	massage: "Вы ничего не ввели",
    	text: "",
    	lang: list,
    	selected: 0,
    	greating: "Я форма!<br>Я знаю два языка и умею считать символы."
    	
  	},
	  methods:  { 
		  symbolCount: function () {
				this.counter = this.text.length
				 cases = [2, 0, 1, 1, 1, 2]; 
				 if(this.selected ==0) {
				 	this.placeholder = "Введите текст или вставьте текст"
				 	this.greating = "Я форма!<br>Я знаю два языка и умею считать символы."
				this.massage = "Вы ввели "+ this.counter +" "+ array[ (this.counter %100>4 && this.counter %100<20)? 
				2 : cases[(this.counter %10<5)?this.counter %10:5] ]; 
			
		}
		if(this.selected ==1) {
			if(this.counter>1 || this.counter == 0){
				this.greating = "I am Form!<br> I know two languages and i can count symbols."
				this.placeholder = "Enter or paste text"

			this.massage ="You entered " +this.counter+ " symbols"
			
		}
		else{
			this.massage ="You entered " +this.counter+ " symbol"
		
		}
		}


		  },
		  localisation: function (){

	this.symbolCount()
		  }

		}


	  
  })
