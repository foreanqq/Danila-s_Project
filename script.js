var items = $('ul.menu li');
items.css('opacity', 0);
for (var i = 0; i < items.length; i++) {
  $(items[i]).delay(i * 400).animate({ opacity: 1 }, 400);
}