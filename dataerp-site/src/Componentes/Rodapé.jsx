import React from "react";
import "./Rodapé.css";


const Rodapé = () => {
    return (
        <div className="rodape">
            <div className="id_footer section_footer">
                <div className="id_footer-links_footer">
                    <div className="id_footer-div_footer_1">
                        <h1>Contatos</h1>
                        <a href="/email">
                            <p> Email</p>
                        </a>
                        <a href="/telefone">
                            <p>Telefone</p>
                        </a>
                        <a href="/whatsapp">
                            <p>Whatsapp</p>
                                                    </a>

                    </div>
                    <div className="id_footer-div_footer_2">
                        <h1>Resources</h1>
                        <a href="/resource">
                            <p>resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonialsc</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="id_footer-div_footer_3">
                        <h1>Partners</h1>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="id_footer-div_footer_4">
                        <h1>DataERP</h1>
                        <a href="/sobre">
                            <p>Sobre</p>
                        </a>
                        <a href="/manual de uso">
                            <p>Manual de Uso</p>
                        </a>
                        <a href="/feed">
                            <p>Feed</p>
                        </a>
                        <a href="/projeto">
                            <p>Projeto</p>
                        </a>
                    </div>

                    <div className="id_footer-links-div">
                        <h4>Redes Sociais</h4>
                        <div className="redesSociais">

                        </div>
                    </div>

                    <div className="id_footer-div-footer-below">
                        <div className="id_footer-div-footer-copyright">
                            <p>
                                @{new Date().getFullYear()} DataERP. All right reserved
                            </p>
                            <div className="id_footer-footer_links_term">
                                <a href="terms"><div><p>Terms & Conditions</p></div></a>
                                <a href="terms"><div><p>Privacy</p></div></a>
                                <a href="terms"><div><p>Security</p></div></a>
                                <a href="terms"><div><p>Cookie Declaration</p></div></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )









}
export default Rodapé;