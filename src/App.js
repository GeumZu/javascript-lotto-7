import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async run() {
    const money = await new Promise(function(resolve) {
      Console.readLineAsync('로또 구입 금액을 입력해주세요.\n', function(input){
        resolve(Number(input));
      });
    });

    // 0원 이하 또는 1000원 단위가 아닐 경우 에러 처리
    if (money <= 0 || money % 1000 !== 0) {
      Console.print('[ERROR] 금액의 최소 구입 단위는 1000원입니다. 1000원 단위로 입력해주세요.')
      Console.close();
      return;
    }

    // 입력 금액과 구매한 로또 수 출력
    Console.print('구입 금액 :' + money + '원');
    const ticketCount = money / 1000;
    Console.print(ticketCount + '개의 로또를 구매했습니다.');
    
    // 로또 티켓 생성
    const lottoTickets = [];
    for (let i = 0; i < ticketCount; i++){
      const numbers = Random.pickUniqueNumbersInRange(1,45,6);
      numbers.sort(function(a, b){
        return a - b;
      })
      const lotto = new Lotto(numbers);
      lottoTickets.push(lotto);
    }
    // 생성된 로또 티켓 출력
    lottoTickets.forEach(function(ticket){
      Console.print(ticket.toString());
    });

  }
}

export default App;
