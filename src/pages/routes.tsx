import { Loading } from '@components'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from 'src/App.tsx'

const Page1 = lazy(() => import('../pages/sample/sample1.tsx'))
const Page2 = lazy(() => import('../pages/sample/sample2.tsx'))
const Page3 = lazy(() => import('../pages/sample/sample3.tsx'))
const Page4 = lazy(() => import('../pages/sample/sample4.tsx'))
const Page5 = lazy(() => import('../pages/sample/sample5.tsx'))
const NotFound = lazy(() => import('../pages/not-found/not-found.tsx'))

const RoutePage = () => (
  <BrowserRouter>
    <ErrorBoundary fallback={<div>Global Error</div>} onError={(e) => console.log(e, 'ERROR GLOBAL')}>
      <Suspense fallback={<Loading message="Global Loading..." />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route
              path="/page3"
              element={
                <Suspense fallback={<div>Local page3 loading...</div>}>
                  <Page3 />
                </Suspense>
              }
            />
            <Route
              path="/page4"
              element={
                <ErrorBoundary fallback={<div>Local Error page4</div>} onError={(e) => console.log(e, 'ERROR PAGE4')}>
                  <Suspense fallback={<div>Local page4 loading...</div>}>
                    <Page4 />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Route>
          <Route
            path="/page5"
            element={
              <ErrorBoundary fallback={<div>Local Error page5</div>} onError={(e) => console.log(e, 'ERROR PAGE5')}>
                <Suspense fallback={<Loading message="Local Page5 Loading..." />}>
                  <Page5 />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
)
export default RoutePage
