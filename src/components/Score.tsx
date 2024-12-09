import { RefreshCw, ClipboardList } from 'lucide-react'

interface ScoreProps {
  score: number
  total: number
  onReset: () => void
  onReview: () => void
}

export default function Score({ score, total, onReset, onReview }: ScoreProps) {
  const percentage = Math.round((score / total) * 100)

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Quiz Complete!</h2>
      
      <div className="mb-6">
        <div className="text-5xl font-bold text-blue-600 mb-2">
          {percentage}%
        </div>
        <p className="text-slate-600">
          You got {score} out of {total} questions correct
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={onReview}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2"
        >
          Review Answers
          <ClipboardList size={20} />
        </button>

        <button
          onClick={onReset}
          className="w-full py-3 px-4 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg flex items-center justify-center gap-2"
        >
          Try Again
          <RefreshCw size={20} />
        </button>
      </div>
    </div>
  )
}
