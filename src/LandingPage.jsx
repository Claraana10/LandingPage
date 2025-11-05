import React from 'react';
import './LandingPage.scss';
import ubs from './ubs.jpg';
import logo from './logo.jfif'
import { FaCalendarAlt, FaHistory, FaFileMedical, FaUser } from 'react-icons/fa';

export default function PaginaLanding() {
  return (
    <div className="pagina-landing">
      
      <header className="cabecalho">
      <div className="logo">
  <a href="#">
    <img src={logo} alt="Logo UBS Digital" />
  </a>
</div>
        <nav className="botoes-navegacao">
          <button className="botao-principal">Acessar Sistema</button>
          <button className="botao-cadastro">Cadastre-se</button>
          <button className="botao-secundario">Saiba Mais</button>
        </nav>
      </header>

      
      <section className="secao-hero">
        <div className="conteudo-hero">
          <div className="texto-hero">
            <h1>O Futuro da Saúde Digital</h1>
            <p>Revolucionando o atendimento nas UBS com modernidades e design centrado no usuário e tecnologia de ponta para um Brasil mais saudável.</p>
        
          </div>
          <div className="imagem-hero">
            <img src={ubs} alt="UBS Digital" />
          </div>
        </div>
      </section>

    
      <section className="secao-funcionalidades">
        <h2>O Que Você Pode Acompanhar</h2>
        <div className="grade-funcionalidades">
          <div className="funcionalidade">
            <FaCalendarAlt className="icone" />
            <h3>Consultas Futuras</h3>
            <p>Visualize o andamento de suas consultas já agendadas.</p>
          </div>
          <div className="funcionalidade">
            <FaHistory className="icone" />
            <h3>Histórico de Consultas</h3>
            <p>Tenha acesso detalhado às suas consultas passadas.</p>
          </div>
          <div className="funcionalidade">
            <FaFileMedical className="icone" />
            <h3>Prontuário Médico</h3>
            <p>Consulte informações sobre exames, diagnósticos e relatórios.</p>
          </div>
          <div className="funcionalidade">
            <FaUser className="icone" />
            <h3>Perfil do Paciente</h3>
            <p>Confira seus dados cadastrais e informações pessoais.</p>
          </div>
        </div>
      </section>

     
      <section className="secao-como-funciona">
        <h2>Como Usar o Sistema</h2>
        <div className="fluxo-passo">
          <div className="passo">
            <div className="numero">1</div>
            <h4>Entrar no Sistema</h4>
            <p>Acesse com suas credenciais para visualizar seu painel de paciente.</p>
          </div>
          <div className="passo">
            <div className="numero">2</div>
            <h4>Consultar Histórico</h4>
            <p>Verifique suas consultas passadas e relatórios médicos.</p>
          </div>
          <div className="passo">
            <div className="numero">3</div>
            <h4>Acompanhar Consultas Atuais</h4>
            <p>Veja o status das consultas em andamento e informações importantes.</p>
          </div>
        </div>
      </section>

     
      <section className="secao-depoimentos">
        <h2>O Que Dizem Nossos Usuários</h2>
        <div className="grade-depoimentos">
          <div className="depoimento">
            <p>"Agora consigo acompanhar minhas consultas e histórico de forma clara e segura."</p>
            <span>- João.</span>
          </div>
          <div className="depoimento">
            <p>"Meu prontuário está sempre acessível e organizado."</p>
            <span>- Choco.</span>
          </div>
          <div className="depoimento">
            <p>"O sistema me ajuda a entender melhor meu histórico de saúde."</p>
            <span>- Ana R.</span>
          </div>
        </div>
      </section>

      <footer className="rodape">
        <div className="conteudo-rodape">
          <p>© 2025 UBS Digital | Sistema voltado para trabalho acadêmico.</p>
          <button className="botao-admin">Acesso Administrativo</button>
        </div>
      </footer>
    </div>
  );
}
