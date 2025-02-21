import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
function getTicketCount(money) {
    // 0원 이하 또는 1000원 단위가 아닐 경우 에러 처리
    if (money <= 0) throw new Error('[Error] 금액의 최소 구입 단위는 1000원 입니다.');
    if (money % 1000 !== 0) throw new Error('[Error] 1000원 단위로만 구입 가능합니다.');
    return money / 1000;
}

function createLottoTicket() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort(function(a, b){ return a -b; });
    return new Lotto(numbers);
}

function generateLottoTickets(count){
    const tickets = [];
    for (let i = 0; i < count; i++){
        tickets.push(createLottoTicket());
    }
    return tickets;
}

function parseWinningNumbers(input) {
    if (input.indexOf(',') === -1) throw new Error('[Error] 구분자는 ,만 사용 가능합니다.');
    const parts = input.split(',');
    if (parts.length !== 6) throw new Error('[Error] 로또 당첨 번호는 6개입니다.');
    const numbers = [];
    for (let i = 0; i < parts.length; i++) {
        const num = Number(parts[i].trim());
        if (isNaN(num) || num < 1 || num > 45) throw new Error ('[Error] 번호는 1 이상 45이하 범위의 숫자여야 합니다.');
        numbers.push(num);
    }
    numbers.sort(function(a,b) {return a - b ;});
    return numbers;
}

function parseBonusNumber(input) {
    if (input.indexOf(',') !== -1) throw new Error('[Error] 번호는 하나만 입력 가능합니다.');
    const num = Number(input.trim());
    if (isNaN(num) || num < 1 || num > 45) throw new Error('[Error] 번호는 1 이상 45이하 범위의 숫자여야 합니다.');
    return num;
}

export {
    getTicketCount,
    createLottoTicket,
    generateLottoTickets,
    parseWinningNumbers,
    parseBonusNumber
};


