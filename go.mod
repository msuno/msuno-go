module web

replace (
	golang.org/x/crypto => github.com/golang/crypto v0.0.0-20190513172903-22d7a77e9e5f
	golang.org/x/net => github.com/golang/net v0.0.0-20190522155817-f3200d17e092
	golang.org/x/sync => github.com/golang/sync v0.0.0-20190423024810-112230192c58
	golang.org/x/sys => github.com/golang/sys v0.0.0-20190524152521-dbbf3f1254d4
	golang.org/x/text => github.com/golang/text v0.3.2
	golang.org/x/tools => github.com/golang/tools v0.0.0-20190611222205-d73e1c7e250b
)

require (
	github.com/astaxie/beego v1.11.1
	github.com/go-redis/redis v6.15.2+incompatible // indirect
	github.com/mattn/go-sqlite3 v1.10.0
	github.com/minio/minio-go/v6 v6.0.28
)
