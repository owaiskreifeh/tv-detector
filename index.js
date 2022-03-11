/**
 * user agent
 */
var ua = navigator.userAgent.toLowerCase();

/**
 * Check if the current browser is a TV
 * @returns {Boolean} true if the current browser is a TV
 */
function isSmartTv() {
  // tv browsers
  var tv = [
    "opera",
    "webtv",
    "television",
    "googletv",
    "viera",
    "smarttv",
    "internet.tv",
    "netcast",
    "nettv",
    "appletv",
    "boxee",
    "kylo",
    "dlnadoc",
    "roku",
    "pov_tv",
    "hbbtv",
    "ce-html",
    "mbrowser",
    "samsung",
    "appletv",
    "androidtv",
  ];
  // check
  for (var i = 0; i < tv.length; i++) {
    if (ua.indexOf(tv[i]) !== -1) {
      return true;
    }
  }
  return false;
}

/**
 * Check if the current browser is a Tizen TV
 * @returns {Boolean} true if the current browser is a Tizen TV
 */
function isTizen() {
  return ua.indexOf("tizen") !== -1;
}

/**
 * Check if the current browser is a LG TV
 * @returns {Boolean} true if the current browser is a Web0S/LG TV
 */
function isWebos() {
  return ua.indexOf("webos") !== -1 || ua.indexOf("web0s") !== -1;
}

/**
 * Check if the current browser is a Hisense TV
 * @returns {Boolean} true if the current browser is a Hisense TV
 */
function isHisense() {
  return ua.indexOf("hisense") !== -1;
}

/**
 * Check if the current browser is a Toshiba TV
 * @returns {Boolean} true if the current browser is a Toshiba TV
 */
function isToshiba() {
  return ua.indexOf("toshiba") !== -1;
}

/**
 * Check if the current browser is a Tornado TV
 * @returns {Boolean} true if the current browser is a Tornado TV
 */
function isTornado() {
  return ua.indexOf("tornado") !== -1;
}

/**
 * Check if the current browser is a HbbTv TV
 * @returns {Boolean} true if the current browser is a HbbTv TV
 */
function isHbbTv() {
  return ua.indexOf("hbbtv") !== -1;
}

/**
 * Check if the current browser is a Webkit TV
 * @returns {Boolean} true if the current browser is a Webkit TV
 */
function isWebkit() {
  return ua.indexOf("webkit") !== -1;
}

/**
 * Check if the current browser is a Roku TV
 * @returns {Boolean} true if the current browser is a Roku TV
 */
function isRoku() {
  return ua.indexOf("roku") !== -1;
}

/**
 * Check if the current browser is a Samsung TV
 * @returns {Boolean} true if the current browser is a Samsung TV
 */
function isSamsung() {
  return ua.indexOf("samsung") !== -1;
}

/**
 * Check if the current browser is a Android TV
 * @returns {Boolean} true if the current browser is a Android TV
 */
function isAndroidTv() {
  return ua.indexOf("androidtv") !== -1;
}

/**
 * Check if the current browser is a Apple TV
 * @returns {Boolean} true if the current browser is a Apple TV
 */
function isAppleTv() {
  return ua.indexOf("appletv") !== -1;
}

/**
 * Get TV name
 * @returns {String} the current browser tv name
 */
function getTVName() {
  if (isTizen()) {
    return "tizen";
  } else if (isWebos()) {
    return "webos";
  } else if (isHisense()) {
    return "hisense";
  } else if (isToshiba()) {
    return "toshiba";
  } else if (isTornado()) {
    return "tornado";
  } else if (isHbbTv()) {
    return "hbbtv";
  } else if (isViera()) {
    return "viera";
  } else if (isNetcast()) {
    return "netcast";
  } else if (isWebkit()) {
    return "webkit";
  } else if (isRoku()) {
    return "roku";
  } else if (isSamsung()) {
    return "samsung";
  } else if (isAndroid()) {
    return "android";
  } else if (isAndroidTv()) {
    return "androidtv";
  } else if (isAppleTv()) {
    return "appletv";
  } else {
    return "unknown";
  }
}

/**
 * Get OS version for tizen
 * ex ua :Mozilla/5.0 (SMART-TV; Linux; Tizen 2.2) AppleWebkit/538.1 (KHTML, like Gecko) SamsungBrowser/1.0 TV Safari/538.1
 * @returns {String} the current browser os version
 */
function getTizenVersion() {
  var version = ua.match(/tizen\s(\d+.)+/);
  if (version) {
    return version[1];
  } else {
    return "unknown";
  }
}

/**
 * Get OS version for webos
 * ex us: Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36 WebAppManager
 * @returns {String} the current browser os version
 */
function getWebosVersion() {
  var versions = {
    "applewebkit/537.41": "1.0",
    "applewebkit/538.2": "2.0",
    "chrome/38": "3.0",
    "chrome/53": "4.0",
    "chrome/68": "5.0",
    "chrome/79": "6.0",
  };

  for (var key in versions) {
    if (ua.indexOf(key) !== -1) {
      return versions[key];
    }
  }
  return "unknown";
}

/**
 * Get OS version for hbbtv
 * ex ua: Opera/9.80 (Linux mips; HbbTV/1.2.1 (; Philips; ; ; ; ) CE-HTML/1.0 NETTV/4.2.0 PHILIPSTV/1.1.1 Firmware/171.56.0 (PhilipsTV, 1.1.1,) en)
 * @returns {String} the current browser os version
 */
function getHbbTvVersion() {
  var version = ua.match(/hbbtv\/(\d+.)+/);
  if (version) {
    return version[1];
  } else {
    return "unknown";
  }
}

module.exports = {
  isSmartTv: isSmartTv,

  isTizen: isTizen,
  isWebos: isWebos,
  isHisense: isHisense,
  isToshiba: isToshiba,
  isTornado: isTornado,
  isHbbTv: isHbbTv,
  isWebkit: isWebkit,
  isRoku: isRoku,
  isSamsung: isSamsung,
  isAndroidTv: isAndroidTv,
  isAppleTv: isAppleTv,

  getTVName: getTVName,
  getTizenVersion: getTizenVersion,
  getWebosVersion: getWebosVersion,
  getHbbTvVersion: getHbbTvVersion,
};
