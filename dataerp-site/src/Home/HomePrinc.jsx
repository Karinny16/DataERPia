// import { useState } from "react"
import "./HomePrinc.css";
import Button from "../Componentes/Button";
import { motion } from 'framer-motion'
import { LuBrain } from "react-icons/lu";

function HomePrinc() {
  return (
    <>
      <motion.div className="Container"

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

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

      <div className="Container2">
        <div className="texto2Central">
          <h1>Transforme informações em deciões estratégicas
          </h1>

        <div className="Icons">
          <div className="Brain">          <LuBrain size={50} />
          </div>

        </div>
        </div>

      </div>
    </>
  );
}

export default HomePrinc;
