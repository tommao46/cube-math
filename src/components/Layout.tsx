import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

/**
 * 全局布局组件
 * 所有页面共享：固定顶部导航栏 + 内容区（上部留导航高度） + 底部版权
 */
export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      {/* 内容区：留出导航栏高度，flex-1 撑满剩余空间 */}
      <main style={{ paddingTop: '3.75rem', flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
