import { useEffect } from 'react'

export function usePerformanceMonitor(pageName) {
  useEffect(() => {
    // 페이지 로드 시간 측정
    const startTime = performance.now()
    
    const handleLoad = () => {
      const loadTime = performance.now() - startTime
      console.log(`[Performance] ${pageName} loaded in ${loadTime.toFixed(2)}ms`)
      
      // 애니메이션 성능 모니터링
      if (typeof window !== 'undefined' && window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          const paintEntries = performance.getEntriesByType('paint')
          paintEntries.forEach(entry => {
            console.log(`[Performance] ${entry.name}: ${entry.startTime.toFixed(2)}ms`)
          })
        })
      }
    }

    // DOM이 완전히 로드되었을 때 측정
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [pageName])
}