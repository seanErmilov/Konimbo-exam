import Routers from './Routers/Routers'
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='h-screen	w-screen'>
                <Routers />
            </div>
        </QueryClientProvider>
    )
}

export default App
