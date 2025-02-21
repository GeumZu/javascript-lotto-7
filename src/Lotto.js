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
  }

   toString(){
    return "[" +this.#numbers.join(', ') + "]";
  }

   // 당첨 계산에 사용될 로또 번호 배열 반환
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
