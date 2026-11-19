# Order 42 — Portofolio Sisma Eka Bagus Rama Putra (desain)

## Tujuan
Situs portofolio dwibahasa (ID/EN) untuk apoteker lulusan Profesi Apoteker UMP, dari CV dan berkas klien. Basis Template 1 Akuntansi, tema hijau bawaan (dipilih user).

## Keputusan desain
- Hero: `cover/cover.jpeg` dipotong latarnya dan dipangkas sebatas pinggang (aslinya badan penuh, terlalu sempit).
- Pengalaman: 4 kartu PKPA sesuai CV: Sampharindo (4 foto), RSUD Cilacap (3), Apotek UMP (2), PT Dagang Tempo (teks saja).
- Organisasi: 2 kartu teks saja (tidak ada foto), tanpa kolase.
- Pendidikan: 2 kartu (Profesi UMP 2 foto, S1 UHT 1 foto). Sertifikat: 4 kartu, hanya Sertifikat Kompetensi yang punya gambar.
- Angka: IPK profesi 3.53, IPK S1 3.37, 4 tempat PKPA, sekitar 10 pasien PTO (CV).
- Tanpa LinkedIn dan tanpa bahasa Inggris (CV tidak memuat keduanya).

## Teks buatan pembuat situs (diturunkan dari CV)
Judul Tentang, kutipan, karakter kerja (4), kompetensi utama (3), deskripsi soft skill dan software, kartu organisasi (hanya peran + tahun dari CV), seluruh terjemahan EN. Kota kampus "Surabaya" untuk organisasi diambil dari lokasi UHT.

## Privasi
- Wajah pasien di foto RSUD Cilacap diburamkan (5 area).
- Nomor sertifikat kompetensi diburamkan.

## Ketidaksesuaian CV vs berkas
1. Folder foto **PKPA Dinkes** (3 foto, 31 Des 2025) dan **PKPA Puskesmas** (4 foto, 12–30 Des 2025) tidak punya entri di CV (profil CV hanya menyebut "Dinas Kesehatan"). Tidak dipasang.
2. Sertifikat/bukti **STR**, pelatihan **CAPA (Makin Ahli)**, dan **Regulatory Affairs (Ioda Academy)** ada di CV tetapi tidak ada berkasnya; tampil sebagai kartu tanpa gambar.
3. **PT Dagang Tempo** (Nov 2025): tidak ada foto. Lokasi Sampharindo tidak ada di CV.
4. Foto **pkpa apotek** dianggap Apotek UMP berdasarkan nama folder; belum terkonfirmasi.
5. Teks CV: "Pendidikan Pendidikan Profesi Apoteker" (kata ganda), "Februar1 2026", ".." di akhir poin; diperbaiki di situs.
6. Nama di CV dan sertifikat sama (Sisma Eka Bagus Rama Putra); gelar "apt." tidak tertulis di CV maupun sertifikat.
7. Foto organisasi tidak ada. Foto S1 (IMG_0110.PNG) beresolusi rendah (828 px). Tanggal EXIF wisuda S1 (Okt 2026) tidak cocok dengan CV (lulus 2025); kemungkinan tanggal berkas.
8. Tidak dipakai: foto cover lain (Salinan DSC08771/08773), RDZ_8838, 3 foto Dinkes, 4 foto Puskesmas.

## Verifikasi
`tsc` bersih, `cek-isi` lolos (220 kunci ID = EN), `next build` sukses, screenshot ID/EN/projects/390px diperiksa.

## Revisi (19 Nov 2026 malam): jawaban klien + berkas tambahan
Jawaban klien: yang tidak ada di CV (Dinkes, Puskesmas) tidak perlu ditampilkan; foto apotek memang Apotek UMP (tidak ada foto lain); lokasi Sampharindo = Semarang; "apt." di depan nama dan "S.Farm" di belakang; tidak ada foto PBF (kegiatan online).
Diterapkan: nama "apt. Sisma Eka Bagus Rama Putra, S.Farm." (hero, kartu profil, judul tab); lokasi Semarang; kartu Dinkes/Puskesmas tidak dipasang.
Berkas tambahan di folder: STRA.pdf (STR, terbit 5 Okt 2026; nomor registrasi diburamkan), sertifikat CAPA Makin Ahli (18 Okt 2026), 3 foto wisuda S1 baru (598f75b3, IMG_5460, IMG_0110), 5 foto organisasi.
Catatan ketidaksesuaian baru:
- Sertifikat Makin Ahli berjudul "CAPA and Root Cause Analysis in **Food Industry**", CV menulis "pharmaceutical industry". Situs mengikuti sertifikat.
- STR menyatakan lulus UMP 26 Agustus 2026 (CV: Profesi 2025-2026).
- Foto organisasi: IMG_0648 ("Orientasi Kepalangmerahan PMR se-Kota Surabaya 2023", banyak siswa sekolah) tidak cocok dengan "Orientasi Program Fakultas Farmasi"; tidak dipasang. 3 foto bulu tangkis (UNAIR, Hang Tuah) dan foto bendera UHT (Pekan Olahraga Mahasiswa Jatim 2023) dipasang di UKM Badminton. Foto bendera diasumsikan terkait UKM.
- Sertifikat Regulatory Affairs (Ioda) masih belum ada berkasnya.
