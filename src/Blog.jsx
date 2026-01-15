import styled from "styled-components"
import { Routes, Route } from "react-router-dom"

const Header = () => <div>Шапка</div>
const Footer = () => <div>Футер</div>

const Content = styled.div`
  text-align: center
`

const H2 = styled.h2`
  font-size: 25px;
`

function Blog() {
  return (
    <>
      {/* <i className="fa fa-camera-retro"></i> */}
      <Header />
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
    </>
  )
}

export default Blog
