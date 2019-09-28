var regions = document.getElementsByClassName('map-region');
Array.prototype.forEach.call(regions, function(el) {
    el.addEventListener('click', (event) => {
        $(regions).removeClass('active')
        var target = event.currentTarget
        $(target).addClass('active');
    })
});
