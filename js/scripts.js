$(document).ready(function() {
	$("form#questionnaire").submit(function() {
		event.preventDefault();
		let answer1 = $("input:radio[name=question1]:checked").val();
		let answer2 = $("input:radio[name=question2]:checked").val();
		let answer3 = $("input:radio[name=question3]:checked").val();
		let answer4 = $("input:radio[name=question4]:checked").val();
		let answer5 = $("input:radio[name=question5]:checked").val();

		let javascriptScore = 0;
		let pythonScore = 0;
		let swiftScore = 0;

		if (answer1 === "javascript") {
			javascriptScore += 1;
			swiftScore += 1;
			// console.log(javascriptScore);
			// console.log(swiftScore);
		} else if (answer1 === "python") {
			pythonScore += 1;
			console.log(pythonScore);
		}

		if (answer2 === "javascript") {
			javascriptScore += 1;
			swiftScore += 1;
			// console.log(javascriptScore);
			// console.log(swiftScore);
		} else if (answer2 === "python") {
			pythonScore += 1;
			console.log(pythonScore);
		}

		if (answer3 === "javascript") {
			javascriptScore += 1;
			// console.log(javascriptScore);
			// console.log(swiftScore);
		} else if (answer3 === "python") {
			pythonScore += 1;
			console.log(pythonScore);
		} else {
			swiftScore += 1;
			console.log(swiftScore);
		}

		if (answer4 === "javascript") {
			javascriptScore += 1;
			// console.log(javascriptScore);
			// console.log(swiftScore);
		} else if (answer4 === "python") {
			pythonScore += 1;
			console.log(pythonScore);
		} else {
			swiftScore += 1;
			console.log(swiftScore);
		}

		if (answer5 === "javascript") {
			javascriptScore += 1;
			// console.log(javascriptScore);
			// console.log(swiftScore);
		} else if (answer5 === "python") {
			pythonScore += 1;
			console.log(pythonScore);
		} else {
			swiftScore += 1;
			console.log(swiftScore);
		}

		if (javascriptScore > pythonScore && javascriptScore > swiftScore) {
			console.log("JS it is!")
		} else if (pythonScore > javascriptScore && pythonScore > swiftScore) {
			console.log("Python it is!")
		} else {
			console.log("Swift it is!")
		}

		console.log("JS score: " + javascriptScore)
		console.log("Python score: " + pythonScore)
		console.log("Swift score: " + swiftScore)

		// Need to figure out if there is a tie
		// I think I'll ask a a tie breaker question
	});
});