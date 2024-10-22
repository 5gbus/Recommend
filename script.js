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

// RTP animation
document.addEventListener("DOMContentLoaded", function () {
    const rtpBars = document.querySelectorAll('.rtp-bar');

    rtpBars.forEach(bar => {
        // Menghasilkan RTP acak antara 80 hingga 100
        const rtpPercentage = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
        bar.style.width = rtpPercentage + '%';
        bar.setAttribute('data-rtp', rtpPercentage); // Update data-rtp attribute
    });
});
