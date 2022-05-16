import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const store = new Vuex.Store({
  state: {
    cartList: [
      // 无法解析 \r\n
      JSON.parse('{"image":"//s11.mogucdn.com/mlcdn/c45406/180423_0h6j2abd17hka9d4j7dlk710d3af9_640x960.jpg","title":"2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤","desc":"简约而不简单的T恤，\n\n莫过于什么元素都别用，就是一身纯色，\n\n如此简单，却百搭得不行，\n\n搭配衣服的颜色毫无挑剔，\n\n穿出清爽怡人好心情，你心动了吗？\nS码：100斤以下 M码：100-110斤  L码：110-125斤  XL码：125-135斤","price":"39.00","iid":"1lyp2vg","count":1}'.replaceAll('\r', '').replaceAll('\n','')),
      JSON.parse('{"image":"//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg","title":"2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮","desc":"你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~","price":"68.00","iid":"1m745k0","count":1}'.replaceAll('\r', '').replaceAll('\n','')),
      JSON.parse('{"image":"//s5.mogucdn.com/mlcdn/c45406/180907_3jkl78l30c0ijib72lk997gh033ed_640x960.jpg","title":"吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦","desc":"吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦","price":"29.80","iid":"1m8a710","count":1}'.replaceAll('\r', '').replaceAll('\n','')),
      JSON.parse('{"image":"//s3.mogucdn.com/mlcdn/c45406/170823_0d997dch3jkl8ed225ejbba76j2lf_640x832.jpg","title":"2018春秋季新款韩版百搭连帽卫衣+松紧腰长裤时尚运动套装两件套女学生","desc":"2018春秋季新款韩版百搭连帽卫衣+松紧腰长裤时尚运动套装两件套女学生","price":"57.00","iid":"1kihxey","count":1}'.replaceAll('\r', '').replaceAll('\n','')),
      JSON.parse('{"image":"//s5.mogucdn.com/mlcdn/55cf19/180925_6bdiibf87e046d836dcjie5l40fk1_641x641.jpg","title":"加绒加厚裤子女秋冬2018新款学生韩版宽松显瘦休闲哈伦运动卫裤秋","desc":"工厂自产自销质量保证,拍下有运费险不合适，不满意，不喜欢7天无理由退换！全场满1件-包邮，春夏季新款全网低价出售新老顾客来者是上帝，小店每天不定时上新不定时优惠望各位亲们多多关注哦！！！【实拍，实拍，实拍。全店商品实拍】【工厂直销】买家的评价对于我们来说都非常重要，如有问题请及时沟通联系客服，我们将尽力帮您解决！在这里，向每一位给予好评和5分的买家表示真心的感谢！","price":"49.00","iid":"1m901la","count":1}'.replaceAll('\r', '').replaceAll('\n','')),
    ],
  },
  mutations,
  actions,
  getters,
});

export default store;