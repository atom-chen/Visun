//desktop
var isMobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) !=null;

var isiPad = navigator.userAgent.match(/iPad/i) != null; 

var isiPhone = navigator.userAgent.match(/iPhone|iPod/i) != null;  

//baidu
var isBaidu = navigator.userAgent.match('baidu') != null;

//QQ browser
var isQQ = navigator.userAgent.match('MQQBrowser') != null;

//Saferi Browser
var isFirefox = navigator.userAgent.match('FxiOS') != null;

// UC Browser
var  isUC = navigator.userAgent.indexOf("UCBrowser") != -1;

// Chrome 1+
var isChrome = navigator.userAgent.match('CriOS') != null;

//xiaomi
var isXiaomi = navigator.userAgent.match('XiaoMi') != null;

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = navigator.userAgent.match('Safari') && !isBaidu && !isFirefox && !isQQ && !isChrome && !isUC && !isXiaomi;

var isAndroid = /android/i.test(navigator.userAgent || navigator.vendor || window.opera);

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;



var OCE = gajus.orientationchangeend({
  debug: false
});

var maxPorHet = 0;
var maxLanHet = 0;

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function nopreventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = true;
}

var bodyTag = document.getElementsByTagName('body')[0]; 
function displaySwipe() {
    document.getElementById("orientationswipe").style.display = "block";
    var isFullScreen =  window.navigator.standalone | false;
    if(!isFullScreen){
        bodyTag.style.height = '150%';
    }
}

function setOrientationSize(maxHet) {
    if(window.innerHeight >= maxHet){
        document.getElementById("orientationswipe").style.display = "none";        
        if(window.innerHeight > maxHet*1.01) {
            maxHet = window.innerHeight;
        }
        if(isSafari) {
            setTimeout(function(){window.scrollTo(0,0);},200); 
        } else {
            bodyTag.style.height = '100%';
        }
        // cmkj.EventCtrl.sendDataEvent("test", window.innerHeight + " v2 " + maxHet + " " + maxPorHet + " " + maxLanHet);
        
    }else {
        displaySwipe();
    }

    return maxHet;
}


function setOnOriention() {
    setTimeout(function(){
        window.scrollTo(0,0);
    },100); 
    if(window.orientation == 0 || window.orientation == 180){
        maxPorHet = setOrientationSize(maxPorHet);
    }
    if(window.orientation == 90 || window.orientation == -90){
        maxLanHet = setOrientationSize(maxLanHet);
    }
}

//safari第一次会自动滑动一下。
var isFirstScroll = true;
function setOnScroll() {
    if(isFirstScroll) {
        isFirstScroll = null;
        return;
    }
    if(window.orientation == 0 || window.orientation == 180){
        maxPorHet = setOrientationSize(maxPorHet);
    }
    if(window.orientation == 90 || window.orientation == -90){
        maxLanHet = setOrientationSize(maxLanHet);
    }
}

window.addEventListener('load', function() {
    if(!iOS) {
        return ;
    }
    if(window.orientation == 0 || window.orientation == 180){
        displaySwipe();
        maxPorHet = window.innerHeight;
    }
    if(window.orientation == 90 || window.orientation == -90){
        displaySwipe();
        maxLanHet = window.innerHeight;
    }

    OCE.on('orientationchangeend', function () {
        setOnOriention();
    });

    if(window.addEventListener){
        window.addEventListener('scroll', setOnScroll, false);
    } else {
        window.attachEvent('onscroll', setOnScroll);
    }
}, false);