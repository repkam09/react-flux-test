// Required files/modules
var EventEmitter = require('events').EventEmitter;
var log = require('./logging');
var util = require('util');
var dispatcher = require('../dispatcher/dispatcher');


// Variables to keep track of the current locale
var _currentLocale = 'en_us';
var _localeNbt = 0;


// Language sets. Written locally. Could be in another file.
var en_us = {
	head_str: 'This is some JSX here. It looks just like HTML',
	red_str: 'But we can use JavaScript variables, like above!',
	btn_str: 'Click on me',
	clk_str: 'Number of clicks is ',
	chg_lng: 'Change Language'
};

var en_es = {
	head_str: 'Esto es cierto JSX aquí . Se ve como HTML',
	red_str: 'Pero podemos utilizar variables de JavaScript , como la de arriba!',
	btn_str: 'Haga clic en mí',
	clk_str: 'Número de clics es ',
	chg_lng: 'Cambiar Idioma'
};

var th_th = {
	head_str: 'นี่คือ JSX บางอย่างที่นี่ มัน มีลักษณะ เช่น HTML',
	red_str: 'แต่เราสามารถ ใช้ตัวแปร JavaScript, เหมือน ข้างต้น!',
	btn_str: 'คลิกที่ ฉัน',
	clk_str: 'จำนวนการคลิก คือ ',
	chg_lng: 'เปลี่ยนภาษา'
};

var _localeTextData = {
	en_us: en_us,
	en_es: en_es,
	th_th: th_th
};


// Constuctor for the LocaleStore
function LocaleStore() {
	EventEmitter.call(this);
}

// We need to be an eventemitter
util.inherits(LocaleStore, EventEmitter);


// actionHandler - callback for the dispatcher. Recieves actions
// and decideds what to do with them.
LocaleStore.prototype.actionHandler = function (action) {
	var retval = null;
	log.log('LocaleStore got an action: ' + action.type);
	switch (action.type) {
		case dispatcher.action.LANGUAGE:
			retval = swapLanguage();
			break;
	}
	return retval;
};

// public method to request a translated version of a string based on the
// current language _currentLocale variable
LocaleStore.prototype.getTextString = function(text_key) {
	var localeData = _localeTextData[_currentLocale];
	if ((typeof localeData).toLowerCase() === 'undefined' || localeData === null){
		return '' + text_key + '';
	}

	var result = localeData[text_key];
	if ((typeof result).toLowerCase() === 'undefined' || result === null){
		result = '' + text_key + '';
	}
	return result;
};


// Sets the _currentLocale variable by cycling through
// the available languages that were defined above.
function swapLanguage() {
	_localeNbt++;
	if (_localeNbt > 2) {
		_localeNbt = 0;
	}
	
	if (_localeNbt == 0) {
		_currentLocale = 'en_us';
	}
	
	if (_localeNbt == 1) {
		_currentLocale = 'en_es';
	}
	
	if (_localeNbt == 2) {
		_currentLocale = 'th_th';
	}
}


// Create an instance of the store and export it
var _store = new LocaleStore();
module.exports = _store;