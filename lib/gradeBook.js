var gradeBook = {
	_grades: [],
	addGrade: function(newGrade) {
		this._grades.push(newGrade);
		},
	getCountOfGrades: function() {
		return this._grades.length;
		},
	getAverageGrade: function() {
//		var avg = 0,
//		    ;
//		    ;
		for (i = 0, avg = 0, cg = this._grades.length ; i < cg ; i++) {
			avg += this._grades[i];
			};
		avg /= cg;
		return avg;
		},
	reset: function() {
		this._grades = [];
		}
	};

exports.book = gradeBook;
