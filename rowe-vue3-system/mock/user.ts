function createUserList() {
  return [
    {
      userId: 1,
      avatar: 'xxx.jpg',
      username: 'admin',
      password: '12345',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token'
    },
    {
      userId: 2,
      avatar: 'xxx.jpg',
      username: 'sysTem',
      password: '11111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token'
    }
  ]
}

export default [
  // 用户登录接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      // 获取请求体携带过来的用户名和密码
      const { username, password } = body
      const checkUser = createUserList().find((item) => {
        return item.username === username && item.password === password
      })
      if (!checkUser) {
        return { code: 201, data: { message: '账号或密码不正确！' } }
      }

      // 如果有则返回成功信息
      const { token } = checkUser
      return { code: 200, data: { token } }
    }
  },

  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request: any) => {
      const token = request.headers.token
      // 查看用户信息是否包含有这个token用户
      const checkUser = createUserList().find((item) => item.token)
      // 没有则返回失败的信息
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      // 如果有则返回成功信息
      return { code: 200, data: { checkUser } }
    }
  }
]
