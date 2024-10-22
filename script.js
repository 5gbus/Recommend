// RTP animation
document.addEventListener("DOMContentLoaded", function () {
    const rtpBars = document.querySelectorAll('.rtp-bar');

    rtpBars.forEach(bar => {
        const rtpPercentage = bar.getAttribute('data-rtp');
        bar.style.width = rtpPercentage + '%';
    });
});

// Navigation function
function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
