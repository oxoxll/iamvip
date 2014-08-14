function AccountListCtrl($scope) {
    var randomArr = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
    $scope.accounts = getAccounts();

    $scope.change = function() {
        $scope.accounts = getAccounts();
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
