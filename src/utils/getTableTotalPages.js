import { pageSize } from '../const/const.js'

export default function getTotalPages (totalRegisters) {
  return Math.ceil(totalRegisters / pageSize)
}
