/**
 * 魔方奇偶性 & 色向不变量计算（纯函数库）
 *
 * 用于：
 * - InvariantDemo（第5章）模式2/3
 * - hintEngine（Playground 提示引擎）
 *
 * 所有函数都是纯函数：只读 cubie 数据，无副作用。
 */

import type { Cubie } from '../types/cube'

/* ---- 辅助：角块与棱块筛选 ---- */

/** 角块：position 的 x/y/z 三个分量都不为 0 */
function isCorner(c: Cubie): boolean {
  const [x, y, z] = c.position
  return x !== 0 && y !== 0 && z !== 0
}

/** 棱块：position 的 x/y/z 恰好有一个分量为 0 */
function isEdge(c: Cubie): boolean {
  const [x, y, z] = c.position
  const zeros = (x === 0 ? 1 : 0) + (y === 0 ? 1 : 0) + (z === 0 ? 1 : 0)
  return zeros === 1
}

/* ---- 奇偶性计算 ---- */

/**
 * 根据角块的颜色组合推断其归属位置（还原态时应在的位置）
 * 角块有3个非null颜色，颜色组合唯一确定归属位置
 */
function getCornerHomePosition(c: Cubie): [number, number, number] | null {
  const { right, left, up, down, front, back } = c.colors
  const colors = [right, left, up, down, front, back].filter(x => x !== null).sort() as string[]
  const key = colors.join('')

  // 归属位置映射表：颜色组合 → 还原态位置 [x, y, z]
  // Y轴：up(+1)=白(W)，down(-1)=黄(Y)
  // X轴：right(+1)=红(R)，left(-1)=橙(O)
  // Z轴：front(+1)=绿(G)，back(-1)=蓝(B)
  const CORNER_HOME: Record<string, [number, number, number]> = {
    'GRW': [1, 1, 1],    // UFR: 绿+红+白
    'BRW': [1, 1, -1],   // UBR: 蓝+红+白
    'GRY': [1, -1, 1],   // DFR: 绿+红+黄
    'BRY': [1, -1, -1],  // DBR: 蓝+红+黄
    'GOW': [-1, 1, 1],   // UFL: 绿+橙+白
    'BOW': [-1, 1, -1],  // UBL: 蓝+橙+白
    'GOY': [-1, -1, 1],  // DFL: 绿+橙+黄
    'BOY': [-1, -1, -1], // DBL: 蓝+橙+黄
  }

  return CORNER_HOME[key] || null
}

/**
 * 角块排列的奇偶性
 *
 * 算法：根据每个角块的颜色组合确定其归属位置 id，
 * 然后按当前位置排序，计算归属位置 id 序列的逆序对数 mod 2。
 *
 * @returns 0 = 偶置换，1 = 奇置换
 */
export function getCornerParity(cubies: Cubie[]): number {
  const corners = cubies.filter(isCorner)

  // 标准位置顺序（与归属位置 id 对应）
  const allCornerPositions: [number, number, number][] = [
    [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1],
    [1, -1, -1], [1, -1, 1], [1, 1, -1], [1, 1, 1],
  ]

  // 为每个角块，根据颜色组合确定归属位置 id
  const getHomeId = (c: Cubie): number | null => {
    const home = getCornerHomePosition(c)
    if (!home) return null
    return allCornerPositions.findIndex(p => p[0] === home[0] && p[1] === home[1] && p[2] === home[2])
  }

  // 按当前位置字典序排列
  const sorted = [...corners].sort((a, b) => {
    const [ax, ay, az] = a.position
    const [bx, by, bz] = b.position
    if (ax !== bx) return ax - bx
    if (ay !== by) return ay - by
    return az - bz
  })

  // 计算归属位置 id 序列的逆序对数
  const homeIds = sorted.map(getHomeId).filter(x => x !== null) as number[]
  let inversions = 0
  for (let i = 0; i < homeIds.length; i++) {
    for (let j = i + 1; j < homeIds.length; j++) {
      if (homeIds[i] > homeIds[j]) inversions++
    }
  }

  return inversions % 2
}

/* ---- 棱块奇偶性 ---- */

/**
 * 根据棱块的颜色组合推断其归属位置（还原态时应在的位置）
 * 棱块有2个非null颜色，颜色组合唯一确定归属位置
 */
function getEdgeHomePosition(c: Cubie): [number, number, number] | null {
  const { right, left, up, down, front, back } = c.colors
  const colors = [right, left, up, down, front, back].filter(x => x !== null).sort() as string[]
  const key = colors.join('')

  // 归属位置映射表：颜色组合 → 还原态位置 [x, y, z]
  const EDGE_HOME: Record<string, [number, number, number]> = {
    'RW': [1, 1, 0],    // UR: 红+白
    'GR': [1, 0, 1],    // FR: 绿+红
    'RY': [1, -1, 0],   // DR: 红+黄
    'BR': [1, 0, -1],   // BR: 蓝+红
    'OW': [-1, 1, 0],   // UL: 橙+白
    'GO': [-1, 0, 1],   // FL: 绿+橙
    'OY': [-1, -1, 0],  // DL: 橙+黄
    'BO': [-1, 0, -1],  // BL: 蓝+橙
    'GW': [0, 1, 1],    // UF: 绿+白
    'BW': [0, 1, -1],   // UB: 蓝+白
    'GY': [0, -1, 1],   // DF: 绿+黄
    'BY': [0, -1, -1],  // DB: 蓝+黄
  }

  return EDGE_HOME[key] || null
}

/**
 * 棱块排列的奇偶性
 *
 * 算法：根据每个棱块的颜色组合确定其归属位置 id，
 * 然后按当前位置排序，计算归属位置 id 序列的逆序对数 mod 2。
 *
 * @returns 0 = 偶置换，1 = 奇置换
 */
export function getEdgeParity(cubies: Cubie[]): number {
  const edges = cubies.filter(isEdge)

  // 标准位置顺序
  const allEdgePositions: [number, number, number][] = [
    [-1, 0, -1], [-1, 0, 1], [1, 0, -1], [1, 0, 1],
    [-1, -1, 0], [-1, 1, 0], [1, -1, 0], [1, 1, 0],
    [0, -1, -1], [0, -1, 1], [0, 1, -1], [0, 1, 1],
  ]

  const getHomeId = (c: Cubie): number | null => {
    const home = getEdgeHomePosition(c)
    if (!home) return null
    return allEdgePositions.findIndex(p => p[0] === home[0] && p[1] === home[1] && p[2] === home[2])
  }

  // 按当前位置字典序排列
  const sorted = [...edges].sort((a, b) => {
    const [ax, ay, az] = a.position
    const [bx, by, bz] = b.position
    if (ax !== bx) return ax - bx
    if (ay !== by) return ay - by
    return az - bz
  })

  const homeIds = sorted.map(getHomeId).filter(x => x !== null) as number[]
  let inversions = 0
  for (let i = 0; i < homeIds.length; i++) {
    for (let j = i + 1; j < homeIds.length; j++) {
      if (homeIds[i] > homeIds[j]) inversions++
    }
  }

  return inversions % 2
}

/* ---- 色向计算 ---- */

/**
 * 角块色向总和 mod 3
 *
 * 算法：以白色/黄色面（Y轴方向）为参考面。
 * 对于每个角块，检查白色或黄色贴纸在哪个面上：
 * - 在 up/down 面（Y轴方向）→ 色向 = 0
 * - 顺时针转一下可达 up/down → 色向 = 1
 * - 逆时针转一下可达 up/down → 色向 = 2
 *
 * @returns 总和 mod 3（合法魔方恒为 0）
 */
export function getCornerOrientation(cubies: Cubie[]): number {
  const corners = cubies.filter(isCorner)
  let total = 0

  for (const c of corners) {
    const { right, left, up, down, front, back } = c.colors

    const isW = (color: string | null) => color === 'W'
    const isY = (color: string | null) => color === 'Y'
    const isRef = (color: string | null) => isW(color) || isY(color)

    // 白色/黄色在 up 或 down 面 → 色向 = 0
    if (isRef(up) || isRef(down)) {
      continue
    }
    // 白色/黄色在 front/back → 需要绕 X 轴转一次才能到 Y 方向
    if (isRef(front) || isRef(back)) {
      total += 1
      continue
    }
    // 白色/黄色在 right/left → 需要绕 Z 轴转一次才能到 Y 方向
    if (isRef(right) || isRef(left)) {
      total += 2
      continue
    }
  }

  return total % 3
}

/**
 * 棱块色向总和 mod 2
 *
 * 算法：以白色/黄色面为参考面。棱块有 2 个面颜色：
 * - 如果白色/黄色在 up/down 面 → 色向 = 0
 * - 否则 → 色向 = 1
 *
 * @returns 总和 mod 2（合法魔方恒为 0）
 */
export function getEdgeOrientation(cubies: Cubie[]): number {
  const edges = cubies.filter(isEdge)
  let total = 0

  for (const c of edges) {
    const { up, down } = c.colors
    const isW = (color: string | null) => color === 'W'
    const isY = (color: string | null) => color === 'Y'
    const isRef = (color: string | null) => isW(color) || isY(color)

    // 白色/黄色不在 up/down 面 → 色向 = 1
    if (!isRef(up) && !isRef(down)) {
      total += 1
    }
  }

  return total % 2
}
