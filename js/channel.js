let v = document.querySelector("video")
v.addEventListener("loadedmetadata", function () {
    document.getElementById('preloader').style.display = "none";
    
})
stratStream();
function stratStream() {
    let channels = ['somoy', '9xm' ,'rtv', 'atn','gb']
    let sources = [
        'https://somoy.jaagobd.com:444/somoy/somoyt000011226615544544.stream/playlist.m3u8',
        'http://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/9XM-audio_208482_und=208000-video=877600.m3u8',
        'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/rtv-sg.stream/playlist.m3u8',
        'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/atnbd-8-org.stream/playlist.m3u8',
        'https://tempx.jagobd.com:441/c5V6mmMyX7RpbEU9Mi8xNy8yMDEOGIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PT0mdFsaWRtaW51aiPhnPTI/gaanbangla-8-orgd.stream/playlist.m3u8'
        
    ]
    for (let i = 0; i < channels.length; i++) {
        streamThis(channels[i], sources[i])

    }

    function streamThis(channel, source) {
        var video = document.getElementById(channel);
        if (Hls.isSupported()) {
            var hls = new Hls({
                debug: true,
            });
            hls.loadSource(source);
            hls.attachMedia(video);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                video.muted = false;
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = source;
            video.addEventListener('canplay', function () {
                video.play();
            });
        }
    }
}