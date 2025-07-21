import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import Home from "../app/page"
import React from "react"


describe('HelloWorldPage', () => {
  it('renders an h1 with "London Confessions"', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { name: /London Confessions/i })
    expect(heading).toBeInTheDocument()
  })
})
