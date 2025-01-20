import React from 'react'
import { useParams } from 'react-router-dom'
// import useSuggestion from '@/hooks/useSuggestion'

const SuggestionDetail = () => {
  const { id } = useParams()
  // const suggestion = useSuggestion(id)
  return (
    <div>
      <h1> 상세페이지 </h1>
    </div>
  )
}

export default SuggestionDetail
