import React from 'react'
import Dashboard from "../components/New_dashboard/Dashboard"

const dashboard = ({token}) => {
  return (
    <>
      <Dashboard authtoken={token}/>
    </>
  )
}

export default dashboard

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}