USE arsip_materi;

-- (a) pertemuan 99 -> ditolak CHECK
INSERT INTO materi (judul, mata_kuliah, pertemuan) VALUES ('Uji a', 'Pemrograman Web', 99);
-- (b) judul NULL -> ditolak NOT NULL
INSERT INTO materi (judul, mata_kuliah, pertemuan) VALUES (NULL, 'Pemrograman Web', 3);
-- (c) judul 101 karakter -> ditolak VARCHAR(100)
INSERT INTO materi (judul, mata_kuliah, pertemuan) VALUES (REPEAT('x', 101), 'Pemrograman Web', 3);
