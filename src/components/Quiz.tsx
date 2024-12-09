import { Question } from '../types'

interface QuizProps {
  question: Question
  onAnswer: (answer: string) => void
  currentQuestion: number
  totalQuestions: number
}

export default function Quiz({ question, onAnswer, currentQuestion, totalQuestions }: QuizProps) {
  const handleOptionSelect = (selected: string) => {
    onAnswer(selected)
  }

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-slate-500">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Math.round(((currentQuestion) / totalQuestions) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            className="w-full text-left p-4 rounded-lg border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
