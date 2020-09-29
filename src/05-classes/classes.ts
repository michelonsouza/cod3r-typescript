class Data {
  public day: number;

  public month: number;

  public year: number;

  constructor(day = 1, month = 1, year = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const birth = new Data(23, 7, 1984);
birth.day = 4;
console.log(birth.day);
console.log(birth);

const marriage = new Data(); // posso omitir os parentses
marriage.year = 2017;
console.log(marriage);
