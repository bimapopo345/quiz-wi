import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Quiz from './components/Quiz'
import Score from './components/Score'
import ReviewAnswers from './components/ReviewAnswers'
import NotFound from './components/NotFound'
import { useState } from 'react'
import './index.css'
import { quizData } from './data/quizData'

interface Answer {
  questionIndex: number
  userAnswer: string
  isCorrect: boolean
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [userAnswers, setUserAnswers] = useState<Answer[]>([])
  const [showReview, setShowReview] = useState(false)

  const handleAnswer = (selected: string) => {
    const correct = selected === quizData[currentQuestion].correctAnswer
    if (correct) setScore(score + 1)

    setUserAnswers([
      ...userAnswers,
      {
        questionIndex: currentQuestion,
        userAnswer: selected,
        isCorrect: correct,
      },
    ])

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
    setShowReview(false)
    setUserAnswers([])
  }

  const handleShowReview = () => {
    setShowReview(true)
    setShowScore(false)
  }

  const MainContent = () => (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        Wireless Security Quiz
      </h1>

      {showReview ? (
        <ReviewAnswers
          userAnswers={userAnswers}
          questions={quizData}
          onReset={handleReset}
        />
      ) : showScore ? (
        <Score
          score={score}
          total={quizData.length}
          onReset={handleReset}
          onReview={handleShowReview}
        />
      ) : (
        <Quiz
          question={quizData[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          totalQuestions={quizData.length}
        />
      )}
    </div>
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
