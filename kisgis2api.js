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

    complexExample(string1, string2, number1, number2, object1) {
        let message = {
            name: 'complexExample',
            params: [string1, string2, number1, number2, object1]
        }
        this._window.postMessage(message, '*');
    }
  }
