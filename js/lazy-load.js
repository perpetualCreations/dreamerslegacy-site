var options = {
    autoTrigger: true,
    padding: 20,
    nextSelector: 'a.jscroll-next:last',
    contentSelector: 'li'
};

$(function() {
    $('.lazy').jscroll(options);
});