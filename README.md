# Kürşat Işık - Kişisel Profil Uygulaması

Bu proje, bir yazılım geliştirici olan Kürşat Işık'ın kişisel profilini web tabanlı olarak sunmak için geliştirilmiştir. Proje, React kullanılarak oluşturulmuştur ve temel HTML, CSS stillerine dayanır.

## Özellikler

- **Başlık Bölümü**: Kullanıcının adı ve unvanı (“Yazılım Geliştirici”) içerir.
- **İletişim Bölümü**: E-posta, telefon ve konum bilgilerini içerir.
- **Deneyim Bölümü**: Kullanıcının iş ve staj deneyimlerini listeler.
- **Eğitim Bölümü**: Eğitim geçmişini belirtir.
- **Yetenekler Bölümü**: Teknik beceriler ve yetenekleri listeler.
- **Footer**: Instagram, X (Twitter), ve LinkedIn gibi sosyal medya bağlantılarına ait logolar ve bağlantılar içerir.

## Kullanım

### Gereksinimler
- Node.js (>=14.0.0)
- Bir paket yöneticisi (npm veya yarn)

### Kurulum
1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/kullanici_adi/profil-projesi.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd profil-projesi
   ```
3. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

### Çalıştırma
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki komutu kullanın:
```bash
npm start
```
Komut, projeyi `http://localhost:3000` adresinde çalıştıracaktır.

### Yapılandırma
- `src/assets/` dizininde bulunan logo dosyalarını değiştirebilirsiniz.
- `src/App.js` dosyasını düzenleyerek içerik ve tasarımı özelleştirebilirsiniz.

## Proje Yapısı
```
profil-projesi/
├── public/
├── src/
│   ├── assets/
│   │   ├── download.jpg
│   │   ├── download.png
│   │   └── linkedin-nasil-kullanilir.jpg
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Katkıda Bulunma
Katkıda bulunmak isterseniz, lütfen bir pull request gönderin veya bir issue açın. Her türlü geri bildirim ve öneri memnuniyetle karşılanır.

## Lisans
Bu proje MIT lisansı altında lisanslanmıştır.
