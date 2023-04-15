import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'http://wx.qlogo.cn/mmopen/totDEBmYKCiamc0TibQLsjL2KsUZrZOVXDZpYK4OAtS3OO7TYfLo6eDuG8kKxYkUjPsflRtI5AxU668dib7Ep8Megm865nlwPTw/64',
      name: '遛马少年',
      description: '关于 <a href="https://mp.weixin.qq.com/s/AQol9b_WFgf6UEnbJDVyoQ" class="text-blue-500" target="_blank" >我</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
