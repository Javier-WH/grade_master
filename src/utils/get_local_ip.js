// this file contains a fuction that get server local ip

import os from 'node:os'

export default function getLocalIp () {
  const interfaces = os.networkInterfaces()
  const addresses = []

  for (const iface of Object.values(interfaces)) {
    for (const info of iface) {
      if (info.family === 'IPv4' && !info.internal) {
        addresses.push(info.address)
      }
    }
  }
  return addresses[0]
}
