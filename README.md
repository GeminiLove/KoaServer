# KoaServer
基于koa2的后台服务

 1.finished：正在处于选型和配置中，考虑如何进行项目结构划分，即将做基于MoogoDB数据库的连接和远程服务器的部分配置，测试启动nodemon server/index.js
 2.workering: 使用方法：
        后台启动方式: 
            1.进入newServer文件下
            2.执行npm run dev
            3.浏览器打开： localhost:7001端口
        数据库配置方式：
            1.在newServier同级目录下，创建db和log文件夹。
            2.执行方法： mongod --dbpath="E:\KoaServer\db" --logpath="E:\KoaServer\log\log.txt”
              注意，这里由于本人穷逼，公司没给我配macbook，所以这是windows的开发环境，这就很操蛋。解决方式： 尽快部署到云服务器上
            3.mongodb数据库url = mongodb://127.0.0.1:27017/example，无用户名，无密码的状态
            4.如果你要涉及后台开发，需要注意egg.js没有热更新的方式。此处正在想办法解决。

2018/3/18
今天的工作: 完成了数据库联调，后端CSRF的设置，进行model、service、controller的分层，初步进行了user模块的login相关功能尝试。可以正式开工。
*****此处是重点：
    建议前端开发的时候，能将端口设置到9000端口上，因为我只开放了这个端口的请求。服务器，这里正在进行尝试，看看需要什么，暂时先这样，计划任务每天能抽出时间写一点。
    login模块：
      1.method: post, body: { username:string, password: string },你需要给什么error的提示信息，可以直接在github的pull reqest上说
      2.register，show，update是明天的任务，需要再做考虑
      3.socket.io已经上了，但是配置这边没确定，所以我没有在plguin里面开启，随着项目确定，我在设置相关信息。

2018/3/14

今天的主要工作： 由koa2的基础框架转变成egg.js，第一次使用，发现有一些地方不熟练，导致连接数据失败。正在熟悉官方API，此项目暂时无法运行，我这两天抓紧熟悉。其后的试验点，将其数据库和后台服务部署服务器上，进行分离开发，这件事情需要快点赶工。我这段时间尽快去弄，我的最晚期限是这周完成。


改变选型的原因：
  1.因为太年轻，需要后期的分离是一个问题，这个我需要进行考虑，同时，后台的测试，也是需要考虑的事情。
  2.需要较好的MVC模式的实现，这个比我自己班门弄斧要强。
