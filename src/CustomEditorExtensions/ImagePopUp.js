export default (module, exports, __webpack_require__) => {
    
    
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    
    var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
    
    var _tuiCodeSnippet = __webpack_require__(1);
    
    var _tuiCodeSnippet2 = _interopRequireDefault(_tuiCodeSnippet);
    
    var _layerpopup = __webpack_require__(5);
    
    var _layerpopup2 = _interopRequireDefault(_layerpopup);
    
    var _tab = __webpack_require__(43);
    
    var _tab2 = _interopRequireDefault(_tab);
    
    var _i18n = __webpack_require__(3);
    
    var _i18n2 = _interopRequireDefault(_i18n);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @fileoverview Implements PopupAddImage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @author NHN Ent. FE Development Lab <dl_javascript@nhnent.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */
    
    
    var CLASS_IMAGE_URL_INPUT = 'te-image-url-input';
    var CLASS_IMAGE_FILE_INPUT = 'te-image-file-input';
    var CLASS_ALT_TEXT_INPUT = 'te-alt-text-input';
    var CLASS_OK_BUTTON = 'te-ok-button';
    var CLASS_CLOSE_BUTTON = 'te-close-button';
    var CLASS_FILE_TYPE = 'te-file-type';
    var CLASS_URL_TYPE = 'te-url-type';
    var CLASS_TAB_SECTION = 'te-tab-section';
    var TYPE_UI = 'ui';
    
    /**
     * Class PopupAddImage
     * It implements a Image Add Popup
     * @extends {LayerPopup}
     */
    
    var PopupAddImage = function (_LayerPopup) {
      _inherits(PopupAddImage, _LayerPopup);
    
      /**
       * Creates an instance of PopupAddImage.
       * @param {LayerPopupOption} options - layer popup option
       * @memberof PopupAddImage
       */
      function PopupAddImage(options) {
        _classCallCheck(this, PopupAddImage);
    
        var POPUP_CONTENT = '\n            <div class="' + CLASS_TAB_SECTION + '"></div>\n            <div class="' + CLASS_URL_TYPE + '">\n                <label for="">' + _i18n2.default.get('Image URL') + '</label>\n                <input type="text" class="' + CLASS_IMAGE_URL_INPUT + '" />\n            </div>\n            <form enctype="multipart/form-data" class="' + CLASS_FILE_TYPE + '">\n                <label for="">' + _i18n2.default.get('Select image file') + '</label>\n                <input type="file" class="' + CLASS_IMAGE_FILE_INPUT + '" accept="image/*" />\n            </form>\n            <label for="url">' + _i18n2.default.get('Description') + '</label>\n            <input type="text" class="' + CLASS_ALT_TEXT_INPUT + '" />\n            <div class="te-button-section">\n                <button type="button" class="' + CLASS_OK_BUTTON + '">' + _i18n2.default.get('OK') + '</button>\n                <button type="button" class="' + CLASS_CLOSE_BUTTON + '">' + _i18n2.default.get('Cancel') + '</button>\n            </div>\n        ';
        options = _tuiCodeSnippet2.default.extend({
          header: true,
          title: _i18n2.default.get('Insert image'),
          className: 'te-popup-add-image tui-editor-popup',
          content: POPUP_CONTENT
        }, options);
        return _possibleConstructorReturn(this, (PopupAddImage.__proto__ || Object.getPrototypeOf(PopupAddImage)).call(this, options));
      }
    
      /**
       * init instance.
       * store properties & prepare before initialize DOM
       * @param {LayerPopupOption} options - layer popup options
       * @memberof PopupAddImage
       * @protected
       * @override
       */
    
    
      _createClass(PopupAddImage, [{
        key: '_initInstance',
        value: function _initInstance(options) {
          _get(PopupAddImage.prototype.__proto__ || Object.getPrototypeOf(PopupAddImage.prototype), '_initInstance', this).call(this, options);
    
          this.eventManager = options.eventManager;
        }
    
        /**
         * initialize DOM, render popup
         * @memberof PopupAddImage
         * @protected
         * @override
         */
    
      }, {
        key: '_initDOM',
        value: function _initDOM() {
          _get(PopupAddImage.prototype.__proto__ || Object.getPrototypeOf(PopupAddImage.prototype), '_initDOM', this).call(this);
    
          var $popup = this.$el;
    
          this._$imageUrlInput = $popup.find('.' + CLASS_IMAGE_URL_INPUT);
          this._$imageFileInput = $popup.find('.' + CLASS_IMAGE_FILE_INPUT);
          this._$altTextInput = $popup.find('.' + CLASS_ALT_TEXT_INPUT);
    
          var $fileTypeSection = $popup.find('.' + CLASS_FILE_TYPE);
          var $urlTypeSection = $popup.find('.' + CLASS_URL_TYPE);
          var $tabSection = this.$body.find('.' + CLASS_TAB_SECTION);
          this.tab = new _tab2.default({
            initName: _i18n2.default.get('File'),
            items: [_i18n2.default.get('File'), _i18n2.default.get('URL')],
            sections: [$fileTypeSection, $urlTypeSection]
          });
          $tabSection.append(this.tab.$el);
        }
    
        /**
         * bind DOM events
         * @memberof PopupAddImage
         * @protected
         * @override
         */
    
      }, {
        key: '_initDOMEvent',
        value: function _initDOMEvent() {
          var _this2 = this;
    
          _get(PopupAddImage.prototype.__proto__ || Object.getPrototypeOf(PopupAddImage.prototype), '_initDOMEvent', this).call(this);
    
          this.on('shown', function () {
            return _this2._$imageUrlInput.focus();
          });
          this.on('hidden', function () {
            return _this2._resetInputs();
          });
    
          this.on('change .' + CLASS_IMAGE_FILE_INPUT, function () {
            var filename = _this2._$imageFileInput.val().split('\\').pop();
            _this2._$altTextInput.val(filename);
          });
    
          this.on('click .' + CLASS_CLOSE_BUTTON, function () {
            return _this2.hide();
          });
          this.on('click .' + CLASS_OK_BUTTON, function () {
            var imageUrl = _this2._$imageUrlInput.val();
            var altText = _this2._$altTextInput.val();
    
            if (imageUrl) {
              _this2._applyImage(imageUrl, altText);
            } else {
              var _$imageFileInput$get = _this2._$imageFileInput.get(0),
                  files = _$imageFileInput$get.files;
    
              if (files.length) {
                var imageFile = files.item(0);
                var hookCallback = function hookCallback(url, text) {
                  return _this2._applyImage(url, altText || text);
                };
    
                _this2.eventManager.emit('addImageBlobHook', imageFile, hookCallback, TYPE_UI);
              }
            }
    
            _this2.hide();
          });
    
          this.tab.on('itemClick', function () {
            return _this2._resetInputs();
          });
        }
    
        /**
         * bind editor events
         * @memberof PopupAddImage
         * @protected
         * @abstract
         */
    
      }, {
        key: '_initEditorEvent',
        value: function _initEditorEvent() {
          var _this3 = this;
    
          _get(PopupAddImage.prototype.__proto__ || Object.getPrototypeOf(PopupAddImage.prototype), '_initEditorEvent', this).call(this);
    
          this.eventManager.listen('focus', function () {
            return _this3.hide();
          });
          this.eventManager.listen('closeAllPopup', function () {
            return _this3.hide();
          });
    
          this.eventManager.listen('openPopupAddImage', function () {
            _this3.eventManager.emit('closeAllPopup');
            _this3.show();
          });
        }
      }, {
        key: '_applyImage',
        value: function _applyImage(imageUrl, altText) {
          this.eventManager.emit('command', 'AddImage', {
            imageUrl: imageUrl,
            altText: altText || 'image'
          });
          this.hide();
        }
      }, {
        key: '_resetInputs',
        value: function _resetInputs() {
          this.$el.find('input').val('');
        }
      }]);
    
      return PopupAddImage;
    }(_layerpopup2.default);
    
    exports.default = PopupAddImage;
    
    /***/ }