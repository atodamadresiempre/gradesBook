var book = require("../lib/gradeBook.js").book;

exports.setUp = function(callback) {
	book.reset();
	callback();
	};

exports.canAddNewGrade = function (test) {
	book.addGrade(95);
	var count = book.getCountOfGrades();
	test.equal(count, 1);
	test.done();
	};

exports.canAverageGrades = function (test) {
	book.addGrade(100);
	book.addGrade(50);
	var avgGrade = book.getAverageGrade();
	test.equal(avgGrade, 75);
	test.done();
	};
