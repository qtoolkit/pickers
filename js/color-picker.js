"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var qtk_1 = require("qtk");
var ColorPicker = (function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker() {
        _super.apply(this, arguments);
    }
    return ColorPicker;
}(qtk_1.MessageBox));
exports.ColorPicker = ColorPicker;
