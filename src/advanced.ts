class Images {
  path: string = "https://www.baidu.com"
  alt: string = "百度"
  width: number = 500
}

type imageParam = keyof Images
type imageType = Images[imageParam]


const images = {
  path: "https://www.baidu.com",
  alt: "百度",
  width: 500
}


function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n])
}

const res = pick(images, ["path", "alt"])

console.log(res)

interface IUser {
  username: string
  id: number
  token: string
  avatar: string
  role: string
}

type parial<T> = { [K in keyof T]?: T[K] }
type parialIUser = parial<IUser>










