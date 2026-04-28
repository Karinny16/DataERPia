// import { useState } from "react"
import "./HomePrinc.css";
import Button from "../Componentes/Button";
import {motion} from 'framer-motion'
function HomePrinc() {
  return (
    <>
      <motion.div className="Container"
      initial={{width:0}}
      animate={{width:"100%"}}
      exit={{x:window.innerWidth, transition:{duration:0.4}}}
      >
        <div className="texto1Central">
          <h1>
            TRANSFORME <span>DADOS</span>  EM <br /> <span>DECISÕES</span> INTELIGENTES
          </h1>
          <h2>
            Um guia prático de uso de sistemas ERP: Do básico ao avançado – ERP
            para quem quer crescer
          </h2>
          <h3>INTERAJA EM NOSSO CHAT</h3>
          <div className="Button">
            <Button onClick={() => alert("Entrou!")}>CHAT</Button>
          </div>
        </div>
      </motion.div>

      <div className="Container2"></div>
    </>
  );
}

export default HomePrinc;
