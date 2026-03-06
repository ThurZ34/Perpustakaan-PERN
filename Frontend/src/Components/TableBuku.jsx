
const Buku = [
    {
        id: 1,
        judul: "Buku 1",
        penulis: "Penulis 1",
        penerbit: "Penerbit 1",
        tahun_terbit: "2022",
        jumlah_halaman: "200",
        isbn: "1234567890",
        harga: "100000",
    },
    {
        id: 2,
        judul: "Buku 2",
        penulis: "Penulis 2",
        penerbit: "Penerbit 2",
        tahun_terbit: "2022",
        jumlah_halaman: "200",
        isbn: "1234567890",
        harga: "100000",
    },
    {
        id: 3,
        judul: "Buku 3",
        penulis: "Penulis 3",
        penerbit: "Penerbit 3",
        tahun_terbit: "2022",
        jumlah_halaman: "200",
        isbn: "1234567890",
        harga: "100000",
    },
];

const TableBuku = () => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-8 mb-8 max-w-6xl mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Penerbit</th>
            <th>Tahun Terbit</th>
            <th>Jumlah Halaman</th>
            <th>ISBN</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>

            {Buku.map((buku) => (
                <tr key={buku.id}>
                    <td>{buku.id}</td>
                    <td>{buku.judul}</td>
                    <td>{buku.penulis}</td>
                    <td>{buku.penerbit}</td>
                    <td>{buku.tahun_terbit}</td>
                    <td>{buku.jumlah_halaman}</td>
                    <td>{buku.isbn}</td>
                    <td>{buku.harga}</td>
                    <td className="flex gap-2">
                        <button className="btn btn-secondary">Edit</button>
                        <button className="btn btn-error">Hapus</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBuku;
