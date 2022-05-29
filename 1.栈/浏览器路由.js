

class Router {
    constructor () {
        this.stackOne = []
        this.stackTwo = []
    }
    init (config) {
        var self = this;
        // 页面首次加载 匹配路由
        window.addEventListener('load', function (event) {
            // console.log('load', event);
            self.historyChange(event)
        }, false)

        // 路由切换
        window.addEventListener('hashchange', function (event) {
            // console.log('hashchange', event);
            self.historyChange(event)
        }, false)
    }

    // 路由历史纪录变化
    historyChange (event) {
        // var currentHash = util.getParamsUrl();
        var nameStr = 'router-history'
        this.history = window.sessionStorage[nameStr] ? JSON.parse(window.sessionStorage[nameStr]) : []

        var back = false; // 后退
        var refresh = false; // 刷新
        var forward = false; // 前进
        var index = 0;
        var len = this.history.length;

        // 比较当前路由的状态，得出是后退、前进、刷新的状态。
        for (var i = 0; i < len; i++) {
            var h = this.history[i];
            if (h.hash === currentHash.path && h.key === currentHash.query.key) {
                index = i
                if (i === len - 1) {
                    refresh = true
                } else {
                    back = true
                }
                break;
            } else {
                forward = true
            }
        }
    }

    back () {
        if (this.stackTwo.length === 0) return null;
        const item = this.stackTwo.pop()
        this.stackOne.push(item)
    }

    forward () {
        if (this.stackOne.length === 0) return null;
        const item = this.stackOne.pop();
        this.stackTwo.push(item)
    }
}
