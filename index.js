const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const emojiMap = {
        rock: '✊',
        paper: '🖐️',
        scissors: '✌️'
    };

    // Determine result with a concise ternary chain
    const result = playerChoice === computerChoice ? 'TIE! 😎' :
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ?
        'WIN! 🎉' : 'LOSE! 😿';

    // Display choices and result with flair
    playerDisplay.textContent = `🧙 You: ${playerChoice.toUpperCase()} ${emojiMap[playerChoice]}`;
    computerDisplay.textContent = `🤖 CPU: ${computerChoice.toUpperCase()} ${emojiMap[computerChoice]}`;
    resultDisplay.textContent = `🔔 ${result}`;
    resultDisplay.style.color = result.includes('WIN') ? '#28a745' : result.includes('LOSE') ? '#dc3545' : '#ffc107';
}