import type { Cubie, CubieFaceColors, FaceColor, Move, Axis, Direction, Layer } from '../types/cube';

/**
 * 创建一个魔方块（Cubie）的面颜色对象
 * 每个面可以为 null（表示该面不在魔方表面）
 */
function createFaceColors(right: FaceColor | null, left: FaceColor | null, up: FaceColor | null, down: FaceColor | null, front: FaceColor | null, back: FaceColor | null): CubieFaceColors {
  return { right, left, up, down, front, back };
}

/**
 * 创建一个已还原的魔方状态
 * 26 个方块（3x3x3 去掉中心），每个方块根据其位置设置正确的面颜色
 */
export function createSolvedCube(): Cubie[] {
  const cubies: Cubie[] = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        // 跳过中心点（0,0,0），那里没有方块
        if (x === 0 && y === 0 && z === 0) continue;
        cubies.push({
          position: [x, y, z],
          colors: createFaceColors(
            x === 1 ? 'R' : null,   // 右面（X轴正方向）= 红色
            x === -1 ? 'O' : null,  // 左面（X轴负方向）= 橙色
            y === 1 ? 'W' : null,   // 上面（Y轴正方向）= 白色
            y === -1 ? 'Y' : null,  // 下面（Y轴负方向）= 黄色
            z === 1 ? 'G' : null,   // 前面（Z轴正方向）= 绿色
            z === -1 ? 'B' : null,  // 后面（Z轴负方向）= 蓝色
          ),
        });
      }
    }
  }
  return cubies;
}

/**
 * 旋转单个魔方块
 * 根据旋转轴、层和方向，更新方块的位置和面颜色
 */
function rotateCubie(cubie: Cubie, axis: Axis, layer: number, direction: Direction): Cubie {
  const [x, y, z] = cubie.position;

  // 检查该方块是否在目标层上
  const threshold = axis === 'x' ? x : axis === 'y' ? y : z;
  if (threshold !== layer) return { ...cubie, colors: { ...cubie.colors } };

  let newX = x, newY = y, newZ = z;
  let newColors = { ...cubie.colors };

  // 绕 X 轴顺时针旋转（从正 X 方向看向原点）
  if (axis === 'x' && direction === 1) {
    newY = -z; newZ = y;
    newColors = createFaceColors(
      cubie.colors.right,
      cubie.colors.left,
      cubie.colors.back,
      cubie.colors.front,
      cubie.colors.up,
      cubie.colors.down,
    );
  }
  // 绕 X 轴逆时针旋转
  else if (axis === 'x' && direction === -1) {
    newY = z; newZ = -y;
    newColors = createFaceColors(
      cubie.colors.right,
      cubie.colors.left,
      cubie.colors.front,
      cubie.colors.back,
      cubie.colors.down,
      cubie.colors.up,
    );
  }
  // 绕 Y 轴顺时针旋转（U: 从上往下看顺时针）
  else if (axis === 'y' && direction === 1) {
    newX = z; newZ = -x;
    newColors = createFaceColors(
      cubie.colors.front,  // right ← front
      cubie.colors.back,   // left ← back
      cubie.colors.up,
      cubie.colors.down,
      cubie.colors.left,   // front ← left
      cubie.colors.right,  // back ← right
    );
  }
  // 绕 Y 轴逆时针旋转（U': 从上往下看逆时针）
  else if (axis === 'y' && direction === -1) {
    newX = -z; newZ = x;
    newColors = createFaceColors(
      cubie.colors.back,   // right ← back
      cubie.colors.front,  // left ← front
      cubie.colors.up,
      cubie.colors.down,
      cubie.colors.right,  // front ← right
      cubie.colors.left,   // back ← left
    );
  }
  // 绕 Z 轴顺时针旋转（从正 Z 方向看向原点，即从前面看向魔方）
  else if (axis === 'z' && direction === 1) {
    newX = -y; newY = x;
    newColors = createFaceColors(
      cubie.colors.down,
      cubie.colors.up,
      cubie.colors.right,
      cubie.colors.left,
      cubie.colors.front,
      cubie.colors.back,
    );
  }
  // 绕 Z 轴逆时针旋转
  else if (axis === 'z' && direction === -1) {
    newX = y; newY = -x;
    newColors = createFaceColors(
      cubie.colors.up,
      cubie.colors.down,
      cubie.colors.left,
      cubie.colors.right,
      cubie.colors.front,
      cubie.colors.back,
    );
  }

  return {
    position: [newX, newY, newZ] as [number, number, number],
    colors: newColors,
  };
}

/**
 * 对整个魔方执行一步旋转操作
 */
export function applyMove(cubies: Cubie[], move: Move): Cubie[] {
  return cubies.map(c => rotateCubie(c, move.axis, move.layer, move.direction));
}

/**
 * 对整个魔方执行多步旋转操作
 */
export function applyMoves(cubies: Cubie[], moves: Move[]): Cubie[] {
  let result = cubies;
  for (const move of moves) {
    result = applyMove(result, move);
  }
  return result;
}

/**
 * 将魔方标准记法（如 "R"、"U'"）解析为 Move 对象
 * R = 右层绕 X 轴顺时针, L = 左层绕 X 轴...
 * 带 ' 表示逆时针方向
 */
export function parseMoveNotation(notation: string): Move {
  const faceMap: Record<string, { axis: Axis; layer: Layer }> = {
    'R': { axis: 'x', layer: 1 },
    'L': { axis: 'x', layer: -1 },
    'U': { axis: 'y', layer: 1 },
    'D': { axis: 'y', layer: -1 },
    'F': { axis: 'z', layer: 1 },
    'B': { axis: 'z', layer: -1 },
  };

  const isPrime = notation.includes("'");
  const base = notation.replace("'", '');
  const { axis, layer } = faceMap[base];

  return {
    axis,
    layer,
    direction: isPrime ? -1 : 1,
  };
}

/**
 * 所有基本操作的记法列表
 */
const NOTATION_LIST = [
  "R", "R'", "L", "L'", "U", "U'", "D", "D'", "F", "F'", "B", "B'",
];

/**
 * 随机打乱魔方
 * @param cubies 初始魔方状态（通常是已还原的魔方）
 * @param numMoves 打乱步数，默认 20 步
 * @returns 打乱后的魔方状态和所执行的操作列表
 */
export function scrambleCube(cubies: Cubie[], numMoves: number = 20): { cubies: Cubie[]; moves: Move[] } {
  const moves: Move[] = [];
  let result = [...cubies];
  let lastAxis: Axis | null = null;

  for (let i = 0; i < numMoves; i++) {
    let notation: string;
    let move: Move;
    // 确保连续两步不绕同一个轴旋转（避免无意义的来回转）
    do {
      notation = NOTATION_LIST[Math.floor(Math.random() * NOTATION_LIST.length)];
      move = parseMoveNotation(notation);
    } while (move.axis === lastAxis);

    moves.push(move);
    result = applyMove(result, move);
    lastAxis = move.axis;
  }

  return { cubies: result, moves };
}

/**
 * 检查魔方是否已还原
 * 通过比较每个方块的位置和面颜色与已还原状态是否一致来判断
 */
export function isSolved(cubies: Cubie[]): boolean {
  const solved = createSolvedCube();
  for (let i = 0; i < cubies.length; i++) {
    const c = cubies[i];
    const s = solved[i];
    // 检查位置
    if (c.position[0] !== s.position[0] || c.position[1] !== s.position[1] || c.position[2] !== s.position[2]) {
      return false;
    }
    // 检查面颜色
    if (c.colors.right !== s.colors.right || c.colors.left !== s.colors.left ||
        c.colors.up !== s.colors.up || c.colors.down !== s.colors.down ||
        c.colors.front !== s.colors.front || c.colors.back !== s.colors.back) {
      return false;
    }
  }
  return true;
}
