// // Draw text the textBaseline ratio (Can adjust the appropriate baseline ratio based on the platform)
// let _BASELINE_RATIO = 0.26;
// //if (CC_RUNTIME) {
//     _BASELINE_RATIO = 0;
// //}

// var textUtils = {

//     BASELINE_RATIO: _BASELINE_RATIO,
//     MIDDLE_RATIO: (_BASELINE_RATIO + 1) / 2 - _BASELINE_RATIO,

//     label_wordRex : /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûа-яА-ЯЁё]+|\S)/,
//     label_symbolRex : /^[!,.:;'}\]%\?>、‘“》？。，！]/,
//     label_lastWordRex : /([a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]+|\S)$/,
//     label_lastEnglish : /[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]+$/,
//     label_firstEnglish : /^[a-zA-Z0-9ÄÖÜäöüßéèçàùêâîôûаíìÍÌïÁÀáàÉÈÒÓòóŐőÙÚŰúűñÑæÆœŒÃÂãÔõěščřžýáíéóúůťďňĚŠČŘŽÁÍÉÓÚŤżźśóńłęćąŻŹŚÓŃŁĘĆĄ-яА-ЯЁё]/,
//     label_firstEmoji : /^[\uD83C\uDF00-\uDFFF\uDC00-\uDE4F]/,
//     label_lastEmoji : /([\uDF00-\uDFFF\uDC00-\uDE4F]+|\S)$/,
//     label_wrapinspection : true,

//     __CHINESE_REG: /^[\u4E00-\u9FFF\u3400-\u4DFF]+$/,
//     __JAPANESE_REG: /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g,
//     __KOREAN_REG: /^[\u1100-\u11FF]|[\u3130-\u318F]|[\uA960-\uA97F]|[\uAC00-\uD7AF]|[\uD7B0-\uD7FF]+$/,

//     isUnicodeCJK: function(ch) {
//         return this.__CHINESE_REG.test(ch) || this.__JAPANESE_REG.test(ch) || this.__KOREAN_REG.test(ch);
//     },

//     //Checking whether the character is a whitespace
//     isUnicodeSpace: function(ch) {
//         ch = ch.charCodeAt(0);
//         return ((ch >= 9 && ch <= 13) || ch === 32 || ch === 133 || ch === 160 || ch === 5760 || (ch >= 8192 && ch <= 8202) || ch === 8232 || ch === 8233 || ch === 8239 || ch === 8287 || ch === 12288);
//     },

//     safeMeasureText: function (ctx, string) {
//         var metric = ctx.measureText(string);
//         return metric && metric.width || 0;
//     },

//     fragmentText: function (stringToken, allWidth, maxWidth, measureText) {
//         //check the first character
//         var wrappedWords = [];
//         //fast return if strArr is empty
//         if(stringToken.length === 0 || maxWidth < 0) {
//             wrappedWords.push('');
//             return wrappedWords;
//         }

//         var text = stringToken;
//         while (allWidth > maxWidth && text.length > 1) {

//             var fuzzyLen = text.length * ( maxWidth / allWidth ) | 0;
//             var tmpText = text.substring(fuzzyLen);
//             var width = allWidth - measureText(tmpText);
//             var sLine = tmpText;
//             var pushNum = 0;

//             var checkWhile = 0;
//             var checkCount = 10;

//             //Exceeded the size
//             while (width > maxWidth && checkWhile++ < checkCount) {
//                 fuzzyLen *= maxWidth / width;
//                 fuzzyLen = fuzzyLen | 0;
//                 tmpText = text.substring(fuzzyLen);
//                 width = allWidth - measureText(tmpText);
//             }

//             checkWhile = 0;

//             //Find the truncation point
//             while (width <= maxWidth && checkWhile++ < checkCount) {
//                 if (tmpText) {
//                     var exec = this.label_wordRex.exec(tmpText);
//                     pushNum = exec ? exec[0].length : 1;
//                     sLine = tmpText;
//                 }

//                 fuzzyLen = fuzzyLen + pushNum;
//                 tmpText = text.substring(fuzzyLen);
//                 width = allWidth - measureText(tmpText);
//             }

//             fuzzyLen -= pushNum;
//             if (fuzzyLen === 0) {
//                 fuzzyLen = 1;
//                 sLine = sLine.substring(1);
//             }

//             var sText = text.substring(0, 0 + fuzzyLen), result;

//             //symbol in the first
//             if (this.label_wrapinspection) {
//                 if (this.label_symbolRex.test(sLine || tmpText)) {
//                     result = this.label_lastWordRex.exec(sText);
//                     fuzzyLen -= result ? result[0].length : 0;
//                     if (fuzzyLen === 0) fuzzyLen = 1;

//                     sLine = text.substring(fuzzyLen);
//                     sText = text.substring(0, 0 + fuzzyLen);
//                 }
//             }

//             // To judge whether a Emoji words are truncated
//             // todo Some Emoji are not well adapted, such as 🚗 and 🇨🇳
//             if (this.label_firstEmoji.test(sLine)) {
//                 result = this.label_lastEmoji.exec(sText);
//                 if (result && sText !== result[0]) {
//                     fuzzyLen -= result[0].length;
//                     sLine = text.substring(fuzzyLen);
//                     sText = text.substring(0, 0 + fuzzyLen);
//                 }
//             }

//             //To judge whether a English words are truncated
//             if (this.label_firstEnglish.test(sLine)) {
//                 result = this.label_lastEnglish.exec(sText);
//                 if (result && sText !== result[0]) {
//                     fuzzyLen -= result[0].length;
//                     sLine = text.substring(fuzzyLen);
//                     sText = text.substring(0, 0 + fuzzyLen);
//                 }
//             }

//             // The first line And do not wrap should not remove the space
//             if (wrappedWords.length === 0) {
//                 wrappedWords.push(sText);
//             }
//             else {
//                 sText = sText.trimLeft();
//                 if (sText.length > 0) {
//                     wrappedWords.push(sText);
//                 }
//             }
//             text = sLine || tmpText;
//             allWidth = measureText(text);
//         }

//         if (wrappedWords.length === 0) {
//             wrappedWords.push(text);
//         }
//         else {
//             text = text.trimLeft();
//             if (text.length > 0) {
//                 wrappedWords.push(text);
//             }
//         }
//         return wrappedWords;
//     },
// };

// var eventRegx = /^(click)(\s)*=|(param)(\s)*=/;
// var imageAttrReg = /(\s)*src(\s)*=|(\s)*height(\s)*=|(\s)*width(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;
// /**
//  * A utils class for parsing HTML texts. The parsed results will be an object array.
//  */
// var HtmlTextParser = function() {
//     this._parsedObject = {};
//     this._specialSymbolArray = [];
//     this._specialSymbolArray.push([/&lt;/g, '<']);
//     this._specialSymbolArray.push([/&gt;/g, '>']);
//     this._specialSymbolArray.push([/&amp;/g, '&']);
//     this._specialSymbolArray.push([/&quot;/g, '"']);
//     this._specialSymbolArray.push([/&apos;/g, '\'']);
// };

// HtmlTextParser.prototype = {
//     constructor: HtmlTextParser,
//     parse: function(htmlString) {
//         this._resultObjectArray = [];
//         this._stack = [];

//         var startIndex = 0;
//         var length = htmlString.length;
//         while (startIndex < length) {
//             var tagBeginIndex = htmlString.indexOf('<', startIndex);
//             if (tagBeginIndex < 0) {
//                 this._stack.pop();
//                 this._processResult(htmlString.substring(startIndex));
//                 startIndex = length;
//             } else {
//                 this._processResult(htmlString.substring(startIndex, tagBeginIndex));

//                 var tagEndIndex = htmlString.indexOf('>', startIndex);
//                 if (tagEndIndex === -1) {
//                     // cc.error('The HTML tag is invalid!');
//                     tagEndIndex = tagBeginIndex;
//                 } else if (htmlString.charAt(tagBeginIndex + 1) === '\/'){
//                     this._stack.pop();
//                 } else {
//                     this._addToStack(htmlString.substring(tagBeginIndex + 1, tagEndIndex));
//                 }
//                 startIndex = tagEndIndex + 1;

//             }
//         }


//         return this._resultObjectArray;
//     },

//     _attributeToObject: function (attribute) {
//         attribute = attribute.trim();

//         var obj:any = {};
//         var header = attribute.match(/^(color|size)(\s)*=/);
//         var tagName;
//         var nextSpace;
//         var eventObj;
//         var eventHanlderString;
//         if (header) {
//             tagName = header[0];
//             attribute = attribute.substring(tagName.length).trim();
//             if(attribute === "") return obj;

//             //parse color
//             nextSpace = attribute.indexOf(' ');
//             switch(tagName[0]){
//               case 'c':
//                   if (nextSpace > -1) {
//                       obj.color = attribute.substring(0, nextSpace).trim();
//                   } else {
//                       obj.color = attribute;
//                   }
//                   break;
//               case 's':
//                   obj.size = parseInt(attribute);
//                   break;
//             }

//             //tag has event arguments
//             if(nextSpace > -1) {
//                 eventHanlderString = attribute.substring(nextSpace+1).trim();
//                 eventObj = this._processEventHandler(eventHanlderString);
//                 obj.event = eventObj;
//             }
//             return obj;
//         }

//         header = attribute.match(/^(br(\s)*\/)/);
//         if(header && header[0].length > 0) {
//             tagName = header[0].trim();
//             if(tagName.startsWith("br") && tagName[tagName.length-1] === "/") {
//                 obj.isNewLine = true;
//                 this._resultObjectArray.push({text: "", style: {newline: true}});
//                 return obj;
//             }
//         }

//         header = attribute.match(/^(img(\s)*src(\s)*=[^>]+\/)/);
//         if(header && header[0].length > 0) {
//             tagName = header[0].trim();
//             if(tagName.startsWith("img") && tagName[tagName.length-1] === "/") {
//                 header = attribute.match(imageAttrReg);
//                 var tagValue;
//                 var remainingArgument;
//                 var isValidImageTag = false;
//                 while (header) {
//                     //skip the invalid tags at first
//                     attribute = attribute.substring(attribute.indexOf(header[0]));
//                     tagName = attribute.substr(0, header[0].length);
//                     //remove space and = character
//                     remainingArgument = attribute.substring(tagName.length).trim();
//                     nextSpace = remainingArgument.indexOf(' ');

//                     tagValue = (nextSpace > -1) ? remainingArgument.substr(0, nextSpace) : remainingArgument;
//                     tagName = tagName.replace(/[^a-zA-Z]/g, "").trim();
//                     tagName = tagName.toLocaleLowerCase();

//                     attribute = remainingArgument.substring(nextSpace).trim();
//                     if (tagName === "src") {
//                         obj.isImage = true
//                         if( tagValue.endsWith( '\/' ) ) tagValue = tagValue.substring( 0, tagValue.length - 1 );
//                         if( tagValue.indexOf('\'')===0 ) {
//                             isValidImageTag = true;
//                             tagValue = tagValue.substring( 1, tagValue.length - 1 );
//                         } else if( tagValue.indexOf('"')===0 ) {
//                             isValidImageTag = true;
//                             tagValue = tagValue.substring( 1, tagValue.length - 1 );
//                         }
//                         obj.src = tagValue;
//                     } else if (tagName === "height") {
//                         obj.imageHeight = parseInt(tagValue);
//                     } else if (tagName === "width") {
//                         obj.imageWidth = parseInt(tagValue);
//                     } else if (tagName === "click") {
//                         obj.event = this._processEventHandler(tagName + "=" + tagValue);
//                     }

//                     if (obj.event && tagName === 'param') {
//                         obj.event.param = tagValue.replace(/^\"|\"$/g, '');
//                     }

//                     header = attribute.match(imageAttrReg);
//                 }

//                 if( isValidImageTag && obj.isImage )
//                 {
//                     this._resultObjectArray.push({text: "", style: obj});
//                 }

//                 return {};
//             }
//         }

//         header = attribute.match(/^(outline(\s)*[^>]*)/);
//         if (header) {
//             attribute = header[0].substring("outline".length).trim();
//             var defaultOutlineObject = {color: "#ffffff", width: 1};
//             if (attribute) {
//                 var outlineAttrReg = /(\s)*color(\s)*=|(\s)*width(\s)*=|(\s)*click(\s)*=|(\s)*param(\s)*=/;
//                 header = attribute.match(outlineAttrReg);
//                 var tagValue;
//                 while (header) {
//                     //skip the invalid tags at first
//                     attribute = attribute.substring(attribute.indexOf(header[0]));
//                     tagName = attribute.substr(0, header[0].length);
//                     //remove space and = character
//                     remainingArgument = attribute.substring(tagName.length).trim();
//                     nextSpace = remainingArgument.indexOf(' ');
//                     if (nextSpace > -1) {
//                         tagValue = remainingArgument.substr(0, nextSpace);
//                     } else {
//                         tagValue = remainingArgument;
//                     }
//                     tagName = tagName.replace(/[^a-zA-Z]/g, "").trim();
//                     tagName = tagName.toLocaleLowerCase();

//                     attribute = remainingArgument.substring(nextSpace).trim();
//                     if (tagName === "click") {
//                         obj.event = this._processEventHandler(tagName + "=" + tagValue);
//                     } else if (tagName === "color") {
//                         defaultOutlineObject.color = tagValue;
//                     } else if (tagName === "width") {
//                         defaultOutlineObject.width = parseInt(tagValue);
//                     }

//                     if (obj.event && tagName === 'param') {
//                         obj.event.param = tagValue.replace(/^\"|\"$/g, '');
//                     }

//                     header = attribute.match(outlineAttrReg);
//                 }
//             }
//             obj.outline = defaultOutlineObject;
//         }

//         header = attribute.match(/^(on|u|b|i)(\s)*/);
//         if(header && header[0].length > 0) {
//             tagName = header[0];
//             attribute = attribute.substring(tagName.length).trim();
//             switch(tagName[0]){
//               case 'u':
//                   obj.underline = true;
//                   break;
//               case 'i':
//                   obj.italic = true;
//                   break;
//               case 'b':
//                   obj.bold = true;
//                   break;
//             }
//             if(attribute === "") {
//                 return obj;
//             }
//             eventObj = this._processEventHandler(attribute);
//             obj.event = eventObj;
//         }

//         return obj;
//     },

//     _processEventHandler: function (eventString) {
//         var index = 0;
//         var obj = {};
//         var eventNames = eventString.match(eventRegx);
//         var isValidTag = false;
//         while(eventNames) {
//             var eventName = eventNames[0];
//             var eventValue = "";
//             isValidTag = false;
//             eventString = eventString.substring(eventName.length).trim();
//             if(eventString.charAt(0) === "\"") {
//                 index = eventString.indexOf("\"", 1);
//                 if (index > -1) {
//                     eventValue = eventString.substring(1, index).trim();
//                     isValidTag = true;
//                 }
//                 index++;
//             } else if(eventString.charAt(0) === "\'") {
//                 index = eventString.indexOf('\'', 1);
//                 if(index > -1) {
//                     eventValue = eventString.substring(1, index).trim();
//                     isValidTag = true;
//                 }
//                 index++;
//             } else {
//                 //skip the invalid attribute value
//                 var match = eventString.match(/(\S)+/);
//                 if(match) {
//                     eventValue = match[0];
//                 } else {
//                     eventValue = "";
//                 }
//                 index = eventValue.length;
//             }

//             if(isValidTag) {
//                 eventName = eventName.substring(0, eventName.length-1).trim();
//                 obj[eventName] = eventValue;
//             }

//             eventString = eventString.substring(index).trim();
//             eventNames = eventString.match(eventRegx);
//         }

//         return obj;
//     },

//     _addToStack: function(attribute) {
//         var obj = this._attributeToObject(attribute);

//         if (this._stack.length === 0){
//             this._stack.push(obj);
//         } else {
//             if(obj.isNewLine || obj.isImage) {
//                 return;
//             }
//             //for nested tags
//             var previousTagObj = this._stack[this._stack.length - 1];
//             for (var key in previousTagObj) {
//                 if (!(obj[key])) {
//                     obj[key] = previousTagObj[key];
//                 }
//             }
//             this._stack.push(obj);
//         }
//     },

//     _processResult: function(value) {
//         if (value === "") {
//             return;
//         }

//         value = this._escapeSpecialSymbol(value);
//         if (this._stack.length > 0) {
//             this._resultObjectArray.push({text: value, style: this._stack[this._stack.length - 1]});
//         } else {
//             this._resultObjectArray.push({text: value});
//         }
//     },

//     _escapeSpecialSymbol: function(str) {
//         for(var i = 0; i < this._specialSymbolArray.length; ++i) {
//             var key = this._specialSymbolArray[i][0];
//             var value = this._specialSymbolArray[i][1];

//             str = str.replace(key, value);
//         }
//         return str;
//     }
// };
// var _htmlTextParser = new HtmlTextParser();




// if(cc.RichText.prototype["_addRichTextImageElement_origin"]===null || cc.RichText.prototype["_addRichTextImageElement_origin"]===undefined) {
// 	cc.RichText.prototype["_addRichTextImageElement_origin"] = cc.RichText.prototype["_addRichTextImageElement"];
// 	cc.RichText.prototype["_addRichTextImageElement"] = function (richTextElement) {
//         let spriteFrameName = richTextElement.style.src;
//         var arr = spriteFrameName.split("|");
//         spriteFrameName = arr[0];
//         var compName = arr[1];
//         var emojType = arr[2];
//         let spriteFrame = cc.loader.getRes(spriteFrameName, cc.SpriteFrame);
//         if (spriteFrame) {
//             let spriteNode = new cc.PrivateNode("RICHTEXT_Image_CHILD");
//             let spriteComponent = spriteNode.addComponent(cc.Sprite);
//             switch (richTextElement.style.imageAlign)
//             {
//                 case 'top':
//                     spriteNode.setAnchorPoint(0, 1);
//                     break;
//                 case 'center':
//                     spriteNode.setAnchorPoint(0, 0.5);
//                     break;
//                 default:
//                     spriteNode.setAnchorPoint(0, 0);
//                     break;
//             }
//             if (richTextElement.style.imageOffset) spriteNode._imageOffset = richTextElement.style.imageOffset;
//             spriteComponent.type = cc.Sprite.Type.SLICED;
//             spriteComponent.sizeMode = cc.Sprite.SizeMode.CUSTOM;
//             this.node.addChild(spriteNode);
//             if(compName && compName!=""){
//                 let cpn = spriteNode.addComponent(compName);
//                 if(emojType && emojType!="") {
//                     cpn.setEmojType(emojType);
//                 }
//             }
//             this._labelSegments.push(spriteNode);

//             let spriteRect = spriteFrame.getRect();
//             let scaleFactor = 1;
//             let spriteWidth = spriteRect.width;
//             let spriteHeight = spriteRect.height;
//             let expectWidth = richTextElement.style.imageWidth;
//             let expectHeight = richTextElement.style.imageHeight;

//             if (expectHeight > 0) {
//                 scaleFactor = expectHeight / spriteHeight;
//                 spriteWidth = spriteWidth * scaleFactor;
//                 spriteHeight = spriteHeight * scaleFactor;
//             }
//             else {
//                 scaleFactor = this.lineHeight / spriteHeight;
//                 spriteWidth = spriteWidth * scaleFactor;
//                 spriteHeight = spriteHeight * scaleFactor;
//             }

//             if (expectWidth > 0) spriteWidth = expectWidth;

//             if (this.maxWidth > 0) {
//                 if (this._lineOffsetX + spriteWidth > this.maxWidth) {
//                     this._updateLineInfo();
//                 }
//                 this._lineOffsetX += spriteWidth;

//             }
//             else {
//                 this._lineOffsetX += spriteWidth;
//                 if (this._lineOffsetX > this._labelWidth) {
//                     this._labelWidth = this._lineOffsetX;
//                 }
//             }
//             spriteComponent.spriteFrame = spriteFrame;
//             spriteNode.setContentSize(spriteWidth, spriteHeight);
//             spriteNode._lineCount = this._lineCount;

//             if (richTextElement.style.event) {
//                 if (richTextElement.style.event.click) {
//                     spriteNode._clickHandler = richTextElement.style.event.click;
//                 }
//                 if (richTextElement.style.event.param) {
//                     spriteNode._clickParam = richTextElement.style.event.param;
//                 }
//                 else {
//                     spriteNode._clickParam = '';
//                 }
//             }
//             else {
//                 spriteNode._clickHandler = null;
//             }
//         }
//         else {
//             //cc.warnID(4400);
//         }
// 	}

// 	cc.RichText.prototype["_updateRichText_origin"] = cc.RichText.prototype["_updateRichText"];
// 	cc.RichText.prototype["_updateRichText"] = function() {
// 		if (!this.enabledInHierarchy) return;

//         let newTextArray = _htmlTextParser.parse(this.string);
//         if (!this._needsUpdateTextLayout(newTextArray)) {
//             this._textArray = newTextArray;
//             this._updateLabelSegmentTextAttributes();
//             return;
//         }

//         this._textArray = newTextArray;
//         this._resetState();

//         let lastEmptyLine = false;
//         let label;
//         let labelSize;

//         for (let i = 0; i < this._textArray.length; ++i) {
//             let richTextElement = this._textArray[i];
//             let text = richTextElement.text;
//             //handle <br/> <img /> tag
//             if (text === "") {
//                 if (richTextElement.style && richTextElement.style.newline) {
//                     this._updateLineInfo();
//                     continue;
//                 }
//                 if (richTextElement.style && richTextElement.style.isImage) {
//                     this._addRichTextImageElement(richTextElement);
//                     continue;
//                 }
//             }
//             let multilineTexts = text.split("\n");

//             for (let j = 0; j < multilineTexts.length; ++j) {
//                 let labelString = multilineTexts[j];
//                 if (labelString === "") {
//                     //for continues \n
//                     if (this._isLastComponentCR(text)
//                         && j === multilineTexts.length - 1) {
//                         continue;
//                     }
//                     this._updateLineInfo();
//                     lastEmptyLine = true;
//                     continue;
//                 }
//                 lastEmptyLine = false;

//                 if (this.maxWidth > 0) {
//                     let labelWidth = this._measureText(i, labelString);
//                     this._updateRichTextWithMaxWidth(labelString, labelWidth, i);

//                     if (multilineTexts.length > 1 && j < multilineTexts.length - 1) {
//                         this._updateLineInfo();
//                     }
//                 }
//                 else {
//                     label = this._addLabelSegment(labelString, i);
//                     labelSize = label.getContentSize();

//                     this._lineOffsetX += labelSize.width;
//                     if (this._lineOffsetX > this._labelWidth) {
//                         this._labelWidth = this._lineOffsetX;
//                     }

//                     if (multilineTexts.length > 1 && j < multilineTexts.length - 1) {
//                         this._updateLineInfo();
//                     }
//                 }
//             }
//         }
//         if (!lastEmptyLine) {
//             this._linesWidth.push(this._lineOffsetX);
//         }

//         if (this.maxWidth > 0) {
//             this._labelWidth = this.maxWidth;
//         }
//         this._labelHeight = (this._lineCount + textUtils.BASELINE_RATIO) * this.lineHeight;

//         // trigger "size-changed" event
//         this.node.setContentSize(this._labelWidth, this._labelHeight);

//         this._updateRichTextPosition();
//         this._layoutDirty = false;
// 	}
// }