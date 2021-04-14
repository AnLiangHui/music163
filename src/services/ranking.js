import request from "./axios";

export function getTopList(id) {
  return request({
    url: "/toplist",
    params: {
      id
    }
  })
}

// 获取榜单详情
export function getRankingList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
