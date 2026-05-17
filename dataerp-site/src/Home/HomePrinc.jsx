import "./HomePrinc.css";
import Button from "../Componentes/Button";
import { motion } from "framer-motion";
import { LuBrain } from "react-icons/lu";
import { BiConversation } from "react-icons/bi";
import { BsFillBuildingsFill } from "react-icons/bs";
import Rodapé from "../Componentes/Rodapé";



function HomePrinc() {
  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const container1 = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.12 },
    },
  };

  
  return (
    <>
      <motion.div
        className="Container"
        variants={container1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.10 }}
        exit={{ opacity: 0 }}
      >
        <div className="texto1Central">
          <motion.h1 variants={iconVariants}>
            TRANSFORME <span>DADOS</span> EM <br /> <span>DECISÕES</span> INTELIGENTES
          </motion.h1>

          <motion.h2 variants={iconVariants}>
            Um guia prático de uso de sistemas ERP: Do básico ao avançado – ERP
            para quem quer crescer
          </motion.h2>

          <motion.h3 variants={iconVariants}>INTERAJA EM NOSSO CHAT</motion.h3>

          <div className="Button">
            <Button
              onClick={() => alert("Entrou!")}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.18 }}
            >
              CHAT
            </Button>
          </div>
        </div>
      </motion.div>
   

      <div className="Container2">
        <div className="texto2Central">
          <h1>Transforme informações em decisões estratégicas</h1>
        </div>

        <div className="Icons">
          <div className="IconBlock">
            <motion.div
              className="Brain"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <LuBrain size={60} color="#ffffff" />
            </motion.div>
            <h2>Aprenda a <br /> dominar o ERP</h2>
          </div>

          <div className="IconBlock">
            <motion.div
              className="Conversation"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <BiConversation size={60} color="#ffffff" />
            </motion.div>
            <h2>Conecte-se com <br /> outros usuários</h2>
          </div>

          <div className="IconBlock">
            <motion.div
              className="Buildings"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <BsFillBuildingsFill size={60} color="#ffffff" />
            </motion.div>
            <h2>Otimize a gestão da <br /> sua pequena <br /> empresa</h2>
          </div>
        </div>
      </div>

      <Rodapé />
    </>
  );
}

export default HomePrinc;
