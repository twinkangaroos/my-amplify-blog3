import '@aws-amplify/ui-react/styles.css'
import { Authenticator } from '@aws-amplify/ui-react';
import HamburgerMenu from "./HamburgerMenu"
import Header from "./Header"

function Home() {
  return (
    <Authenticator.Provider>
      <Header />
      <HamburgerMenu />
      <h1>トップページ</h1>
      <h3>フロントページが表示されます。</h3>
    </Authenticator.Provider>
  )
}

export default Home
