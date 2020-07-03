"use strict";function _typeof(i){return(_typeof="function"==typeof Symbol&&"symbol"===_typeof(Symbol.iterator)?function(e){function i(i){return e.apply(this,arguments)}return i.toString=function(){return e.toString()},i}(function(i){return void 0===i?"undefined":_typeof(i)}):function(e){function i(i){return e.apply(this,arguments)}return i.toString=function(){return e.toString()},i}(function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":void 0===i?"undefined":_typeof(i)}))(i)}!function(r,u){var p="function",c="undefined",f="object",i="model",e="name",s="type",o="vendor",n="version",t="architecture",a="console",d="mobile",w="tablet",l="smarttv",m="wearable",b={extend:function(i,e){for(var s in e)-1!=="browser cpu device engine os".indexOf(s)&&e[s].length%2==0&&(i[s]=e[s].concat(i[s]));return i},has:function(i,e){return"string"==typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"===(void 0===i?"undefined":_typeof(i))?i.split(".")[0]:u}},g={rgx:function(){for(var i,e,s,o,n,r,t,a=0,d=arguments;a<d.length&&!r;){var w=d[a],l=d[a+1];if((void 0===i?"undefined":_typeof(i))===c)for(o in i={},l)(void 0===(n=l[o])?"undefined":_typeof(n))===f?i[n[0]]=u:i[n]=u;for(e=s=0;e<w.length&&!r;)if(r=w[e++].exec(this.getUA()))for(o=0;o<l.length;o++)t=r[++s],(void 0===(n=l[o])?"undefined":_typeof(n))===f&&0<n.length?2==n.length?i[n[0]]=_typeof(n[1])==p?n[1].call(this,t):n[1]:3==n.length?i[n[0]]=_typeof(n[1])!==p||n[1].exec&&n[1].test?t?t.replace(n[1],n[2]):u:t?n[1].call(this,t,n[2]):u:4==n.length&&(i[n[0]]=t?n[3].call(this,t.replace(n[1],n[2])):u):i[n]=t||u;a+=2}return i},str:function(i,e){for(var s in e)if(_typeof(e[s])===f&&0<e[s].length){for(var o=0;o<e[s].length;o++)if(b.has(e[s][o],i))return"?"===s?u:s}else if(b.has(e[s],i))return"?"===s?u:s;return i}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},v={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[e,n],[/\s(opr)\/([\w\.]+)/i],[[e,"Opera"],n],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i],[e,n],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[e,"IE"],n],[/(edge)\/((\d+)?[\w\.]+)/i],[e,n],[/(yabrowser)\/([\w\.]+)/i],[[e,"Yandex"],n],[/(comodo_dragon)\/([\w\.]+)/i],[[e,/_/g," "],n],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[e,n],[/(dolfin)\/([\w\.]+)/i],[[e,"Dolphin"],n],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[e,"Chrome"],n],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[n,[e,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[n,[e,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[n,[e,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[n,[e,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[n,e],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[e,[n,g.str,h.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[e,n],[/(navigator|netscape)\/([\w\.-]+)/i],[[e,"Netscape"],n],[/fxios\/([\w\.-]+)/i],[n,[e,"Firefox"]],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[e,n]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[t,"amd64"]],[/(ia32(?=;))/i],[[t,b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[t,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[t,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[t,/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[[t,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[t,b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[i,o,[s,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[i,[o,"Apple"],[s,w]],[/(apple\s{0,1}tv)/i],[[i,"Apple TV"],[o,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[o,i,[s,w]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[i,[o,"Amazon"],[s,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[i,g.str,h.device.amazon.model],[o,"Amazon"],[s,d]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[i,o,[s,d]],[/\((ip[honed|\s\w*]+);/i],[i,[o,"Apple"],[s,d]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[o,i,[s,d]],[/\(bb10;\s(\w+)/i],[i,[o,"BlackBerry"],[s,d]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[i,[o,"Asus"],[s,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[o,"Sony"],[i,"Xperia Tablet"],[s,w]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[o,"Sony"],[i,"Xperia Phone"],[s,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[o,i,[s,a]],[/android.+;\s(shield)\sbuild/i],[i,[o,"Nvidia"],[s,a]],[/(playstation\s[3portablevi]+)/i],[i,[o,"Sony"],[s,a]],[/(sprint\s(\w+))/i],[[o,g.str,h.device.sprint.vendor],[i,g.str,h.device.sprint.model],[s,d]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[o,i,[s,w]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[o,[i,/_/g," "],[s,d]],[/(nexus\s9)/i],[i,[o,"HTC"],[s,w]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[i,[o,"Microsoft"],[s,a]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[o,"Microsoft"],[s,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i],[i,[o,"Motorola"],[s,d]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[i,[o,"Motorola"],[s,w]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[o,"Samsung"],i,[s,w]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[o,"Samsung"],i,[s,d]],[/(samsung);smarttv/i],[o,i,[s,l]],[/\(dtv[\);].+(aquos)/i],[i,[o,"Sharp"],[s,l]],[/sie-(\w+)*/i],[i,[o,"Siemens"],[s,d]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[o,"Nokia"],i,[s,d]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[i,[o,"Acer"],[s,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[o,"LG"],i,[s,w]],[/(lg) netcast\.tv/i],[o,i,[s,l]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[i,[o,"LG"],[s,d]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[i,[o,"Lenovo"],[s,w]],[/linux;.+((jolla));/i],[o,i,[s,d]],[/((pebble))app\/[\d\.]+\s/i],[o,i,[s,m]],[/android.+;\s(glass)\s\d/i],[i,[o,"Google"],[s,m]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[i,/_/g," "],[o,"Xiaomi"],[s,d]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[s,b.lowerize],o,i]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[n,[e,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[e,n],[/rv\:([\w\.]+).*(gecko)/i],[n,e]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[e,n],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[e,[n,g.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[e,"Windows"],[n,g.str,h.os.windows.version]],[/\((bb)(10);/i],[[e,"BlackBerry"],n],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[e,n],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[e,"Symbian"],n],[/\((series40);/i],[e],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[e,"Firefox OS"],n],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[e,n],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[e,"Chromium OS"],n],[/(sunos)\s?([\w\.]+\d)*/i],[[e,"Solaris"],n],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[e,n],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[e,"iOS"],[n,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[e,"Mac OS"],[n,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[e,n]]},y=function i(e,s){if(!(this instanceof i))return new i(e,s).getResult();var o=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),n=s?b.extend(v,s):v;return this.getBrowser=function(){var i=g.rgx.apply(this,n.browser);return i.major=b.major(i.version),i},this.getCPU=function(){return g.rgx.apply(this,n.cpu)},this.getDevice=function(){return g.rgx.apply(this,n.device)},this.getEngine=function(){return g.rgx.apply(this,n.engine)},this.getOS=function(){return g.rgx.apply(this,n.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=i,this},this.setUA(o),this};y.VERSION="0.7.9",y.BROWSER={NAME:e,MAJOR:"major",VERSION:n},y.CPU={ARCHITECTURE:t},y.DEVICE={MODEL:i,VENDOR:o,TYPE:s,CONSOLE:a,MOBILE:d,SMARTTV:l,TABLET:w,WEARABLE:m,EMBEDDED:"embedded"},y.ENGINE={NAME:e,VERSION:n},y.OS={NAME:e,VERSION:n},("undefined"==typeof exports?"undefined":_typeof(exports))!==c?(("undefined"==typeof module?"undefined":_typeof(module))!==c&&module.exports&&(exports=module.exports=y),exports.UAParser=y):("undefined"==typeof define?"undefined":_typeof(define))===p&&define.amd?define(function(){return y}):r.UAParser=y;var x=r.jQuery||r.Zepto;if((void 0===x?"undefined":_typeof(x))!==c){var k=new y;x.ua=k.getResult(),x.ua.get=function(){return k.getUA()},x.ua.set=function(i){k.setUA(i);var e=k.getResult();for(var s in e)x.ua[s]=e[s]}}}("object"==("undefined"==typeof window?"undefined":_typeof(window))?window:void 0);