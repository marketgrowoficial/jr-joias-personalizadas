const whatsapp = "https://wa.me/5511941847036?text=Olá%2C%20vim%20pelo%20site%20da%20JR%20Joias%20e%20gostaria%20de%20criar%20uma%20joia%20especial.";

const collections = [
  { name: "Alianças", note: "Prata, moeda e ouro 18k", image: "/ring-gold.jpg" },
  { name: "Personalizados", note: "Feitos para contar a sua história", image: "/solitaire.jpg" },
  { name: "Presentes", note: "Detalhes que ficam para sempre", image: "/bracelet.jpg" },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">Atendimento personalizado • Enviamos para todo o Brasil</div>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="JR Joias — início">
          <img src="/logo.jpg" alt="Símbolo da JR Joias" />
          <span>JR <i>Joias</i></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#colecoes">Coleções</a><a href="#processo">Como funciona</a><a href="#loja">Nossa loja</a>
        </nav>
        <a className="navCta" href={whatsapp} target="_blank" rel="noreferrer">Falar com uma consultora <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="heroPhoto"><img src="/ring-gold.jpg" alt="Anel personalizado da JR Joias" /></div>
        <div className="heroShade" />
        <div className="heroContent shell">
          <p className="eyebrow">Joias personalizadas • Itu, SP</p>
          <h1>Sentimentos<br /><em>eternizados</em><br />em joias.</h1>
          <p className="heroText">Cada detalhe nasce para celebrar uma história única — a sua. Criamos joias que transformam momentos em memórias para sempre.</p>
          <a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Criar minha joia <span>→</span></a>
        </div>
        <div className="heroFoot shell"><span>01</span><div /><p>Personalização com significado</p></div>
      </section>

      <section className="intro">
        <div className="introVisual"><img src="/og.png" alt="JR Joias — Sentimentos eternizados em joias" /></div>
        <div className="introGlow" />
        <div className="introInner">
          <div className="introBand shell">
            <div className="introLabel"><p className="eyebrow">Nossa essência</p><span>Desde Itu, para histórias de todo o Brasil</span></div>
            <div className="introCopy">
              <h2>Mais que uma joia.<br />Um capítulo da sua <em>história.</em></h2>
            </div>
            <div className="introDetails">
              <p>Há mais de mil criações compartilhadas e uma comunidade de mais de 35 mil pessoas que escolheram eternizar seus momentos conosco.</p>
              <a href="#colecoes">Conheça nossas coleções <span>↓</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="collections shell" id="colecoes">
        <div className="sectionHead"><div><p className="eyebrow dark">Descubra</p><h2>Nossas coleções</h2></div><a href={whatsapp} target="_blank" rel="noreferrer">Ver todas pelo WhatsApp <span>↗</span></a></div>
        <div className="cards">
          {collections.map((item, index) => <a className="card" href={whatsapp} target="_blank" rel="noreferrer" key={item.name}>
            <div className="cardImage"><img src={item.image} alt={item.name} /><span>0{index + 1}</span></div>
            <div><h3>{item.name}</h3><p>{item.note}</p><b>→</b></div>
          </a>)}
        </div>
      </section>

      <section className="story">
        <div className="storyImage"><img src="/collection.jpg" alt="Seleção de joias da JR Joias" /></div>
        <div className="storyCopy">
          <p className="eyebrow">Feito especialmente para você</p>
          <h2>Seu sentimento,<br />nosso <em>ofício.</em></h2>
          <p>Do primeiro desenho ao acabamento final, cada escolha é acompanhada de perto. Você participa da criação e recebe uma peça que não existe em nenhum outro lugar.</p>
          <a className="textLink" href={whatsapp} target="_blank" rel="noreferrer">Começar uma criação <span>→</span></a>
        </div>
      </section>

      <section className="process shell" id="processo">
        <p className="eyebrow dark">Simples e pessoal</p><h2>Como sua joia ganha vida</h2>
        <div className="steps">
          <article><span>01</span><h3>Conte sua ideia</h3><p>Fale com nossa equipe pelo WhatsApp e compartilhe a história que deseja eternizar.</p></article>
          <article><span>02</span><h3>Escolha cada detalhe</h3><p>Orientamos materiais, medidas e acabamentos para chegar à peça perfeita para você.</p></article>
          <article><span>03</span><h3>Receba sua joia</h3><p>Sua peça é preparada com cuidado e enviada com segurança para onde você estiver.</p></article>
        </div>
      </section>

      <section className="quote"><p>“Alguns amores merecem ser eternizados em forma de joia.”</p><span>JR Joias Personalizadas</span></section>

      <section className="visit shell" id="loja">
        <div><p className="eyebrow dark">Venha nos conhecer</p><h2>Uma experiência feita<br />para você.</h2></div>
        <div className="visitInfo"><div><small>Endereço</small><p>Rua Madre Maria Theodora, 36<br />Centro • Itu, SP</p></div><div><small>Horários</small><p>Seg a sex • 9h às 18h<br />Sábado • 9h às 13h30</p></div><a href="https://maps.google.com/?q=Rua+Madre+Maria+Theodora+36+Itu+SP" target="_blank" rel="noreferrer">Abrir no mapa <span>↗</span></a></div>
      </section>

      <footer>
        <div className="shell footerTop"><div className="footerBrand"><img src="/logo.jpg" alt="" /><h2>JR <i>Joias</i></h2><p>Sentimentos eternizados em joias.</p></div><div><small>Atendimento</small><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.instagram.com/jrjoiaspersonalizadas/" target="_blank" rel="noreferrer">Instagram</a></div><div><small>Telefone</small><a href="tel:+5511941847036">(11) 9 4184-7036</a></div></div>
        <div className="shell footerBottom"><span>© 2026 JR Joias Personalizadas</span><span>Itu • São Paulo • Brasil</span></div>
      </footer>
      <a className="floating" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp">Fale conosco <span>↗</span></a>
    </main>
  );
}
