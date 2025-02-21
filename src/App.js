import { Console, Random } from "@woowacourse/mission-utils";
import { getTicketCount, generateLottoTickets, parseWinningNumbers, parseBonusNumber } from "./LottoGame.js";
import { calculateWinningCounts, printWinningStatistics } from "./LottoResult.js";
class App {
  async run() {

    try{
      const moneyInput = await Console.readLineAsync('로또 구입 금액을 입력해주세요.\n');
      const purchaseAmount = Number(moneyInput)
      const ticketCount = getTicketCount(purchaseAmount);
      Console.print(ticketCount + '개의 로또를 구입했습니다.');

      const tickets = generateLottoTickets(ticketCount);
      tickets.forEach(function(ticket){
        Console.print (ticket.toString());
      });

      const winningInput = await Console.readLineAsync('당첨 번호를 입력해주세요.\n');
      const winningNumbers = parseWinningNumbers(winningInput);
      Console.print('당첨 번호 : ' + winningNumbers.join(', '));

      const bonusInput = await Console.readLineAsync('보너스 번호를 입력해주세요.\n');
      const bonusNumber = parseBonusNumber(bonusInput);
      Console.print('보너스 번호 : ' + bonusNumber);

      const winningCounts = calculateWinningCounts(tickets, winningNumbers, bonusNumber);
      printWinningStatistics(winningCounts, purchaseAmount);
  
    } catch (error) {
      Console.print([error.message]);
    } 
  }
}
const app = new App();
app.run();

export default App;
