import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import { Header } from "./components"
import { Authorization, Registration, Users } from "./pages"
import { Footer } from "./components"

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
`
const Content = styled.div`
  padding: 120px 0;
  margin: 0 auto;
`

function Blog() {
  return (
    <AppColumn>
      <Header />
      {/* <i className="fa fa-camera-retro"></i> */}
      <Content>
        
        <Routes>
          <Route path="/" element={<h1>Главная</h1>}></Route>
          <Route path="/login" element={<Authorization />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/post/:postId" element={<h1>/post/:postId</h1>}></Route>
          <Route path="/post" element={<h1>post</h1>}></Route>
          <Route path="*" element={<h1>Error</h1>}></Route>
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  )
}

export default Blog