// 首页中每个商品种类模块
Vue.component('part',{
    template: `
    <div class="kind">
        
    <div class="card_list">
        <div class="part_title">
            <p class="ti">数码</p>
            <div class="more">
             更多
            </div>
            <div class="change_bt">
             换一换
            </div>
            
        </div>
    <ul>
    <li v-for='(image,index) in img' :key='index' >
        <a href="javascript:;">
                <img :src="image">
                <div class="introduce">
                    
                    泰国进口金枕鲜榴莲,泰国进口金枕鲜榴莲,泰国进口金枕鲜榴莲
                    
                </div>
                <div class="shop">
                    店铺：金轮
                </div>
        </a>
    </li>
    </ul>
    </div>
    <div class="rank">
        <div class="part_title">
         排行榜
        </div>
        <div class="ranklist">
        <ul>
        <li v-for='(ran,index) in rank' :key='index' >
        <div class="rk">{{ran.rk}}</div> 
        <a href="javascript:;">
            <div class="name">{{ran.name}}</div>
        </a>
        </li>
        </ul>
        </div>
    </div>
    </div>
    `,
    data:function () {
        return {
            mark:0,
            img: [
                '../../Images/Home/index/a1.png',
                '../../Images/Home/index/a2.png',
                '../../Images/Home/index/a3.png',
                '../../Images/Home/index/a4.png',
                '../../Images/Home/index/a2.png',
                '../../Images/Home/index/a3.png',
                '../../Images/Home/index/a4.png',
                '../../Images/Home/index/a5.png'
            ],
            rank:[
                {rk:1,name:'一号榴莲超大超甜6666666'},
                { rk: 2, name:'一号榴莲超大超甜6666666'},
                { rk: 3, name:'一号榴莲超大超甜6666666'},
                { rk: 4, name:'一号榴莲超大超甜6666666'},
                { rk: 5, name:'一号榴莲超大超甜6666666'},
                { rk: 6, name:'一号榴莲超大超甜6666666'},
                { rk: 7, name:'一号榴莲超大超甜6666666'},
                { rk: 8, name:'一号榴莲超大超甜6666666'},
                { rk: 9, name:'一号榴莲超大超甜6666666'},
                { rk: 10, name:'一号榴莲超大超甜6666666'},
            ],
            time:null
            }
        },
})