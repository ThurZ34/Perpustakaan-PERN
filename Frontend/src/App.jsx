import { useState } from "react";
import Navbar from "./Components/Navbar";
import TableBuku from "./Components/TableBuku";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="w-full max-w-6xl mx-auto flex justify-start mt-4">
        <button className="btn btn-secondary" onClick={() => setIsOpen(true)}>
          Tambah Buku
        </button>
      </div>
      <TableBuku />
      <dialog className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tambah Buku Baru</h3>
          <form className="py-4 flex flex-col gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Judul</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan judul buku"
                className="input input-bordered w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Penulis</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama penulis"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Penerbit</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama penerbit"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Tahun Terbit</span>
                </label>
                <input
                  type="number"
                  placeholder="YYYY"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Jumlah Halaman</span>
                </label>
                <input
                  type="number"
                  placeholder="Misal: 200"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">ISBN</span>
                </label>
                <input
                  type="text"
                  placeholder="Nomor ISBN"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Harga</span>
                </label>
                <input
                  type="number"
                  placeholder="Misal: 100000"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="modal-action mt-6">
              <button
                type="button"
                className="btn"
                onClick={() => setIsOpen(false)}
              >
                Tutup
              </button>
              <button type="submit" className="btn btn-secondary">
                Simpan Data
              </button>
            </div>
          </form>
        </div>
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}></div>
      </dialog>
    </>
  );
}

export default App;
