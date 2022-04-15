import {useState} from 'react';
import { FiLink } from 'react-icons/fi'
import './home.css'

import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/api'
import {saveLink} from '../../services/storeLinks'

// import {Adsense} from '@ctrl/react-adsense'

// useEffect(()=>{}, []


const Home = () => {

  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const handleShortLink = async () =>{
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })
      setData(response.data)
      setShowModal(!showModal)

      saveLink('@encurtaLink', response.data)

      setLink('')
     
    }catch{
      alert('Ops, algo deu errado. Use uma URL válida.')
      setLink('')
    }
  }

  return ( 
    <div className="container-home">
      <div className="logo">
          <img src="img/logo.png" alt="logo ecurtalink"/>
          <h1>EncurtaLink</h1>
          <span>Cole seu link para encurtar</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink size={24} color='#fff'/>
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>
          Gerar Link
        </button>
      </div>

      <Menu />
      {
        showModal 
        ? <LinkItem 
            closeModal={() => setShowModal(!showModal)}
            content={data}
          /> 
        : ""
      }

        {/* <Adsense
            client="ca-pub-7640562161899788"
            slot="7259870550"
            style={{ width: 500, height: 300 }}
            format=""
        /> */}
      
    </div>
   );
}
 
export default Home;
