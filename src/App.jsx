import Routers from './Routers/Routers'
import { QueryClient, QueryClientProvider } from "react-query"
import { Footer } from './components/Footer'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='h-screen	w-screen'>
                <Routers />
                <Footer />
            </div>
        </QueryClientProvider>
    )
}

export default App
