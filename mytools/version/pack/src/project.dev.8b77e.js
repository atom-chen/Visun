window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AppNode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b3de0+q/BMgLheH75bo/Mf", "AppNode");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("./EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AppNode = function(_super) {
      __extends(AppNode, _super);
      function AppNode() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AppNode.prototype.onLoad = function() {
        cc.game.addPersistRootNode(this.node);
        cc.game.on(cc.game.EVENT_HIDE, function() {
          console.log("\u6e38\u620f\u8fdb\u5165\u540e\u53f0");
          EventCenter_1.default.instance().fire(cc.game.EVENT_HIDE);
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          console.log("\u6e38\u620f\u8fdb\u5165\u524d\u53f0");
          EventCenter_1.default.instance().fire(cc.game.EVENT_SHOW);
        });
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      };
      AppNode.prototype.onKeyDown = function(event) {
        if (event.keyCode === cc.macro.KEY.back || event.keyCode === cc.macro.KEY.escape) {
          cc.log("\u8fd4\u56de\u952e");
          EventCenter_1.default.instance().fire("keyboard_esc");
        }
      };
      AppNode = __decorate([ ccclass ], AppNode);
      return AppNode;
    }(cc.Component);
    exports.default = AppNode;
    cc._RF.pop();
  }, {
    "./EventCenter": "EventCenter"
  } ],
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26ebcZGH3hNiZzXAoscMS1M", "AudioManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager = function() {
      function AudioManager() {}
      return AudioManager;
    }();
    exports.default = AudioManager;
    cc._RF.pop();
  }, {} ],
  BaseComp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2615036ZhRMTZlVUF/BURLp", "BaseComp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("../EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseComp = function(_super) {
      __extends(BaseComp, _super);
      function BaseComp() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BaseComp.prototype.onDestroy = function() {
        EventCenter_1.default.instance().removeByTarget(this);
      };
      BaseComp = __decorate([ ccclass ], BaseComp);
      return BaseComp;
    }(cc.Component);
    exports.default = BaseComp;
    cc._RF.pop();
  }, {
    "../EventCenter": "EventCenter"
  } ],
  BaseWindow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb1b5Y0QTxI9bQq/qKTkPXD", "BaseWindow");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseWindow = function(_super) {
      __extends(BaseWindow, _super);
      function BaseWindow() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BaseWindow = __decorate([ ccclass ], BaseWindow);
      return BaseWindow;
    }(BaseComp_1.default);
    exports.default = BaseWindow;
    cc._RF.pop();
  }, {
    "../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  BuyuUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f893E9K6ZIjay1ZMX0WcOO", "BuyuUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BuyuUI = function(_super) {
      __extends(BuyuUI, _super);
      function BuyuUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BuyuUI = __decorate([ ccclass ], BuyuUI);
      return BuyuUI;
    }(BaseComp_1.default);
    exports.default = BuyuUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  Caller: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24973PfJIlN4LfLbOnCSKlM", "Caller");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Caller = function() {
      function Caller(fn, target) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
        this._fn = fn;
        this._target = target;
        this._args = args;
      }
      Caller.prototype.call = function(part) {
        void 0 === part && (part = null);
        part ? this._fn.apply(this._target, [ part ].concat(this._args)) : this._fn.apply(this._target, this._args);
        this._autoClean && this.clear();
      };
      Caller.prototype.clear = function() {
        this._fn = null;
        this._target = null;
        if (this._args) {
          this._args.splice(0, this._args.length);
          this._args.length = 0;
        }
        this._args = null;
      };
      Caller.prototype.setAutoClean = function(bFlag) {
        this._autoClean = bFlag;
      };
      return Caller;
    }();
    exports.default = Caller;
    cc._RF.pop();
  }, {} ],
  ChipBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b197crS4mVAAo0t7AyW1DZx", "ChipBox");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../script/launcher/view/BaseComp");
    var CommonUtils_1 = require("../../../script/kernel/utils/CommonUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ChipBox = function(_super) {
      __extends(ChipBox, _super);
      function ChipBox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chip1 = null;
        _this.chip2 = null;
        _this.chip3 = null;
        _this.chip4 = null;
        _this.chip5 = null;
        _this.hilightSpr = null;
        _this.selectedIndex = 1;
        return _this;
      }
      ChipBox.prototype.onLoad = function() {
        this["chip1"].node.on("click", function() {
          this.onSelect(1);
        }, this);
        this["chip2"].node.on("click", function() {
          this.onSelect(2);
        }, this);
        this["chip3"].node.on("click", function() {
          this.onSelect(3);
        }, this);
        this["chip4"].node.on("click", function() {
          this.onSelect(4);
        }, this);
        this["chip5"].node.on("click", function() {
          this.onSelect(5);
        }, this);
      };
      ChipBox.prototype.onSelect = function(idx) {
        this.selectedIndex = idx;
        this.hilightSpr.node.parent = this["chip" + idx].node;
      };
      ChipBox.prototype.getButton = function(idx) {
        return this["chip" + idx].node;
      };
      ChipBox.prototype.getSelectedIndex = function() {
        return this.selectedIndex;
      };
      ChipBox.prototype.setChipValues = function(values) {
        var self = this;
        cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, function(err, atlas) {
          if (err) {
            cc.log("error: " + err);
            return;
          }
          for (var i = 1; i <= 5; i++) {
            var name = CommonUtils_1.default.getFrameName("common/imgs/chip/chip_" + values[i - 1]);
            self["chip" + i].normalSprite = atlas.getSpriteFrame(name);
            self["chip" + i].hoverSprite = atlas.getSpriteFrame(name);
            self["chip" + i].pressedSprite = atlas.getSpriteFrame(name);
            self["chip" + i].disabledSprite = atlas.getSpriteFrame(name);
          }
        });
      };
      __decorate([ property(cc.Button) ], ChipBox.prototype, "chip1", void 0);
      __decorate([ property(cc.Button) ], ChipBox.prototype, "chip2", void 0);
      __decorate([ property(cc.Button) ], ChipBox.prototype, "chip3", void 0);
      __decorate([ property(cc.Button) ], ChipBox.prototype, "chip4", void 0);
      __decorate([ property(cc.Button) ], ChipBox.prototype, "chip5", void 0);
      __decorate([ property(cc.Sprite) ], ChipBox.prototype, "hilightSpr", void 0);
      ChipBox = __decorate([ ccclass ], ChipBox);
      return ChipBox;
    }(BaseComp_1.default);
    exports.default = ChipBox;
    cc._RF.pop();
  }, {
    "../../../script/kernel/utils/CommonUtils": "CommonUtils",
    "../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  CommonUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "603aaSjQSlEvKGgHNwotJ9Z", "CommonUtils");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CommonUtils = function() {
      function CommonUtils() {}
      CommonUtils_1 = CommonUtils;
      CommonUtils.traverseNodes = function(root, tbl) {
        if (!root || !root.children) return;
        var childlist = root.children;
        for (var i = 0; i < childlist.length; i++) {
          tbl[childlist[i].getName()] = childlist[i];
          CommonUtils_1.traverseNodes(childlist[i], tbl);
        }
      };
      CommonUtils.setModal = function(obj, closeWhenClickMask) {
        if (!obj || !cc.isValid(obj)) return;
        var frame = cc.find("frame", obj);
        if (frame) {
          frame.on("touchstart", function(event) {
            event.stopPropagation();
          });
          frame.on("touchend", function(event) {
            event.stopPropagation();
          });
        }
        obj.on("touchstart", function(event) {
          event.stopPropagation();
        });
        obj.on("touchend", function(event) {
          event.stopPropagation();
          closeWhenClickMask && obj.destroy();
        });
      };
      CommonUtils.convertSpace = function(srcObj, dstObj, x, y) {
        void 0 === x && (x = 0);
        void 0 === y && (y = 0);
        var pt = srcObj.convertToWorldSpace(cc.v2(x, y));
        return dstObj.convertToNodeSpace(pt);
      };
      CommonUtils.convertSpaceAR = function(srcObj, dstObj, x, y) {
        void 0 === x && (x = 0);
        void 0 === y && (y = 0);
        var pt = srcObj.convertToWorldSpaceAR(cc.v2(x, y));
        return dstObj.convertToNodeSpace(pt);
      };
      CommonUtils.getFrameName = function(name) {
        return name.replace(/\//g, "-");
      };
      CommonUtils.isNil = function(obj) {
        return void 0 === obj || null === obj;
      };
      CommonUtils.getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      };
      CommonUtils.shuffle = function(array) {
        for (var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], 
        array[i] = array[j], array[j] = x) ;
      };
      CommonUtils.utf8ArrayToString = function(array) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = array.length;
        i = 0;
        while (i < len) {
          c = array[i++];
          switch (c >> 4) {
           case 0:
           case 1:
           case 2:
           case 3:
           case 4:
           case 5:
           case 6:
           case 7:
            out += String.fromCharCode(c);
            break;

           case 12:
           case 13:
            char2 = array[i++];
            out += String.fromCharCode((31 & c) << 6 | 63 & char2);
            break;

           case 14:
            char2 = array[i++];
            char3 = array[i++];
            out += String.fromCharCode((15 & c) << 12 | (63 & char2) << 6 | (63 & char3) << 0);
          }
        }
        return out;
      };
      CommonUtils.stringToUTF8Bytes = function(str) {
        var utf8 = [];
        for (var i = 0; i < str.length; i++) {
          var charcode = str.charCodeAt(i);
          if (charcode < 128) utf8.push(charcode); else if (charcode < 2048) utf8.push(192 | charcode >> 6, 128 | 63 & charcode); else if (charcode < 55296 || charcode >= 57344) utf8.push(224 | charcode >> 12, 128 | charcode >> 6 & 63, 128 | 63 & charcode); else {
            i++;
            charcode = 65536 + ((1023 & charcode) << 10 | 1023 & str.charCodeAt(i));
            utf8.push(240 | charcode >> 18, 128 | charcode >> 12 & 63, 128 | charcode >> 6 & 63, 128 | 63 & charcode);
          }
        }
        return utf8;
      };
      var CommonUtils_1;
      CommonUtils = CommonUtils_1 = __decorate([ ccclass ], CommonUtils);
      return CommonUtils;
    }();
    exports.default = CommonUtils;
    cc._RF.pop();
  }, {} ],
  ConfirmDlg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "838ddISPM9Os45Y4npJRnRn", "ConfirmDlg");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("./BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ConfirmDlg = function(_super) {
      __extends(ConfirmDlg, _super);
      function ConfirmDlg() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelContent = null;
        _this.labelTitle = null;
        _this.btn_ok = null;
        _this.btn_no = null;
        _this._callback = null;
        return _this;
      }
      ConfirmDlg.prototype.onLoad = function() {
        var self = this;
        this.btn_ok.node.on("click", function() {
          self._callback(1);
          self.node.destroy();
        });
        this.btn_no.node.on("click", function() {
          self._callback(0);
          self.node.destroy();
        });
      };
      ConfirmDlg.prototype.reflesh = function(callback, content, title, okTxt, cancelTxt) {
        void 0 === title && (title = null);
        void 0 === okTxt && (okTxt = null);
        void 0 === cancelTxt && (cancelTxt = null);
        this._callback = callback;
        this.labelContent.string = content;
        title && (this.labelTitle.string = title);
      };
      __decorate([ property(cc.Label) ], ConfirmDlg.prototype, "labelContent", void 0);
      __decorate([ property(cc.Label) ], ConfirmDlg.prototype, "labelTitle", void 0);
      __decorate([ property(cc.Button) ], ConfirmDlg.prototype, "btn_ok", void 0);
      __decorate([ property(cc.Button) ], ConfirmDlg.prototype, "btn_no", void 0);
      ConfirmDlg = __decorate([ ccclass ], ConfirmDlg);
      return ConfirmDlg;
    }(BaseComp_1.default);
    exports.default = ConfirmDlg;
    cc._RF.pop();
  }, {
    "./BaseComp": "BaseComp"
  } ],
  Consts: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "64139etd3FB1qVma2ewn/fh", "Consts");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CLIENT_VERSION = "9.9.9";
    exports.MAIN_URL = "http://njzuanshui.com";
    exports.WS_URL = "ws://hdyshiye.com:9999/client/";
    var LAYER;
    (function(LAYER) {
      LAYER[LAYER["Panel"] = 0] = "Panel";
      LAYER[LAYER["Popup"] = 1] = "Popup";
      LAYER[LAYER["Dialog"] = 2] = "Dialog";
      LAYER[LAYER["Tips"] = 3] = "Tips";
      LAYER[LAYER["Loading"] = 4] = "Loading";
    })(LAYER = exports.LAYER || (exports.LAYER = {}));
    var HOT_STATE;
    (function(HOT_STATE) {
      HOT_STATE[HOT_STATE["READY"] = 0] = "READY";
      HOT_STATE[HOT_STATE["UPENGINE"] = 1] = "UPENGINE";
      HOT_STATE[HOT_STATE["CHECKING"] = 2] = "CHECKING";
      HOT_STATE[HOT_STATE["UPDATING"] = 3] = "UPDATING";
      HOT_STATE[HOT_STATE["DOWNOVER"] = 4] = "DOWNOVER";
      HOT_STATE[HOT_STATE["UNZIPING"] = 5] = "UNZIPING";
      HOT_STATE[HOT_STATE["SUCCESS"] = 6] = "SUCCESS";
      HOT_STATE[HOT_STATE["FAIL"] = 7] = "FAIL";
      HOT_STATE[HOT_STATE["LOADINGRES"] = 8] = "LOADINGRES";
    })(HOT_STATE = exports.HOT_STATE || (exports.HOT_STATE = {}));
    cc._RF.pop();
  }, {} ],
  DataProcessor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b065JX0BpJ2rnZbjX/MFiT", "DataProcessor");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  DezhouUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3960eNeNCZNqLP6V9NM5cbA", "DezhouUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DezhouUI = function(_super) {
      __extends(DezhouUI, _super);
      function DezhouUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      DezhouUI = __decorate([ ccclass ], DezhouUI);
      return DezhouUI;
    }(BaseComp_1.default);
    exports.default = DezhouUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  Dian21UI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70ca5Wl2mdCf6UKirccDHqN", "Dian21UI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Dian21UI = function(_super) {
      __extends(Dian21UI, _super);
      function Dian21UI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Dian21UI = __decorate([ ccclass ], Dian21UI);
      return Dian21UI;
    }(BaseComp_1.default);
    exports.default = Dian21UI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  EmailUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5e19JF+5hCnrYafbEj736b", "EmailUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EmailUI = function(_super) {
      __extends(EmailUI, _super);
      function EmailUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EmailUI = __decorate([ ccclass ], EmailUI);
      return EmailUI;
    }(BaseComp_1.default);
    exports.default = EmailUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  ErbaUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa7d6JXlcxGsbnl7sPcrpSQ", "ErbaUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ErbaUI = function(_super) {
      __extends(ErbaUI, _super);
      function ErbaUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ErbaUI = __decorate([ ccclass ], ErbaUI);
      return ErbaUI;
    }(BaseComp_1.default);
    exports.default = ErbaUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  EventCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85690GfDrdLarM8sIPjn7H9", "EventCenter");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EventCenter = function() {
      function EventCenter() {
        this._events = {};
      }
      EventCenter_1 = EventCenter;
      EventCenter.instance = function() {
        if (EventCenter_1._singleton) return EventCenter_1._singleton;
        EventCenter_1._singleton = new EventCenter_1();
        return EventCenter_1._singleton;
      };
      EventCenter.prototype.listen = function(evtName, cbFunc, thisObj, bCall) {
        void 0 === bCall && (bCall = false);
        if (!evtName || !cbFunc) {
          cc.log("listen error! event name or callback is null!");
          return;
        }
        var evtList = this._events[evtName];
        if (!evtList) {
          evtList = [];
          this._events[evtName] = evtList;
        }
        var listener = {
          callBack: cbFunc,
          target: thisObj
        };
        evtList.push(listener);
        bCall && cbFunc.call(thisObj);
      };
      EventCenter.prototype.remove = function(evtName, cbFunc) {
        var evtList = this._events[evtName];
        if (!evtList) return;
        var len = evtList.length;
        for (var i = len - 1; i >= 0; i--) {
          var listener = evtList[i];
          listener.callBack === cbFunc && evtList.splice(i, 1);
        }
      };
      EventCenter.prototype.removeByTarget = function(thisObj) {
        for (var evtName in this._events) {
          var evtList = this._events[evtName];
          var len = evtList.length;
          for (var i = len - 1; i >= 0; i--) {
            var listener = evtList[i];
            if (listener.target === thisObj) {
              cc.log("remove by target: ");
              evtList.splice(i, 1);
            }
          }
        }
      };
      EventCenter.prototype.fire = function() {
        var arglist = [];
        for (var _i = 0; _i < arguments.length; _i++) arglist[_i] = arguments[_i];
        var evtName = arguments[0];
        var evtList = this._events[evtName];
        if (!evtList) return;
        var ars = [];
        for (var i = 1; i < arguments.length; i++) ars.push(arguments[i]);
        if (ars.length < 1) for (var i = 0, len = evtList.length; i < len; i++) {
          var listener = evtList[i];
          listener.callBack.call(listener.target);
        } else for (var i = 0, len = evtList.length; i < len; i++) {
          var listener = evtList[i];
          listener.callBack.apply(listener.target, ars);
        }
      };
      var EventCenter_1;
      EventCenter._singleton = null;
      EventCenter = EventCenter_1 = __decorate([ ccclass ], EventCenter);
      return EventCenter;
    }();
    exports.default = EventCenter;
    cc._RF.pop();
  }, {} ],
  EventDef: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "881ceJQtX9MLa5Dogm2DDtY", "EventDef");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventDef = {
      REGIST_SUCC: "REGIST_SUCC",
      REGIST_FAIL: "REGIST_FAIL",
      LOGIN_SUSS: "LOGIN_SUSS",
      LOGIN_FAIL: "LOGIN_FAIL"
    };
    exports.default = EventDef;
    cc._RF.pop();
  }, {} ],
  FaceUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5fbf0vvVyxBs5sIocopLadY", "FaceUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FaceUI = function(_super) {
      __extends(FaceUI, _super);
      function FaceUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FaceUI = __decorate([ ccclass ], FaceUI);
      return FaceUI;
    }(BaseComp_1.default);
    exports.default = FaceUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  GameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40655yQGoRE6KQBC/kFfJt4", "GameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConfig = {
      40070012: {
        id: "40070012",
        name: "\u70b8\u91d1\u82b1",
        game_type: 1
      },
      40070002: {
        id: "40070002",
        name: "\u62a2\u5e84\u725b\u725b",
        game_type: 1
      },
      90000040: {
        id: "90000040",
        name: "\u767e\u4eba\u725b\u725b",
        game_type: 2
      },
      80000041: {
        id: "80000041",
        name: "\u767e\u5bb6\u4e50",
        game_type: 2
      },
      40000040: {
        id: "40000040",
        name: "\u6597\u5730\u4e3b",
        game_type: 1
      },
      90001040: {
        id: "90001040",
        name: "\u9f99\u864e\u5927\u6218",
        game_type: 2
      },
      80000030: {
        id: "80000030",
        name: "\u62a2\u7ea2\u5305",
        game_type: 2
      },
      80000040: {
        id: "80000040",
        name: "\u7ea2\u9ed1\u5927\u6218",
        game_type: 2
      },
      80000042: {
        id: "80000042",
        name: "\u6781\u901f\u72c2\u98d9",
        game_type: 2
      },
      80000020: {
        id: "80000020",
        name: "\u6253\u5730\u9f20",
        game_type: 2
      },
      80000044: {
        id: "80000044",
        name: "\u98de\u79bd\u8d70\u517d",
        game_type: 2
      },
      80000047: {
        id: "80000047",
        name: "\u9ab0\u5b9d",
        game_type: 2
      },
      80000046: {
        id: "80000046",
        name: "\u63a8\u7b52\u5b50",
        game_type: 2
      },
      80000049: {
        id: "80000049",
        name: "21\u70b9",
        game_type: 2
      },
      80000050: {
        id: "80000050",
        name: "\u4e09\u516c",
        game_type: 2
      },
      80000052: {
        id: "80000052",
        name: "\u770b\u724c\u62a2\u5e84\u725b\u725b",
        game_type: 2
      },
      80000053: {
        id: "80000053",
        name: "\u5341\u4e09\u6c34",
        game_type: 2
      },
      80000048: {
        id: "80000048",
        name: "\u62a2\u5e84\u724c\u4e5d",
        game_type: 2
      },
      80000051: {
        id: "80000051",
        name: "\u68ad\u54c8",
        game_type: 2
      }
    };
    exports.default = GameConfig;
    cc._RF.pop();
  }, {} ],
  GameUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cedafAIa/FHuatSRXOp/Khr", "GameUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CommonUtils_1 = require("../../../../script/kernel/utils/CommonUtils");
    var GameUtil = function() {
      function GameUtil() {}
      GameUtil.parseChip = function(total, chipRule) {
        var chips = [];
        while (total > 0) {
          if (total < chipRule[0]) break;
          for (var i = chipRule.length; i >= 0; i--) if (total >= chipRule[i]) {
            total -= chipRule[i];
            chips.push(chipRule[i]);
          }
        }
        return chips;
      };
      GameUtil.flyChip = function(chipSpr, fromPos, toPos, duration) {
        if (!chipSpr) return;
        chipSpr.setPosition(fromPos);
        chipSpr.runAction(cc.moveTo(duration, toPos));
      };
      GameUtil.flyChip2 = function(chipSpr, fromObj, toObj, duration, margin) {
        void 0 === margin && (margin = null);
        margin || (margin = {
          left: 2,
          right: 2,
          bottom: 2,
          top: 2
        });
        var parent = chipSpr.parent;
        var toPos = this.getRandPos(parent, chipSpr, toObj, margin);
        var fromPos = CommonUtils_1.default.convertSpaceAR(fromObj, parent);
        this.flyChip(chipSpr, fromPos, toPos, duration);
      };
      GameUtil.getRandPos = function(parent, srcObj, dstObj, margin) {
        var szSrc = srcObj.getContentSize();
        var szDst = dstObj.getContentSize();
        var srcScale = srcObj.scale;
        var dstScale = dstObj.scale;
        var toPos = CommonUtils_1.default.convertSpaceAR(dstObj, parent);
        var rangeX = Math.abs((szDst.width * dstScale - szSrc.width * srcScale) / 2);
        var rangeY = Math.abs((szDst.height * dstScale - szSrc.height * srcScale) / 2);
        toPos.x = toPos.x + (-rangeX + margin.left + Math.random() * (2 * rangeX - margin.right - margin.left));
        toPos.y = toPos.y + (-rangeY + margin.bottom + Math.random() * (2 * rangeY - margin.bottom - margin.top));
        return toPos;
      };
      return GameUtil;
    }();
    exports.default = GameUtil;
    cc._RF.pop();
  }, {
    "../../../../script/kernel/utils/CommonUtils": "CommonUtils"
  } ],
  Globals: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dc6aahkpCBJoJOf9nlePjE4", "Globals");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Globals = function() {
      function Globals() {}
      Globals.IP = "127.0.0.1";
      Globals.PORT = 5040;
      return Globals;
    }();
    exports.default = Globals;
    cc._RF.pop();
  }, {} ],
  HandCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7a1eOUoKdCBow1Old+GAjW", "HandCard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HandCard = function(_super) {
      __extends(HandCard, _super);
      function HandCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._nowState = 0;
        return _this;
      }
      HandCard.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoved, this);
      };
      HandCard.prototype._findTouchedCards = function(touch) {
        var cardArr = this.node.children;
        for (var k = 0; k < cardArr.length; k++) {
          var box = cardArr[k].getBoundingBox();
          box.contains(touch) && (k < cardArr.length - 1 ? cardArr[k + 1].getBoundingBox().xMin > touch.x && (cardArr[k].getComponent("PokerCard").state = this._nowState) : cardArr[k].getComponent("PokerCard").state = this._nowState);
        }
      };
      HandCard.prototype.touchBegan = function(event) {
        0 === this._nowState ? this._nowState = 1 : this._nowState = 0;
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchBegan = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchBegan);
      };
      HandCard.prototype.touchMoved = function(event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchMoved);
      };
      HandCard.prototype.touchEnd = function(event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        this._touchMoved = this.node.convertToNodeSpaceAR(touchLoc);
        this._findTouchedCards(this._touchMoved);
      };
      HandCard.prototype.touchCancel = function(event) {};
      HandCard = __decorate([ ccclass ], HandCard);
      return HandCard;
    }(BaseComp_1.default);
    exports.default = HandCard;
    cc._RF.pop();
  }, {
    "../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  HeroUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "85d85ppmqZEIpqxQWIusmxY", "HeroUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HeroUI = function(_super) {
      __extends(HeroUI, _super);
      function HeroUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label_name = null;
        _this.label_id = null;
        _this.userId = 0;
        return _this;
      }
      HeroUI.prototype.onLoad = function() {
        this.node.on("click", function() {
          cc.log("click ", this.userId);
        }, this);
      };
      HeroUI.prototype.setUserInfo = function(userObj) {
        this.userId = userObj.userId;
        this.label_name.string = userObj.nickname + " | \u91d1\u5e01\uff1a" + userObj.coin;
        this.label_id.string = userObj.userId.toString();
      };
      __decorate([ property(cc.Label) ], HeroUI.prototype, "label_name", void 0);
      __decorate([ property(cc.Label) ], HeroUI.prototype, "label_id", void 0);
      HeroUI = __decorate([ ccclass ], HeroUI);
      return HeroUI;
    }(BaseComp_1.default);
    exports.default = HeroUI;
    cc._RF.pop();
  }, {
    "../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  HongheiUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48ba6Clb2FNUZMWmTs3JwQL", "HongheiUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HongheiUI = function(_super) {
      __extends(HongheiUI, _super);
      function HongheiUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HongheiUI = __decorate([ ccclass ], HongheiUI);
      return HongheiUI;
    }(BaseComp_1.default);
    exports.default = HongheiUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  HotUpdator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f1f1rkHn1EcJiopih/cqwd", "HotUpdator");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Consts_1 = require("../looker/Consts");
    var HotUpdator = function() {
      function HotUpdator(id, manifestUrl, finishCallback, progressCallback) {
        this._curState = Consts_1.HOT_STATE.READY;
        this._canRetry = false;
        this._storagePath = "";
        this._curState = Consts_1.HOT_STATE.READY;
        this._id = id;
        this._manifestUrl = manifestUrl;
        this._finishCallback = finishCallback;
        this._progressCallback = progressCallback;
        if (cc.sys.isNative) {
          this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "hotupdate/" + this._id;
          cc.log("Storage path for remote asset : " + this._storagePath);
        }
      }
      HotUpdator.prototype.isUpdating = function() {
        if (this._am && this._curState !== Consts_1.HOT_STATE.READY && this._curState !== Consts_1.HOT_STATE.SUCCESS && this._curState !== Consts_1.HOT_STATE.FAIL) return true;
        return false;
      };
      HotUpdator.prototype.beginUpdate = function() {
        if (!cc.sys.isNative) {
          this.onFail();
          return;
        }
        if (this.isUpdating()) {
          cc.log("\u5df2\u7ecf\u5728\u70ed\u66f4\u4e2d");
          return;
        }
        cc.log("---------hotupdate begin-----------");
        this._curState = Consts_1.HOT_STATE.UPDATING;
        this.notifyState(this._curState, 0, 0);
        var versionCompareHandle = function(versionA, versionB) {
          cc.log("Version Compare: version A is " + versionA + ", version B is " + versionB);
          var vA = versionA.split(".");
          var vB = versionB.split(".");
          for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]) || 0;
            var b = parseInt(vB[i]) || 0;
            if (a === b) continue;
            return a - b;
          }
          return vB.length > vA.length ? -1 : 0;
        };
        this._am = new jsb.AssetsManager("", this._storagePath, versionCompareHandle);
        this._am.setVerifyCallback(function(path, asset) {
          var compressed = asset.compressed;
          var expectedMD5 = asset.md5;
          var relativePath = asset.path;
          var size = asset.size;
          if (compressed) {
            cc.log("Verification passed : " + relativePath);
            return true;
          }
          cc.log("Verification passed : " + relativePath + " (" + expectedMD5 + ")");
          return true;
        });
        cc.log("Hot update is ready, please check or directly update.");
        cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(4);
        this._am.setEventCallback(this.updateCb.bind(this));
        if (!this.loadLocalManifest()) {
          cc.log("\u52a0\u8f7d\u672c\u5730manifest\u5931\u8d25");
          this.onFail();
          return;
        }
        this._am.update();
      };
      HotUpdator.prototype.notifyState = function(nowState, progressByFile, progressByBytes) {
        cc.log("----\u70ed\u66f4\u8fdb\u5ea6", this._curState, nowState, progressByFile, progressByBytes);
        this._progressCallback && this._progressCallback(this._curState, progressByFile, progressByBytes);
      };
      HotUpdator.prototype.updateCb = function(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          cc.log("progress by file: " + event.getDownloadedFiles() + " / " + event.getTotalFiles());
          cc.log("progress by byte: " + event.getDownloadedBytes() + " / " + event.getTotalBytes());
          var msg = event.getMessage();
          if (msg) {
            cc.log("Updated file: " + msg);
            cc.log(event.getPercent() / 100 + "% : " + msg);
          }
          this.notifyState(Consts_1.HOT_STATE.UPDATING, event.getPercentByFile(), event.getPercent());
          break;

         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          cc.log("updateCb No local manifest file found, hot update skipped.");
          failed = true;
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          cc.log("updateCb Fail to download manifest file, hot update skipped.");
          failed = true;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          cc.log("updateCb Already up to date with the latest remote version.");
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          cc.log("updateCb Update finished. " + event.getMessage());
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          cc.log("updateCb Update failed. " + event.getMessage());
          this._canRetry = true;
          this.retry();
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          cc.log("updateCb Asset update error: " + event.getAssetId() + ", " + event.getMessage());
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          cc.log(event.getMessage());
        }
        failed && this.onFail();
        needRestart && this.onSuccess();
      };
      HotUpdator.prototype.onSuccess = function() {
        if (this._am) {
          this._am.setEventCallback(null);
          var searchPaths = jsb.fileUtils.getSearchPaths() || [];
          var newPaths = this._am.getLocalManifest().getSearchPaths();
          if (newPaths) {
            console.log("--------resetSearchPaths:");
            console.log(JSON.stringify(newPaths));
            Array.prototype.unshift.apply(searchPaths, newPaths);
            cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
          } else console.log("---------resetSearchPaths: null");
        }
        cc.log("\u70ed\u66f4\u6210\u529f");
        this._curState = Consts_1.HOT_STATE.SUCCESS;
        this.notifyState(Consts_1.HOT_STATE.SUCCESS, 100, 100);
        this._finishCallback && this._finishCallback(true);
        cc.audioEngine.stopAll();
        cc.game.restart();
      };
      HotUpdator.prototype.onFail = function() {
        cc.log("\u70ed\u66f4\u5931\u8d25");
        this._am && this._am.setEventCallback(null);
        this._curState = Consts_1.HOT_STATE.FAIL;
        this.notifyState(Consts_1.HOT_STATE.FAIL, 100, 100);
        this._finishCallback && this._finishCallback(false);
      };
      HotUpdator.prototype.getLocalManifestPath = function() {
        return this._manifestUrl;
      };
      HotUpdator.prototype.loadLocalManifest = function() {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
          var url = this.getLocalManifestPath();
          this._am.loadLocalManifest(url);
          return true;
        }
        return false;
      };
      HotUpdator.prototype.retry = function() {
        if (this._canRetry) {
          this._canRetry = false;
          cc.log("Retry failed Assets...");
          this._am.downloadFailedAssets();
        }
      };
      return HotUpdator;
    }();
    exports.default = HotUpdator;
    cc._RF.pop();
  }, {
    "../looker/Consts": "Consts"
  } ],
  HotupdateScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd972LrZVpOZoe8IlMOO3PS", "HotupdateScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseComp_1 = require("./BaseComp");
    var HotUpdator_1 = require("../HotUpdator");
    var HotupdateScene = function(_super) {
      __extends(HotupdateScene, _super);
      function HotupdateScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.byteProgress = null;
        _this.fileProgress = null;
        _this.manifestUrl = null;
        return _this;
      }
      HotupdateScene.prototype.onLoad = function() {
        var _this = this;
        this.fileProgress.progress = 0;
        this.byteProgress.progress = 0;
        if (cc.sys.isNative) {
          var hotter = new HotUpdator_1.default("main", this.getLocalManifestPath(), function(bSucc) {
            bSucc || _this.enterGame();
          }, function(nowState, progressByFile, progressByBytes) {
            _this.fileProgress.progress = progressByFile;
            _this.byteProgress.progress = progressByBytes;
          });
          hotter.beginUpdate();
        } else this.enterGame();
      };
      HotupdateScene.prototype.enterGame = function() {
        var _this = this;
        this.byteProgress.node.active = false;
        cc.loader.loadResDir("lobby", function(cpltCnt, totalCnt, item) {
          totalCnt <= 0 && (totalCnt = 1);
          _this.fileProgress.progress = cpltCnt / totalCnt;
        }, function(err, resobj, urls) {
          cc.loader.loadResDir("common", function(cnt, tCnt, item) {
            tCnt <= 0 && (tCnt = 1);
            _this.fileProgress.progress = cnt / tCnt;
          }, function(err, res, ruls) {
            cc.director.loadScene("LobbyScene");
          });
        });
      };
      HotupdateScene.prototype.getLocalManifestPath = function() {
        var url = this.manifestUrl.nativeUrl;
        cc.loader.md5Pipe && (url = cc.loader.md5Pipe.transformURL(url));
        cc.log("local manifest path: ", url);
        return url;
      };
      __decorate([ property(cc.ProgressBar) ], HotupdateScene.prototype, "byteProgress", void 0);
      __decorate([ property(cc.ProgressBar) ], HotupdateScene.prototype, "fileProgress", void 0);
      __decorate([ property({
        type: cc.Asset
      }) ], HotupdateScene.prototype, "manifestUrl", void 0);
      HotupdateScene = __decorate([ ccclass ], HotupdateScene);
      return HotupdateScene;
    }(BaseComp_1.default);
    exports.default = HotupdateScene;
    cc._RF.pop();
  }, {
    "../HotUpdator": "HotUpdator",
    "./BaseComp": "BaseComp"
  } ],
  HttpCore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "693aapnV9JCVbbMrLt2glqo", "HttpCore");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Consts = require("../../looker/Consts");
    var JsonCodec_1 = require("../codec/JsonCodec");
    var NetRequest_1 = require("./NetRequest");
    var EventCenter_1 = require("../../launcher/EventCenter");
    var HttpCore = function() {
      function HttpCore() {}
      HttpCore_1 = HttpCore;
      HttpCore._regist = function(ptoname) {
        NetRequest_1.default[ptoname] = function(tAddrParams, tParams, unsafeCallback) {
          HttpCore_1.request(ptoname, tAddrParams, tParams, unsafeCallback);
        };
      };
      HttpCore.registProcotol = function(ruleList, respondor) {
        this._responder = respondor;
        for (var i = 0; i < ruleList.length; i++) {
          var ptoname = ruleList[i].name;
          this.g_allProtocol[ptoname] ? cc.error("\u91cd\u65b0\u6ce8\u518c\uff1a", ptoname) : cc.log("\u6ce8\u518c\u534f\u8bae\uff1a", ptoname);
          this.g_allProtocol[ptoname] = ruleList[i];
        }
      };
      HttpCore.unregistAll = function() {};
      HttpCore.convertParam = function(param, rule) {
        if ("string" === typeof param) return param;
        var paramStr = "";
        if (rule) if (param) for (var j = 0, len = rule.length; j < len; j++) {
          var k = rule[j][0];
          var wantType = rule[j][1];
          if (wantType && "" != wantType && typeof param[k] != wantType) (void 0 == rule[j][2] || null == rule[j][2] || 0 !== rule[j][2] || void 0 != param[k] && null != param[k]) && cc.error("\u53c2\u6570\u7c7b\u578b\u9519\u8bef", k, param[k]); else {
            "" != paramStr && (paramStr += "&");
            paramStr += k + "=" + param[k];
          }
        } else rule.length > 0 && cc.error("\u53c2\u6570\u4e0d\u7b26\u5408\u89c4\u5219"); else if (param) for (var kk in param) {
          "" != paramStr && (paramStr += "&");
          paramStr += kk + "=" + param[kk];
        }
        return paramStr;
      };
      HttpCore.request = function(ptoname, tAddrParams, tParams, unsafeCallback) {
        void 0 === unsafeCallback && (unsafeCallback = null);
        var ptoinfo = this.g_allProtocol[ptoname];
        if (!ptoinfo) {
          cc.log("\u672a\u5b9a\u4e49\u8be5\u534f\u8bae\uff1a", ptoname);
          return;
        }
        cc.log("[\u8bf7\u6c42]\uff1a", ptoname);
        var domain = Consts.MAIN_URL;
        ptoinfo.domain && "" != ptoinfo.domain && (domain = ptoinfo.domain);
        var addr = ptoinfo.addr;
        if (ptoinfo.addrparams && ptoinfo.addrparams.length > 0) {
          addr || (addr = "");
          for (var j = 0, len = ptoinfo.addrparams.length; j < len; j++) {
            typeof tAddrParams[j] != ptoinfo.addrparams[j] && cc.error("\u5730\u5740\u53c2\u6570\u7c7b\u578b\u9519\u8bef");
            addr += "/" + tAddrParams[j];
          }
        }
        var paramStr = HttpCore_1.convertParam(tParams, ptoinfo.params);
        "POST" === ptoinfo.reqType && (paramStr = "data=" + JSON.stringify(tParams));
        "GET" === ptoinfo.reqType ? HttpCore_1.callGet(domain, addr, paramStr, function(iCode, data) {
          HttpCore_1.onRespData(ptoname, iCode, data, unsafeCallback);
        }) : "POST" === ptoinfo.reqType ? HttpCore_1.callPost(domain, addr, paramStr, function(iCode, data) {
          HttpCore_1.onRespData(ptoname, iCode, data, unsafeCallback);
        }) : "UPLOAD" === ptoinfo.reqType || "DOWNLOAD" === ptoinfo.reqType;
      };
      HttpCore.onRespData = function(ptoname, iCode, data, unsafeCallback) {
        cc.log("[\u54cd\u5e94]\uff1a", ptoname, iCode);
        if (0 === iCode) {
          var info = this._dataProcessor.decode(data);
          this._responder[ptoname] && this._responder[ptoname](info);
          unsafeCallback && unsafeCallback(info);
          EventCenter_1.default.instance().fire(ptoname, info);
        }
      };
      HttpCore.commonHead = function(xhr) {};
      HttpCore.callGet = function(url, addr, params, callback) {
        var finalUrl = url;
        addr && "" != addr && (finalUrl = url + "/" + addr);
        var paramStr = this.convertParam(params, null);
        paramStr && "" != paramStr && (finalUrl = finalUrl + "?" + paramStr);
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onabort = function() {
          cc.log("[onabort]", finalUrl);
          callback(4, xhr.responseText);
        };
        xhr.onerror = function() {
          cc.log("[onerror]", finalUrl);
          callback(3, xhr.responseText);
        };
        xhr.ontimeout = function() {
          cc.log("[ontimeout]", finalUrl);
          callback(2, xhr.responseText);
        };
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState && xhr.status >= 200 && xhr.status < 207) {
            cc.log("[RESP]", finalUrl);
            callback(0, xhr.responseText);
          }
        };
        cc.log("[GET]: ", finalUrl);
        xhr.open("GET", finalUrl, true);
        xhr.timeout = this.g_timeout;
        this.commonHead(xhr);
        xhr.send();
      };
      HttpCore.callPost = function(url, addr, params, callback) {
        var finalUrl = url;
        addr && "" != addr && (finalUrl = url + "/" + addr);
        var paramStr = this.convertParam(params, null);
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onabort = function() {
          cc.log("[onabort]", finalUrl);
          callback(4, xhr.responseText);
        };
        xhr.onerror = function() {
          cc.log("[onerror]", finalUrl);
          callback(3, xhr.responseText);
        };
        xhr.ontimeout = function() {
          cc.log("[ontimeout]", finalUrl);
          callback(2, xhr.responseText);
        };
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState && xhr.status >= 200 && xhr.status < 207) {
            cc.log("[RESP]", finalUrl);
            callback(0, xhr.responseText);
          }
        };
        cc.log("[POST]: ", finalUrl, paramStr);
        xhr.open("POST", finalUrl, true);
        xhr.timeout = this.g_timeout;
        this.commonHead(xhr);
        xhr.send(paramStr);
      };
      HttpCore.callUpload = function(url, addr, params, callback) {};
      var HttpCore_1;
      HttpCore.token = "";
      HttpCore.g_timeout = 8e3;
      HttpCore._dataProcessor = new JsonCodec_1.default();
      HttpCore.g_allProtocol = {};
      HttpCore = HttpCore_1 = __decorate([ ccclass ], HttpCore);
      return HttpCore;
    }();
    exports.default = HttpCore;
    cc._RF.pop();
  }, {
    "../../launcher/EventCenter": "EventCenter",
    "../../looker/Consts": "Consts",
    "../codec/JsonCodec": "JsonCodec",
    "./NetRequest": "NetRequest"
  } ],
  JskbUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ad12Mqs/VEvY9EAWGBM/ks", "JskbUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(BaseComp_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  JsonCodec: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef2a639tWVC66+YFnzXTtHT", "JsonCodec");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var JsonCodec = function() {
      function JsonCodec() {}
      JsonCodec.prototype.encode = function(data) {
        return JSON.stringify(data);
      };
      JsonCodec.prototype.decode = function(data) {
        return JSON.parse(data);
      };
      return JsonCodec;
    }();
    exports.default = JsonCodec;
    cc._RF.pop();
  }, {} ],
  KefuUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13e114NurpDKqiRZhdMDpS6", "KefuUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var KefuUI = function(_super) {
      __extends(KefuUI, _super);
      function KefuUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      KefuUI = __decorate([ ccclass ], KefuUI);
      return KefuUI;
    }(BaseComp_1.default);
    exports.default = KefuUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  LoadCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "605c1Y32YRPtppOSYSQbqC1", "LoadCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LoadCenter = function() {
      function LoadCenter() {}
      LoadCenter.loadRes = function(url, type, completeCallback, progressCallback) {
        if (!url || !type || !completeCallback) {
          cc.log("\u53c2\u6570\u9519\u8bef");
          return;
        }
        null === progressCallback && (progressCallback = function(completedCount, totalCount, item) {});
        cc.loader.loadRes(url, type, progressCallback, function(err, resobj) {
          if (err) {
            cc.log("[\u8d44\u6e90\u52a0\u8f7d] \u9519\u8bef " + err);
            return;
          }
          completeCallback(resobj);
        });
      };
      return LoadCenter;
    }();
    exports.default = LoadCenter;
    cc._RF.pop();
  }, {} ],
  LobbyScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c7cdI2bpBDwYFp1cYIg2d3", "LobbyScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("../../../../script/kernel/gui/UIManager");
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LobbyScene = function(_super) {
      __extends(LobbyScene, _super);
      function LobbyScene() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LobbyScene.prototype.onLoad = function() {
        UIManager_1.default.openPanel("lobby/prefabs/LobbyUI", null);
      };
      LobbyScene.prototype.start = function() {
        cc.loader.loadRes("lobby/music/denglu", cc.AudioClip, function(err, audioclip) {
          if (err) {
            cc.log("\u97f3\u9891\u52a0\u8f7d\u5931\u8d25" + err);
            return;
          }
          cc.log("\u64ad\u653e\u97f3\u9891\uff1a", audioclip);
          cc.audioEngine.playMusic(audioclip, true);
        });
      };
      LobbyScene = __decorate([ ccclass ], LobbyScene);
      return LobbyScene;
    }(BaseComp_1.default);
    exports.default = LobbyScene;
    cc._RF.pop();
  }, {
    "../../../../script/kernel/gui/UIManager": "UIManager",
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  LobbyUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6173chj10xBsq5MYjJ/Y44V", "LobbyUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SubgameEntry_1 = require("../../utils/SubgameEntry");
    var GameConfig_1 = require("../../utils/GameConfig");
    var UIManager_1 = require("../../../../../script/kernel/gui/UIManager");
    var HttpCore_1 = require("../../../../../script/kernel/net/HttpCore");
    var EventCenter_1 = require("../../../../../script/launcher/EventCenter");
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var PlatformUtil_1 = require("../../../../../script/launcher/PlatformUtil");
    var CommonUtils_1 = require("../../../../../script/kernel/utils/CommonUtils");
    var User_1 = require("../../model/User");
    var WsCore_1 = require("../../../../../script/kernel/net/WsCore");
    var http_rules_1 = require("../../proxy/rule/http_rules");
    var ws_rules_1 = require("../../proxy/rule/ws_rules");
    var http_responds_1 = require("../../proxy/http_responds");
    var ws_responds_1 = require("../../proxy/ws_responds");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LobbyUI = function(_super) {
      __extends(LobbyUI, _super);
      function LobbyUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btn_user = null;
        _this.btn_ddz = null;
        _this.btn_brnn = null;
        _this.btn_fqzs = null;
        _this.btn_zjh = null;
        _this.draglayyer = null;
        _this.circlenode = null;
        return _this;
      }
      LobbyUI.prototype.onLoad = function() {
        this.btn_user.node.on("click", function() {
          UIManager_1.default.openPopwnd("lobby/prefabs/LoginUI", null);
        }, this);
        var gameBtnList = [ {
          id: GameConfig_1.default["40000040"].id,
          btn: "btn_ddz"
        }, {
          id: GameConfig_1.default["90000040"].id,
          btn: "btn_brnn"
        }, {
          id: GameConfig_1.default["80000044"].id,
          btn: "btn_fqzs"
        }, {
          id: GameConfig_1.default["40070012"].id,
          btn: "btn_zjh"
        } ];
        var dtAngle = 30;
        var startAngle = 180 - dtAngle / 2;
        var R = 500;
        for (var i = 0; i < gameBtnList.length; i++) {
          var cfg = gameBtnList[i];
          var bton = this[cfg.btn];
          bton.gameId = cfg.id;
          bton.node.on("click", function() {
            SubgameEntry_1.default.instance().enterGame(this.gameId);
          }, bton);
          var curAngle = startAngle - i * dtAngle;
        }
        this.initNet();
        this.draglayyer.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          var dx = event.touch.getDelta().x;
          this.circlenode.angle -= .05 * dx;
        }, this);
        this.tests();
      };
      LobbyUI.prototype.initNet = function() {
        HttpCore_1.default.registProcotol(http_rules_1.default, http_responds_1.default);
        WsCore_1.default.registProtocol(ws_rules_1.default, ws_responds_1.default);
        EventCenter_1.default.instance().listen("req_userinfo", this.req_userinfo, this);
        EventCenter_1.default.instance().listen("req_room_select_info", this.req_room_select_info, this);
        EventCenter_1.default.instance().listen("req_enter_br_room", this.req_enter_br_room, this);
        var param = {
          deviceID: PlatformUtil_1.default.getDeviceId(),
          platformId: 3
        };
        HttpCore_1.default.request("req_youke_login", null, param);
      };
      LobbyUI.prototype.req_userinfo = function(data) {
        UIManager_1.default.toast("\u767b\u5f55\u6210\u529f");
        var allNodes = {};
        CommonUtils_1.default.traverseNodes(this.node, allNodes);
        allNodes["HeroUI"].getComponent("HeroUI").setUserInfo(User_1.default.getHero());
      };
      LobbyUI.prototype.req_room_select_info = function(info) {
        cc.log(info);
      };
      LobbyUI.prototype.req_enter_br_room = function(info) {
        cc.log("------------------");
        cc.log(info);
      };
      LobbyUI.prototype.tests = function() {
        var self = this;
        cc.loader.loadRes("common/spines/bairenniuniu_kaishixiazhu.json", sp.SkeletonData, function(err, resc) {
          if (err) {
            cc.log("\u8f7d\u5165spine\u5931\u8d25:" + err);
            return;
          }
          var obj = new cc.Node();
          var sk = obj.addComponent(sp.Skeleton);
          sk.skeletonData = resc;
          self.node.addChild(obj, 10);
          sk.setAnimation(1, "animation", true);
        });
        cc.loader.loadRes("common/prefabs/PokerCard", cc.Prefab, function(err, resc) {
          if (err) {
            cc.log("\u8f7d\u5165prefab\u5931\u8d25:" + err);
            return;
          }
          var obj = cc.instantiate(resc);
          var cpn = obj.getComponent("PokerCard");
          cpn.state = 1;
          self.node.addChild(obj, 10);
        });
        cc.loader.loadRes("common/prefabs/HandCard", cc.Prefab, function(err, resc) {
          if (err) {
            cc.log("\u8f7d\u5165prefab\u5931\u8d25:" + err);
            return;
          }
          var obj = cc.instantiate(resc);
          var cpn = obj.getComponent("HandCard");
          self.node.addChild(obj, 10);
        });
      };
      __decorate([ property(cc.Button) ], LobbyUI.prototype, "btn_user", void 0);
      __decorate([ property(cc.Button) ], LobbyUI.prototype, "btn_ddz", void 0);
      __decorate([ property(cc.Button) ], LobbyUI.prototype, "btn_brnn", void 0);
      __decorate([ property(cc.Button) ], LobbyUI.prototype, "btn_fqzs", void 0);
      __decorate([ property(cc.Button) ], LobbyUI.prototype, "btn_zjh", void 0);
      __decorate([ property(cc.Layout) ], LobbyUI.prototype, "draglayyer", void 0);
      __decorate([ property(cc.Node) ], LobbyUI.prototype, "circlenode", void 0);
      LobbyUI = __decorate([ ccclass ], LobbyUI);
      return LobbyUI;
    }(BaseComp_1.default);
    exports.default = LobbyUI;
    cc._RF.pop();
  }, {
    "../../../../../script/kernel/gui/UIManager": "UIManager",
    "../../../../../script/kernel/net/HttpCore": "HttpCore",
    "../../../../../script/kernel/net/WsCore": "WsCore",
    "../../../../../script/kernel/utils/CommonUtils": "CommonUtils",
    "../../../../../script/launcher/EventCenter": "EventCenter",
    "../../../../../script/launcher/PlatformUtil": "PlatformUtil",
    "../../../../../script/launcher/view/BaseComp": "BaseComp",
    "../../model/User": "User",
    "../../proxy/http_responds": "http_responds",
    "../../proxy/rule/http_rules": "http_rules",
    "../../proxy/rule/ws_rules": "ws_rules",
    "../../proxy/ws_responds": "ws_responds",
    "../../utils/GameConfig": "GameConfig",
    "../../utils/SubgameEntry": "SubgameEntry"
  } ],
  LoginMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "deaa6RH+r9FFoLXvbXPsd/u", "LoginMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LoginMgr = function() {
      function LoginMgr() {
        this._token = "";
      }
      Object.defineProperty(LoginMgr.prototype, "token", {
        get: function() {
          return this._token;
        },
        set: function(v) {
          this._token = v;
        },
        enumerable: true,
        configurable: true
      });
      LoginMgr.prototype.isLoginSucc = function() {
        return "" !== this._token;
      };
      LoginMgr.instance = new LoginMgr();
      return LoginMgr;
    }();
    exports.default = LoginMgr;
    cc._RF.pop();
  }, {} ],
  LoginUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a70aBDLD1Bk7NTZx03kNin", "LoginUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoginUI = function(_super) {
      __extends(LoginUI, _super);
      function LoginUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btn_login = null;
        _this.btn_youke = null;
        _this.btn_regist = null;
        return _this;
      }
      LoginUI.prototype.start = function() {
        this.btn_login.node.on("click", function() {}, this);
        this.btn_youke.node.on("click", function() {}, this);
        this.btn_regist.node.on("click", function() {}, this);
      };
      __decorate([ property(cc.Button) ], LoginUI.prototype, "btn_login", void 0);
      __decorate([ property(cc.Button) ], LoginUI.prototype, "btn_youke", void 0);
      __decorate([ property(cc.Button) ], LoginUI.prototype, "btn_regist", void 0);
      LoginUI = __decorate([ ccclass ], LoginUI);
      return LoginUI;
    }(BaseComp_1.default);
    exports.default = LoginUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  LonghuUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66184yaBMtOqIFnAenMe/1F", "LonghuUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LonghuUI = function(_super) {
      __extends(LonghuUI, _super);
      function LonghuUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LonghuUI = __decorate([ ccclass ], LonghuUI);
      return LonghuUI;
    }(BaseComp_1.default);
    exports.default = LonghuUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  NetRequest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "394c3b4U7dBr7KQBApXxuEc", "NetRequest");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetRequest;
    NetRequest = {};
    exports.default = NetRequest;
    cc._RF.pop();
  }, {} ],
  PaijiuUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3eb2cX6kSdJMqWDCjQ+NxVq", "PaijiuUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PaijiuUI = function(_super) {
      __extends(PaijiuUI, _super);
      function PaijiuUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PaijiuUI = __decorate([ ccclass ], PaijiuUI);
      return PaijiuUI;
    }(BaseComp_1.default);
    exports.default = PaijiuUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  PaodkUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "333abTZN+hMdbXCIGUhlHaI", "PaodkUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PaodkUI = function(_super) {
      __extends(PaodkUI, _super);
      function PaodkUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PaodkUI = __decorate([ ccclass ], PaodkUI);
      return PaodkUI;
    }(BaseComp_1.default);
    exports.default = PaodkUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  PersonUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "255e2BwKQ9PB6mG97B7UNWX", "PersonUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PersonUI = function(_super) {
      __extends(PersonUI, _super);
      function PersonUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PersonUI = __decorate([ ccclass ], PersonUI);
      return PersonUI;
    }(BaseComp_1.default);
    exports.default = PersonUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  PlatformUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a36ckG0R9NOaDTH5dgWEnc", "PlatformUtil");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlatformUtil = function() {
      function PlatformUtil() {}
      PlatformUtil.getDeviceId = function() {
        return "625896525";
      };
      PlatformUtil.copy = function(content) {};
      PlatformUtil.paste = function(content) {};
      PlatformUtil.saveToPhotoAlbum = function() {};
      PlatformUtil.openGallery = function() {};
      PlatformUtil.setOrientation = function() {};
      PlatformUtil = __decorate([ ccclass ], PlatformUtil);
      return PlatformUtil;
    }();
    exports.default = PlatformUtil;
    cc._RF.pop();
  }, {} ],
  PlayUnit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c649njdjFMxbT8sMC7YijN", "PlayUnit");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlayUnit = function() {
      function PlayUnit() {}
      PlayUnit.prototype.stop = function(procedure) {};
      return PlayUnit;
    }();
    exports.default = PlayUnit;
    cc._RF.pop();
  }, {} ],
  PlayerUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb973GWWe9CEaUNYbQZT2vH", "PlayerUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PlayerUI = function(_super) {
      __extends(PlayerUI, _super);
      function PlayerUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label_name = null;
        _this.label_money = null;
        _this.userId = 0;
        return _this;
      }
      PlayerUI.prototype.onLoad = function() {
        this.node.on("click", function() {
          cc.log("click ", this.userId);
        }, this);
      };
      PlayerUI.prototype.setUserInfo = function(userObj) {
        this.userId = userObj.userId;
        this.label_name.string = userObj.nickname;
        this.label_money.string = userObj.coin.toString();
      };
      __decorate([ property(cc.Label) ], PlayerUI.prototype, "label_name", void 0);
      __decorate([ property(cc.Label) ], PlayerUI.prototype, "label_money", void 0);
      PlayerUI = __decorate([ ccclass ], PlayerUI);
      return PlayerUI;
    }(BaseComp_1.default);
    exports.default = PlayerUI;
    cc._RF.pop();
  }, {
    "../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  PokerCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60924ch6rVGlLfD+R+l1d9/", "PokerCard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PokerCard = function(_super) {
      __extends(PokerCard, _super);
      function PokerCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._code = 0;
        _this._state = 0;
        _this._curFace = true;
        return _this;
      }
      Object.defineProperty(PokerCard.prototype, "code", {
        get: function() {
          return this._code;
        },
        set: function(v) {
          this._code = v;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PokerCard.prototype, "state", {
        get: function() {
          return this._state;
        },
        set: function(v) {
          this._state = v;
          this.node.color = 0 === v ? new cc.Color(255, 255, 255, 255) : new cc.Color(5, 255, 5, 255);
        },
        enumerable: true,
        configurable: true
      });
      PokerCard.prototype.toggleState = function() {
        0 === this._state ? this.state = 1 : this.state = 0;
      };
      PokerCard.prototype.setFace = function(bFront, duradion) {
        void 0 === duradion && (duradion = 0);
        if (duradion <= 0) {
          this._curFace = bFront;
          bFront;
        }
      };
      PokerCard = __decorate([ ccclass ], PokerCard);
      return PokerCard;
    }(cc.Component);
    exports.default = PokerCard;
    cc._RF.pop();
  }, {} ],
  Procedure: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4700cLje3JOD6VWi8qCeWTw", "Procedure");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Caller_1 = require("./Caller");
    var PROCEDURE_STATE;
    (function(PROCEDURE_STATE) {
      PROCEDURE_STATE[PROCEDURE_STATE["READY"] = 1] = "READY";
      PROCEDURE_STATE[PROCEDURE_STATE["RUNNING"] = 2] = "RUNNING";
      PROCEDURE_STATE[PROCEDURE_STATE["DONE"] = 3] = "DONE";
      PROCEDURE_STATE[PROCEDURE_STATE["STOPED"] = 4] = "STOPED";
    })(PROCEDURE_STATE || (PROCEDURE_STATE = {}));
    var Procedure = function() {
      function Procedure(procFunc, stopFunc) {
        void 0 === procFunc && (procFunc = null);
        void 0 === stopFunc && (stopFunc = null);
        this._node_type = "unknown";
        this._cur_state = PROCEDURE_STATE.READY;
        this._play_overed = false;
        this._bAutoClean = false;
        this._procFunc = null;
        this._stopFunc = null;
        this._partList = [];
        this._belongTo = null;
        this._next = null;
        this._procFunc = procFunc;
        this._stopFunc = stopFunc;
      }
      Procedure.prototype.clean = function() {
        this._procFunc = null;
        this._stopFunc = null;
        this._partList.length = 0;
        this._partList = null;
      };
      Procedure.prototype.getType = function() {
        return this._node_type;
      };
      Procedure.prototype.setStopFunc = function(stop_func) {
        this._stopFunc = stop_func;
        return this;
      };
      Procedure.prototype.setProcFunc = function(proc_func) {
        this._procFunc = proc_func;
        return this;
      };
      Procedure.prototype.setPlayUnit = function(playUnit) {
        this._procFunc = new Caller_1.default(playUnit.play, playUnit);
        this._stopFunc = new Caller_1.default(playUnit.stop, playUnit);
        return this;
      };
      Procedure.prototype.addPart = function(part) {
        part._belongTo = this;
        this._partList.push(part);
        return this;
      };
      Procedure.prototype.addPartCaller = function(procFunc, stopFunc) {
        void 0 === stopFunc && (stopFunc = null);
        var part = new Procedure(procFunc, stopFunc);
        part._belongTo = this;
        this._partList.push(part);
        return this;
      };
      Procedure.prototype.then = function(nextNode) {
        var last = this.getLast();
        nextNode._belongTo = last._belongTo;
        last._next = nextNode;
        return nextNode;
      };
      Procedure.prototype.thenCaller = function(procFunc, stopFunc) {
        void 0 === stopFunc && (stopFunc = null);
        var nextNode = new Procedure(procFunc, stopFunc);
        return this.then(nextNode);
      };
      Procedure.prototype.thenFunc = function(fn, target) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) args[_i - 2] = arguments[_i];
        var procFunc = new (Caller_1.default.bind.apply(Caller_1.default, [ void 0, fn, target ].concat(args)))();
        var nextNode = new Procedure(procFunc);
        return this.then(nextNode);
      };
      Procedure.prototype.getLast = function() {
        var last = this;
        while (last._next) last = last._next;
        return last;
      };
      Procedure.prototype.run = function() {
        if (this._cur_state === PROCEDURE_STATE.RUNNING) return;
        if (this._cur_state === PROCEDURE_STATE.DONE || this._cur_state === PROCEDURE_STATE.STOPED) {
          if (this._next) {
            this._next._belongTo = this._belongTo;
            return this._next.run();
          }
          return;
        }
        this._cur_state = PROCEDURE_STATE.RUNNING;
        this._next && (this._next._belongTo = this._belongTo);
        this._procFunc ? this._procFunc.call(this) : this._play_overed = true;
        if (this._partList) for (var i in this._partList) this._partList[i].run();
        this._cur_state === PROCEDURE_STATE.RUNNING && (null != this._partList && 0 != this._partList.length || this._procFunc || this.resolve());
      };
      Procedure.prototype.onPartFinished = function() {
        this._play_overed && this.isPartsFinished() && this.resolve();
      };
      Procedure.prototype.resolve = function() {
        this._play_overed = true;
        if (!this.isPartsFinished()) return;
        if (this._cur_state === PROCEDURE_STATE.DONE || this._cur_state === PROCEDURE_STATE.STOPED) return;
        this._cur_state = PROCEDURE_STATE.DONE;
        this._bAutoClean && this.clean();
        if (this._next) {
          this._next._belongTo = this._belongTo;
          return this._next.run();
        }
        if (this._belongTo) return this._belongTo.onPartFinished();
        cc.log("\u672cProcedure\u6267\u884c\u5b8c\u6210\uff0c\u6574\u4e2aProcedure\u6267\u884c\u5b8c\u6210");
      };
      Procedure.prototype.stop = function() {
        this._next && (this._next._belongTo = this._belongTo);
        if ((this._cur_state === PROCEDURE_STATE.DONE || this._cur_state === PROCEDURE_STATE.STOPED) && this._next) return this._next.stop();
        this._cur_state = PROCEDURE_STATE.STOPED;
        this._stopFunc && this._stopFunc.call(this);
        if (this._partList) for (var i in this._partList) this._partList[i].stop();
        this._bAutoClean && this.clean();
        this._next && this._next.stop();
      };
      Procedure.prototype.isFinished = function() {
        return this._cur_state === PROCEDURE_STATE.DONE || this._cur_state === PROCEDURE_STATE.STOPED;
      };
      Procedure.prototype.isPartsFinished = function() {
        if (!this._partList) return true;
        for (var i in this._partList) if (!this._partList[i].isFullFinished()) return false;
        return true;
      };
      Procedure.prototype.isFullFinished = function() {
        if (!this.isFinished()) return false;
        if (this._next) return this._next.isFullFinished();
        return true;
      };
      return Procedure;
    }();
    exports.default = Procedure;
    cc._RF.pop();
  }, {
    "./Caller": "Caller"
  } ],
  ProtobufCodec: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94f69V8o19CWaQhQRxherCm", "ProtobufCodec");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ProtobufCodec = function() {
      function ProtobufCodec() {}
      ProtobufCodec.prototype.encode = function(proto, mud, data) {
        cc.log(data);
        var message = proto[mud].create(data);
        var messageBuf = proto[mud].encode(message).finish();
        return messageBuf;
      };
      ProtobufCodec.prototype.decode = function(proto, mud, bytes) {
        var data = new Uint8Array(bytes);
        var obj = proto[mud].decode(data);
        var info = proto[mud].toObject(obj);
        cc.log(info);
        return info;
      };
      return ProtobufCodec;
    }();
    exports.default = ProtobufCodec;
    cc._RF.pop();
  }, {} ],
  QznnUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "229a4HthY5BRaIqjQdlpjZr", "QznnUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var QznnUI = function(_super) {
      __extends(QznnUI, _super);
      function QznnUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      QznnUI = __decorate([ ccclass ], QznnUI);
      return QznnUI;
    }(BaseComp_1.default);
    exports.default = QznnUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  RechargeUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8eadGtH15DM6ENoHGS3EKw", "RechargeUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RechargeUI = function(_super) {
      __extends(RechargeUI, _super);
      function RechargeUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RechargeUI = __decorate([ ccclass ], RechargeUI);
      return RechargeUI;
    }(BaseComp_1.default);
    exports.default = RechargeUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  RedbagUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e599fIV6fRMbKX919KRBPv3", "RedbagUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedbagUI = function(_super) {
      __extends(RedbagUI, _super);
      function RedbagUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RedbagUI = __decorate([ ccclass ], RedbagUI);
      return RedbagUI;
    }(BaseComp_1.default);
    exports.default = RedbagUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  SafeboxUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bc58B9hhhAUbgw2zcvfbCP", "SafeboxUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SafeboxUI = function(_super) {
      __extends(SafeboxUI, _super);
      function SafeboxUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SafeboxUI = __decorate([ ccclass ], SafeboxUI);
      return SafeboxUI;
    }(BaseComp_1.default);
    exports.default = SafeboxUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  SaibaoUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "039bbBAOApAl5ZLvHuqgXmR", "SaibaoUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SaibaoUI = function(_super) {
      __extends(SaibaoUI, _super);
      function SaibaoUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SaibaoUI = __decorate([ ccclass ], SaibaoUI);
      return SaibaoUI;
    }(BaseComp_1.default);
    exports.default = SaibaoUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  SangongUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6ccf3ciBwFL6JRioiWHeWb4", "SangongUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SangongUI = function(_super) {
      __extends(SangongUI, _super);
      function SangongUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SangongUI = __decorate([ ccclass ], SangongUI);
      return SangongUI;
    }(BaseComp_1.default);
    exports.default = SangongUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  SecretUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15eb0X82rJFf7qH3zhBve+B", "SecretUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SecretUI = function(_super) {
      __extends(SecretUI, _super);
      function SecretUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SecretUI = __decorate([ ccclass ], SecretUI);
      return SecretUI;
    }(BaseComp_1.default);
    exports.default = SecretUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  SettorUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45464gxDTpD9bv5xVbUhYb2", "SettorUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SettorUI = function(_super) {
      __extends(SettorUI, _super);
      function SettorUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SettorUI = __decorate([ ccclass ], SettorUI);
      return SettorUI;
    }(BaseComp_1.default);
    exports.default = SettorUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  Shui13UI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c10bfXAnNtChraTElztJv9Y", "Shui13UI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Shui13UI = function(_super) {
      __extends(Shui13UI, _super);
      function Shui13UI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Shui13UI = __decorate([ ccclass ], Shui13UI);
      return Shui13UI;
    }(BaseComp_1.default);
    exports.default = Shui13UI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  SpreadUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18697odiltKh6K0lJ82web1", "SpreadUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SpreadUI = function(_super) {
      __extends(SpreadUI, _super);
      function SpreadUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SpreadUI = __decorate([ ccclass ], SpreadUI);
      return SpreadUI;
    }(BaseComp_1.default);
    exports.default = SpreadUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  SubgameEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "025228vYFJIj6gqRjEDHfW/", "SubgameEntry");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HotUpdator_1 = require("../../../../script/launcher/HotUpdator");
    var GameConfig_1 = require("./GameConfig");
    var UIManager_1 = require("../../../../script/kernel/gui/UIManager");
    var HttpCore_1 = require("../../../../script/kernel/net/HttpCore");
    var User_1 = require("../model/User");
    var Consts_1 = require("../../../../script/looker/Consts");
    var SubgameEntry = function() {
      function SubgameEntry() {}
      SubgameEntry.instance = function() {
        SubgameEntry._singleton || (SubgameEntry._singleton = new SubgameEntry());
        return SubgameEntry._singleton;
      };
      SubgameEntry.prototype.setServerGames = function(gameList) {
        this._gamelist = gameList;
      };
      SubgameEntry.prototype.isGameExist = function(gameId) {
        if (!GameConfig_1.default[gameId]) return false;
        return true;
      };
      SubgameEntry.prototype.getUpdator = function(gameId) {
        if (!GameConfig_1.default[gameId]) return null;
        return new HotUpdator_1.default(gameId, "", function(bSucc) {}, null);
      };
      SubgameEntry.prototype.enterGame = function(gameId) {
        var cfg = GameConfig_1.default[gameId];
        if (!cfg) {
          UIManager_1.default.toast("\u656c\u8bf7\u671f\u5f85");
          return;
        }
        var updator = this.getUpdator(gameId);
        if (updator && updator.isUpdating()) {
          UIManager_1.default.toast("\u6b63\u5728\u66f4\u65b0\u4e2d\uff0c\u8bf7\u7a0d\u7b49");
          return;
        }
        if (!this.isGameExist(gameId)) {
          UIManager_1.default.toast("\u6e38\u620f\u4e0d\u5b58\u5728");
          return;
        }
        if (1 === cfg.game_type) {
          HttpCore_1.default.request("req_room_select_info", null, {
            gameId: gameId,
            channelId: User_1.default.getHero().channelId
          });
          var param = {
            sid: HttpCore_1.default.token,
            gameId: gameId,
            tableType: 1,
            gameType: 1,
            clientVersion: Consts_1.CLIENT_VERSION,
            channelId: User_1.default.getHero().channelId
          };
          HttpCore_1.default.request("req_enter_coin_room", null, param);
        } else {
          HttpCore_1.default.request("req_room_select_info", null, {
            gameId: gameId,
            channelId: User_1.default.getHero().channelId
          });
          var param = {
            sid: HttpCore_1.default.token,
            gameId: gameId,
            tableType: 0,
            gameType: 0,
            clientVersion: Consts_1.CLIENT_VERSION,
            channelId: User_1.default.getHero().channelId
          };
          HttpCore_1.default.request("req_enter_br_room", null, param);
        }
      };
      SubgameEntry.prototype.enterGameScene = function(gameId) {
        gameId = gameId.toString();
        switch (gameId) {
         case "40000040":
          UIManager_1.default.openPanel("subgames/ddz/prefabs/ddz_ui", null);
          break;

         case "90000040":
          UIManager_1.default.openPanel("subgames/brnn/prefabs/brnn_ui", null);
          break;

         case "80000044":
          UIManager_1.default.openPanel("subgames/fqzs/prefabs/fqzs_ui", null);
          break;

         case "40070012":
          UIManager_1.default.openPanel("subgames/zjh/prefabs/zjh_ui", null);
        }
      };
      return SubgameEntry;
    }();
    exports.default = SubgameEntry;
    cc._RF.pop();
  }, {
    "../../../../script/kernel/gui/UIManager": "UIManager",
    "../../../../script/kernel/net/HttpCore": "HttpCore",
    "../../../../script/launcher/HotUpdator": "HotUpdator",
    "../../../../script/looker/Consts": "Consts",
    "../model/User": "User",
    "./GameConfig": "GameConfig"
  } ],
  SuohaUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e537N3OQJImbGhfSbhmtrx", "SuohaUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SuohaUI = function(_super) {
      __extends(SuohaUI, _super);
      function SuohaUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SuohaUI = __decorate([ ccclass ], SuohaUI);
      return SuohaUI;
    }(BaseComp_1.default);
    exports.default = SuohaUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  TcpSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42694KgA71IhawPo71rWwXa", "TcpSocket");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TcpSocket = function() {
      function TcpSocket() {}
      TcpSocket = __decorate([ ccclass ], TcpSocket);
      return TcpSocket;
    }();
    exports.default = TcpSocket;
    cc._RF.pop();
  }, {} ],
  Toast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55e8fhUlUVPMLuKY90Px0+v", "Toast");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Toast = function(_super) {
      __extends(Toast, _super);
      function Toast() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label_cont = null;
        return _this;
      }
      Toast.prototype.setContent = function(content) {
        this.label_cont.string = content;
      };
      __decorate([ property(cc.RichText) ], Toast.prototype, "label_cont", void 0);
      Toast = __decorate([ ccclass ], Toast);
      return Toast;
    }(cc.Component);
    exports.default = Toast;
    cc._RF.pop();
  }, {} ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0d17dTMO5hO0KOA08teLLjR", "UIManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Consts = require("../../looker/Consts");
    var CommonUtils_1 = require("../utils/CommonUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIManager = function() {
      function UIManager() {}
      UIManager_1 = UIManager;
      UIManager.initWindow = function(layerId, prefabName, bModal, bCloseWhenClickMask, callback) {
        if (cc.isValid(UIManager_1._allUI[prefabName])) {
          cc.log("allready exist: ", prefabName);
          callback && callback.apply(UIManager_1._allUI[prefabName]);
          return;
        }
        cc.loader.loadRes(prefabName, cc.Prefab, function(completeCnt, totalCnt, item) {}, function(errorMessage, loadedResource) {
          if (errorMessage) {
            cc.log("\u8f7d\u5165\u9884\u5236\u8d44\u6e90\u5931\u8d25:" + errorMessage);
            return;
          }
          var cvs = cc.find("Canvas");
          if (!cvs) {
            cc.log("\u6ca1\u6709Canvas");
            return;
          }
          var obj = cc.instantiate(loadedResource);
          if (!obj) {
            cc.log("\u5b9e\u4f8b\u5316\u9884\u5236\u4f53\u5931\u8d25");
            return;
          }
          bModal && CommonUtils_1.default.setModal(obj, bCloseWhenClickMask);
          cvs.addChild(obj, layerId);
          UIManager_1._allUI[prefabName] = obj;
          callback && callback.apply(obj);
        });
      };
      UIManager.openPanel = function(prefabName, callback) {
        this.initWindow(Consts.LAYER.Panel, prefabName, true, false, callback);
      };
      UIManager.openPopwnd = function(prefabName, callback) {
        this.initWindow(Consts.LAYER.Popup, prefabName, true, true, callback);
      };
      UIManager.hidePanelsExcept = function(obj) {
        for (var k in this._allUI) this._allUI[k] !== obj && (this._allUI[k].active = false);
      };
      UIManager.openDialog = function(dlgName, callback, content, title, okTxt, cancelTxt) {
        void 0 === title && (title = null);
        void 0 === okTxt && (okTxt = null);
        void 0 === cancelTxt && (cancelTxt = null);
        if (cc.isValid(UIManager_1._allDialog[dlgName])) {
          cc.log("allready exist: ", dlgName);
          return;
        }
        cc.loader.loadRes("launcher/prefabs/ConfirmDlg", cc.Prefab, function(completeCnt, totalCnt, item) {}, function(errorMessage, loadedResource) {
          if (errorMessage) {
            cc.log("\u8f7d\u5165\u9884\u5236\u8d44\u6e90\u5931\u8d25:" + errorMessage);
            return;
          }
          var cvs = cc.find("Canvas");
          if (!cvs) {
            cc.log("\u6ca1\u6709Canvas");
            return;
          }
          var obj = cc.instantiate(loadedResource);
          if (!obj) {
            cc.log("\u5b9e\u4f8b\u5316\u9884\u5236\u4f53\u5931\u8d25");
            return;
          }
          CommonUtils_1.default.setModal(obj, false);
          cvs.addChild(obj, Consts.LAYER.Dialog);
          UIManager_1._allDialog[dlgName] = obj;
          obj.getComponent("ConfirmDlg").reflesh(callback, content, title, okTxt, cancelTxt);
        });
      };
      UIManager.toast = function(content) {
        if (void 0 === content || null === content) return;
        var completeCallback = function(errorMessage, loadedResource) {
          if (errorMessage) {
            cc.log("\u8f7d\u5165\u9884\u5236\u8d44\u6e90\u5931\u8d25:" + errorMessage);
            return;
          }
          var cvs = cc.find("Canvas");
          if (!cvs) {
            cc.log("\u6ca1\u6709Canvas");
            return;
          }
          var obj = cc.instantiate(loadedResource);
          if (!obj) {
            cc.log("\u5b9e\u4f8b\u5316\u5931\u8d25");
            return;
          }
          var idx = 1;
          for (var j = UIManager_1._toastList.length - 1; j >= 0; j--) {
            UIManager_1._toastList[j].y = 38 * idx;
            idx++;
          }
          cvs.addChild(obj, Consts.LAYER.Tips);
          UIManager_1._toastList.push(obj);
          obj.y = 0;
          var scriptCpn = obj.getComponent("Toast");
          scriptCpn.setContent(content);
          scriptCpn.scheduleOnce(function() {
            for (var i = 0; i < UIManager_1._toastList.length; i++) if (UIManager_1._toastList[i] === obj) {
              UIManager_1._toastList.splice(i, 1);
              break;
            }
            this.node.destroy();
          }, 2);
        };
        cc.loader.loadRes("common/prefabs/Toast", cc.Prefab, completeCallback);
      };
      UIManager.announce = function() {};
      UIManager.barrage = function() {};
      var UIManager_1;
      UIManager._allUI = {};
      UIManager._allDialog = {};
      UIManager._toastList = [];
      UIManager = UIManager_1 = __decorate([ ccclass ], UIManager);
      return UIManager;
    }();
    exports.default = UIManager;
    cc._RF.pop();
  }, {
    "../../looker/Consts": "Consts",
    "../utils/CommonUtils": "CommonUtils"
  } ],
  User: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5c15eTVCktEtaVr//wPYsVU", "User");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var User = function() {
      function User() {}
      User.setHeroId = function(uid) {
        this._heroId = uid;
      };
      User.updateUser = function(info) {
        this._userList[info.userId] = this._userList[info.userId] || new User();
        var obj = this._userList[info.userId];
        for (var attr in info) {
          cc.log("----", attr, info[attr]);
          obj[attr] = info[attr];
        }
      };
      User.getUser = function(userId) {
        return this._userList[userId];
      };
      User.getAllUser = function() {
        return this._userList;
      };
      User.getHero = function() {
        return this._userList[this._heroId];
      };
      User._userList = {};
      User._heroId = 0;
      return User;
    }();
    exports.default = User;
    cc._RF.pop();
  }, {} ],
  WithdrawUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53596qo03lLKa6qZMrQSg0M", "WithdrawUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WithdrawUI = function(_super) {
      __extends(WithdrawUI, _super);
      function WithdrawUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      WithdrawUI = __decorate([ ccclass ], WithdrawUI);
      return WithdrawUI;
    }(BaseComp_1.default);
    exports.default = WithdrawUI;
    cc._RF.pop();
  }, {
    "../../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  WsCore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a06e4tTnrpC9ZDpclndw9Tg", "WsCore");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WsSocket_1 = require("./WsSocket");
    var EventCenter_1 = require("../../launcher/EventCenter");
    var NetRequest_1 = require("./NetRequest");
    var WsCore = function() {
      function WsCore() {}
      WsCore._regist = function(ptoname, cmdId) {
        NetRequest_1.default[ptoname] = function(data) {
          WsSocket_1.default.instance().sendMsg(cmdId, data);
        };
      };
      WsCore.registProtocol = function(tbl, responder) {
        this._protocolTbl = tbl;
        this._responder = responder;
        for (var ptoname in tbl.names) cc.log("\u6ce8\u518cws\u534f\u8bae\uff1a", ptoname);
      };
      WsCore.unregistAll = function() {};
      WsCore.setRespondor = function(tbl) {
        this._responder = tbl;
      };
      WsCore.request = function(ptoname, data) {
        var cmdId = this._protocolTbl.names[ptoname].cmdId;
        WsSocket_1.default.instance().sendMsg(cmdId, data);
      };
      WsCore.respond = function(cmdId, data) {
        var cmd_id = cmdId.toString();
        if (this._protocolTbl.cmds[cmd_id]) {
          var ptoname = this._protocolTbl.cmds[cmd_id].ptoname;
          this._responder[ptoname] && this._responder[ptoname](data);
          EventCenter_1.default.instance().fire(ptoname, data);
        }
      };
      return WsCore;
    }();
    exports.default = WsCore;
    cc._RF.pop();
  }, {
    "../../launcher/EventCenter": "EventCenter",
    "./NetRequest": "NetRequest",
    "./WsSocket": "WsSocket"
  } ],
  WsSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b6a55fD80hM0b6s3Hc694Ad", "WsSocket");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("../gui/UIManager");
    var WsCore_1 = require("./WsCore");
    var ConnState;
    (function(ConnState) {
      ConnState[ConnState["unconnect"] = 0] = "unconnect";
      ConnState[ConnState["connecting"] = 1] = "connecting";
      ConnState[ConnState["connected"] = 2] = "connected";
    })(ConnState || (ConnState = {}));
    var WebSocket = WebSocket || window["WebSocket"] || window["MozWebSocket"];
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WsSocket = function() {
      function WsSocket() {
        this._curState = ConnState.unconnect;
        this._url = "";
        this._dataProcessor = null;
        this._curState = ConnState.unconnect;
      }
      WsSocket_1 = WsSocket;
      WsSocket.instance = function() {
        WsSocket_1._singleton || (WsSocket_1._singleton = new WsSocket_1());
        return this._singleton;
      };
      WsSocket.prototype.initWs = function(url, cacertPath, on_success, on_fail) {
        void 0 === on_success && (on_success = null);
        void 0 === on_fail && (on_fail = null);
        var self = this;
        var ws = new WebSocket(url, [], cacertPath);
        ws.binaryType = "arraybuffer";
        ws.onopen = function() {
          cc.log("ws: onopen", url);
          self._curState = ConnState.connected;
          on_success && on_success();
        };
        ws.onmessage = function(event) {
          var info = self._dataProcessor.decode(event.data);
          var cmdId = info.cmd;
          var data = info.data;
          info.data && (data = self._dataProcessor.decode(info.data));
          1e4 !== cmdId && 30400 != cmdId && cc.log(cmdId, data);
          200 === data.code ? WsCore_1.default.respond(cmdId, data) : UIManager_1.default.toast(data.msg);
        };
        ws.onclose = function() {
          cc.log("ws: onclose", url);
          if (this._ws) {
            var ws = this._ws;
            this._ws = null;
            ws.close();
          }
          this._curState = ConnState.unconnect;
          on_fail && on_fail();
        };
        ws.onerror = function(err) {
          cc.log("ws: onerror", url);
          if (this._ws) {
            var ws = this._ws;
            this._ws = null;
            ws.close();
          }
          this._curState = ConnState.unconnect;
          on_fail && on_fail();
        };
        self._ws = ws;
      };
      WsSocket.prototype.connect = function(url, processor, on_success, on_fail) {
        void 0 === on_success && (on_success = null);
        void 0 === on_fail && (on_fail = null);
        if (this._url === url && null !== this._ws) {
          cc.log("the same url");
          return;
        }
        if (this._curState !== ConnState.unconnect) {
          cc.log("\u8fde\u63a5\u4e2d\uff0c\u8bf7\u5148\u5173\u95ed\u73b0\u6709\u8fde\u63a5");
          return;
        }
        this.close();
        this._curState = ConnState.connecting;
        this._url = url;
        this._dataProcessor = processor;
        cc.log("\u8fde\u63a5WebSocket: ", url);
        var self = this;
        cc.sys.isNative ? cc.loader.loadRes("launcher/cacert", function(errorMessage, loadedResource) {
          if (errorMessage) {
            cc.log("\u8f7d\u5165cacert.pem\u5931\u8d25:" + errorMessage);
            return;
          }
          self.initWs(url, "" + loadedResource, on_success, on_fail);
        }) : self.initWs(url, "", on_success, on_fail);
      };
      WsSocket.prototype.close = function() {
        if (this._ws) {
          cc.log("\u5173\u95edWebSocket");
          var ws = this._ws;
          this._ws = null;
          ws.close();
          this._curState = ConnState.unconnect;
        }
      };
      WsSocket.prototype.sendMsg = function(cmdId, data) {
        void 0 !== data && null !== data || (data = {});
        var info = {
          cmd: cmdId,
          data: data
        };
        var msg = this._dataProcessor.encode(info);
        return this.sendData(msg);
      };
      WsSocket.prototype.sendData = function(data) {
        if (this._curState !== ConnState.connected) {
          cc.log("\u5c1a\u672a\u5efa\u7acb\u8fde\u63a5");
          return false;
        }
        if (!this._ws) {
          cc.log("no ws object");
          return false;
        }
        this._ws.send(data);
        cc.log("\u3010\u53d1\u9001\u3011", data);
        return true;
      };
      var WsSocket_1;
      WsSocket._singleton = null;
      WsSocket = WsSocket_1 = __decorate([ ccclass ], WsSocket);
      return WsSocket;
    }();
    exports.default = WsSocket;
    cc._RF.pop();
  }, {
    "../gui/UIManager": "UIManager",
    "./WsCore": "WsCore"
  } ],
  bjleUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d211bZnxy1CVLChb0nDg4uK", "bjleUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var bjleUI = function(_super) {
      __extends(bjleUI, _super);
      function bjleUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      bjleUI = __decorate([ ccclass ], bjleUI);
      return bjleUI;
    }(BaseComp_1.default);
    exports.default = bjleUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  brnnUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d25cJnPbhPdKiBVeA7priC", "brnnUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameUtil_1 = require("../../../lobby/script/utils/GameUtil");
    var CommonUtils_1 = require("../../../../script/kernel/utils/CommonUtils");
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BrnnUI = function(_super) {
      __extends(BrnnUI, _super);
      function BrnnUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_help = null;
        _this.chip_box = null;
        _this.chipBox = null;
        _this.all_nodes = {};
        return _this;
      }
      BrnnUI.prototype.bet = function(areaId) {
        var self = this;
        var rule = [ 1, 3, 5, 300, 800 ];
        var margin = {
          left: 5,
          right: 5,
          bottom: 40,
          top: 5
        };
        var idx = self.chipBox.getSelectedIndex();
        cc.loader.loadRes("common/imgs/chip", cc.SpriteAtlas, function(err, atlas) {
          if (err) {
            cc.log("error: " + err);
            return;
          }
          var name = CommonUtils_1.default.getFrameName("common/imgs/chip/chip_" + rule[idx - 1]);
          var chip = new cc.Node();
          chip.scale = .4;
          chip.addComponent(cc.Sprite);
          chip.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name);
          self.all_nodes["chiplayer"].addChild(chip);
          GameUtil_1.default.flyChip2(chip, self.chipBox.getButton(idx), self.all_nodes["area" + areaId], .25, margin);
        });
      };
      BrnnUI.prototype.onLoad = function() {
        var allNodes = {};
        CommonUtils_1.default.traverseNodes(this.node, allNodes);
        this.all_nodes = allNodes;
        this.btn_close.node.on("click", function() {
          this.node.destroy();
        }, this);
        allNodes["area1"].on("click", function() {
          this.bet(1);
        }, this);
        allNodes["area2"].on("click", function() {
          this.bet(2);
        }, this);
        allNodes["area3"].on("click", function() {
          this.bet(3);
        }, this);
        allNodes["area4"].on("click", function() {
          this.bet(4);
        }, this);
        var rule = [ 1, 3, 5, 300, 800 ];
        var chipBox = cc.instantiate(this.chip_box);
        chipBox.parent = this.node;
        var compBox = chipBox.getComponent("ChipBox");
        chipBox.getComponent("ChipBox").setChipValues(rule);
        this.chipBox = compBox;
      };
      __decorate([ property(cc.Button) ], BrnnUI.prototype, "btn_close", void 0);
      __decorate([ property(cc.Button) ], BrnnUI.prototype, "btn_help", void 0);
      __decorate([ property(cc.Prefab) ], BrnnUI.prototype, "chip_box", void 0);
      BrnnUI = __decorate([ ccclass ], BrnnUI);
      return BrnnUI;
    }(BaseComp_1.default);
    exports.default = BrnnUI;
    cc._RF.pop();
  }, {
    "../../../../script/kernel/utils/CommonUtils": "CommonUtils",
    "../../../../script/launcher/view/BaseComp": "BaseComp",
    "../../../lobby/script/utils/GameUtil": "GameUtil"
  } ],
  ddzUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a30a5Eah8FHtL4oYhhHBT/2", "ddzUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DdzUI = function(_super) {
      __extends(DdzUI, _super);
      function DdzUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_help = null;
        return _this;
      }
      DdzUI.prototype.start = function() {
        this.btn_close.node.on("click", function() {
          this.node.destroy();
        }, this);
      };
      __decorate([ property(cc.Button) ], DdzUI.prototype, "btn_close", void 0);
      __decorate([ property(cc.Button) ], DdzUI.prototype, "btn_help", void 0);
      DdzUI = __decorate([ ccclass ], DdzUI);
      return DdzUI;
    }(BaseComp_1.default);
    exports.default = DdzUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  fqzsUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c951KDCV5KrbvgbyTV0dqk", "fqzsUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FqzsUI = function(_super) {
      __extends(FqzsUI, _super);
      function FqzsUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_help = null;
        _this.chip_box = null;
        return _this;
      }
      FqzsUI.prototype.start = function() {
        this.btn_close.node.on("click", function() {
          this.node.destroy();
        }, this);
        var node = cc.instantiate(this.chip_box);
        node.parent = this.node;
        node.getComponent("ChipBox").setChipValues([ 1, 3, 5, 8, 10 ]);
      };
      __decorate([ property(cc.Button) ], FqzsUI.prototype, "btn_close", void 0);
      __decorate([ property(cc.Button) ], FqzsUI.prototype, "btn_help", void 0);
      __decorate([ property(cc.Prefab) ], FqzsUI.prototype, "chip_box", void 0);
      FqzsUI = __decorate([ ccclass ], FqzsUI);
      return FqzsUI;
    }(BaseComp_1.default);
    exports.default = FqzsUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ],
  http_responds: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b5329thzNPgKXXP+rSVUwC", "http_responds");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var User_1 = require("../model/User");
    var HttpCore_1 = require("../../../../script/kernel/net/HttpCore");
    var WsSocket_1 = require("../../../../script/kernel/net/WsSocket");
    var JsonCodec_1 = require("../../../../script/kernel/codec/JsonCodec");
    var Consts_1 = require("../../../../script/looker/Consts");
    var WsCore_1 = require("../../../../script/kernel/net/WsCore");
    var SubgameEntry_1 = require("../utils/SubgameEntry");
    var UIManager_1 = require("../../../../script/kernel/gui/UIManager");
    var http_responds;
    http_responds = {};
    http_responds.req_youke_login = function(info) {
      if (!info) return;
      HttpCore_1.default.token = info.sid;
      HttpCore_1.default.request("req_userinfo", null, {
        userId: info.userId
      });
      HttpCore_1.default.request("req_game_list", null, {
        sid: info.sid
      });
    };
    http_responds.req_userinfo = function(info) {
      if (!info) return;
      User_1.default.setHeroId(info.userId);
      User_1.default.updateUser(info);
      var url = Consts_1.WS_URL + HttpCore_1.default.token;
      WsSocket_1.default.instance().connect(url, new JsonCodec_1.default());
    };
    http_responds.req_game_list = function(info) {
      if (!info) return;
      SubgameEntry_1.default.instance().setServerGames(info.data);
    };
    http_responds.req_enter_br_room = function(info) {
      if (!info) return;
      cc.log(info);
      if (200 != info.code) {
        UIManager_1.default.toast(info.msg);
        return;
      }
      var url = "ws://" + info.addr + "/websocket";
      WsSocket_1.default.instance().close();
      WsSocket_1.default.instance().connect(url, new JsonCodec_1.default(), function() {
        var param = {
          sid: HttpCore_1.default.token,
          gameId: info.gameId,
          channelId: User_1.default.getHero().channelId
        };
        WsCore_1.default.request("MSG_JOIN_COIN_REQUEST", param);
      });
    };
    http_responds.req_enter_coin_room = function(info) {
      if (!info) return;
      cc.log(info);
      if (200 != info.code) {
        UIManager_1.default.toast(info.msg);
        return;
      }
      var url = "ws://" + info.addr + "/websocket";
      WsSocket_1.default.instance().close();
      WsSocket_1.default.instance().connect(url, new JsonCodec_1.default(), function() {
        var param = {
          sid: HttpCore_1.default.token,
          gameId: info.gameId,
          channelId: User_1.default.getHero().channelId
        };
        WsCore_1.default.request("MSG_JOIN_COIN_REQUEST", param);
      });
    };
    exports.default = http_responds;
    cc._RF.pop();
  }, {
    "../../../../script/kernel/codec/JsonCodec": "JsonCodec",
    "../../../../script/kernel/gui/UIManager": "UIManager",
    "../../../../script/kernel/net/HttpCore": "HttpCore",
    "../../../../script/kernel/net/WsCore": "WsCore",
    "../../../../script/kernel/net/WsSocket": "WsSocket",
    "../../../../script/looker/Consts": "Consts",
    "../model/User": "User",
    "../utils/SubgameEntry": "SubgameEntry"
  } ],
  http_rules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb950qaxr1P4pCHwU+50wuO", "http_rules");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var http_rules = [ {
      name: "req_youke_login",
      reqType: "GET",
      domain: "",
      addr: "user/login",
      addrparams: [],
      params: [ [ "deviceID", "string" ], [ "platformId", "number" ] ]
    }, {
      name: "req_userinfo",
      reqType: "GET",
      domain: "",
      addr: "user/getUserInfo",
      addrparams: [],
      params: [ [ "userId", "number" ] ]
    }, {
      name: "req_game_list",
      reqType: "GET",
      domain: "",
      addr: "table/onlinegames",
      addrparams: [],
      params: [ [ "sid", "string" ] ]
    }, {
      name: "req_room_select_info",
      reqType: "GET",
      domain: "",
      addr: "table/getCoinTableInfo",
      addrparams: [],
      params: [ [ "gameId", "string" ], [ "channelId", "number" ] ]
    }, {
      name: "req_enter_br_room",
      reqType: "POST",
      domain: "",
      addr: "table/joinBRNN",
      addrparams: [],
      params: [ [ "sid", "string" ], [ "gameId", "string" ], [ "tableType", "number" ], [ "gameType", "number" ], [ "clientVersion", "string" ], [ "channelId", "number" ] ]
    }, {
      name: "req_enter_coin_room",
      reqType: "POST",
      domain: "",
      addr: "table/coinjoin",
      addrparams: [],
      params: [ [ "sid", "string" ], [ "gameId", "string" ], [ "tableType", "number" ], [ "gameType", "number" ], [ "clientVersion", "string" ], [ "channelId", "number" ] ]
    } ];
    exports.default = http_rules;
    cc._RF.pop();
  }, {} ],
  proto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9fb4b6A+zBCGLSoyrcVxjOI", "proto");
    "use strict";
    var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var $protobuf = protobuf;
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.proto = function() {
      var proto = {};
      proto.Login = function() {
        function Login(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        Login.prototype.name = "";
        Login.prototype.pwd = "";
        Login.create = function create(properties) {
          return new Login(properties);
        };
        Login.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.name && message.hasOwnProperty("name") && writer.uint32(10).string(message.name);
          null != message.pwd && message.hasOwnProperty("pwd") && writer.uint32(18).string(message.pwd);
          return writer;
        };
        Login.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Login.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.proto.Login();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.name = reader.string();
              break;

             case 2:
              message.pwd = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        Login.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        Login.verify = function verify(message) {
          if ("object" !== ("undefined" === typeof message ? "undefined" : _typeof(message)) || null === message) return "object expected";
          if (null != message.name && message.hasOwnProperty("name") && !$util.isString(message.name)) return "name: string expected";
          if (null != message.pwd && message.hasOwnProperty("pwd") && !$util.isString(message.pwd)) return "pwd: string expected";
          return null;
        };
        Login.fromObject = function fromObject(object) {
          if (object instanceof $root.proto.Login) return object;
          var message = new $root.proto.Login();
          null != object.name && (message.name = String(object.name));
          null != object.pwd && (message.pwd = String(object.pwd));
          return message;
        };
        Login.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.name = "";
            object.pwd = "";
          }
          null != message.name && message.hasOwnProperty("name") && (object.name = message.name);
          null != message.pwd && message.hasOwnProperty("pwd") && (object.pwd = message.pwd);
          return object;
        };
        Login.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Login;
      }();
      return proto;
    }();
    module.exports = $root;
    cc._RF.pop();
  }, {} ],
  ws_responds: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30ec0yYPnFBeYLB1/yKb9sW", "ws_responds");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("../../../../script/kernel/gui/UIManager");
    var SubgameEntry_1 = require("../utils/SubgameEntry");
    var ws_responds;
    ws_responds = {};
    ws_responds.MSG_CENTER_QUIT_LOGIN = function(info) {
      UIManager_1.default.openDialog("MSG_CENTER_QUIT_LOGIN", function(menuId) {}, "\u8d26\u53f7\u5728\u5176\u4ed6\u5730\u65b9\u767b\u9646\uff0c\u662f\u5426\u91cd\u65b0\u767b\u9646\uff1f");
    };
    ws_responds.MSG_RECONNECT_ENTER_ACK = function(info) {
      SubgameEntry_1.default.instance().enterGameScene(info.gameId);
    };
    exports.default = ws_responds;
    cc._RF.pop();
  }, {
    "../../../../script/kernel/gui/UIManager": "UIManager",
    "../utils/SubgameEntry": "SubgameEntry"
  } ],
  ws_rules: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d390eRcxK5ETIi8RVufJpX2", "ws_rules");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ws_rules = {};
    ws_rules["names"] = {
      MSG_HEART_BEAT1: {
        cmdId: 1e4
      },
      MSG_HEART_BEAT2: {
        cmdId: 30400
      },
      MSG_CENTER_QUIT_LOGIN: {
        cmdId: 30500
      },
      MSG_JOIN_COIN_REQUEST: {
        cmdId: 20006
      },
      MSG_JOIN_COIN_ACK: {
        cmdId: 20007
      },
      MSG_RECONNECT_ENTER_ACK: {
        cmdId: 2033
      }
    };
    ws_rules["cmds"] = {};
    for (var ptoname in ws_rules["names"]) {
      var info = ws_rules["names"][ptoname];
      info["ptoname"] = ptoname;
      ws_rules["cmds"][info.cmdId.toString()] = info;
    }
    exports.default = ws_rules;
    cc._RF.pop();
  }, {} ],
  zjhUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58c26sKLGRGirlva9VGKa8F", "zjhUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseComp_1 = require("../../../../script/launcher/view/BaseComp");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var zjhUI = function(_super) {
      __extends(zjhUI, _super);
      function zjhUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        _this.btn_help = null;
        return _this;
      }
      zjhUI.prototype.start = function() {
        this.btn_close.node.on("click", function() {
          this.node.destroy();
        }, this);
      };
      __decorate([ property(cc.Button) ], zjhUI.prototype, "btn_close", void 0);
      __decorate([ property(cc.Button) ], zjhUI.prototype, "btn_help", void 0);
      zjhUI = __decorate([ ccclass ], zjhUI);
      return zjhUI;
    }(BaseComp_1.default);
    exports.default = zjhUI;
    cc._RF.pop();
  }, {
    "../../../../script/launcher/view/BaseComp": "BaseComp"
  } ]
}, {}, [ "BaseWindow", "ChipBox", "HandCard", "HeroUI", "PlayerUI", "PokerCard", "Toast", "LoginMgr", "User", "http_responds", "proto", "http_rules", "ws_rules", "ws_responds", "GameConfig", "GameUtil", "SubgameEntry", "LobbyScene", "RechargeUI", "SafeboxUI", "WithdrawUI", "EmailUI", "LobbyUI", "KefuUI", "LoginUI", "FaceUI", "PersonUI", "SecretUI", "SettorUI", "SpreadUI", "bjleUI", "brnnUI", "BuyuUI", "ddzUI", "DezhouUI", "Dian21UI", "ErbaUI", "fqzsUI", "HongheiUI", "JskbUI", "LonghuUI", "PaijiuUI", "PaodkUI", "QznnUI", "RedbagUI", "SaibaoUI", "SangongUI", "Shui13UI", "SuohaUI", "zjhUI", "AudioManager", "DataProcessor", "JsonCodec", "ProtobufCodec", "UIManager", "LoadCenter", "HttpCore", "NetRequest", "TcpSocket", "WsCore", "WsSocket", "Caller", "PlayUnit", "Procedure", "CommonUtils", "AppNode", "EventCenter", "HotUpdator", "PlatformUtil", "BaseComp", "ConfirmDlg", "HotupdateScene", "Consts", "EventDef", "Globals" ]);