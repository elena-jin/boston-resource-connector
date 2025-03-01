// Simplified version of the shadcn/ui toast hook
"use client"

import type React from "react"

import { useState, createContext, useContext } from "react"

type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  open: boolean
}

type ToastActionType = {
  toast: (props: Omit<ToastProps, "id" | "open">) => void
  dismiss: (id: string) => void
  toasts: ToastProps[]
}

const ToastContext = createContext<ToastActionType | null>(null)

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = ({ title, description, action }: Omit<ToastProps, "id" | "open">) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description, action, open: true }])

    setTimeout(() => {
      dismiss(id)
    }, 5000)
  }

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return <ToastContext.Provider value={{ toast, dismiss, toasts }}>{children}</ToastContext.Provider>
}

