import Navbar from "../Components/Navbar";

function PageBaru() {
    return (
        <>
            <Navbar />
            <div className="w-full max-w-6xl mx-auto mt-4 p-4">
                <h1 className="text-3xl font-bold mb-4">Ini Adalah Halaman Baru</h1>
                <p>
                    Ini adalah contoh bagaimana kamu dapat membuat halaman baru dan 
                    menyambungkannya dengan routing di React.
                </p>
                
                <div className="card w-96 bg-base-100 shadow-xl mt-6">
                    <div className="card-body">
                        <h2 className="card-title">Kerenn!</h2>
                        <p>Sekarang kamu bisa menggunakan React Router untuk pindah antar halaman tanpa reload seperti di web.php Laravel.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageBaru;
