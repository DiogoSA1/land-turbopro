import React from 'react'
import { Article } from '../../components'
import { Prancheta_2, Prancheta_3, Prancheta_4, Prancheta_5, Prancheta_6, Prancheta_7 } from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className='tpro__blog section__padding' id='blog'>
      <div className="tpro__blog-heading">
        <h1 className='gradient__text'>Muita coisa está acontecendo, estamos blogando sobre isso.</h1>
      </div>
      <div className="tpro__blog-container">
        {/* <div className="tpro__blog-container_groupA">
          <Article imgUrl={Prancheta_2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div> */}
        <div className="tpro__blog-container_groupB">
          <Article imgUrl={Prancheta_2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={Prancheta_3} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={Prancheta_4} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={Prancheta_5} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={Prancheta_6} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={Prancheta_7} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog