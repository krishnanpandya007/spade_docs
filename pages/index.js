import React from 'react'

function HomeIndex() {
  return (
    <div>HomeIndex</div>
  )
}

export async function getServerSideProps() {

    return {
        redirect: {
            destination: '/welcome',
            permanent: false
        }
    }

}

export default HomeIndex