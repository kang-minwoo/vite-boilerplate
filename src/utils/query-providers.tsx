import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type QueryProvidersProps = {
  children: React.ReactNode
  hasDevtools: boolean
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
      retry: false,
    },
  },
})

const QueryProviders = ({ children, hasDevtools = false }: QueryProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {hasDevtools && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}

export default QueryProviders
