import React from 'react'
import Sidebar from "../components/Sidenav/Sidenav"

const dashboard = ({token}) => {
  return (
    <>
      <Sidebar authtoken={token}/>
    </>
  )
}

export default dashboard

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}