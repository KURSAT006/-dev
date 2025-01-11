import instagramLogo from './assets/download.jpg';
import xLogo from './assets/download.png';
import linkedinLogo from './assets/linkedin-nasil-kullanilir.jpg';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', lineHeight: '1.6' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5em', margin: '0' }}>KÜRŞAT IŞIK</h1>
        <p style={{ fontSize: '1.2em', color: 'gray' }}>Yazılım Geliştirici</p>
      </header>

      <section>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px' }}>İletişim</h2>
        <p><strong>E-posta:</strong> kursat.isik@kun.edu.tr</p>
        <p><strong>Telefon:</strong> +90 530 260 06 33</p>
        <p><strong>Konum:</strong> ANKARA/ÇANKAYA/DİKMEN</p>
      </section>

      <section>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px' }}>Deneyim</h2>
        <div>
          <h3>STAJER</h3>
          <p><em>Tech Corp</em> | 2020 - Günümüz</p>
          <ul>
            <li>Bİ ŞİRKETTE KAYIT İŞLERİ BİLGİSAYARDA DOSYA DÜZENLEME VE GEREKENLERE FORMAT GEREKLİ PROGRAMLARI KURMA.</li>
          </ul>
        </div>
        <div>
          <p><em>Code Solutions</em> | 2018 - 2020</p>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px' }}>Eğitim</h2>
        <div>
          <h3>KAPADOKYA ÜNÜVERSİTESİ BİLGİSAYAR PROGRAMCILIĞI</h3>
          <p><em>LİSE</em> | 2016 - 2020</p>
          <p><em>ÜNÜVERSİTE</em> | 2023 - 2025</p>
        </div>
      </section>

      <section>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px' }}>Yetenekler</h2>
        <ul>
          <li>JavaScript, React , Node.js</li>
          <li>C#</li>
        </ul>
      </section>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: '5px' }}>Hobi</h2>
        <ul>
          <li>game teknoloji takip etmek</li>
        </ul>

      <footer style={{ textAlign: 'center', marginTop: '40px' }}>
        <div>
          <a href="https://instagram.com" target="_blank">
            <img 
              src={instagramLogo} 
              alt="Instagram" 
              style={{ width: '50px', marginRight: '15px' }}
            />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img 
              src={xLogo} 
              alt="X" 
              style={{ width: '50px', marginRight: '15px' }}
            />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <img 
              src={linkedinLogo} 
              alt="LinkedIn" 
              style={{ width: '50px' }}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
