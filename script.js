// style för current page i menyerna
$(document).ready(function() {
    const currentLocation = location.href;
    $("a").each(function(index) {
        if (this.href === currentLocation) {
            this.style.color = "#C2C0B6";
        }
    })
})

