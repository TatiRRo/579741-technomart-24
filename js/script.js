'use strict';

(function(){
  var writeUsButton = document.querySelector('.write-us');
  var writeUsPopup = document.querySelector('.modal.contact-us');

	var addItem = document.querySelector('.modal.add-item')

  var openMap = document.querySelector('.modal.map');
  var map = document.querySelector('.contact-map');

  var popup = document.querySelectorAll('.modal');
  var close = document.querySelectorAll('.modal-close');

	var openCatalogPopUp = document.querySelectorAll('.button.buy');

  var form = document.querySelector('.modal-form');

	if(form !== null) {
		var login = form.querySelector("[name=login]");
		var password = form.querySelector("[name=password]");

		form.addEventListener("submit", function (evt) {
			if (!login.value || !password.value) {
				evt.preventDefault();
				evt.target.classList.remove('modal-error');
				setTimeout(function() { evt.target.classList.add("modal-error")}, 100);
			} else {
				if (isStorageSupport) {
					localStorage.setItem("login", login.value);
				}
			}
		});
	};

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  var openPopup = function (evt) {
    if(evt.target.tagName === 'IMG'){
      openMap.classList.add('modal-show');
    }

		if (evt.target.classList.contains('buy')) {
			addItem.classList.add('modal-show');
		}

		if (evt.target.classList.contains('write-us')) {
			writeUsPopup.classList.add('modal-show');

			if (storage) {
			  login.value = storage;
			  password.focus();
			} else {
			  login.focus();
			}
		}
  };

  var closePopup =  function () {
    [].forEach.call(popup, function (el) {
      el.classList.remove('modal-show');
      el.classList.remove("modal-error");
    });
  };

	if (writeUsButton) {
		writeUsButton.addEventListener('click', function (evt) {
				evt.preventDefault();
				openPopup(evt);
		});
	};

	if (openCatalogPopUp) {
		[].forEach.call(openCatalogPopUp, function (el) {
	    el.addEventListener('click', function (evt) {
	      evt.preventDefault();
	      openPopup(evt);
	    })
		});
	};

  [].forEach.call(close, function (el) {
    el.addEventListener('click', function (evt) {
      evt.preventDefault();
      closePopup();
    });
  });

	if (map) {
		map.addEventListener('click', function (evt) {
		evt.preventDefault();
		openPopup(evt);
		});
	};

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     popup = document.querySelectorAll('.modal');
     [].forEach.call(popup, function (el) {
       if (el.classList.contains("modal-show")) {
         el.classList.remove("modal-show");
       }
     })

		 if (form) {
		 	form.classList.remove("modal-error");
		 }
	}
 });

}())
