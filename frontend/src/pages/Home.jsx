import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>initial page</h1>
      <Link to="/about">Sobre</Link>
    </div>
  )
}

export default Home
