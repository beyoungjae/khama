/**
 * KHAMA 프로젝트 이미지 관리 헬퍼
 *
 * 모든 이미지는 src/assets/images/ 하위 카테고리별로 관리됩니다.
 * 실제 이미지가 없는 경우 placeholder 이미지를 사용합니다.
 */

import { useState, useEffect } from 'react'

// 기본 placeholder 이미지 URL들 (unsplash에서 고품질 이미지 사용)
export const PLACEHOLDER_IMAGES = {
   // Hero 섹션용 고품질 배경 이미지
   hero: {
      home: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&crop=center',
      education: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop&crop=center',
      certification: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center',
      facility: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop&crop=center',
      admin: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center',
      auth: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&crop=center',
      exam: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center',
      mypage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&crop=center',
      contact: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&crop=center',
      appliance: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1920&h=1080&fit=crop&crop=center',
      aircon: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&h=1080&fit=crop&crop=center',
      ventilation: 'https://images.unsplash.com/photo-1504307651254-35680f356afd?w=1920&h=1080&fit=crop&crop=center',
      product: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&h=1080&fit=crop&crop=center',
   },

   // 협회 관련 이미지
   association: {
      president: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      building: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
      meeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
      event: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center',
   },

   // 교육 관련 이미지
   education: {
      classroom: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=center',
      practical: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop&crop=center',
      instructor: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center',
      students: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center',
      facility1: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop&crop=center',
      facility2: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&crop=center',
   },

   // 자격증 관련 이미지
   certifications: {
      appliance: {
         work: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=600&fit=crop&crop=center',
         equipment: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center',
         certificate: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center',
      },
      aircon: {
         service: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&crop=center',
         installation: 'https://images.unsplash.com/photo-1631545806313-b5e05b0e71b3?w=800&h=600&fit=crop&crop=center',
         maintenance: 'https://images.unsplash.com/photo-1609205789996-e5be2b3b6e90?w=800&h=600&fit=crop&crop=center',
      },
      ventilation: {
         system: 'https://images.unsplash.com/photo-1504307651254-35680f356afd?w=800&h=600&fit=crop&crop=center',
         clean: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop&crop=center',
      },
   },

   // 제품 관련 이미지
   products: {
      welzone: {
         product: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center',
         before: 'https://images.unsplash.com/photo-1609205788908-bce66bb5e7eb?w=400&h=300&fit=crop&crop=center',
         after: 'https://images.unsplash.com/photo-1628177142626-f394d739b7c8?w=400&h=300&fit=crop&crop=center',
      },
      certification: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
   },

   // 공통 아이콘/배경 이미지
   common: {
      contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop&crop=center',
      notice: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&crop=center',
      qna: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop&crop=center',
      location: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center',
   },
}

/**
 * 이미지 URL을 가져오는 헬퍼 함수
 * @param {string} category - 이미지 카테고리 (hero, association, education 등)
 * @param {string} name - 이미지 이름
 * @returns {string} 이미지 URL
 */
export const getImageUrl = (category, name) => {
   try {
      // 로컬 이미지 우선 사용
      try {
         return new URL(`../assets/images/${category}/${name}`, import.meta.url).href
      } catch {
         // 로컬 이미지가 없는 경우 placeholder 사용
         console.warn(`Local image not found: ${category}/${name}, using placeholder`)
      }

      // Placeholder 이미지 사용
      const categoryImages = PLACEHOLDER_IMAGES[category]
      if (!categoryImages) {
         console.warn(`Category '${category}' not found in PLACEHOLDER_IMAGES`)
         return PLACEHOLDER_IMAGES.common.notice // 기본 이미지
      }

      if (typeof categoryImages === 'string') {
         return categoryImages
      }

      // 중첩된 객체인 경우 (예: certifications.appliance.work)
      const keys = name.split('.')
      let result = categoryImages
      for (const key of keys) {
         result = result[key]
         if (!result) {
            console.warn(`Image '${name}' not found in category '${category}'`)
            return PLACEHOLDER_IMAGES.common.notice // 기본 이미지
         }
      }

      return result
   } catch (error) {
      console.error('Error getting image URL:', error)
      return PLACEHOLDER_IMAGES.common.notice // 기본 이미지
   }
}

/**
 * 반응형 이미지 srcSet을 생성하는 헬퍼 함수
 * @param {string} baseUrl - 기본 이미지 URL
 * @param {Array} sizes - 크기 배열 [{ width: 400, height: 300 }, ...]
 * @returns {string} srcSet 문자열
 */
export const generateSrcSet = (baseUrl, sizes = []) => {
   if (!baseUrl.includes('unsplash.com')) {
      return baseUrl // unsplash가 아닌 경우 원본 반환
   }

   const defaultSizes = [
      { width: 400, suffix: '400w' },
      { width: 800, suffix: '800w' },
      { width: 1200, suffix: '1200w' },
      { width: 1920, suffix: '1920w' },
   ]

   const sizesToUse = sizes.length > 0 ? sizes : defaultSizes

   return sizesToUse
      .map((size) => {
         const newUrl = baseUrl.replace(/w=\d+/, `w=${size.width}`)
         return `${newUrl} ${size.suffix}`
      })
      .join(', ')
}

/**
 * 최적화된 이미지 속성을 반환하는 헬퍼 함수
 * @param {string} src - 이미지 소스 URL
 * @param {string} alt - 대체 텍스트
 * @param {Array} sizes - 반응형 크기 배열
 * @returns {Object} 최적화된 이미지 속성
 */
export const getOptimizedImageProps = (src, alt, sizes = [], options = {}) => {
   const { useWebP = true, eager = false, quality = 80, fallbackUrl = null } = options

   // 이미지 압축 및 포맷 최적화
   const compressedSrc = getCompressedImageUrl(src, { quality, format: useWebP ? 'webp' : 'auto' })
   const cachedSrc = getCachedImageUrl(compressedSrc)
   const srcSet = generateSrcSet(cachedSrc, sizes)

   return {
      src: cachedSrc,
      srcSet: srcSet !== cachedSrc ? srcSet : undefined,
      alt,
      ...getLazyLoadingProps(eager),
      onError: (event) => handleImageError(event, fallbackUrl),
      sizes: sizes.length > 0 ? sizes.map((size) => `(max-width: ${size.width}px) ${size.width}px`).join(', ') + ', 100vw' : '(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1920px',
   }
}

/**
 * Picture 엘리먼트용 소스 세트를 생성하는 함수
 * @param {string} src - 이미지 소스 URL
 * @param {Array} sizes - 반응형 크기 배열
 * @returns {Array} Picture 소스 배열
 */
export const generatePictureSources = (src, sizes = []) => {
   const sources = []

   // WebP 소스 추가
   const webpSrc = getWebPUrl(src)
   const webpSrcSet = generateSrcSet(webpSrc, sizes)
   sources.push({
      srcSet: webpSrcSet,
      type: 'image/webp',
   })

   // 원본 포맷 소스 추가 (fallback)
   const originalSrcSet = generateSrcSet(src, sizes)
   sources.push({
      srcSet: originalSrcSet,
      type: 'image/jpeg',
   })

   return sources
}

/**
 * 이미지 로딩 최적화를 위한 lazy loading 속성 반환
 * @param {boolean} eager - 즉시 로딩 여부 (Hero 이미지 등)
 * @returns {Object} 로딩 최적화 속성
 */
export const getLazyLoadingProps = (eager = false) => ({
   loading: eager ? 'eager' : 'lazy',
   decoding: 'async',
   fetchPriority: eager ? 'high' : 'auto',
})

/**
 * 이미지 프리로딩을 위한 함수
 * @param {Array} imageUrls - 프리로드할 이미지 URL 배열
 * @returns {Promise} 프리로딩 완료 Promise
 */
export const preloadImages = (imageUrls) => {
   return Promise.all(
      imageUrls.map((url) => {
         return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = resolve
            img.onerror = reject
            img.src = url
         })
      })
   )
}

/**
 * 이미지 캐시 관리를 위한 함수
 * @param {string} url - 이미지 URL
 * @returns {string} 캐시 버스팅이 적용된 URL
 */
export const getCachedImageUrl = (url) => {
   // 로컬 이미지는 Vite가 자동으로 해시를 추가하므로 그대로 반환
   if (!url.includes('http')) {
      return url
   }

   // 외부 이미지는 캐시 정책에 따라 처리
   const urlObj = new URL(url)

   // Unsplash 이미지는 이미 최적화되어 있으므로 그대로 반환
   if (urlObj.hostname.includes('unsplash.com')) {
      return url
   }

   // 기타 외부 이미지는 캐시 버스팅 적용
   urlObj.searchParams.set('v', Date.now().toString())
   return urlObj.toString()
}

/**
 * WebP 지원 여부를 확인하는 함수
 * @returns {Promise<boolean>} WebP 지원 여부
 */
export const supportsWebP = () => {
   return new Promise((resolve) => {
      const webP = new Image()
      webP.onload = webP.onerror = () => {
         resolve(webP.height === 2)
      }
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
   })
}

/**
 * WebP 이미지 URL을 생성하는 함수
 * @param {string} originalUrl - 원본 이미지 URL
 * @returns {string} WebP 이미지 URL (지원하는 경우)
 */
export const getWebPUrl = (originalUrl) => {
   if (!originalUrl.includes('unsplash.com')) {
      return originalUrl
   }

   // Unsplash에서 WebP 포맷 지원
   const url = new URL(originalUrl)
   url.searchParams.set('fm', 'webp')
   url.searchParams.set('q', '80') // 품질 80%로 설정
   return url.toString()
}

/**
 * 최적화된 이미지 URL을 반환하는 함수 (WebP 지원 포함)
 * @param {string} category - 이미지 카테고리
 * @param {string} name - 이미지 이름
 * @param {boolean} useWebP - WebP 사용 여부
 * @returns {string} 최적화된 이미지 URL
 */
export const getOptimizedImageUrl = async (category, name, useWebP = true) => {
   const baseUrl = getImageUrl(category, name)

   if (useWebP && (await supportsWebP())) {
      return getWebPUrl(baseUrl)
   }

   return baseUrl
}

/**
 * 이미지 압축 최적화 URL 생성
 * @param {string} url - 원본 이미지 URL
 * @param {Object} options - 압축 옵션
 * @returns {string} 최적화된 이미지 URL
 */
export const getCompressedImageUrl = (url, options = {}) => {
   const { quality = 80, format = 'auto', width, height } = options

   if (!url.includes('unsplash.com')) {
      return url
   }

   const urlObj = new URL(url)

   // 품질 설정
   urlObj.searchParams.set('q', quality.toString())

   // 포맷 설정 (WebP 우선)
   if (format === 'auto') {
      urlObj.searchParams.set('fm', 'webp')
      urlObj.searchParams.set('auto', 'format')
   } else {
      urlObj.searchParams.set('fm', format)
   }

   // 크기 설정
   if (width) urlObj.searchParams.set('w', width.toString())
   if (height) urlObj.searchParams.set('h', height.toString())

   // 압축 최적화
   urlObj.searchParams.set('fit', 'crop')
   urlObj.searchParams.set('crop', 'smart')

   return urlObj.toString()
}

/**
 * 고급 이미지 에러 처리 핸들러
 * @param {Event} event - 이미지 에러 이벤트
 * @param {string} fallbackUrl - 대체 이미지 URL
 */
export const handleImageError = (event, fallbackUrl = null) => {
   const img = event.target
   const originalSrc = img.src

   // 이미 fallback 이미지인 경우 무한 루프 방지
   if (img.dataset.fallbackAttempted === 'true') {
      console.error('Fallback image also failed to load:', originalSrc)
      return
   }

   // fallback 시도 표시
   img.dataset.fallbackAttempted = 'true'

   // 사용자 지정 fallback 또는 기본 fallback 사용
   const fallback = fallbackUrl || PLACEHOLDER_IMAGES.common.notice
   img.src = fallback

   console.warn(`Image failed to load: ${originalSrc}, using fallback: ${fallback}`)
}

/**
 * 이미지 로딩 상태 관리를 위한 훅 함수
 * @param {string} src - 이미지 소스
 * @returns {Object} 로딩 상태와 에러 상태
 */
export const useImageLoadingState = (src) => {
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)

   useEffect(() => {
      if (!src) return

      setLoading(true)
      setError(false)

      const img = new Image()

      img.onload = () => {
         setLoading(false)
         setError(false)
      }

      img.onerror = () => {
         setLoading(false)
         setError(true)
      }

      img.src = src

      return () => {
         img.onload = null
         img.onerror = null
      }
   }, [src])

   return { loading, error }
}
