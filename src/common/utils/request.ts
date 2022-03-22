import qs from 'qs'
import * as auth from 'auth-provider'
import { useAuth } from 'context/auth-context'
import { useCallback } from 'react'

const baseUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
  data?: object
  token?: string
}

export const request = (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  }

  if (config.method.toUpperCase() === 'GET') {
    if (data) {
      endpoint += `?${qs.stringify(data)}`
    }
  } else {
    config.body = JSON.stringify(data || {})
  }

  return window.fetch(`${baseUrl}/${endpoint}`, config).then(async res => {
    if (res.status === 401) {
      auth.logout()
      window.location.reload()
      return Promise.reject({ message: '请重新登录' })
    }

    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export const useRequest = () => {
  const { user } = useAuth()
  return useCallback(
    (...[endpoint, config]: Parameters<typeof request>) =>
      request(endpoint, { ...config, token: user?.token }),
    [user?.token]
  )
}
