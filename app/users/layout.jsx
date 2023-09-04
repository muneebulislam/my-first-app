export const metadata = {
    title: 'Users Page',
    description: 'Users page description',
  }

export default function UsersLayout({ children }) {
  return (
    <>
    <main>
        {children}
    </main>
    </>
  )
}