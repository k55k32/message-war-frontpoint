import Vue from 'vue'

export default (app, router) => {
  Vue.http.interceptors.push((request, next) => {
    if (request.method.toLowerCase() === 'post') {
      // 拦截所有post请求
      next((response) => {
        if (response.ok) {
          let data = response.data
          // 将data转换为json格式
          try {
            if (typeof data === 'string') {
              data = JSON.parse(data)
              response.data = data
            }
          } catch (e) {
            console.error('parse to Json error', data)
          }
          // 成功的请求
          if (data.success) {
            response.result = data.data
          } else {
            response.ok = false
            app.toast(data.msg, '错误代码: ' + data.code)
          }
        } else {
          let errorCode = {
            0: '服务器连接失败',
            500: '服务器错误'
          }
          app.toast(errorCode[response.status] || response.statusText, '系统错误: ' + response.status)
        }
      })
    } else {
      next()
    }
  })
}
