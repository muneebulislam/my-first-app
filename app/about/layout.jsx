
export const metadata = {
    title: 'About Page',
    description: 'about page description',
  }

export default function AboutLayout({ children }) {
  return (
    <>
    <nav>About nav</nav>
    <main>
        {children}
    </main>
    </>
  )
}
