cc.Button.prototype["_onTouchEnded"] = function (event) {
    if (!this.interactable || !this.enabledInHierarchy) return;
    console.log("===========");
    if (this._pressed) {
        cc.Component.EventHandler.emitEvents(this.clickEvents, event);
        this.node.emit('click', this);
    }
    this._pressed = false;
    this._updateState();
    event.stopPropagation();
}