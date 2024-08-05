class kisgis2api {

    constructor(window) { 
        this._window = window;
    }

    showTreeNode(_id) {
        let message = {
            name: 'showTreeNode',
            params: [_id]
        }
        this._window.postMessage(message, '*');
    }
  }
