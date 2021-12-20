import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="card" style={{ marginLeft: "30px" }}>
        <div className="container">
          <div class="aku">
            <h2>Selamat Datang di Mala Library's</h2>
            <div class="dia" style={{ textAlign: "left" }}>
              <p>
                Sebagai salah satu unit penunjang pokok KBM yang mempunyai visi
                “Menjadi Pusat Ilmu Pengetahuan Dan Sains Berbasis Teknologi
                Informatika Terdepan Bagi Warga Sekolah”, fungsi dan peran Mala
                Library's sangat penting dan sentral dalam penyediaan
                sumber-sumber informasi dan kegiatan akademik.
              </p>
              <p>
                Dengan berbagai prestasi yang diraih baik melalui pengembangan
                SDM, pengembangan Kelembagaan maupun pengembangan Sistem. Dalam
                menjaga dan mempertahankan kepercayaan tersebut, perlu dikelola
                dengan baik dan profesional dengan melibatkan berbagai komponen
                yang ada, agar arah kegiatan sesuai dengan tujuan yang
                diinginkan secara efektif dan efisien.
              </p>
              <p>
                Alhamdullillahirobbilalamiin dengan senantiasa memanjatkan puji
                dan syukur kehadirat Allah SWT, dalam kesempatan yang baik ini
                bisa menyajikan perubahan konten website Mala Library's pada
                awal tahun 2021 ini. Semoga memberikan kontribusi kebaikan
                kepada masyarakat yang mengakses seluruah layanan di Mala
                Library's.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
