
$(function() {
    const video1 = $('#video1').get(0);
    const video2 = $('#video2').get(0);

    const video1SectionStart = $('#video-section-1').offset().top;
    const middleSectionStart = $('.middle-section').offset().top;
    const video2SectionStart = $('#video-section-2').offset().top;
    const windowHeight = $(window).height();

    function handleVideoPlayback(video, startScroll, endScroll) {
        const currentScrollPosition = $(document).scrollTop();
        console.log("Current scroll position:", currentScrollPosition);

        if (currentScrollPosition >= startScroll && currentScrollPosition < endScroll) {
            video.style.visibility = 'visible'; // 顯示影片
            if (video.paused) {
                video.play(); // 播放影片
            }
            const scrollRange = endScroll - startScroll;
            const progress = (currentScrollPosition - startScroll) / scrollRange;
            video.currentTime = video.duration * progress;
        } else {
            video.pause(); // 停止播放影片
            video.currentTime = 0; // 重置影片時間
            video.style.visibility = 'hidden'; // 隱藏影片
        }
    }

    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();

        // 控制 Video 1 的播放範圍
        handleVideoPlayback(video1, video1SectionStart - windowHeight, middleSectionStart);

        // 控制 Video 2 的播放範圍
        handleVideoPlayback(video2, video2SectionStart - windowHeight, video2SectionStart + windowHeight);
    });
});
