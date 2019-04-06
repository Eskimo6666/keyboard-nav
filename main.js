var keys = {
    0:['esc','.','.','.','.','.','.','.','.','.','.','.','.','.'],
    1:['.','1','2','3','4','5','6','7','8','9','0','-','=','del'],
    2:['tab','q','w','e','r','t','y','u','i','o','p','{','}','|'],
    3:['.','a','s','d','f','g','h','j','k','l',':','"','enter'],
    4:['shift','z','x','c','v','b','n','m','<','>','?','shift'],
    5:['fn','ctrl','opt','comd','.','comd','opt','.','.','.'],
    length:6
}
var hash = {
    q:'baidu.com',
    w:'weibo.com',
    e:'ele.me',
    r:'renren.com',
    t:'taobao.com',
    y:'youtube.com',
    u:'douyin.com',
    i:'iqiyi.com',
    o:'opera.com',
    p:'kuaishou.com',
    a:'alibaba.com',
    s:'sogou.com',
}
var hashInLocalStorage = JSON.parse(localStorage.getItem('xxx') || 'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}

var index = 0
while(index<keys.length){
    div1 = document.createElement('div')
    div1.className = `row${index} row`
    content.appendChild(div1)
    row = keys[index]
    console.log(row)
    var index2 = 0
    while(index2<row.length){
        kbd = document.createElement('kbd')
        span = document.createElement('span')
        span.textContent = row[index2]
        span.className = 'text'
        kbd.appendChild(span)
        kbd.className = 'key'
        button = document.createElement('button')
        button.textContent = '编辑'
        button.id = row[index2]
        img = document.createElement('img')
        if(hash[row[index2]]){
            img.src = 'http://'+hash[row[index2]] + '/favicon.ico'
        }else{
            img.src = 'https://s2.ax1x.com/2019/04/06/AWKd3t.png'
        }
        button.onclick = function(yyy){
            console.log(yyy.target.id)
            x = prompt('给我一个网址')
            console.log(x)
            hash[yyy.target.id] = x
            localStorage.setItem('xxx',JSON.stringify(hash))
            console.log(hash[yyy.target.id])
        }
        kbd.appendChild(img)
        kbd.appendChild(button)
        
        div1.appendChild(kbd)
        index2 += 1
    }   
    index += 1
}
document.onkeypress = function(a){
    var url = hash[a.key]
    //location.href = 'http://'+url
    window.open('http://'+url,'_blank')
}