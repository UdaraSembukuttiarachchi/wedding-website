'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

interface RSVPData {
  name: string
  invitedBy: 'bride' | 'groom' | ''
  rsvp: 'yes' | 'no' | ''
}

const RSVPModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState<RSVPData>({
    name: '',
    invitedBy: '',
    rsvp: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const submitToGoogleSheets = async (data: RSVPData) => {
    try {
      const response = await fetch('/api/submit-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit RSVP')
      }

      return await response.json()
    } catch (error) {
      console.error('Error submitting RSVP:', error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.invitedBy || !formData.rsvp) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await submitToGoogleSheets(formData)
      setSubmitStatus('success')
      setTimeout(() => {
        closeModal()
      }, 2000)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
    setFormData({ name: '', invitedBy: '', rsvp: '' })
    setSubmitStatus('idle')
  }

  // Modal JSX
  const modalJSX = isModalOpen ? (
    <div 
      className="fixed inset-0 bg-black/50 overflow-y-auto"
      style={{ 
        zIndex: 2147483647 // Maximum z-index value
      }}
    >
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={closeModal}
      ></div>
      
      {/* Modal Content - Always positioned at top */}
      <div className="relative min-h-screen flex justify-center pt-4 pb-8 px-4">
        <div 
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl my-auto max-h-[calc(100vh-2rem)] overflow-y-auto"
          style={{ 
            zIndex: 2147483647,
            marginTop: '2rem',
            marginBottom: 'auto'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4 sticky top-0 bg-white rounded-t-2xl border-b border-gray-100">
            <h2 className="text-2xl font-serif text-gray-800">RSVP</h2>
            <button
              onClick={closeModal}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-8">
            {/* Name Input */}
            <div className="space-y-3">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name on the invitation
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sage-500 focus:border-sage-500 transition-all duration-200 text-base placeholder-gray-400"
                placeholder="Enter your name"
                required
                style={{ borderColor: formData.name ? '#9ca3af' : '#e5e7eb' }}
              />
            </div>

            {/* Invited By Radio Buttons */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Invited by
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-sage-300 transition-colors duration-200" 
                       style={{ 
                         borderColor: formData.invitedBy === 'bride' ? '#6b7f5a' : '#e5e7eb',
                         backgroundColor: formData.invitedBy === 'bride' ? '#f0f4ed' : 'white'
                       }}>
                  <input
                    type="radio"
                    name="invitedBy"
                    value="bride"
                    checked={formData.invitedBy === 'bride'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-base font-medium" 
                        style={{ color: formData.invitedBy === 'bride' ? '#6b7f5a' : '#374151' }}>
                    Bride
                  </span>
                </label>
                <label className="flex items-center justify-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-sage-300 transition-colors duration-200"
                       style={{ 
                         borderColor: formData.invitedBy === 'groom' ? '#6b7f5a' : '#e5e7eb',
                         backgroundColor: formData.invitedBy === 'groom' ? '#f0f4ed' : 'white'
                       }}>
                  <input
                    type="radio"
                    name="invitedBy"
                    value="groom"
                    checked={formData.invitedBy === 'groom'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-base font-medium"
                        style={{ color: formData.invitedBy === 'groom' ? '#6b7f5a' : '#374151' }}>
                    Groom
                  </span>
                </label>
              </div>
            </div>

            {/* RSVP Radio Buttons */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Will you attend?
              </label>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-sage-300 transition-colors duration-200"
                       style={{ 
                         borderColor: formData.rsvp === 'yes' ? '#6b7f5a' : '#e5e7eb',
                         backgroundColor: formData.rsvp === 'yes' ? '#f0f4ed' : 'white'
                       }}>
                  <input
                    type="radio"
                    name="rsvp"
                    value="yes"
                    checked={formData.rsvp === 'yes'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-base font-medium"
                        style={{ color: formData.rsvp === 'yes' ? '#6b7f5a' : '#374151' }}>
                    Yes, I&apos;ll be there
                  </span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-sage-300 transition-colors duration-200"
                       style={{ 
                         borderColor: formData.rsvp === 'no' ? '#6b7f5a' : '#e5e7eb',
                         backgroundColor: formData.rsvp === 'no' ? '#f0f4ed' : 'white'
                       }}>
                  <input
                    type="radio"
                    name="rsvp"
                    value="no"
                    checked={formData.rsvp === 'no'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-base font-medium"
                        style={{ color: formData.rsvp === 'no' ? '#6b7f5a' : '#374151' }}>
                    Sorry, can&apos;t make it
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="w-full py-4 px-6 rounded-xl font-medium text-lg transition-all duration-200 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none"
                style={{
                  backgroundColor: submitStatus === 'success' ? '#10b981' : 
                                 submitStatus === 'error' ? '#ef4444' : '#6b7f5a',
                }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : submitStatus === 'success' ? (
                  'RSVP Submitted! ✓'
                ) : submitStatus === 'error' ? (
                  'Try Again'
                ) : (
                  'Submit RSVP'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-center text-green-600 text-sm font-medium bg-green-50 p-3 rounded-xl">
                Thank you! Your RSVP has been recorded.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center text-red-600 text-sm font-medium bg-red-50 p-3 rounded-xl">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      {/* RSVP Button */}
      <div className="animate-bounce-in">
        <button 
          onClick={openModal}
          className="bg-lime-700 hover:bg-lime-900 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-light tracking-wider rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform border border-white/50 backdrop-blur-sm"
        >
          RSVP
        </button>
      </div>

      {/* Modal Portal */}
      {mounted && typeof window !== 'undefined' && modalJSX && 
        createPortal(modalJSX, document.body)
      }
    </>
  )
}

export default RSVPModal