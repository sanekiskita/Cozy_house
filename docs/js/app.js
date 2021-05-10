const friends = new Map([
  [
    "jennifer",
    {
      name: "Jennifer",
      info: "Dog - Labrador",
      text:
        "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
    },
  ],
  [
    "sophia",
    {
      name: "Sophia",
      info: "Dog - Shih tzu",
      text:
        "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    },
  ],
  [
    "woody",
    {
      name: "Woody",
      info: "Dog - Golden Retriever",
      text:
        "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    },
  ],
  [
    "scarlett",
    {
      name: "Scarlett",
      info: "Dog - Jack Russell Terrier",
      text:
        "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    },
  ],
  [
    "katrine",
    {
      name: "Katrine",
      info: "Cat - British Shorthair",
      text:
        "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    },
  ],
  [
    "timmy",
    {
      name: "Timmy",
      info: "Cat - British Shorthair",
      text:
        "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    },
  ],
  [
    "freddie",
    {
      name: "Freddie",
      info: "Cat - British Shorthairr",
      text:
        "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    },
  ],
  [
    "charly",
    {
      name: "Charly",
      info: "Dog - Jack Russell Terrier ",
      text:
        "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    },
  ],
]);
;
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector("html").classList.add("ie");
}
if (isMobile.any()) {
  document.querySelector("html").classList.add("_touch");
}

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support === true) {
    document.querySelector("html").classList.add("_webp");
  } else {
    document.querySelector("html").classList.add("_no-webp");
  }
});

function ibg() {
  if (isIE()) {
    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (
        ibg[i].querySelector("img") &&
        ibg[i].querySelector("img").getAttribute("src") != null
      ) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
}
ibg();

window.addEventListener("load", function () {
  if (document.querySelector(".wrapper")) {
    setTimeout(function () {
      document.querySelector(".wrapper").classList.remove("_load");
      document.querySelector(".wrapper").classList.add("_loaded");
    }, 0);
  }
});

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
  const hsh = location.hash.replace("#", "");
  if (document.querySelector(".popup_" + hsh)) {
    popup_open(hsh);
  } else if (document.querySelector("div." + hsh)) {
    _goto(document.querySelector("." + hsh), 500, "");
  }
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
  let delay = 500;
  let menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    if (unlock) {
      body_lock(delay);
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    }
  });
}
function menu_close() {
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
  let body = document.querySelector("body");
  if (body.classList.contains("_lock")) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}
function body_lock_remove(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = "0px";
      }
      body.style.paddingRight = "0px";
      body.classList.remove("_lock");
    }, delay);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
function body_lock_add(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    let lock_padding = document.querySelectorAll("._lp");
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight =
        window.innerWidth -
        document.querySelector(".wrapper").offsetWidth +
        "px";
    }
    body.style.paddingRight =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    body.classList.add("_lock");

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}

//=================
//Popups
let popup_link = document.querySelectorAll("._popup-link");
let popups = document.querySelectorAll(".popup");
for (let index = 0; index < popup_link.length; index++) {
  const el = popup_link[index];
  el.addEventListener("click", function (e) {
    if (unlock) {
      let item = el.getAttribute("href").replace("#", "");
      let video = el.getAttribute("data-video");
      let name = el.dataset.name;
      popup_open(item, video, name);
    }
    e.preventDefault();
  });
}
for (let index = 0; index < popups.length; index++) {
  const popup = popups[index];
  popup.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__body")) {
      popup_close(e.target.closest(".popup"));
    }
  });
}
function popup_open(item, video = "", name = "") {
  let activePopup = document.querySelectorAll(".popup._active");
  if (activePopup.length > 0) {
    popup_close("", false);
  }

  let curent_popup = document.querySelector(".popup_" + item);
  if (curent_popup && unlock) {
    if (video != "" && video != null) {
      let popup_video = document.querySelector(".popup_video");
      popup_video.querySelector(".popup__video").innerHTML =
        '<iframe src="https://www.youtube.com/embed/' +
        video +
        '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }
    if (!document.querySelector(".menu__body._active")) {
      body_lock_add(500);
    }
    curent_popup.classList.add("_active");
    if (item == "friends" && !!name) {
      const nullor = (str) => {
        return !!str ? str : "null";
      };
      const addinfo = (str, str2) => {
        return `<strong>${str}: </strong>${str2}`;
      };
      let obj = friends.get(name);
      curent_popup.querySelector(".popup__title").textContent = nullor(
        obj.name
      );
      curent_popup.querySelector(".popup__category").textContent = nullor(
        obj.info
      );
      curent_popup.querySelector(".popup__text").textContent = nullor(obj.text);
      curent_popup.querySelector(".popup__age").innerHTML = addinfo(
        "Age",
        nullor(obj.age)
      );
      curent_popup.querySelector(".popup__inoculations").innerHTML = addinfo(
        "Inoculations",
        nullor(obj.inoculations)
      );
      curent_popup.querySelector(".popup__diseases").innerHTML = addinfo(
        "Diseases",
        nullor(obj.diseases)
      );
      curent_popup.querySelector(".popup__parasites").innerHTML = addinfo(
        "Parasites",
        nullor(obj.parasites)
      );
      curent_popup
        .querySelector(".popup__img img")
        .setAttribute("src", `./img/img_pets/${name}.svg`);
      curent_popup
        .querySelector(".popup__img source")
        .setAttribute("srcset", `./img/img_pets/${name}.svg`);
    }
    history.pushState("", "", "#" + item);
  }
}
function popup_close(item, bodyUnlock = true) {
  if (unlock) {
    if (!item) {
      for (let index = 0; index < popups.length; index++) {
        const popup = popups[index];
        let video = popup.querySelector(".popup__video");
        if (video) {
          video.innerHTML = "";
        }
        popup.classList.remove("_active");
      }
    } else {
      let video = item.querySelector(".popup__video");
      if (video) {
        video.innerHTML = "";
      }
      item.classList.remove("_active");
    }
    if (!document.querySelector(".menu__body._active") && bodyUnlock) {
      body_lock_remove(500);
    }
    history.pushState("", "", window.location.href.split("#")[0]);
  }
}
let popup_close_icon = document.querySelectorAll(".popup__close,._popup-close");
if (popup_close_icon) {
  for (let index = 0; index < popup_close_icon.length; index++) {
    const el = popup_close_icon[index];
    el.addEventListener("click", function () {
      popup_close(el.closest(".popup"));
    });
  }
}
document.addEventListener("keydown", function (e) {
  if (e.code === "Escape") {
    popup_close();
  }
});
;
let scr_body = document.querySelector("body");
let scr_blocks = document.querySelectorAll("._scr-sector");
let scr_items = document.querySelectorAll("._scr-item");
let scr_fix_block = document.querySelectorAll("._side-wrapper");
let scr_min_height = 750;

let scrolling = true;
let scrolling_full = true;

let scrollDirection = 0;

let currentScroll;

//ScrollOnScroll
window.addEventListener("scroll", scroll_scroll);
function scroll_scroll() {
  let src_value = (currentScroll = pageYOffset);
  let header = document.querySelector("header.header");
  if (header !== null) {
    if (src_value > 10) {
      header.classList.add("_scroll");
    } else {
      header.classList.remove("_scroll");
    }
  }
  if (scr_blocks.length > 0) {
    for (let index = 0; index < scr_blocks.length; index++) {
      let block = scr_blocks[index];
      let block_offset = offset(block).top;
      let block_height = block.offsetHeight;

      /*
			if ((src_value > block_offset - block_height) && src_value < (block_offset + block_height) && window.innerHeight > scr_min_height && window.innerWidth > 992) {
				let scrProcent = (src_value - block_offset) / block_height * 100;
				scrParallax(block, scrProcent, block_height);
			}
			*/

      if (
        pageYOffset > block_offset - window.innerHeight / 1.5 &&
        pageYOffset < block_offset + block_height - window.innerHeight / 5
      ) {
        block.classList.add("_scr-sector_active");
      } else {
        if (block.classList.contains("_scr-sector_active")) {
          block.classList.remove("_scr-sector_active");
        }
      }
      if (
        pageYOffset > block_offset - window.innerHeight / 2 &&
        pageYOffset < block_offset + block_height - window.innerHeight / 5
      ) {
        if (!block.classList.contains("_scr-sector_current")) {
          block.classList.add("_scr-sector_current");
        }
      } else {
        if (block.classList.contains("_scr-sector_current")) {
          block.classList.remove("_scr-sector_current");
        }
      }
    }
  }
  if (scr_items.length > 0) {
    for (let index = 0; index < scr_items.length; index++) {
      let scr_item = scr_items[index];
      let scr_item_offset = offset(scr_item).top;
      let scr_item_height = scr_item.offsetHeight;

      let scr_item_point =
        window.innerHeight - (window.innerHeight - scr_item_height / 3);
      if (window.innerHeight > scr_item_height) {
        scr_item_point = window.innerHeight - scr_item_height / 3;
      }

      if (
        src_value > scr_item_offset - scr_item_point &&
        src_value < scr_item_offset + scr_item_height
      ) {
        scr_item.classList.add("_active");
        scroll_load_item(scr_item);
      } else {
        scr_item.classList.remove("_active");
      }
      if (src_value > scr_item_offset - window.innerHeight) {
        if (scr_item.querySelectorAll("._lazy").length > 0) {
          scroll_lazy(scr_item);
        }
      }
    }
  }
  if (scr_fix_block.length > 0) {
    fix_block(scr_fix_block, src_value);
  }
  let custom_scroll_line = document.querySelector("._custom-scroll__line");
  if (custom_scroll_line) {
    let window_height = window.innerHeight;
    let content_height = document.querySelector(".wrapper").offsetHeight;
    let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
    let custom_scroll_line_height = custom_scroll_line.offsetHeight;
    custom_scroll_line.style.transform =
      "translateY(" +
      ((window_height - custom_scroll_line_height) / 100) * scr_procent +
      "px)";
  }
  if (src_value > scrollDirection) {
    // downscroll code
  } else {
    // upscroll code
  }
  scrollDirection = src_value <= 0 ? 0 : src_value;
}
setTimeout(function () {
  //document.addEventListener("DOMContentLoaded", scroll_scroll);
  scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
  let lazy_src = scr_item.querySelectorAll("*[data-src]");
  if (lazy_src.length > 0) {
    for (let index = 0; index < lazy_src.length; index++) {
      const el = lazy_src[index];
      if (!el.classList.contains("_loaded")) {
        el.setAttribute("src", el.getAttribute("data-src"));
        el.classList.add("_loaded");
      }
    }
  }
  let lazy_srcset = scr_item.querySelectorAll("*[data-srcset]");
  if (lazy_srcset.length > 0) {
    for (let index = 0; index < lazy_srcset.length; index++) {
      const el = lazy_srcset[index];
      if (!el.classList.contains("_loaded")) {
        el.setAttribute("srcset", el.getAttribute("data-srcset"));
        el.classList.add("_loaded");
      }
    }
  }
}
function scroll_load_item(scr_item) {
  if (
    scr_item.classList.contains("_load-map") &&
    !scr_item.classList.contains("_loaded-map")
  ) {
    let map_item = document.getElementById("map");
    if (map_item) {
      scr_item.classList.add("_loaded-map");
      map();
    }
  }
}
function scrParallax(block, scrProcent, blockHeight) {
  let prlxItems = block.querySelectorAll("._prlx-item");
  if (prlxItems.length > 0) {
    for (let index = 0; index < prlxItems.length; index++) {
      const prlxItem = prlxItems[index];
      let prlxItemAttr = prlxItem.dataset.prlx ? prlxItem.dataset.prlx : 3;
      const prlxItemValue =
        -1 * (((blockHeight / 100) * scrProcent) / prlxItemAttr);
      prlxItem.style.cssText = `transform: translateY(${prlxItemValue}px);`;
    }
  }
}
//FullScreenScroll
if (scr_blocks.length > 0 && !isMobile.any()) {
  disableScroll();
  window.addEventListener("wheel", full_scroll);

  let swiperScrolls = document.querySelectorAll("._swiper_scroll");

  if (swiperScrolls.length > 0) {
    for (let index = 0; index < swiperScrolls.length; index++) {
      const swiperScroll = swiperScrolls[index];
      swiperScroll.addEventListener("mouseenter", function (e) {
        window.removeEventListener("wheel", full_scroll);
      });
      swiperScroll.addEventListener("mouseleave", function (e) {
        window.addEventListener("wheel", full_scroll);
      });
    }
  }
}
function getPrevBlockPos(current_block_prev) {
  let viewport_height = window.innerHeight;
  let current_block_prev_height = current_block_prev.offsetHeight;
  let block_pos = offset(current_block_prev).top;

  if (current_block_prev_height >= viewport_height) {
    block_pos = block_pos + (current_block_prev_height - viewport_height);
  }
  return block_pos;
}
function full_scroll(e) {
  let viewport_height = window.innerHeight;
  if (viewport_height >= scr_min_height) {
    if (scrolling_full) {
      let current_block = document.querySelector(
        "._scr-sector._scr-sector_current"
      );
      let current_block_pos = offset(current_block).top;
      let current_block_height = current_block.offsetHeight;
      let current_block_next = current_block.nextElementSibling;
      let current_block_prev = current_block.previousElementSibling;
      if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
        if (current_block_height <= viewport_height) {
          if (current_block_prev) {
            full_scroll_to_sector(getPrevBlockPos(current_block_prev));
          }
        } else {
          enableScroll();
          if (currentScroll <= current_block_pos) {
            if (current_block_prev) {
              full_scroll_to_sector(getPrevBlockPos(current_block_prev));
            }
          }
        }
      } else if (
        e.keyCode == 38 ||
        e.keyCode == 33 ||
        e.deltaX < 0 ||
        e.deltaY > 0
      ) {
        if (current_block_height <= viewport_height) {
          if (current_block_next) {
            let block_pos = offset(current_block_next).top;
            full_scroll_to_sector(block_pos);
          }
        } else {
          enableScroll();
          if (current_block_next) {
            let block_pos = offset(current_block_next).top;
            if (currentScroll >= block_pos - viewport_height) {
              full_scroll_to_sector(block_pos);
            }
          }
        }
      }
    } else {
      disableScroll();
    }
  } else {
    enableScroll();
  }
}
function full_scroll_to_sector(pos) {
  disableScroll();
  scrolling_full = false;
  _goto(pos, 800);

  let scr_pause = 500;
  if (navigator.appVersion.indexOf("Mac") != -1) {
    scr_pause = 1000;
  }
  setTimeout(function () {
    scrolling_full = true;
  }, scr_pause);
}
function full_scroll_pagestart() {}
function full_scroll_pageend() {}

//ScrollOnClick (Navigation)
let link = document.querySelectorAll("._goto-block");
if (link) {
  let blocks = [];
  for (let index = 0; index < link.length; index++) {
    let el = link[index];
    let block_name = el.getAttribute("href").replace("#", "");
    if (block_name != "" && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }
    el.addEventListener("click", function (e) {
      let target_block_class = el.getAttribute("href").replace("#", "");
      let target_block = document.querySelector("." + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    });
  }

  window.addEventListener("scroll", function (el) {
    let old_current_link = document.querySelectorAll("._goto-block._active");
    if (old_current_link) {
      for (let index = 0; index < old_current_link.length; index++) {
        let el = old_current_link[index];
        el.classList.remove("_active");
      }
    }
    for (let index = 0; index < blocks.length; index++) {
      let block = blocks[index];
      let block_item = document.querySelector("." + block);
      if (block_item) {
        let block_offset = offset(block_item).top;
        let block_height = block_item.offsetHeight;
        if (
          pageYOffset > block_offset - window.innerHeight / 3 &&
          pageYOffset < block_offset + block_height - window.innerHeight / 3
        ) {
          let current_links = document.querySelectorAll(
            '._goto-block[href="#' + block + '"]'
          );
          for (let index = 0; index < current_links.length; index++) {
            let current_link = current_links[index];
            current_link.classList.add("_active");
          }
        }
      }
    }
  });
}
//ScrollOnClick (Simple)
let goto_links = document.querySelectorAll("._goto");
if (goto_links) {
  for (let index = 0; index < goto_links.length; index++) {
    let goto_link = goto_links[index];
    goto_link.addEventListener("click", function (e) {
      let target_block_class = goto_link.getAttribute("href").replace("#", "");
      let target_block = document.querySelector("." + target_block_class);
      _goto(target_block, 300);
      e.preventDefault();
    });
  }
}
function _goto(target_block, speed, offset = 0) {
  if (document.querySelector(".menu__body._active")) {
    menu_close();
    body_lock_remove(500);
  }
  let header = "";
  //OffsetHeader
  //if (window.innerWidth < 992) {
  //	header = 'header';
  //}
  let options = {
    speedAsDuration: true,
    speed: speed,
    header: header,
    offset: offset,
    easing: "easeOutQuad",
  };
  let scr = new SmoothScroll();
  scr.animateScroll(target_block, "", options);
}

//SameFunctions
function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}
function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  document.removeEventListener("wheel", preventDefault, { passive: false }); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}*/
}

function fix_block(scr_fix_block, scr_value) {
  let window_width = parseInt(window.innerWidth);
  let window_height = parseInt(window.innerHeight);
  let header_height =
    parseInt(document.querySelector("header").offsetHeight) + 15;
  for (let index = 0; index < scr_fix_block.length; index++) {
    const block = scr_fix_block[index];
    let block_width = block.getAttribute("data-width");
    const item = block.querySelector("._side-block");
    if (!block_width) {
      block_width = 0;
    }
    if (window_width > block_width) {
      if (item.offsetHeight < window_height - (header_height + 30)) {
        if (scr_value > offset(block).top - (header_height + 15)) {
          item.style.cssText =
            "position:fixed;bottom:auto;top:" +
            header_height +
            "px;width:" +
            block.offsetWidth +
            "px;left:" +
            offset(block).left +
            "px;";
        } else {
          gotoRelative(item);
        }
        if (
          scr_value >
          block.offsetHeight +
            offset(block).top -
            (item.offsetHeight + (header_height + 15))
        ) {
          block.style.cssText = "position:relative;";
          item.style.cssText =
            "position:absolute;bottom:0;top:auto;left:0px;width:100%";
        }
      } else {
        gotoRelative(item);
      }
    }
  }
  function gotoRelative(item) {
    item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
  }
}

if (!isMobile.any()) {
  //custom_scroll();
  /*
	window.addEventListener('wheel', scroll_animate, {
		capture: true,
		passive: true
	});
	window.addEventListener('resize', custom_scroll, {
		capture: true,
		passive: true
	});
	*/
}
function custom_scroll(event) {
  scr_body.style.overflow = "hidden";
  let window_height = window.innerHeight;
  let custom_scroll_line = document.querySelector("._custom-scroll__line");
  let custom_scroll_content_height = document.querySelector(".wrapper")
    .offsetHeight;
  let custom_cursor_height = Math.min(
    window_height,
    Math.round(window_height * (window_height / custom_scroll_content_height))
  );
  if (custom_scroll_content_height > window_height) {
    if (!custom_scroll_line) {
      let custom_scroll = document.createElement("div");
      custom_scroll_line = document.createElement("div");
      custom_scroll.setAttribute("class", "_custom-scroll");
      custom_scroll_line.setAttribute("class", "_custom-scroll__line");
      custom_scroll.appendChild(custom_scroll_line);
      scr_body.appendChild(custom_scroll);
    }
    custom_scroll_line.style.height = custom_cursor_height + "px";
  }
}

let new_pos = pageYOffset;
function scroll_animate(event) {
  let window_height = window.innerHeight;
  let content_height = document.querySelector(".wrapper").offsetHeight;
  let start_position = pageYOffset;
  let pos_add = 100;

  if (
    event.keyCode == 40 ||
    event.keyCode == 34 ||
    event.deltaX > 0 ||
    event.deltaY < 0
  ) {
    new_pos = new_pos - pos_add;
  } else if (
    event.keyCode == 38 ||
    event.keyCode == 33 ||
    event.deltaX < 0 ||
    event.deltaY > 0
  ) {
    new_pos = new_pos + pos_add;
  }
  if (new_pos > content_height - window_height)
    new_pos = content_height - window_height;
  if (new_pos < 0) new_pos = 0;

  if (scrolling) {
    scrolling = false;
    _goto(new_pos, 1000);

    let scr_pause = 100;
    if (navigator.appVersion.indexOf("Mac") != -1) {
      scr_pause = scr_pause * 2;
    }
    setTimeout(function () {
      scrolling = true;
      _goto(new_pos, 1000);
    }, scr_pause);
  }
  //If native scroll
  //disableScroll();
}
;
