document.addEventListener('DOMContentLoaded', () => {
    const goalForm = document.getElementById('goal-form');
    const timerDisplay = document.getElementById('timer');
    const startSessionButton = document.getElementById('start-session');
    const pointsDisplay = document.getElementById('points');
    const levelDisplay = document.getElementById('level');

    let countdown;
    let points = 0;
    let level = 1;

    goalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const goal = event.target.goal.value;
        alert(`目標「${goal}」が設定されました！`);
        event.target.reset();
    });

    startSessionButton.addEventListener('click', () => {
        let time = 25 * 60;
        clearInterval(countdown);
        countdown = setInterval(() => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            if (time <= 0) {
                clearInterval(countdown);
                alert('ディープワークセッションが終了しました！');
                addPoints(10); // セッション完了で10ポイントを追加
            }
            time--;
        }, 1000);
    });

    function addPoints(earnedPoints) {
        points += earnedPoints;
        if (points >= level * 50) {
            levelUp();
        }
        pointsDisplay.textContent = points;
    }

    function levelUp() {
        level++;
        points = 0; // ポイントをリセット
        levelDisplay.textContent = level;
        alert(`レベルアップ！現在のレベル: ${level}`);
    }
});
