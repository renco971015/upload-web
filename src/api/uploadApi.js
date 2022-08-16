import request from '@/request'

// 查询接口
export function getUrlPre(data) {
    return request({
        url: '/test/getUrlPre',
        method: 'get',
        params:data
    })
}

// 查询接口
export function uploadRequest(data) {
    return request({
        url: '/test/upload',
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}