import { useState, useCallback } from 'react'
import type { Cube3DViewHandle } from '../cube3d/Cube3DView'

/**
 * 第6节交互演示：交换子 [X, Y] = X·Y·X'·Y'
 * 演示 R·U·R'·U' 产生的 3-循环效果
 *
 * 核心思想：交换子只改变少量块，不破坏已复原部分 --
 * 这是盲拧和高级复原法的基础工具
 */

const MOVES = ['R', 'U', "R'", "U'"] as const

interface Props {
  cubeRef: React.RefObject<Cube3DViewHandle | null>
}

export default function CommutatorDemo({ cubeRef }: Props) {
  const [step, setStep] = useState(0)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)

  const handlePlay = useCallback(() => {
    if (running) return
    cubeRef.current?.reset()
    setStep(0); setDone(false); setRunning(true)
    let delay = 600
    for (let i = 0; i < MOVES.length; i++) {
      setTimeout(() => {
        cubeRef.current?.executeMove(MOVES[i])
        setStep(i + 1)
        if (i === MOVES.length - 1) { setDone(true); setRunning(false) }
      }, delay)
      delay += 1000
    }
  }, [running])

  const handleReset = useCallback(() => {
    cubeRef.current?.reset(); setStep(0); setDone(false); setRunning(false)
  }, [])

  return (
    <div className="card" style={{ marginBottom: '1rem', borderLeft: '4px solid #8B5CF6' }}>
      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.6rem' }}>
        交换子演示 [X, Y] = X·Y·X'·Y'
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--ink2)', marginBottom: '0.8rem' }}>
        点击播放交换子观察：R·U·R'·U' 只产生 3-循环
        （3 个角块和 3 个棱块各自轮换，其余不变）
      </p>
      <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '0.8rem' }}>
        {MOVES.map((move, i) => (
          <div key={i} style={{
            flex: 1, padding: '0.3rem', textAlign: 'center', borderRadius: '4px',
            fontSize: '0.78rem', fontFamily: 'monospace',
            background: step > i ? '#EDE9FE' : step === i && running ? '#FDE68A' : 'var(--bg2)',
            fontWeight: step > i ? 700 : 400,
            color: step > i ? '#7C3AED' : 'var(--ink2)',
          }}>
            {move}
          </div>
        ))}
      </div>
      {done && (
        <div style={{
          marginBottom: '0.8rem', padding: '0.4rem 0.8rem', borderRadius: '6px',
          background: '#EDE9FE', fontSize: '0.82rem', color: '#7C3AED', fontWeight: 600,
        }}>
          交换子完成！只产生了 3-循环（3 角块 + 3 棱块各自轮换）
        </div>
      )}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className="btn btn-primary"
          style={{ fontSize: '0.82rem' }}
          onClick={handlePlay} disabled={running}
        >
          {running ? '播放中...' : '▶ 播放交换子'}
        </button>
        <button className="btn btn-outline" style={{ fontSize: '0.82rem' }} onClick={handleReset}>
          重置
        </button>
      </div>
    </div>
  )
}
