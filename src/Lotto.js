class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  환

  // 로또 번호 배열 반환
  getNumners(){

  }

  // 로또 번호를 문자열로 반환
}

export default Lotto;
