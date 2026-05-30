document.addEventListener("DOMContentLoaded", function() {
    // ဗီဒီယို အားလုံးကို Class Name သုံးပြီး ဖမ်းယူခြင်း
    const videos = document.querySelectorAll(".birthday-video");

    // ဗီဒီယိုတစ်ခုချင်းစီကို အလိုအလျောက် Play ခိုင်းခြင်း
    videos.forEach(function(video) {
        if (video) {
            video.play().catch(function(error) {
                console.log("Autoplay ကို Browser က ခဏပိတ်ထားပါက ဤနေရာတွင် သိနိုင်သည် - ", error);
            });
        }
    });
});