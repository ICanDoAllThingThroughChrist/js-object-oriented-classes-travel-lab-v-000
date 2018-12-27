class Driver {
	//can create a Driver with a name and startDate
	constructor(name, startDate) {
		this.name = name;
		//'sets the driver startDate as a date object'
		this.startDate = new Date(startDate);
	}
//expect(driver.yearsExperienceFromBeginningOf('2017'))
//function earsExperienceFromBeginningOf() expects end year datatype integer as parameter
	yearsExperienceFromBeginningOf(year) {
    console.log(year)
    console.log(this.startDate.getFullYear())
		//calculates the number of years driven given an endDate
		//outputs a difference of parameter year and Driver startDate's object attribute value
		return year - this.startDate.getFullYear();
	}
}

class Route {
	//Both of these arguments(beginningLocation, endingLocation) are JavaScript objects with attributes
  //of horizontal and vertical.
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled() {
		//sum of eastWest + northSouth is final script
		//1st and Lexington = 0 - 3 = -3 = Math.abs(-3) = eastWest
		//15th and 20th = 20 - 15   = 5 = northSouth
		//sum of eastWest, northSout= 8
		let avenues = [
		  '1st Avenue',
		  '2nd Avenue',
		  '3rd Avenue',
		  'Lexington Avenue',
		  'Park',
		  'Madison Avenue',
		  '5th Avenue'
		];
		//how to determine the data type of the beginning location's vertical spot?
    console.log(this.beginningLocation.vertical);
		debugger;
		//how to determine the data type of the ending location's vertical spot?
    console.log(this.endingLocation.vertical);
		//how to determine the algebraic difference between beg and end location vertical attribute's value?
		//how to determine absolut value of the algebraic difference from above calculation?
    console.log(Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical));
    debugger;
		//for northSouth variables of the equation northSouth plus eastWest
		//; how to create a variable to hold value of from abs.value of e the algebraic
		//difference between beg and end location vertical attribute's value?
		const northSouth =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    console.log(avenues.indexOf(this.beginningLocation.horizontal));
    console.log(avenues.indexOf(this.endingLocation.horizontal));
    console.log(Math.abs(avenues.indexOf(this.beginningLocation.horizontal) - avenues.indexOf(this.endingLocation.horizontal)));
		const eastWest = Math.abs(avenues.indexOf(this.beginningLocation.horizontal) - avenues.indexOf(this.endingLocation.horizontal));
    console.log(northSouth);
    console.log(eastWest);
		return northSouth + eastWest;
	}
  estimatedTime(peak) {
    console.log(peak)
 		if (peak === true) {
      console.log(this.blocksTravelled())
 			return this.blocksTravelled() / 2;
 		}
 		else {
      console.log(this.blocksTravelled())
 			return this.blocksTravelled() / 3;
 		}
 	}
}
