import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/Login'
import { LanguageProvider } from '../../context/LanguageContext'

const renderWithProvider = (component) => {
  return render(<LanguageProvider>{component}</LanguageProvider>)
}

describe('Login Component', () => {
  it('renders login form', () => {
    const onLogin = vi.fn()
    renderWithProvider(<Login onLogin={onLogin} />)
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByText(/send otp/i)).toBeInTheDocument()
  })

  it('allows email input', async () => {
    const user = userEvent.setup()
    const onLogin = vi.fn()
    renderWithProvider(<Login onLogin={onLogin} />)
    
    const emailInput = screen.getByLabelText(/email/i)
    await user.type(emailInput, 'test@example.com')
    
    expect(emailInput).toHaveValue('test@example.com')
  })
})

