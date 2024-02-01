import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { BannerSection } from '../../components/sections/BannerSection'
import { RestaurantSection } from '../../components/sections/RestaurantSection'
import { AboutSection } from '../../components/sections/AboutSection'
import { FormSection } from '../../components/sections/FormSection'


export const HomePage = () => {
  return (<>
    <Header />
    <main>
      <BannerSection />
      <RestaurantSection />
      <AboutSection />
      <FormSection />
    </main>
    <Footer />
  </>)
}