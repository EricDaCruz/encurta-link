import {useState, useEffect} from 'react';
import './Links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import {getLinkSave, deleteLink} from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

function Links() {

  const [myLinks, setMyLinks] = useState([])
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [emptyList, setEmptyList] = useState(false)

  useEffect(() => {
    const getLinks = async () => {
      const result = await getLinkSave('@encurtaLink')

      if(result.length === 0) {
        setEmptyList(true)
      }

      setMyLinks(result)
    }

    getLinks()
  }, [])

  const handleOpenLink = link =>{ 
    setData(link)
    setShowModal(true)
  }

  const handleDelete = async id =>{
    const result = await deleteLink(myLinks, id)

    if(result.length === 0){
      setEmptyList(true)
    } 
    setMyLinks(result)
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to='/'>
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {
        emptyList && (
          <div className="links-item">
            <h2 className="empty-text">Sua Lista está vazia...</h2>
          </div>
        )
      }

      {
        myLinks.map(item =>(
          <div key={item.id} className="links-item">
            <button className="link" onClick={() => handleOpenLink(item)}>
              <FiLink size={18} color="#fff" />
              {item.long_url}
            </button>
            <button className="link-delete" onClick={() => handleDelete(item.id)}>
              <FiTrash size={24} color="#ff5454" />
            </button>
          </div>
        ))}
        
        {
          showModal 
          ? <LinkItem 
              closeModal={() => setShowModal(!showModal)}
              content={data}
            /> 
          : ""
        }
    </div>
  );
}

export default Links;
