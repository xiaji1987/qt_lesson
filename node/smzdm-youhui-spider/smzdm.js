const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
//GET POST
//https.createServer
https.get('https://www.smzdm.com/youhui/', function(res) {
    res.setEncoding('utf-8');
    // console.log(res);
    let html = '';
    res.on('data', function(chunk) {
        html += chunk;
    });
    res.on('end', function(chunk) {
        const $ = cheerio.load(html, {
            decodeEntities:false,
        });
        // console.log(html);
        let lists = [];
        $('.list.list_preferential').each(function() {
            const _this = this;
            let title = $('.itemName a', _this).text();
            const price = $('.red', _this).text();
            const img = $('.picLeft img', _this).attr('src');
            lists.push({
                title:title, price:price, img:img
            })
            saveImage('./img/', img);
        })
        saveList('./data/lists.json', lists);
        // console.log(lists);
    });
});

function saveImage(imgDir, imgUrl) {
    https.get(imgUrl, (res)=> {
        res.setEncoding('binary');
        const ImgName = path.basename(imgUrl);
        res.pipe(fs.createWriteStream(imgDir + ImgName));
        // var data = '';
        // res.on('data', (chunk)=> {
        //     data += chunk;
        // });
        // res.on('end', function() {
        //     // www.smzdm.com/a.png;
        //     const ImgName = path.basename(imgUrl);
        //     fs.writeFile(imgDir + ImgName, data, 'binary', (err)=> {
        //         if(!err) {
        //             console.log('img saved');
        //         };
        //     });
        // });
    });
};

function saveList(path, list) {
    fs.writeFile(path, JSON.stringify(list),
    (err) => {
        if(!err) {
            console.log('lists saved');
        }
    });
};

