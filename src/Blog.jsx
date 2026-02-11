import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import { Header } from "./components"
import { Authorization, Registration, Users, Post } from "./pages"
import { Footer } from "./components"
import { useLayoutEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "./action"
import { Modal } from "./components"

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
`
const Page = styled.div`
  padding: 120px 0 20px;
  margin: 0 auto;
`

function Blog() {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData')

    if (!currentUserDataJSON) {
      return ;
    }
    const currentUserData = JSON.parse(currentUserDataJSON)
    dispatch(setUser({
      ...currentUserData,
      roleId: Number(currentUserData.roleId)
    }))
  }, [dispatch])

  return (
    <AppColumn>
      <Header />
      {/* <i className="fa fa-camera-retro"></i> */}
      <Page>

        <Routes>
          <Route path="/" element={<h1>Главная</h1>}></Route>
          <Route path="/login" element={<Authorization />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/post/:id/edit" element={<Post />}></Route>
          <Route path="/post" element={<h1>post</h1>}></Route>
          <Route path="*" element={<h1>Error</h1>}></Route>
        </Routes>
      </Page>
      <Footer />
      <Modal />
    </AppColumn>
  )
}

export default Blog