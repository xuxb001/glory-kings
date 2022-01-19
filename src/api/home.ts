import service from '@/utils/request'

export function getHome(data: object) {
  return service({
    url: '/app/xxx',
    method: 'POST',
    data
  })
}
export function getHomeData() {
  return service({
    url: '/app/xxx',
    method: 'GET'
  })
}
