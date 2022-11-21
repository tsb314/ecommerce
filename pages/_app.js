import Layout from '../components/Layout'
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import store from '../redux/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {
  // if(typeof window !== "undefined"){
  //      console.log("You are in the broswer")
  //    } else {
  //      console.log("You are on the server")
  //    }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
