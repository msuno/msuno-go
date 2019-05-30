module web

replace (
	golang.org/x/crypto => github.com/golang/crypto v0.0.0-20190513172903-22d7a77e9e5f
	golang.org/x/net => github.com/golang/net v0.0.0-20190522155817-f3200d17e092
	golang.org/x/sync => github.com/golang/sync v0.0.0-20190423024810-112230192c58
	golang.org/x/sys => github.com/golang/sys v0.0.0-20190523142557-0e01d883c5c5
	golang.org/x/text => github.com/golang/text v0.3.2
	golang.org/x/tools => github.com/golang/tools v0.0.0-20190523174634-38d8bcfa38af
)

go 1.12

require (
	github.com/astaxie/beego v1.11.1
	github.com/casbin/casbin v1.8.2
	github.com/smartystreets/goconvey v0.0.0-20190330032615-68dc04aab96a
)
