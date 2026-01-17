import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import { Header, Footer } from "./components"

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
`
const H2 = styled.h2`
  text-align: center
`



function Blog() {
  return (
    <AppColumn>
      <Header />
      {/* <i className="fa fa-camera-retro"></i> */}
      <Content>
        <H2>Контент главной страницы</H2>

        <Routes>
          <Route path="/" element={<h1>Главная</h1>}></Route>
          <Route path="/login" element={<h1>login</h1>}></Route>
          <Route path="/register" element={<h1>register</h1>}></Route>
          <Route path="/users" element={<h1>users</h1>}></Route>
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