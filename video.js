// Click-to-load YouTube embeds. Nothing is requested from YouTube until the reader clicks.
// Without JavaScript, each poster is a plain link to the video on YouTube.
document.querySelectorAll('a.video[data-yt]').forEach(function (link) {
  link.addEventListener('click', function (event) {
    var id = link.getAttribute('data-yt');
    if (!/^[\w-]{11}$/.test(id)) return; // fall back to the plain link
    event.preventDefault();
    var start = link.getAttribute('data-start');
    var src = 'https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1&rel=0&cc_load_policy=1' + (start ? '&start=' + parseInt(start, 10) : '');
    var frame = document.createElement('iframe');
    frame.src = src;
    frame.title = link.getAttribute('data-title') || 'Video';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    var box = document.createElement('div');
    box.className = 'video';
    box.appendChild(frame);
    link.replaceWith(box);
    frame.focus();
  });
});
