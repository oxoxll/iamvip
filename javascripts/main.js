function AccountListCtrl($scope) {
    var randomArr = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
    $scope.accounts = getAccounts();

    $scope.change = function () {
        $scope.accounts = getAccounts();
    };

    $scope.copy = function (target) {
        alert('复制成功');
    };

    function getAccounts() {
        var accounts = [];
        for (var i = 0; i < 10; i++) {
            var account = {name: random(7), pwd: random(8)};
            accounts.push(account);
        }
        return accounts;
    }

    function random(n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += randomArr[parseInt(Math.random() * 62)];
        }
        return ret;
    }
}

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fac2122fa75b4c3a12135db6aefe4335e' type='text/javascript'%3E%3C/script%3E"));