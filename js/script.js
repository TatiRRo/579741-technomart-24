'use strict';

(function() {
	var writeUsButton = document.querySelector('.write-us');
  var writeUsPopup = document.querySelector('.modal.contact-us');

  var openMap = document.querySelector('.modal.map');
  var map = document.querySelector('.contact-map');

  var popup = document.querySelectorAll('.modal');
  var close = document.querySelectorAll('.modal-close');


  var openPopup = function (evt) {
    if(evt.target.tagName === 'IMG'){
      openMap.classList.add('modal-show');
}

if(evt.target.tagName === 'A') {
	writeUsPopup.classList.add('modal-show');
}
  };

var closePopup =  function () {
	[].forEach.call(popup, function (el) {
      el.classList.remove('modal-show');
})
  };

writeUsButton.addEventListener('click', function (evt) {
	evt.preventDefault();
      openPopup(evt);
});

[].forEach.call(close, function (el) {
	el.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
});
  });

map.addEventListener('click', function (evt) {
	evt.preventDefault();
   openPopup(evt);
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
     evt.preventDefault();
     popup = document.querySelectorAll('.modal');
     [].forEach.call(popup, function (el) {
       if (el.classList.contains("modal-show")) {
         el.classList.remove("modal-show");
}
     })
   }
 });
}())
