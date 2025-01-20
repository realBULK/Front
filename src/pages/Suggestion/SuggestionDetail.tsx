import React from 'react'
import { useParams } from 'react-router-dom'
// import useSuggestion from '@/hooks/useSuggestion'

const SuggestionDetail = () => {
  const { mealId } = useParams()
  // const suggestion = useSuggestion(id)
  return (
    <div>
      <h1> {mealId} </h1>
    </div>
  )
}

export default SuggestionDetail
