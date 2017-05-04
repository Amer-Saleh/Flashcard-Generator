var inquirer = require("inquirer");

function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");


var getQuestion = function() {


		inquirer.prompt ({
			name: "user_input",
			message: firstPresident.front
		}).then(function (answers){
			if (answers.user_input === firstPresident.back) {
				console.log("Correct Answer");
			}
			else {
				console.log("Wrong Answer");
				console.log(" The corect answer is " + firstPresident.back);
			}
			
		})
}
 getQuestion();


