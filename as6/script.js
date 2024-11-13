let isFlipped = false;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const promptElement = document.querySelector('.prompt');
    const initialFlipCards = document.querySelector('.flip-cards.initial');
    const finalFlipCards = document.querySelector('.flip-cards.final');
    const questionElement = document.querySelector('.question');
    const flipCardInners = finalFlipCards.querySelectorAll('.flip-card-inner');

    // 當捲動到100vh時隱藏題目
    if (scrollPosition > 100 * window.innerHeight / 100) {
        questionElement.style.opacity = '0';
    } else {
        questionElement.style.opacity = '1';
    }

    // 當捲動到150vh時顯示提示文字
    if (scrollPosition > 150 * window.innerHeight / 100) {
        promptElement.classList.add('visible');
    } else {
        promptElement.classList.remove('visible');
    }

    // 使用 requestAnimationFrame 减少抖动
    window.requestAnimationFrame(() => {
        // 當捲動到250vh時隱藏原翻翻卡並顯示答案卡片
        if (scrollPosition > 250 * window.innerHeight / 100 && !isFlipped) {
            initialFlipCards.style.display = 'none';
            finalFlipCards.style.display = 'flex';
            flipCardInners.forEach(card => {
                card.classList.add('flip');
            });
            isFlipped = true; // 防止重複觸發
        } else if (scrollPosition <= 250 * window.innerHeight / 100 && isFlipped) {
            initialFlipCards.style.display = 'flex';
            finalFlipCards.style.display = 'none';
            flipCardInners.forEach(card => {
                card.classList.remove('flip');
            });
            isFlipped = false;
        }
    });
});
