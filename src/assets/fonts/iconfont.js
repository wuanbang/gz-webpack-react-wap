;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wxbzhuye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M965.963701 486.74685 526.971481 47.839565 89.258395 485.532185c-8.363482 8.383948-8.363482 21.966291 0 30.349215 8.42488 8.385994 21.98778 8.385994 30.349215 0l76.296687-76.252685L195.904297 877.321336c0 30.099529 24.460088 54.580083 54.559617 54.580083l559.219441 0c30.099529 0 54.580083-24.480554 54.580083-54.580083L864.263437 445.791066l71.351048 71.307046c4.15053 4.234441 9.641591 6.246261 15.174608 6.246261 5.449106 0 10.982122-2.012843 15.175631-6.246261C974.347648 508.756119 974.347648 495.131821 965.963701 486.74685M821.337789 877.321336c0 6.415107-5.240351 11.654434-11.655458 11.654434L250.463913 888.97577c-6.415107 0-11.632945-5.239328-11.632945-11.654434L238.830969 396.703067l288.140513-288.204981L821.337789 402.865417 821.337789 877.321336 821.337789 877.321336z"  ></path>' +
    '' +
    '<path d="M406.408615 455.833793c0 66.821895 54.328349 121.193223 121.193223 121.193223 66.862827 0 121.1922-54.371328 121.1922-121.193223 0-66.819848-54.329373-121.149221-121.1922-121.149221C460.736964 334.685595 406.408615 389.013945 406.408615 455.833793M527.600815 377.61022c43.134403 0 78.263481 35.130102 78.263481 78.223572 0 43.179428-35.129078 78.265528-78.263481 78.265528-43.136449 0-78.266551-35.087123-78.266551-78.265528C449.334263 412.740322 484.464365 377.61022 527.600815 377.61022"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wxbsousuotuiguang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M937.798221 769.855766 714.895525 546.869159c23.821545-45.681412 37.589107-97.495498 37.589107-152.564721 0-182.559872-148.560524-331.078441-331.079464-331.078441-182.623317 0-331.098907 148.517545-331.098907 331.078441 0 182.559872 148.47559 331.078441 331.098907 331.078441 60.575634 0 117.27089-16.647145 166.206416-45.221948L807.552831 900.100132c17.938558 17.939581 41.551348 26.867928 65.12423 26.867928s47.182602-8.928347 65.123206-26.867928c17.396205-17.396205 27.033703-40.550555 27.033703-65.164139C964.831924 810.321386 955.194426 787.16806 937.798221 769.855766M133.027248 394.304438c0-158.989037 129.34795-288.358477 288.378943-288.358477 158.948105 0 288.3595 129.36944 288.3595 288.358477 0 99.206466-50.437739 186.899714-126.950344 238.795665-1.044796 0.416486-1.876744 1.252527-2.877537 1.835811-45.515636 30.03813-99.999528 47.727001-158.530596 47.727001C262.375198 682.662915 133.027248 553.336454 133.027248 394.304438M907.594315 869.896226c-19.273972 19.191084-50.562583 19.191084-69.836555 0L623.6995 655.797034c26.157753-20.274766 49.186236-44.305065 68.292386-71.421656l215.601406 215.683271c9.344832 9.262968 14.518668 21.694091 14.518668 34.877345S916.939147 860.551394 907.594315 869.896226"  ></path>' +
    '' +
    '<path d="M215.169059 387.79007c0 0 42.156122-211.011878 234.186693-224.946238C449.355753 162.843832 185.944458 131.555222 215.169059 387.79007"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-all" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M895.56792 65.266546 612.944854 65.266546c-35.401859 0-64.202729 29.073224-64.202729 64.808869l0 311.097317 0 11.588334 0 24.573248 24.573248 0 11.588334 0 310.664214 0c35.42848 0 64.250852-29.074248 64.250852-64.809893l0-282.449006C959.818772 94.33977 930.995377 65.266546 895.56792 65.266546zM910.672277 412.524421c0 8.637497-6.776073 15.663398-15.104356 15.663398L597.88862 428.187819 597.88862 130.075416c0-8.636473 6.754571-15.662374 15.056234-15.662374l282.622042 0c8.328283 0 15.104356 7.025901 15.104356 15.662374L910.671253 412.524421z"  ></path>' +
    '' +
    '<path d="M65.468252 130.075416l0 282.449006c0 35.736669 28.822372 64.809893 64.250852 64.809893l310.664214 0 11.588334 0 24.573248 0 0-24.573248 0-11.588334 0-311.097317c0-35.735646-28.80087-64.808869-64.202729-64.808869L129.719103 65.266546C94.291647 65.266546 65.468252 94.33977 65.468252 130.075416zM114.614747 130.075416c0-8.636473 6.776073-15.662374 15.104356-15.662374L412.34217 114.413042c8.301662 0 15.056234 7.025901 15.056234 15.662374l0 298.112403L129.719103 428.187819c-8.328283 0-15.104356-7.026925-15.104356-15.663398L114.614747 130.075416z"  ></path>' +
    '' +
    '<path d="M959.818772 894.775433l0-282.449006c0-35.736669-28.822372-64.809893-64.250852-64.809893L548.742125 547.516534l0 24.573248 0 11.588334 0 311.097317c0 35.735646 28.80087 64.808869 64.202729 64.808869l282.622042 0C930.995377 959.585326 959.818772 930.512103 959.818772 894.775433zM910.672277 894.775433c0 8.636473-6.776073 15.662374-15.104356 15.662374L612.944854 910.437807c-8.301662 0-15.056234-7.025901-15.056234-15.662374L597.88862 596.66303l297.678276 0c8.328283 0 15.104356 7.026925 15.104356 15.663398L910.671253 894.775433z"  ></path>' +
    '' +
    '<path d="M129.719103 959.585326 412.34217 959.585326c35.401859 0 64.202729-29.073224 64.202729-64.808869L476.544899 547.516534 129.719103 547.516534c-35.42848 0-64.250852 29.074248-64.250852 64.809893l0 282.449006C65.468252 930.512103 94.291647 959.585326 129.719103 959.585326zM114.614747 612.326427c0-8.637497 6.776073-15.663398 15.104356-15.663398l297.678276 0 0 298.112403c0 8.636473-6.754571 15.662374-15.056234 15.662374L129.719103 910.437807c-8.328283 0-15.104356-7.025901-15.104356-15.662374L114.614747 612.326427z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-account" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M944.02227 920.429904C886.277185 761.905835 771.601005 646.734094 635.487737 602.525797c27.283472-13.498904 52.477195-31.503928 74.632025-53.658758 53.344425-53.344425 82.721743-124.267938 82.721743-199.707809 0-75.439871-29.377318-146.364407-82.721743-199.707809s-124.268962-82.721743-199.708833-82.721743-146.364407 29.377318-199.707809 82.721743S227.981378 273.719359 227.981378 349.158206c0 75.439871 29.377318 146.364407 82.721743 199.707809 22.186571 22.186571 47.422273 40.211048 74.75182 53.71712-136.034428 44.252324-250.634841 159.392324-308.354328 317.846769-2.745037 7.533748-1.640264 15.933703 2.958005 22.502952 4.598269 6.568224 12.112563 10.48049 20.131633 10.48049l820.743405 0c8.018046 0 15.53234-3.912266 20.130609-10.48049C945.662534 936.363607 946.766282 927.964676 944.02227 920.429904zM277.127874 349.158206c0-62.311613 24.266082-120.89526 68.326939-164.956117 44.060857-44.061881 102.644504-68.326939 164.956117-68.326939s120.89526 24.266082 164.956117 68.326939c44.061881 44.060857 68.326939 102.644504 68.326939 164.956117 0 62.312637-24.265058 120.89526-68.326939 164.956117-44.060857 44.061881-102.64348 68.326939-164.956117 68.326939-62.311613 0-120.89526-24.265058-164.956117-68.326939C301.393956 470.053466 277.127874 411.470843 277.127874 349.158206zM136.475723 904.26685c33.140096-75.787992 81.511511-140.31734 141.237813-188.041659 69.148095-55.252948 149.665413-84.457229 232.847905-84.457229 83.181468 0 163.698786 29.204281 232.846881 84.457229 59.727327 47.724319 108.098741 112.254691 141.238837 188.041659L136.475723 904.26685z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)