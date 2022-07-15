import '../styles/globals.css'
import '../styles/home.css'
import 'tailwindcss/tailwind.css'
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from '../components/Navbar';


const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar/>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
