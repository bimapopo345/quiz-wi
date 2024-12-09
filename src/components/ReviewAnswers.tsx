import { RefreshCw, CheckCircle, XCircle } from 'lucide-react'
import { Question } from '../types'

interface ReviewAnswersProps {
  userAnswers: {
    questionIndex: number
    userAnswer: string
    isCorrect: boolean
  }[]
  questions: Question[]
  onReset: () => void
}

export default function ReviewAnswers({
  userAnswers,
  questions,
  onReset,
}: ReviewAnswersProps) {
  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Review Answers</h2>

      <div className="space-y-6 mb-6">
        {userAnswers.map((answer, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-2 ${
              answer.isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">
                {answer.isCorrect ? (
                  <CheckCircle className="text-green-600" size={20} />
                ) : (
                  <XCircle className="text-red-600" size={20} />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-800 mb-2">
                  Question {index + 1}: {questions[answer.questionIndex].question}
                </p>
                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-slate-600">Your answer: </span>
                    <span className={answer.isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {answer.userAnswer}
                    </span>
                  </p>
                  {!answer.isCorrect && (
                    <p>
                      <span className="text-slate-600">Correct answer: </span>
                      <span className="text-green-600">
                        {questions[answer.questionIndex].correctAnswer}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onReset}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2"
      >
        Try Again
        <RefreshCw size={20} />
      </button>
    </div>
  )
}
