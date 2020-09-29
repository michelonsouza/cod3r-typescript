// eslint-disable-next-line max-classes-per-file
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

class ExpertData {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970,
  ) {}
}

const expertBirth = new ExpertData(23, 7, 1984);
expertBirth.day = 4;
console.log(expertBirth.day);
console.log(expertBirth);

const expertMarriage = new ExpertData(); // posso omitir os parentses
expertMarriage.year = 2017;
console.log(expertMarriage);
