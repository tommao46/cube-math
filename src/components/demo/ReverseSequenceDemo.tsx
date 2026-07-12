import { useState, useCallback } from 'react'
import type { Cube3DViewHandle } from '../cube3d/Cube3DView'

/**
 * 第6节交互演示：逆序撤销 (Reverse Sequence)
 *
 * 执行正向序列 R → U → F，再按逆序 F' → U' → R' 逐步撤销。
 * 展示 (A·B·C)⁻¹ = C⁻¹·B⁻¹·A⁻¹ —— 后做的先撤销。
 */

const FORWARD_STEPS = [
  { notation: 'R', text: '正向 R：右面顺时针' },
  { notation: 'U', text: '正向 U：上面顺时针' },
  { notation: 'F', text: '正向 F：前面顺时针' },
]

const REVERSE_STEPS = [
  { notation: "F'", text: '逆向 F\'：撤销 F' },
  { notation: "U'", text: '逆向 U\'：撤销 U' },
  { notation: "R'", text: '逆向 R\'：撤销 R' },
]

interface Props {
  cubeRef: React.RefObject<Cube3DViewHandle | null>
}

export default function ReverseSequenceDemo({ cubeRef }: Props) {
  const [playing, setPlaying] = useState(false)
  const [step, setStep] = useState(-1)

  const totalSteps = FORWARD_STEPS.length + REVERSE_STEPS.length

  const handlePlay = useCallback(() => {
    if (playing) return
    cubeRef.current?.reset()
    setPlaying(true)
    setStep(-1)

    // 正向 3 步
    let d = 500
    for (let i = 0; i < FORWARD_STEPS.length; i++) {
      setTimeout(() => {
        cubeRef.current?.executeMove(FORWARD_STEPS[i].notation)
        setStep(i)
      }, d)
      d += 800
    }

    // 暂停 600ms 让用户看到正向结果
    d += 600

    // 逆向 3 步
    for (let i = 0; i < REVERSE_STEPS.length; i++) {
      setTimeout(() => {
        cubeRef.current?.executeMove(REVERSE_STEPS[i].notation)
        setStep(FORWARD_STEPS.length + i)
      }, d)
      d += 800
    }

    setTimeout(() => {
      setPlaying(false)
      setStep(totalSteps)
    }, d + 300)
  }, [playing])

  return (
    <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid var(--accent)' }}>
      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem' }}>
        逆序撤销演示：(R · U · F)⁻¹ = F' · U' · R'
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--ink2)', marginBottom: '0.8rem' }}>
        先执行 R→U→F 三步操作，再按<strong>逆序</strong> F'→U'→R' 逐步撤销。
        后做的先撤销——这就是第 4 节和第 6 节的核心<strong>逆序列法则</strong>。
      </p>

      {/* 步骤指示条 */}
      <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--muted)', marginRight: '0.2rem' }}>正向</span>
        {FORWARD_STEPS.map((s, i) => (
          <div key={i} style={{
            padding: '0.25rem 0.5rem', borderRadius: '4px',
            fontSize: '0.72rem',
            background: i === step ? 'var(--accent-l)' : 'var(--bg2)',
            borderLeft: '2px solid ' + (i === step ? 'var(--accent)' : 'transparent'),
            transition: 'all 0.3s ease',
          }}>
            <strong style={{ fontFamily: 'monospace' }}>{s.notation}</strong>
          </div>
        ))}
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', margin: '0 0.2rem' }}>→</span>
        <span style={{ fontSize: '0.7rem', color: 'var(--muted)', marginRight: '0.2rem' }}>逆向</span>
        {REVERSE_STEPS.map((s, i) => {
          const si = FORWARD_STEPS.length + i
          return (
            <div key={i} style={{
              padding: '0.25rem 0.5rem', borderRadius: '4px',
              fontSize: '0.72rem',
              background: si === step ? '#FEE2E2' : 'var(--bg2)',
              borderLeft: '2px solid ' + (si === step ? '#DC2626' : 'transparent'),
              transition: 'all 0.3s ease',
            }}>
              <strong style={{ fontFamily: 'monospace', color: '#DC2626' }}>{s.notation}</strong>
            </div>
          )
        })}
      </div>

      {/* 完成提示 */}
      {step === totalSteps && (
        <div style={{
          padding: '0.5rem 0.8rem', borderRadius: '6px',
          background: '#DCFCE7', fontSize: '0.8rem', marginBottom: '0.6rem',
        }}>
          <span style={{ fontWeight: 700, color: '#16A34A' }}>
            魔方回到还原状态！
          </span>
          <span style={{ color: 'var(--ink2)', marginLeft: '0.4rem' }}>
            逆序撤销 = 把每一步反过来执行——后做的先撤销。
          </span>
        </div>
      )}

      <button
        className="btn btn-primary"
        style={{ fontSize: '0.82rem' }}
        onClick={handlePlay}
        disabled={playing}
      >
        {playing ? '播放中...' : '播放逆序撤销动画'}
      </button>
    </div>
  )
}
