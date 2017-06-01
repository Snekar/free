/**
 * Created by 范儿1 on 2017/5/31.
 */
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

TopClient = require('./topClient').TopClient;
var client = new TopClient({
    'appkey': 'appkey',
    'appsecret': 'secret',
    'REST_URL': 'http://gw.api.taobao.com/router/rest'
});

client.execute('alibaba.xiami.api.rank.music.list.get', {
    'src':'ttpod'
}, function(error, response) {
    if (!error) console.log(response);
    else console.log(error);
})