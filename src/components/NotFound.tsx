import { Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">Halaman tidak ditemukan</p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          <Home size={20} />
          Kembali ke Beranda
        </button>
      </div>
    </div>
  )
}
