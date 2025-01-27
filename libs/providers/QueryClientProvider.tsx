'use client'
import { QueryClient, QueryClientProvider as Provider } from '@tanstack/react-query';
const queryClient = new QueryClient();

interface providerInterface {
    children: React.ReactNode
}

const QueryClientProvider: React.FC<providerInterface> = ({ children }) => {
    return (
        <Provider client={queryClient}>
            {children}
        </Provider>
    )
}

export default QueryClientProvider