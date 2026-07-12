import { useState, useCallback } from 'react'
import type { Cube3DViewHandle } from '../cube3d/Cube3DView'

/**
 * 第6节交互演示：共轭变换 / 三明治变换 (Conjugate / Sandwich)
 *
 * 执行 P·A·P' 结构：先 U（搬过去）→ R（执行核心操作）→ U'（搬回来）。
 * 展示共轭变换的威力：同样的核心操作 A，被"搬到"了不同位置执行。
 * Tutorial 中层棱块用的就是这个技巧。
 */

const CONJUGATE_STEPS = [
  { notation: 'U',  text: '① P=U：顶层转一下，把棱块对准右侧' },
  { notation: 'R',  text: '② A=R：右面转一下，棱块进入中层' },
  { notation: "U'", text: "③ P'=U'：顶层转回来，恢复顶层" },
]

interface Props {
  cubeRef: React.RefObject<Cube3DViewHandle | null>
}

export default function ConjugateDemo({ cubeRef }: Props) {
  const [playing, setPlaying] = useState(false)
  const [step, setStep] = useState(-1)

  const handlePlay = useCallback(() => {
    if (playing) return
    cubeRef.current?.reset()
    setPlaying(true)
    setStep(-1)

    let d = 500
    for (let i = 0; i < CONJUGATE_STEPS.length; i++) {
      setTimeout(() => {
        cubeRef.current?.executeMove(CONJUGATE_STEPS[i].notation)
        setStep(i)
      }, d)
      d += 1000  // 比逆序撤销慢一点，让用户观察"哪些变了哪些没变"
    }

    setTimeout(() => {
      setPlaying(false)
      setStep(CONJUGATE_STEPS.length)
    }, d + 300)
  }, [playing])

  return (
    <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid var(--orange)' }}>
      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem' }}>
        共轭变换演示：P · A · P' = 三明治变换
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--ink2)', marginBottom: '0.8rem' }}>
        先执行 P=<strong>U</strong> 把目标棱块移到操作位，
        再执行 A=<strong>R</strong>（核心操作），
        最后执行 P'=<strong>U'</strong> 搬回来。
        整体效果：<strong>只改变目标棱块</strong>，不破坏已复原的部分。
      </p>
      <p style={{
        fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.6rem',
        background: 'var(--bg2)', borderRadius: '4px', padding: '0.3rem 0.5rem',
      }}>
        Tutorial 中层棱块用的就是共轭变换——把棱块搬进搬出，这就是"三明治"的由来。
      </p>

      {/* 步骤指示条 */}
      <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
        {CONJUGATE_STEPS.map((s, i) => (
          <div key={i} style={{
            padding: '0.3rem 0.6rem', borderRadius: '6px',
            fontSize: '0.72rem',
            background: i === step ? '#FFF7ED' : step === CONJUGATE_STEPS.length ? '#DCFCE7' : 'var(--bg2)',
            borderLeft: '3px solid ' + (i === step ? 'var(--orange)' : 'transparent'),
            transition: 'all 0.3s ease',
          }}>
            <strong style={{ fontFamily: 'monospace' }}>{s.notation}</strong>
            <span style={{ color: 'var(--ink2)', marginLeft: '0.3rem' }}>{s.text}</span>
          </div>
        ))}
      </div>

      {/* 完成提示 */}
      {step === CONJUGATE_STEPS.length && (
        <div style={{
          padding: '0.5rem 0.8rem', borderRadius: '6px',
          background: '#DCFCE7', fontSize: '0.8rem', marginBottom: '0.6rem',
        }}>
          <span style={{ fontWeight: 700, color: '#16A34A' }}>
            注意看
          </span>
          <span style={{ color: 'var(--ink2)', marginLeft: '0.4rem' }}>
            棱块成功移到了中层，但顶层和底层的其他块几乎没变。
            这就是共轭变换的威力：精准手术式操作，P·A·P'。
          </span>
        </div>
      )}

      <button
        className="btn btn-primary"
        style={{ fontSize: '0.82rem' }}
        onClick={handlePlay}
        disabled={playing}
      >
        {playing ? '播放中...' : '播放共轭变换动画'}
      </button>
    </div>
  )
}
