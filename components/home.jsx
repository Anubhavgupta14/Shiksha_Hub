import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const home = () => {
  const [name, setName] = useState("");

  const func = async() => {
    const response = await fetch('/api/hello', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json();
    const { user } = data;
    setName(data.name)
    console.log(data.name)
    
  }
  useEffect(() => {
    func();
  }, []);

  return (
    <div>
      <h2 className='heading'>Shiksha Hub</h2>
      <Link href="/dash"><button>Click</button></Link>
      <p>Name : {name}</p>

    </div>
  )
}

export default home
