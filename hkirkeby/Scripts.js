

$.fn.flexymenu = function(options){
  var settings = {
    speed       : 300,            // dropdown speed (ms)
    type        : "horizontal",       // menu type arrangement
    align       : "left",         // menu alignment (horizontal type)
    indicator     : false           // indicator that indicates a submenu
  }
  $.extend( settings, options );
  
  var bigScreen = false;
  
  if(settings.type == "vertical"){
    $(".flexy-menu").addClass("vertical");
    if(settings.align == "right"){
      $(".flexy-menu").addClass("right");
    }
  }
  
  if(settings.indicator == true){
    $(".flexy-menu").find("li").each(function(){
      if($(this).children("ul").length > 0){
        $(this).append("<span class='indicator'>+</span>");
      }
    });
  }
  
  $(".flexy-menu").prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");
  
  screenSize();
  
  $(window).resize(function() {
    screenSize();
  });
  
  function screenSize(){
    $(".flexy-menu").find("li, a").unbind();
    $(".flexy-menu").find("ul").hide(0);
    if(window.innerWidth <= 984){
      showCollapse();
      bindClick();
      if(bigScreen == true){
        rightAlignMenu();
        bigScreen = false;
      }
    }
    else{
      hideCollapse();
      bindHover();
      if(settings.type == "horizontal" && settings.align == "right" && bigScreen == false){
        rightAlignMenu();
        bigScreen = true;
      }
    }
  }
  
  function bindHover(){
    $(".flexy-menu li").bind("mouseover", function(){
      $(this).children("ul").stop(true, true).fadeIn(settings.speed);
    }).bind("mouseleave", function(){
      $(this).children("ul").stop(true, true).fadeOut(settings.speed);
    });
  }
  
  function bindClick(){
    $(".flexy-menu li:not(.showhide)").each(function(){
      if($(this).children("ul").length > 0){
        $(this).children("a").bind("click", function(){
          if($(this).siblings("ul").css("display") == "none"){
            $(this).siblings("ul").slideDown(300);
          }
          else{
            $(this).siblings("ul").slideUp(300);
          }
        });
      }
    });
  }
  
  function showCollapse(){
    $(".flexy-menu > li:not(.showhide)").hide(0);
    $(".flexy-menu > li.showhide").show(0);
    $(".flexy-menu > li.showhide").bind("click", function(){
      if($(".flexy-menu > li").is(":hidden")){
        $(".flexy-menu > li").slideDown(300);
      }
      else{
        $(".flexy-menu > li:not(.showhide)").slideUp(300);
        $(".flexy-menu > li.showhide").show(0);
      }
    });
  }
  
  function hideCollapse(){
    $(".flexy-menu > li").show(0);
    $(".flexy-menu > li.showhide").hide(0);
  } 
  
  function rightAlignMenu() {
    $(".flexy-menu > li").addClass("right");
    var menuWidth = $(".flexy-menu").width();
    var menuItems = $(".flexy-menu").children("li");
    $(".flexy-menu").children("li:not(.showhide)").detach();
    for(var i = menuItems.length; i >= 1; i--){
      $(".flexy-menu").append(menuItems[i]);
    }   
  }
}

/*! jQuery Address v${version} | (c) 2009, 2013 Rostislav Hristov | jquery.org/license */
(function ($) {

    $.address = (function () {

        var _trigger = function(name) {
               var e = $.extend($.Event(name), (function() {
                    var parameters = {},
                        parameterNames = $.address.parameterNames();
                    for (var i = 0, l = parameterNames.length; i < l; i++) {
                        parameters[parameterNames[i]] = $.address.parameter(parameterNames[i]);
                    }
                    return {
                        value: $.address.value(),
                        path: $.address.path(),
                        pathNames: $.address.pathNames(),
                        parameterNames: parameterNames,
                        parameters: parameters,
                        queryString: $.address.queryString()
                    };
                }).call($.address));
                $($.address).trigger(e);
                return e;
            },
            _array = function(obj) {
                return Array.prototype.slice.call(obj);
            },
            _bind = function(value, data, fn) {
                $().bind.apply($($.address), Array.prototype.slice.call(arguments));
                return $.address;
            },
            _unbind = function(value,  fn) {
                $().unbind.apply($($.address), Array.prototype.slice.call(arguments));
                return $.address;
            },
            _supportsState = function() {
                return (_h.pushState && _opts.state !== UNDEFINED);
            },
            _hrefState = function() {
                return ('/' + _l.pathname.replace(new RegExp(_opts.state), '') + 
                    _l.search + (_hrefHash() ? '#' + _hrefHash() : '')).replace(_re, '/');
            },
            _hrefHash = function() {
                var index = _l.href.indexOf('#');
                return index != -1 ? _l.href.substr(index + 1) : '';
            },
            _href = function() {
                return _supportsState() ? _hrefState() : _hrefHash();
            },
            _window = function() {
                try {
                    return top.document !== UNDEFINED && top.document.title !== UNDEFINED ? top : window;
                } catch (e) { 
                    return window;
                }
            },
            _js = function() {
                return 'javascript';
            },
            _strict = function(value) {
                value = value.toString();
                return (_opts.strict && value.substr(0, 1) != '/' ? '/' : '') + value;
            },
            _cssint = function(el, value) {
                return parseInt(el.css(value), 10);
            },
            _listen = function() {
                if (!_silent) {
                    var hash = _href(),
                        diff = decodeURI(_value) != decodeURI(hash);
                    if (diff) {
                        if (_msie && _version < 7) {
                            _l.reload();
                        } else {
                            if (_msie && !_hashchange && _opts.history) {
                                _st(_html, 50);
                            }
                            _value = hash;
                            _update(FALSE);
                        }
                    }
                }
            },
            _update = function(internal) {
                _st(_track, 10);
                return _trigger(CHANGE).isDefaultPrevented() || 
                    _trigger(internal ? INTERNAL_CHANGE : EXTERNAL_CHANGE).isDefaultPrevented();
            },
            _track = function() {
                if (_opts.tracker !== 'null' && _opts.tracker !== NULL) {
                    var fn = $.isFunction(_opts.tracker) ? _opts.tracker : _t[_opts.tracker],
                        value = (_l.pathname + _l.search + 
                                ($.address && !_supportsState() ? $.address.value() : ''))
                                .replace(/\/\//, '/').replace(/^\/$/, '');
                    if ($.isFunction(fn)) {
                        fn(value);
                    } else if ($.isFunction(_t.urchinTracker)) {
                        _t.urchinTracker(value);
                    } else if (_t.pageTracker !== UNDEFINED && $.isFunction(_t.pageTracker._trackPageview)) {
                        _t.pageTracker._trackPageview(value);
                    } else if (_t._gaq !== UNDEFINED && $.isFunction(_t._gaq.push)) {
                        _t._gaq.push(['_trackPageview', decodeURI(value)]);
                    }
                }
            },
            _html = function() {
                var src = _js() + ':' + FALSE + ';document.open();document.writeln(\'<html><head><title>' + 
                    _d.title.replace(/\'/g, '\\\'') + '</title><script>var ' + ID + ' = "' + encodeURIComponent(_href()).replace(/\'/g, '\\\'') + 
                    (_d.domain != _l.hostname ? '";document.domain="' + _d.domain : '') + 
                    '";</' + 'script></head></html>\');document.close();';
                if (_version < 7) {
                    _frame.src = src;
                } else {
                    _frame.contentWindow.location.replace(src);
                }
            },
            _options = function() {
                if (_url && _qi != -1) {
                    var i, param, params = _url.substr(_qi + 1).split('&');
                    for (i = 0; i < params.length; i++) {
                        param = params[i].split('=');
                        if (/^(autoUpdate|history|strict|wrap)$/.test(param[0])) {
                            _opts[param[0]] = (isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : (parseInt(param[1], 10) !== 0));
                        }
                        if (/^(state|tracker)$/.test(param[0])) {
                            _opts[param[0]] = param[1];
                        }
                    }
                    _url = NULL;
                }
                _value = _href();
            },
            _load = function() {
                if (!_loaded) {
                    _loaded = TRUE;
                    _options();
                    $('a[rel*="address:"]').address();
                    if (_opts.wrap) {
                        var body = $('body'),
                            wrap = $('body > *')
                                .wrapAll('<div style="padding:' + 
                                    (_cssint(body, 'marginTop') + _cssint(body, 'paddingTop')) + 'px ' + 
                                    (_cssint(body, 'marginRight') + _cssint(body, 'paddingRight')) + 'px ' + 
                                    (_cssint(body, 'marginBottom') + _cssint(body, 'paddingBottom')) + 'px ' + 
                                    (_cssint(body, 'marginLeft') + _cssint(body, 'paddingLeft')) + 'px;" />')
                                .parent()
                                .wrap('<div id="' + ID + '" style="height:100%;overflow:auto;position:relative;' + 
                                    (_webkit && !window.statusbar.visible ? 'resize:both;' : '') + '" />');
                        $('html, body')
                            .css({
                                height: '100%',
                                margin: 0,
                                padding: 0,
                                overflow: 'hidden'
                            });
                        if (_webkit) {
                            $('<style type="text/css" />')
                                .appendTo('head')
                                .text('#' + ID + '::-webkit-resizer { background-color: #fff; }');
                        }
                    }
                    if (_msie && !_hashchange) {
                        var frameset = _d.getElementsByTagName('frameset')[0];
                        _frame = _d.createElement((frameset ? '' : 'i') + 'frame');
                        _frame.src = _js() + ':' + FALSE;
                        if (frameset) {
                            frameset.insertAdjacentElement('beforeEnd', _frame);
                            frameset[frameset.cols ? 'cols' : 'rows'] += ',0';
                            _frame.noResize = TRUE;
                            _frame.frameBorder = _frame.frameSpacing = 0;
                        } else {
                            _frame.style.display = 'none';
                            _frame.style.width = _frame.style.height = 0;
                            _frame.tabIndex = -1;
                            _d.body.insertAdjacentElement('afterBegin', _frame);
                        }
                        _st(function() {
                            $(_frame).bind('load', function() {
                                var win = _frame.contentWindow;
                                _value = win[ID] !== UNDEFINED ? win[ID] : '';
                                if (_value != _href()) {
                                    _update(FALSE);
                                    _l.hash = _value;
                                }
                            });
                            if (_frame.contentWindow[ID] === UNDEFINED) {
                                _html();
                            }
                        }, 50);
                    }
                    _st(function() {
                        _trigger('init');
                        _update(FALSE);
                    }, 1);
                    if (!_supportsState()) {
                        if ((_msie && _version > 7) || (!_msie && _hashchange)) {
                            if (_t.addEventListener) {
                                _t.addEventListener(HASH_CHANGE, _listen, FALSE);
                            } else if (_t.attachEvent) {
                                _t.attachEvent('on' + HASH_CHANGE, _listen);
                            }
                        } else {
                            _si(_listen, 50);
                        }
                    }
                    if ('state' in window.history) {
                        $(window).trigger('popstate');
                    }
                }
            },
            _popstate = function() {
                if (decodeURI(_value) != decodeURI(_href())) {
                    _value = _href();
                    _update(FALSE);
                }
            },
            _unload = function() {
                if (_t.removeEventListener) {
                    _t.removeEventListener(HASH_CHANGE, _listen, FALSE);
                } else if (_t.detachEvent) {
                    _t.detachEvent('on' + HASH_CHANGE, _listen);
                }
            },
            _uaMatch = function(ua) {
                ua = ua.toLowerCase();
                var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                    /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                    /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                    /(msie) ([\w.]+)/.exec( ua ) ||
                    ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                    [];
                return {
                    browser: match[ 1 ] || '',
                    version: match[ 2 ] || '0'
                };
            },
            _detectBrowser = function() {
                var browser = {},
                    matched = _uaMatch(navigator.userAgent);
                if (matched.browser) {
                    browser[matched.browser] = true;
                    browser.version = matched.version;
                }
                if (browser.chrome) {
                    browser.webkit = true;
                } else if (browser.webkit) {
                    browser.safari = true;
                }
                return browser;
            },
            UNDEFINED,
            NULL = null,
            ID = 'jQueryAddress',
            STRING = 'string',
            HASH_CHANGE = 'hashchange',
            INIT = 'init',
            CHANGE = 'change',
            INTERNAL_CHANGE = 'internalChange',
            EXTERNAL_CHANGE = 'externalChange',
            TRUE = true,
            FALSE = false,
            _opts = {
                autoUpdate: TRUE, 
                history: TRUE, 
                strict: TRUE,
                wrap: FALSE
            },
            _browser = _detectBrowser(),
            _version = parseFloat(_browser.version),
            _webkit = _browser.webkit || _browser.safari,
            _msie = !$.support.opacity,
            _t = _window(),
            _d = _t.document,
            _h = _t.history, 
            _l = _t.location,
            _si = setInterval,
            _st = setTimeout,
            _re = /\/{2,9}/g,
            _agent = navigator.userAgent,
            _hashchange = 'on' + HASH_CHANGE in _t,
            _frame,
            _form,
            _url = $('script:last').attr('src'),
            _qi = _url ? _url.indexOf('?') : -1,
            _title = _d.title, 
            _silent = FALSE,
            _loaded = FALSE,
            _juststart = TRUE,
            _updating = FALSE,
            _listeners = {}, 
            _value = _href();
            
        if (_msie) {
            _version = parseFloat(_agent.substr(_agent.indexOf('MSIE') + 4));
            if (_d.documentMode && _d.documentMode != _version) {
                _version = _d.documentMode != 8 ? 7 : 8;
            }
            var pc = _d.onpropertychange;
            _d.onpropertychange = function() {
                if (pc) {
                    pc.call(_d);
                }
                if (_d.title != _title && _d.title.indexOf('#' + _href()) != -1) {
                    _d.title = _title;
                }
            };
        }
        
        if (_h.navigationMode) {
            _h.navigationMode = 'compatible';
        }
        if (document.readyState == 'complete') {
            var interval = setInterval(function() {
                if ($.address) {
                    _load();
                    clearInterval(interval);
                }
            }, 50);
        } else {
            _options();
            $(_load);
        }
        $(window).bind('popstate', _popstate).bind('unload', _unload);

        return {
            bind: function(type, data, fn) {
                return _bind.apply(this, _array(arguments));
            },
            unbind: function(type, fn) {
                return _unbind.apply(this, _array(arguments));
            },
            init: function(data, fn) {
                return _bind.apply(this, [INIT].concat(_array(arguments)));
            },
            change: function(data, fn) {
                return _bind.apply(this, [CHANGE].concat(_array(arguments)));
            },
            internalChange: function(data, fn) {
                return _bind.apply(this, [INTERNAL_CHANGE].concat(_array(arguments)));
            },
            externalChange: function(data, fn) {
                return _bind.apply(this, [EXTERNAL_CHANGE].concat(_array(arguments)));
            },
            baseURL: function() {
                var url = _l.href;
                if (url.indexOf('#') != -1) {
                    url = url.substr(0, url.indexOf('#'));
                }
                if (/\/$/.test(url)) {
                    url = url.substr(0, url.length - 1);
                }
                return url;
            },
            autoUpdate: function(value) {
                if (value !== UNDEFINED) {
                    _opts.autoUpdate = value;
                    return this;
                }
                return _opts.autoUpdate;
            },
            history: function(value) {
                if (value !== UNDEFINED) {
                    _opts.history = value;
                    return this;
                }
                return _opts.history;
            },
            state: function(value) {
                if (value !== UNDEFINED) {
                    _opts.state = value;
                    var hrefState = _hrefState();
                    if (_opts.state !== UNDEFINED) {
                        if (_h.pushState) {
                            if (hrefState.substr(0, 3) == '/#/') {
                                _l.replace(_opts.state.replace(/^\/$/, '') + hrefState.substr(2));
                            }
                        } else if (hrefState != '/' && hrefState.replace(/^\/#/, '') != _hrefHash()) {
                            _st(function() {
                                _l.replace(_opts.state.replace(/^\/$/, '') + '/#' + hrefState);
                            }, 1);
                        }
                    }
                    return this;
                }
                return _opts.state;
            },
            strict: function(value) {
                if (value !== UNDEFINED) {
                    _opts.strict = value;
                    return this;
                }
                return _opts.strict;
            },
            tracker: function(value) {
                if (value !== UNDEFINED) {
                    _opts.tracker = value;
                    return this;
                }
                return _opts.tracker;
            },
            wrap: function(value) {
                if (value !== UNDEFINED) {
                    _opts.wrap = value;
                    return this;
                }
                return _opts.wrap;
            },
            update: function() {
                _updating = TRUE;
                this.value(_value);
                _updating = FALSE;
                return this;
            },
            title: function(value) {
                if (value !== UNDEFINED) {
                    _st(function() {
                        _title = _d.title = value;
                        if (_juststart && _frame && _frame.contentWindow && _frame.contentWindow.document) {
                            _frame.contentWindow.document.title = value;
                            _juststart = FALSE;
                        }
                    }, 50);
                    return this;
                }
                return _d.title;
            },
            value: function(value) {
                if (value !== UNDEFINED) {
                    value = _strict(value);
                    if (value == '/') {
                        value = '';
                    }
                    if (_value == value && !_updating) {
                        return;
                    }
                    _value = value;
                    if (_opts.autoUpdate || _updating) {
                        if (_update(TRUE)) {
                            return this;
                        }
                        if (_supportsState()) {
                            _h[_opts.history ? 'pushState' : 'replaceState']({}, '', 
                                    _opts.state.replace(/\/$/, '') + (_value === '' ? '/' : _value));
                        } else {
                            _silent = TRUE;
                            if (_webkit) {
                                if (_opts.history) {
                                    _l.hash = '#' + _value;
                                } else {
                                    _l.replace('#' + _value);
                                }
                            } else if (_value != _href()) {
                                if (_opts.history) {
                                    _l.hash = '#' + _value;
                                } else {
                                    _l.replace('#' + _value);
                                }
                            }
                            if ((_msie && !_hashchange) && _opts.history) {
                                _st(_html, 50);
                            }
                            if (_webkit) {
                                _st(function(){ _silent = FALSE; }, 1);
                            } else {
                                _silent = FALSE;
                            }
                        }
                    }
                    return this;
                }
                return _strict(_value);
            },
            path: function(value) {
                if (value !== UNDEFINED) {
                    var qs = this.queryString(),
                        hash = this.hash();
                    this.value(value + (qs ? '?' + qs : '') + (hash ? '#' + hash : ''));
                    return this;
                }
                return _strict(_value).split('#')[0].split('?')[0];
            },
            pathNames: function() {
                var path = this.path(),
                    names = path.replace(_re, '/').split('/');
                if (path.substr(0, 1) == '/' || path.length === 0) {
                    names.splice(0, 1);
                }
                if (path.substr(path.length - 1, 1) == '/') {
                    names.splice(names.length - 1, 1);
                }
                return names;
            },
            queryString: function(value) {
                if (value !== UNDEFINED) {
                    var hash = this.hash();
                    this.value(this.path() + (value ? '?' + value : '') + (hash ? '#' + hash : ''));
                    return this;
                }
                var arr = _value.split('?');
                return arr.slice(1, arr.length).join('?').split('#')[0];
            },
            parameter: function(name, value, append) {
                var i, params;
                if (value !== UNDEFINED) {
                    var names = this.parameterNames();
                    params = [];
                    value = value === UNDEFINED || value === NULL ? '' : value.toString();
                    for (i = 0; i < names.length; i++) {
                        var n = names[i],
                            v = this.parameter(n);
                        if (typeof v == STRING) {
                            v = [v];
                        }
                        if (n == name) {
                            v = (value === NULL || value === '') ? [] : 
                                (append ? v.concat([value]) : [value]);
                        }
                        for (var j = 0; j < v.length; j++) {
                            params.push(n + '=' + v[j]);
                        }
                    }
                    if ($.inArray(name, names) == -1 && value !== NULL && value !== '') {
                        params.push(name + '=' + value);
                    }
                    this.queryString(params.join('&'));
                    return this;
                }
                value = this.queryString();
                if (value) {
                    var r = [];
                    params = value.split('&');
                    for (i = 0; i < params.length; i++) {
                        var p = params[i].split('=');
                        if (p[0] == name) {
                            r.push(p.slice(1).join('='));
                        }
                    }
                    if (r.length !== 0) {
                        return r.length != 1 ? r : r[0];
                    }
                }
            },
            parameterNames: function() {
                var qs = this.queryString(),
                    names = [];
                if (qs && qs.indexOf('=') != -1) {
                    var params = qs.split('&');
                    for (var i = 0; i < params.length; i++) {
                        var name = params[i].split('=')[0];
                        if ($.inArray(name, names) == -1) {
                            names.push(name);
                        }
                    }
                }
                return names;
            },
            hash: function(value) {
                if (value !== UNDEFINED) {
                    this.value(_value.split('#')[0] + (value ? '#' + value : ''));
                    return this;
                }
                var arr = _value.split('#');
                return arr.slice(1, arr.length).join('#');                
            }
        };
    })();
    
    $.fn.address = function(fn) {
        if (!this.data('address')) {
            this.on('click', function(e) {
                if (e.shiftKey || e.ctrlKey || e.metaKey || e.which == 2) {
                    return true;
                }
                var target = e.currentTarget;
                if ($(target).is('a')) {
                    e.preventDefault();
                    var value = fn ? fn.call(target) : 
                        /address:/.test($(target).attr('rel')) ? $(target).attr('rel').split('address:')[1].split(' ')[0] : 
                        $.address.state() !== undefined && !/^\/?$/.test($.address.state()) ? 
                                $(target).attr('href').replace(new RegExp('^(.*' + $.address.state() + '|\\.)'), '') : 
                                $(target).attr('href').replace(/^(#\!?|\.)/, '');
                    $.address.value(value);
                }
            }).on('submit', function(e) {
                var target = e.currentTarget;
                if ($(target).is('form')) {
                    e.preventDefault();
                    var action = $(target).attr('action'),
                        value = fn ? fn.call(target) : (action.indexOf('?') != -1 ? action.replace(/&$/, '') : action + '?') + 
                            $(target).serialize();
                    $.address.value(value);
                }
            }).data('address', true);
        }
        return this;
    };
    
})(jQuery);


















/*
--------------------------------------------------------------------------------------------------------------------------
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("SlideShow");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

------------------------------------------------------------------------------------------------------------------------

////////name ask
/*
console.log("its working");

confirm("dogger");

prompt("whats your name?");

function nameAsk(){
	var firstName=prompt("What is your name");
	var lastName=prompt("What is your last name");
	var middleInitial=prompt("whats your middleInitial");
	console.log(firstName);
	console.log(lastName);
	console.log(middleInitial);
}

nameAsk();



//////math
function changeNumber(){
document.getElementById("changeNumber").innerHTML = 4;
}

console.log("math");


var computerChoice1 = Math.floor((Math.random()*10)+1);

var computerChoice2 = Math.floor((Math.random() *10)+1);
console.log(computerChoice1);
console.log(computerChoice2);

var sumUser = Number(prompt("What is " + computerChoice1 + " plus " + computerChoice2));
var sumComp = computerChoice2 + computerChoice1;

console.log(sumComp);

var differenceComp = computerChoice1 - computerChoice2;


alert("Here is the sum of the two numbers: " + sumComp);


if (sumUser === sumComp) {

	alert("you added correctly!!!");
	console.log("adding was correct by the user");

}

else {
	console.log("They didn't add correctly or my code is messed up");
	alert("You added wrong!!!");
}


alert("Get back to work!!!!");

changeNumber();

*/



/*

------------------------------------------------------------------------------------------------






/*
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myShoes;
///////////array
////////////exercise 1
var length = 16;                               // Number
var lastName = "shoetype";                      // String
var shoes = ["Nike", "Vans", "Adidas"];           // Array
var x = {firstName:"John", lastName:"Doe"};    // Object
var shoess = ["Nike", "Vans", "Adidas"];
var i = 0;
var text = "";
while (shoes[i]) {
    text += shoes[i] + "<br>";
    i++;
}
document.getElementById("shoes").innerHTML = text;
var array {
	var "1";
	var "2";
	var "3";
}

//////////part of dogs page
var dogs = 6;                
console. log(dogs)                
var my_array = ["dogs", 9, dogs];                               
console.log(my_array);                               
var roomNum = 38;                
console.log("roomNum");   
var roomNumCFloor = ["what room number do you teach in Ms. Biagini?"];
console.log(roomNumCFloor);
 [C-12, C-20, C-23]
if(true) {
//execute this code here
console.log("It's working");
var food = "chicken";
console.log(food);
}
else{
	console.log("It's working");
	var foood = "pizza";
	console.log(food);
}

section 2 #453B29
main content #1D232E
hover #BEB4A2




background: black url("file:///Users/huonkirkeby/Desktop/IMG_3419.JPG");
*/
/*
.carousel.fade {
                 opacity: 1;
               }

       .carousel.fade .item {
        transition: opacity ease-out .7s;
        left: 0;
        opacity: 0;
        top: 0;
        position: absolute;
        width: 100%;
        display: block;
        }

        .carousel.fade .item:first-child {
        top: auto;
        opacity: 0;
        position: relative;
        }

        .carousel.fade .item.active {
        opacity: 1;
        }

        .carousel-control {
        opacity: 0;
        }

       .carousel-control.right,
       .carousel-control.left {
        background-image: none;
        }

       #featured .item {
       background-size: cover;
       background-repeat: no-repeat;
       background-position: center center;
       width: 100%;
       height: 100%;
        }
        */
