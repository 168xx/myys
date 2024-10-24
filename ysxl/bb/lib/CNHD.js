var rule = {
    title: 'cnn影院',
    host: 'https://m.zhuoloufs.com',
    url: '/api/mw-movie/anonymous/video/list?fyfilter',
    homeUrl: '/api/mw-movie/anonymous/rank/all',
    searchUrl: '/api/mw-movie/anonymous/video/searchByWordPageable?keyword=**&pageNum=fypage&pageSize=12&type=false',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
    },
    searchable: 2,
    quickSearch: 1,
    filterable: 1,
    filter_url: '{{fl.地区}}&{{fl.语言}}&pageNum=fypage&pageSize=30&{{fl.排序 or "sort=1"}}&sortBy=1&{{fl.类型}}&type1=fyclass&{{fl.剧情}}&{{fl.年份}}',
    class_name: '电影&电视剧&综艺&动漫',
    class_url: '1&2&3&4',
    filter: 'H4sIAAAAAAAAA+1Y7U4aQRR9l/3tD3b51IQnaUxDGtIftbZRa2KMDYqiYAtqDIrQ2sYPsIqAGitLwZfZmd19iy7O7HxcNhEj/ZQ/JHPO4c7MvTv37Oy8oipjz+aVV/E5ZUwxGy30eV0ZUSZjr+PieDY28S5+J5x0YLRSsZOVLuwMlIURiuZLKF2m6Mzc23hU0ziZqRjtkkT6GWmWN1GzJZJ+HyfXGji5Iv0zxEi8dGbmNyUyzOc8WgVhIwKZLoOwfk7ixQ2cyEskn9PM1Mz2N4kMivs0t+Wt8H3iZAYv7UlkgJNru4aelrYihE1t2YUT6Z8qX9Bix97rSPvkJFq5NlrSVgLOgsa7NKk5KtXRB53XnI37qblxU0XFNjos24UU5WJT8VhUwmWxfVzAN7VeMcVB5FwdNzsekQnOMtDJOqAoowhL7s4RLp2JAoq4Anv/BESgCMvjxzrSj0UBRdgUl3UQgSKelSARCCJVo3lltNpCNdxxP9XQfFqAYnPx2FT0biyQfkD6RVIDpCaSKiBVkfQB0ieQ6qhMOmOBjAAyIpJhQIZFMgTIkEgGARkUSZAhVcyQCjKkihlSQYZUMUMqyJAqZkgFGVLFDPlG3zs/QOGC4qNh1apWJcEfDTbuqzkX246eohOxyZdRirgCa70BBBRhZ+ziEAgoIhwhIKCIcAiBgCKeJ4QssveE4OwW0nM8DWwsp8G4yeDdL3jn2t65ohGn30zNRHldDF3H9W37dNdoZ0UFr7lVW0ZrqV5FoLug8RFFG5h1FtuGXgbuKTyZ+KzcbWiA54+10zidjgj5kJj5bjuT+ZAGEg/5iNyZXMN0OxMz0H42mDu0Dly3nX3+YiI2PR2loKcBuhoKer5jsDgEZJrza6RXoYaAnh7uaijo+crC4hDQ8xWDaQjo+abBNARkmmwK5S6ghoBszftVM70K10zA/83QH+/X978SDP166Nf9+/WgjBgXzu3EnlX7JPkgA/8mO3bOAxQQ5Ff4NS4lrNtNXLzC+bq3X+PvLZTxcHRe1sc7un/o6AN0dLO075TELCegaTGcP6yXRnMDyCjIarfcQLmD3mgcH7rgg13wKZnc8C71T/fmwIB7c6aCf5yK7TEchO21VxKCHbxXEh5gk+3juiN9PGUdloBMk6xaX3u6MAHZXOInRjYXAR9yJbJuNxwE9mgCPuiqt3xrnh7BuQj4Zxr9ve142G2HVwrl918pHu9HT85NFn4CqrWZNfgaAAA=',
    limit: 6,
    //double: false,
    play_parse: true,
    lazy: $js.toString(() => {
        let d = [];               
        let ht = input.match(/\?(.*)/)[1];
        let t = new Date().getTime();
        eval(getCryptoJS);
        let signkey = ht + '&key=cb808529bae6b6be45ecfab29a4889bc&t=' + t;
        let key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString();
        let html = JSON.parse(request(input, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
                'deviceid': '58a80c52-138c-48fd-8edb-138fd74d12c8',
                'sign': key,
                't': t
            }
        }));
        let url = html.data.playUrl;
        input = {
            url: url,
            parse: 0,
            header: rule.headers
        }
        setResult(d)
    }),
    推荐: $js.toString(() => {
        let d = [];
        let ht;
        if (input && input.includes('?')) {
            ht = input.match(/\?(.*)/)[1] + '&'
        } else {
            ht = ''
        };
        console.log("zjdjakjd===="+input)
        //let ht = input.match(/\?(.*)/)[1];
        let t = new Date().getTime();
        eval(getCryptoJS);
        let signkey = ht + 'key=cb808529bae6b6be45ecfab29a4889bc&t=' + t;
        //console.log(signkey);
        let key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString();
        let html = JSON.parse(request(input, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
                'deviceid': '58a80c52-138c-48fd-8edb-138fd74d12c8',
                'sign': key,
                't': t
            }
        }));
        //console.log(html);
        let bata = html.data;
        // 创建一个空数组来存储结果
        //console.log(bata);
        Object.keys(bata).forEach((key) => {
            bata[key].forEach((it) => {
                let id = 'https://www.cfkj86.com/detail/' + it.vodId;
                d.push({
                    url: id,
                    title: it.vodName,
                    img: it.vodPic,
                    desc: it.type,
                    year: it.vodArea,
                })
            });
        });
        setResult(d)
    }),
    一级: $js.toString(() => {
        let d = [];
        let url = input.replace(/&+/g, '&');
        if (url.charAt(url.indexOf('?') + 1) === '&') {
            url = url.replace('?', '').replace('&', '?', 1);
        };
        if (url.charAt(url.length - 1) === '&') {
            url = url.slice(0, -1);
        };
        let ht = url.match(/\?(.*)/)[1];
        //console.log("zjdjakjd===="+ht)
        let t = new Date().getTime();
        eval(getCryptoJS);
        let signkey = ht + '&key=cb808529bae6b6be45ecfab29a4889bc&t=' + t;
        let key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString();
        let html = JSON.parse(request(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
                'deviceid': '58a80c52-138c-48fd-8edb-138fd74d12c8',
                'sign': key,
                't': t
            }
        }));
        let bata = html.data.list;
        bata.forEach(it => {
            let id = 'https://www.cfkj86.com/detail/' + it.vodId;
            d.push({
                url: id,
                title: it.vodName,
                img: it.vodPic,
                desc: it.vodVersion,
                year: it.vodYear,
            })
        });
        setResult(d)
    }),
    二级: $js.toString(() => {
        let urls = [];
        let html = request(input);
        const result = html.split('searchParams')[1].split('likeData')[0];
        const inputString = result;
        const secondColonIndex = inputString.indexOf(':', inputString.indexOf(':') + 1);
        const lastCommaIndex = inputString.lastIndexOf(',');
        const targetContent = inputString.slice(secondColonIndex + 1, lastCommaIndex);
        let tt = targetContent.replace(/\\/g, '');
        // console.log(targetContent);
        let data = JSON.parse(tt).data;
        //console.log(tt);
        let ul = 'https://m.cfkj86.com/api/mw-movie/anonymous/v1/video/episode/url?id=' + data.vodId + '&nid=';
        let i = 1;
        data.episodeList.forEach(it => {
            urls.push('第'+i+'集' + '$' + ul + it.nid);
            i++
        })
        VOD = {
            vod_name: data.vodName,
            vod_pic: data.vodPic,
            type_name: data.typeName,
            vod_year: data.vodPubdate,
            vod_area: data.vodArea,
            vod_remarks: data.vodVersion,
            vod_actor: data.vodActor,
            vod_director: data.vodDirector,
            vod_content: data.vodBlurb,
            vod_play_from: 'XTHD',
            vod_play_url: urls.join('#')
        }
    }),
    搜索: $js.toString(() => {
        let d = [];
        let ht = input.match(/\?(.*)/)[1];
        let t = new Date().getTime();
        eval(getCryptoJS);
        let signkey = ht + '&key=cb808529bae6b6be45ecfab29a4889bc&t=' + t;
        let key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString();
        let html = JSON.parse(request(input, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
                'deviceid': '58a80c52-138c-48fd-8edb-138fd74d12c8',
                'sign': key,
                't': t
            }
        }));
        let bata = html.data.list;
        bata.forEach(it => {
            let id = 'https://www.cfkj86.com/detail/' + it.vodId;
            d.push({
                url: id,
                title: it.vodName,
                img: it.vodPic,
                desc: it.vodVersion,
                year: it.vodYear,
            })
        });
        setResult(d)
    }),
}