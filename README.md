# Boston Resource Connector

A web platform connecting displaced individuals with support services and resources in the Boston area.

## 🌐 Live Demo
[Visit Boston Resource Connector](https://boston-resource-connector-cjioym8iq-elena-jins-projects.vercel.app/)

## 📝 Description

Boston Resource Connector is a comprehensive web application designed to bridge the gap between displaced individuals and the organizations that can help them. The platform provides easy access to:

- 🏠 Housing Resources
- 🍲 Food Assistance
- 🏥 Healthcare Services
- ⚖️ Legal Aid
- 💼 Employment Opportunities
- 📚 Educational Resources
- 🧠 Mental Health Support

## ✨ Features

- **Resource Directory**: Browse and search through various support services
- **Interactive Map**: Find resources near you with our integrated map feature
- **Event Calendar**: Stay updated with upcoming community events and programs
- **Organization Portal**: Register and manage your organization's profile
- **Multi-language Support**: Access resources in multiple languages through our translator
- **Responsive Design**: Seamless experience across all devices
- **Dark/Light Mode**: Choose your preferred theme

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Notifications**: Sonner
- **Maps**: Google Maps Integration
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/boston-resource-connector.git
\`\`\`

2. Install dependencies:
\`\`\`bash
cd boston-resource-connector
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
boston-resource-connector/
├── app/                    # Next.js app directory
│   ├── components/        # Reusable components
│   ├── events/           # Events page and related components
│   ├── organizations/    # Organizations directory and registration
│   ├── resources/       # Resources listing and search
│   └── map/            # Interactive map component
├── public/              # Static files
└── styles/             # Global styles
\`\`\`

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com) for hosting
- All the organizations and individuals contributing to supporting displaced people in Boston

## 📞 Contact

For any questions or suggestions, please reach out to us through:
- GitHub Issues
- [Project Website](https://boston-resource-connector-cjioym8iq-elena-jins-projects.vercel.app/)

## 🛠️ Technical Implementation

### Frontend Architecture

#### Next.js 14 App Router
The project uses Next.js 14's new app router for improved performance and SEO:

```typescript
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### Component Architecture
Components are built using TypeScript for type safety and better developer experience:

```typescript
// Example of a typed component with shadcn/ui
interface ResourceCardProps {
  title: string
  description: string
  category: ResourceCategory
  image?: string
  link: string
}

export function ResourceCard({ 
  title, 
  description, 
  category, 
  image, 
  link 
}: ResourceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      {/* Component implementation */}
    </Card>
  )
}
```

#### Styling System
Tailwind CSS with custom configurations:

```typescript
// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          // ... color scale
        }
      }
    }
  }
}
```

#### Animation System
Framer Motion for smooth transitions and interactions:

```typescript
// Example of animated component
export function AnimatedCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
```

### Key Features Implementation

#### Form Handling
Organization registration form with validation:

```typescript
// Form state management with TypeScript
interface FormData {
  orgName: string
  website: string
  address: string
  // ... other fields
}

const [formData, setFormData] = useState<FormData>({
  orgName: "",
  website: "",
  address: "",
  // ... initial state
})

const validateForm = (): boolean => {
  // Validation logic
  return true
}
```

#### Toast Notifications
Using Sonner for user feedback:

```typescript
// Toast implementation
const { toast } = useToast()

toast({
  title: "Success",
  description: "Operation completed successfully",
  variant: "default"
})
```

#### Dark Mode Implementation
Theme switching with next-themes:

```typescript
// Theme toggle component
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
```

### UI Components
Using shadcn/ui for consistent design:

```typescript
// Example of custom button component
export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, className })
      )}
      ref={ref}
      {...props}
    />
  )
})
```

---

Made with ❤️ for the Boston community 
