import React from 'react'
import {Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {Container} from './styled'
import error from '../../assets/images/404Error.svg'

export default function NotFound() {
  return (
    <Container>
      <Link to="/"><FaArrowLeft />Voltar</Link>
      <h1>Desculpe, não encontramos sua pagina</h1>
      <img src={error} alt='notfound 404' />
    </Container>
  )
}
