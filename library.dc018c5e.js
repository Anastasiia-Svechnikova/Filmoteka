!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var r=i("8WtWA"),s=i("f9aXX"),a=i("3JHuO"),c=i("dnnWp"),o=i("Zuc0h"),l=i("8Uxjr");o=i("Zuc0h"),l=i("8Uxjr"),r=i("8WtWA");var d=i("5ZBda"),f=i("9cZxh"),u=i("fEg2c");(0,s.onTopArrow)(),(0,a.onSwitch)(),(0,c.onSmoothScroll)(),r.refs.libraryControls.addEventListener("click",(function(e){"BUTTON"===e.target.nodeName&&(e.target.classList.contains("js-btn-watched")&&(r.refs.libWatchedBtn.classList.add("btn-js-active"),r.refs.libQeueBtn.classList.remove("btn-js-active"),(0,l.renderFilms)(o.apiService.fetchWatched(),!0)),e.target.classList.contains("js-btn-qeue")&&(r.refs.libQeueBtn.classList.add("btn-js-active"),r.refs.libWatchedBtn.classList.remove("btn-js-active"),(0,l.renderFilms)(o.apiService.fetchQeue(),!0)))})),r.refs.contentList.addEventListener("click",d.onGetInfoClick),r.refs.paginationControls.addEventListener("click",f.onPaginationClick,!0),(0,l.renderFilms)(o.apiService.fetchWatched(),!0),(0,u.toggleBackdrop)()}();
//# sourceMappingURL=library.dc018c5e.js.map
