import { Console } from '@woowacourse/mission-utils';

function calculateWinningCounts(tickets, winningNumbers, bonusNumber) {
    // 당첨 번호 일치 개수 추출
    const counts = {};
    for (const ticket of tickets) {
        
        const numbers = ticket.getNumbers();
        const matchCount = numbers.filter(num => winningNumbers.includes(num)).length;
        //Console.print(`티켓: [${numbers.join(', ')}], 일치 개수: ${matchCount}`);

        if (matchCount === 6) {
            counts.six = (counts.six || 0) + 1;
            continue;
        }
        if (matchCount === 5) {
            if (numbers.includes(bonusNumber)) {
                counts.bonus = (counts.bonus || 0) + 1;
            } else {
                counts.five = (counts.five || 0) + 1;
            }
            continue;
        }
        if (matchCount ===4 ) {
            counts.four = (counts.four || 0) + 1;
            continue;
        }
        if (matchCount ===3 ) {
            counts.three = (counts.three || 0) +1;
        }
    }
    return counts;
}

function calculateTotalWinning(winningCounts) {
// 총 당첨 금액 계산
    const PRIZE_THREE = 5000;
    const PRIZE_FOUR = 50000;
    const PRIZE_FIVE = 1500000;
    const PRIZE_BONUS = 30000000;
    const PRIZE_SIX = 2000000000;
    return ((winningCounts.three || 0) * PRIZE_THREE ) + 
        ((winningCounts.four || 0) * PRIZE_FOUR ) +
        ((winningCounts.five || 0) * PRIZE_FIVE ) +
        ( (winningCounts.bonus || 0) * PRIZE_BONUS ) + 
        ( (winningCounts.six || 0) * PRIZE_SIX );  
}

function calculateYield(totalWinning, purchaseAmount){
    //수익률 계산
    return Math.round((totalWinning / purchaseAmount) * 1000) / 10;
}

function printWinningStatistics(winningCounts, purchaseAmount) {
    const three =  winningCounts.three || 0;
    const four = winningCounts.four || 0;
    const five = winningCounts.five || 0;
    const bonus = winningCounts.bonus || 0;
    const six = winningCounts.six || 0;
    const totalWinning = calculateTotalWinning(winningCounts);
    const yieldRate = calculateYield(totalWinning, purchaseAmount);
    Console.print('당첨 통계');
    Console.print('---')
    Console.print(`3개 일치 (5,000원) - ${three}개`)
    Console.print(`4개 일치 (50,000원) - ${four}개`)
    Console.print(`5개 일치 (1,500,000원) - ${five}개`)
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${bonus}개`)
    Console.print(`6개 일치 (2,000,000,000원) - ${six}개`)
    Console.print(`총 수익률은 ${yieldRate}%입니다.`)
}

export { calculateWinningCounts, calculateTotalWinning, calculateYield, printWinningStatistics };