import MainLayout from "@Layout/MainLayout"
import "@styles/tailwind.css"
import { ProviderAuth } from "@Hooks/useAuth"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps}/>
        </MainLayout>
      </ProviderAuth>
    </>
  )
}

export default MyApp
