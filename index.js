const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')

const app = express()
const url1 = 'https://www.bilibili.com/video/BV1Jy4y1M7sy/?spm_id_from=333.788.recommend_more_video.4'

axios(url1).then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    var comments = 0
    $('.left-container-under-player', html).each(function() {
       comments++
       console.log(comments)
    })
}).catch(err => console.log("Error: ", err))


app.listen(PORT, () => console.log(`Hello, World! From ${PORT}`))