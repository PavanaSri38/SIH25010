import { describe, it, expect, vi, beforeEach } from 'vitest'
import { authAPI, cropAPI, soilAPI, weatherAPI, marketAPI } from '../services/api'
import axios from 'axios'

// Mock axios
vi.mock('axios')

describe('API Service Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Auth API', () => {
    it('should send OTP', async () => {
      const mockResponse = { data: { message: 'OTP sent', email: 'test@example.com' } }
      axios.post.mockResolvedValue(mockResponse)

      const result = await authAPI.sendOTP('test@example.com')
      expect(result.data.message).toBe('OTP sent')
      expect(axios.post).toHaveBeenCalledWith('/api/auth/send-otp', { email: 'test@example.com' })
    })

    it('should verify OTP', async () => {
      const mockResponse = { data: { message: 'Success', session_id: '123', email: 'test@example.com' } }
      axios.post.mockResolvedValue(mockResponse)

      const result = await authAPI.verifyOTP('test@example.com', '123456')
      expect(result.data.session_id).toBe('123')
      expect(axios.post).toHaveBeenCalledWith('/api/auth/verify-otp', { email: 'test@example.com', otp: '123456' })
    })
  })

  describe('Crop API', () => {
    it('should recommend crops', async () => {
      const mockResponse = { data: { recommendations: [], count: 0 } }
      axios.post.mockResolvedValue(mockResponse)

      const result = await cropAPI.recommend({ region: 'AP', season: 'rainy', soil_ph: 6.5 })
      expect(result.data).toHaveProperty('recommendations')
      expect(axios.post).toHaveBeenCalledWith('/api/crops/recommend', { region: 'AP', season: 'rainy', soil_ph: 6.5 })
    })
  })

  describe('Weather API', () => {
    it('should get weather advisory', async () => {
      const mockResponse = { data: { weather: {}, alerts: [] } }
      axios.get.mockResolvedValue(mockResponse)

      const result = await weatherAPI.getAdvisory('Visakhapatnam')
      expect(result.data).toHaveProperty('weather')
      expect(axios.get).toHaveBeenCalledWith('/api/weather/advisory', { params: { location: 'Visakhapatnam' } })
    })
  })
})

