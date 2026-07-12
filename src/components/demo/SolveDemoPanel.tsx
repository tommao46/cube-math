import { useState } from 'react'
import type { Cube3DViewHandle } from '../cube3d/Cube3DView'
import ReverseSequenceDemo from './ReverseSequenceDemo'
import ConjugateDemo from './ConjugateDemo'
import CommutatorDemo from './CommutatorDemo'

type TabKey = 'reverse' | 'conjugate' | 'commutator'

/**
 * 第6节右侧演示面板：用 Tab 切换逆序撤销 / 共轭变换 / 交换子
 */
export default function SolveDemoPanel({ cubeRef }: {
  cubeRef: React.RefObject<Cube3DViewHandle | null>
}) {
  const [tab, setTab] = useState<TabKey>('reverse')

  const tabs = [
    { key: 'reverse' as const, label: '逆序撤销', icon: '\U0001f504', color: '#10B981' },
    { key: 'conjugate' as const, label: '共轭变换', icon: '\U0001f35a', color: '#F59E0B' },
    { key: 'commutator' as const, label: '交换子', icon: '\u26a1', color: '#EF4444' },
  ]

  return (
    <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
      {/* Tab 栏 */}
      <div style={{ display: 'flex', borderBottom: '2px solid var(--rule)' }}>
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              flex: 1, padding: '0.5rem 0.3rem', fontSize: '0.78rem',
              fontWeight: tab === t.key ? 700 : 400,
              borderBottom: tab === t.key ? `3px solid ${t.color}` : '3px solid transparent',
              background: tab === t.key ? '#fff' : 'var(--bg2)',
              color: tab === t.key ? t.color : 'var(--ink2)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>
      {/* Tab 内容 */}
      <div style={{ padding: '0.8rem 1rem' }}>
        {tab === 'reverse' && <ReverseSequenceDemo cubeRef={cubeRef} />}
        {tab === 'conjugate' && <ConjugateDemo cubeRef={cubeRef} />}
        {tab === 'commutator' && <CommutatorDemo cubeRef={cubeRef} />}
      </div>
    </div>
  )
}
