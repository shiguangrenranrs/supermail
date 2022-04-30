import { request } from "./request";

// 降低接口与页面的耦合
export function getHomeMultidata(){
  return request({
    url:"/home/multidata"
  })
}