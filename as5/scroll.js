document.addEventListener("DOMContentLoaded", function() {
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");

    const video1Section = document.getElementById("video-section-1");
    const middleSection = document.querySelector(".middle-section");
    const video2Section = document.getElementById("video-section-2");

    function handleVideoPlayback(video, startScroll, endScroll) {
        const currentScrollPosition = window.scrollY;
        
        if (currentScrollPosition >= startScroll && currentScrollPosition < endScroll) {
            video.style.visibility = 'visible';
            video.play();

            // 計算滾動範圍和播放進度
            const scrollRange = endScroll - startScroll;
            const progress = (currentScrollPosition - startScroll) / scrollRange;
            video.currentTime = video.duration * progress;
        } else {
            video.pause();
            video.currentTime = 0;
            video.style.visibility = 'hidden';
        }
    }

    // 設置滾動事件
    window.addEventListener("scroll", function() {
        const video1Start = video1Section.offsetTop - window.innerHeight / 2;
        const video1End = middleSection.offsetTop;
        const video2Start = video2Section.offsetTop - window.innerHeight / 2;
        const video2End = video2Section.offsetTop + window.innerHeight;

        // 控制 Video 1 的播放
        handleVideoPlayback(video1, video1Start, video1End);

        // 控制 Video 2 的播放
        handleVideoPlayback(video2, video2Start, video2End);
    });
});




