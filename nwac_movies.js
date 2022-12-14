var items = $(".calendar__item:not('.not-current-month')").filter(function() {
    return $(this).find("span").text() > "14";
});

var data = {};

$(items).each(function() {
    var item = $(this);
    item.children('div.calendar__body').find('div.font-s5.event-title').each(function() {
        var key = $(this).text();
        if (!(key in data)) {

            var d = item.children('div.calendar__head').children('span')[0].innerText;
            var l = item.children('div.calendar__body').find('a')[0].href;

            data[key] = {
                date: d,
                link: l
            };
        }
    });
});