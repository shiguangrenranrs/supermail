import { request } from "./request";

// 降低接口与页面的耦合
export function getHomeMultidata(){
  return request({
    url:"/home/multidata"
  })
}

export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page,
    }
  })
}