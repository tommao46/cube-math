export interface Vec2 {
  x: number;
  y: number;
}

export interface Mat2 {
  a: number;
  b: number;
  c: number;
  d: number;
}

export function vec2(x: number, y: number): Vec2 {
  return { x, y };
}

export function mat2(a: number, b: number, c: number, d: number): Mat2 {
  return { a, b, c, d };
}

export function mat2Identity(): Mat2 {
  return mat2(1, 0, 0, 1);
}

export function mat2Apply(m: Mat2, v: Vec2): Vec2 {
  return vec2(
    m.a * v.x + m.b * v.y,
    m.c * v.x + m.d * v.y
  );
}

export function mat2Multiply(m1: Mat2, m2: Mat2): Mat2 {
  return mat2(
    m1.a * m2.a + m1.b * m2.c,
    m1.a * m2.b + m1.b * m2.d,
    m1.c * m2.a + m1.d * m2.c,
    m1.c * m2.b + m1.d * m2.d
  );
}

export function mat2Determinant(m: Mat2): number {
  return m.a * m.d - m.b * m.c;
}

export function rotationMatrix(angle: number): Mat2 {
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  return mat2(c, -s, s, c);
}

export function vec2Add(a: Vec2, b: Vec2): Vec2 {
  return vec2(a.x + b.x, a.y + b.y);
}

export function vec2Scale(v: Vec2, s: number): Vec2 {
  return vec2(v.x * s, v.y * s);
}

export function vec2Length(v: Vec2): number {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

export function vec2Normalize(v: Vec2): Vec2 {
  const len = vec2Length(v);
  if (len === 0) return vec2(0, 0);
  return vec2(v.x / len, v.y / len);
}

export function vec2Sub(a: Vec2, b: Vec2): Vec2 {
  return vec2(a.x - b.x, a.y - b.y);
}
